// Trainee Profile screen
// Depends on: data/trainee-profile.data.js (PR_USER)

const PR_PRIMARY = '#1570EF';
const PR_PRIMARY_SOFT = '#D1E9FF';
const PR_INK = '#252B37';
const PR_BODY = '#414651';
const PR_MUTED = '#717680';
const PR_FAINT = '#A4A7AE';
const PR_LINE = '#E9EAEB';
const PR_DANGER = '#D92D20';
const PR_DANGER_SOFT = '#FEF3F2';

function PrIcChevron({ c = PR_FAINT }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="m9 6 6 6-6 6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PrIcArrowLeft({ c = PR_INK }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M19 12H5M11 6l-6 6 6 6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PrIcUser({ c = PR_PRIMARY }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="12" cy="7" r="4" stroke={c} strokeWidth="1.6"/>
    </svg>
  );
}
function PrIcBell({ c = PR_PRIMARY }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M10 18a2 2 0 0 0 4 0" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function PrIcLock({ c = PR_PRIMARY }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="11" width="16" height="10" rx="2" stroke={c} strokeWidth="1.6"/>
      <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke={c} strokeWidth="1.6"/>
    </svg>
  );
}
function PrIcGlobe({ c = PR_PRIMARY }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/>
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke={c} strokeWidth="1.6"/>
    </svg>
  );
}
function PrIcHelp({ c = PR_PRIMARY }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/>
      <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5M12 17h.01" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function PrIcInfo({ c = PR_PRIMARY }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/>
      <path d="M12 8h.01M11 12h1v5h1" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function PrIcLogout({ c = PR_DANGER }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PrSettingsRow({ icon, iconBg, label, value, danger, onClick, last }) {
  return (
    <button onClick={onClick} style={{
      width:'100%', background:'transparent', border:'none', cursor:'pointer',
      padding:'12px 0', textAlign:'left',
      display:'flex', alignItems:'center', gap: 12,
      borderBottom: last ? 'none' : '1px solid ' + PR_LINE,
      fontFamily:'inherit',
    }}>
      <div style={{
        width: 34, height: 34, borderRadius: 8, background: iconBg,
        display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
      }}>{icon}</div>
      <div style={{ flex: 1, display:'flex', flexDirection:'column', gap: 1 }}>
        <span style={{
          fontSize: 13.5, fontWeight: 500,
          color: danger ? PR_DANGER : PR_INK,
        }}>{label}</span>
        {value ? <span style={{ fontSize: 11.5, color: PR_MUTED }}>{value}</span> : null}
      </div>
      {!danger ? <PrIcChevron c={PR_FAINT}/> : null}
    </button>
  );
}

function PrSettingsGroup({ title, children }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 6 }}>
      <div style={{
        fontSize: 11, fontWeight: 600, color: PR_FAINT,
        letterSpacing: '0.04em', textTransform:'uppercase',
        padding:'0 4px',
      }}>{title}</div>
      <div style={{
        background:'#FFF', border:'1px solid ' + PR_LINE, borderRadius: 12,
        padding:'0 14px',
      }}>{children}</div>
    </div>
  );
}

function ProfileScreen({ onBack, onLogout }) {
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom:0,
      background:'#F7F8FA',
      paddingTop: 60, paddingBottom: 120,
      overflowY:'auto',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
    }}>
      <div style={{ padding:'0 18px', display:'flex', flexDirection:'column', gap: 18 }}>

        {/* Header with back */}
        <div style={{ display:'flex', alignItems:'center', gap: 10, marginTop: 4 }}>
          <button onClick={onBack} style={{
            width: 36, height: 36, borderRadius: 10,
            background:'#FFF', border:'1px solid ' + PR_LINE, cursor:'pointer',
            display:'inline-flex', alignItems:'center', justifyContent:'center',
          }}>
            <PrIcArrowLeft c={PR_INK}/>
          </button>
          <div style={{ fontSize: 16, fontWeight: 600, color: PR_INK, letterSpacing:'-0.01em' }}>Profile</div>
        </div>

        {/* User card */}
        <div style={{
          background:'#FFF', border:'1px solid ' + PR_LINE, borderRadius: 14,
          padding: 18,
          display:'flex', flexDirection:'column', alignItems:'center', gap: 10,
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: 40,
            background:'linear-gradient(135deg, #1570EF, #7C3AED)',
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'#FFF', fontSize: 28, fontWeight: 600, letterSpacing:'-0.01em',
            boxShadow:'0 6px 14px rgba(21,112,239,0.20)',
          }}>{PR_USER.initials}</div>
          <div style={{ textAlign:'center', display:'flex', flexDirection:'column', gap: 2 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: PR_INK, letterSpacing:'-0.015em' }}>{PR_USER.name}</div>
            <div style={{ fontSize: 12.5, color: PR_MUTED }}>{PR_USER.email}</div>
          </div>
          <div style={{ display:'flex', gap: 6, marginTop: 4 }}>
            <span style={{
              padding:'3px 10px', borderRadius: 999,
              background: PR_PRIMARY_SOFT, color: PR_PRIMARY,
              fontSize: 10.5, fontWeight: 600,
            }}>{PR_USER.department}</span>
            <span style={{
              padding:'3px 10px', borderRadius: 999,
              background:'#F5F5F5', color: PR_BODY,
              fontSize: 10.5, fontWeight: 600,
            }}>{PR_USER.programLabel}</span>
          </div>
        </div>

        {/* Account group */}
        <PrSettingsGroup title="Account">
          <PrSettingsRow icon={<PrIcUser c={PR_PRIMARY}/>}  iconBg='rgba(21,112,239,0.10)' label="Edit profile"      value="Update your name & photo" onClick={() => {}}/>
          <PrSettingsRow icon={<PrIcLock c="#7C3AED"/>}     iconBg='#F4F3FF'              label="Change password"   value="Last changed 2 months ago" onClick={() => {}}/>
          <PrSettingsRow icon={<PrIcBell c="#EA580C"/>}     iconBg='#FFF7ED'              label="Notifications"     value="Push, email, in-app" onClick={() => {}} last/>
        </PrSettingsGroup>

        {/* Preferences group */}
        <PrSettingsGroup title="Preferences">
          <PrSettingsRow icon={<PrIcGlobe c="#039855"/>} iconBg='#ECFDF3' label="Language" value="English (US)" onClick={() => {}}/>
          <PrSettingsRow icon={<PrIcHelp  c={PR_PRIMARY}/>} iconBg='rgba(21,112,239,0.10)' label="Help & Support" onClick={() => {}}/>
          <PrSettingsRow icon={<PrIcInfo  c={PR_MUTED}/>}  iconBg='#F5F5F5' label="About Cohort" value="Version 1.0.0" onClick={() => {}} last/>
        </PrSettingsGroup>

        {/* Sign out */}
        <div style={{
          background:'#FFF', border:'1px solid ' + PR_LINE, borderRadius: 12,
          padding:'0 14px',
        }}>
          <PrSettingsRow
            icon={<PrIcLogout c={PR_DANGER}/>}
            iconBg={PR_DANGER_SOFT}
            label="Sign out"
            danger
            onClick={onLogout}
            last
          />
        </div>

        <div style={{ textAlign:'center', fontSize: 10.5, color: PR_FAINT, marginTop: 4 }}>
          Cohort. © 2026 · Trainee
        </div>

      </div>
    </div>
  );
}
