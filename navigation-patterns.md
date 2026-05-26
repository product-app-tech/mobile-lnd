# Navigation Patterns — Back Button Placement

This document explains **why** root-level tabs (My Course, Dashboard, Journey, Circle, Assessment) do not have a back button, but detail screens (e.g. course detail opened from `McCourseCard`) do.

If you're about to add a back button to a tab screen, read this first.

---

## TL;DR

| Screen type | Example in this app | Back button? |
|---|---|---|
| **Root tab (peer destination)** | `My Course`, `Dashboard`, `Journey`, `Circle`, `Assessment` | ❌ No |
| **Detail screen (pushed on stack)** | Course detail from `McCourseCard` "Continue" | ✅ Yes (top-left) |
| **Modal / sub-flow** | `Profile` opened from header avatar | ✅ Yes (or close `×`) |

Rule of thumb: **if the user navigated *deeper* into a hierarchy, give them a back button. If they switched *sideways* between peers, don't.**

---

## The two navigation models

Mobile UX has two formal navigation models. Mixing them breaks the user's mental model.

### 1. Flat navigation (tabs = peers)

- Tab bar shows 3–5 **top-level destinations** of equal importance.
- Switching tabs is **lateral movement**, not forward movement.
- There is no "previous tab" history — you don't go *back* from My Course to Dashboard; you *switch* to Dashboard.
- The tab bar itself is the navigation control.

This is what we use in `app.jsx` → `DashboardTabBar`.

### 2. Hierarchical navigation (push/pop stack)

- User taps something on a screen → a new screen is **pushed** onto a stack.
- That new screen is a *child* of where they came from.
- They need a back button to **pop** the stack and return — including restoring scroll position, filters, etc.
- This is what happens when `McCourseCard` "Continue" opens a course detail.

---

## Why no back button on tab destinations

### 1. There's nothing to go "back" to

Tabs are peers, not parent/child. If you put a back button on `My Course`, what does it do?

- Go to `Dashboard`? Only if that's the previous tab — but the user might have come from `Journey`.
- Exit the app? Unexpected and destructive.
- Go to login? Even worse.

The tab bar already handles peer navigation. A back button would be redundant at best and ambiguous at worst.

### 2. It contradicts platform conventions

**Apple HIG — Tab Bars:**
> "Use a tab bar to present peer categories of content or functionality. A tab bar lets people quickly and easily switch between categories, regardless of the current location."
>
> "Use a navigation bar to traverse a hierarchy of data... the back button makes it easy to return to the previous location."

**Material Design — Bottom Navigation:**
> "The bottom navigation bar exposes the three to five top-level destinations of an app."
>
> "On Android, the Back button does not navigate between bottom navigation bar views."

Both platforms explicitly separate the two models. iOS reserves back buttons for navigation bars over hierarchical content. Android intentionally disables the system back button between bottom-nav tabs.

### 3. Every major app follows this

Instagram, Spotify, YouTube, X (Twitter), TikTok, Gmail, Slack — none put a back button on their root tab screens. Breaking the convention forces users to relearn navigation in our app.

---

## Why back button IS required on detail screens

When the user taps `Continue` on a `McCourseCard`:

1. A new screen is **pushed** onto the navigation stack.
2. The user is now in a **focused sub-flow** (one specific course).
3. They need a clear exit that:
   - Returns them to `My Course` with **scroll position preserved**
   - Doesn't lose any state (filters, search, expanded items)
   - Doesn't require them to mentally re-identify which tab they were in

A back button (top-left, standard iOS chevron or Android arrow) is the universal signal for "pop this screen off the stack."

**Hiding the tab bar on detail screens is also acceptable** — it signals "you're in a focused flow, finish or back out." But the back button must always be visible.

---

## Decision checklist

Before adding a back button, ask:

1. **Is this screen a root tab?** → No back button. Tabs handle it.
2. **Did the user push into this from another screen?** → Back button required.
3. **Is this a modal or full-screen takeover?** → Close button (`×`), not back. (e.g. settings sheet, image viewer)
4. **Is this a multi-step flow (wizard)?** → Back button to previous step + `Cancel` to exit the flow entirely.

---

## Implementation in this codebase

- **Tab routing**: [`app.jsx`](app.jsx) — `Dashboard` component switches on `tab` state. Tab screens are rendered without a back button; `DashboardTabBar` is the navigation.
- **Detail push**: when a course card opens a detail view, the detail component owns its own back button in the top-left and (optionally) hides the tab bar while open.
- **Profile screen**: [`screens/profile.jsx`](screens/profile.jsx) is opened via `setTab('Profile')` from the header avatar — it receives an `onBack` prop because it's treated as a *pushed* screen, not a peer tab (notice it's not in `DashboardTabBar`).

If you're building a new detail screen, follow the `ProfileScreen` pattern: accept an `onBack` prop and render the back button yourself in the top-left corner.

---

## Sources

- [Tab bars — Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/tab-bars)
- [Navigation and search — Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/navigation-and-search)
- [Bottom navigation — Material Design](https://m2.material.io/components/bottom-navigation)
- [Understanding navigation — Material Design](https://m2.material.io/design/navigation/understanding-navigation.html)
- [Modern iOS Navigation Patterns — Frank Rausch](https://frankrausch.com/ios-navigation/)
