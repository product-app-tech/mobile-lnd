// Trainee Dashboard — Cohort. (original brand)

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "indigo",
  "density": "comfortable",
  "showSparkline": true
}/*EDITMODE-END*/;

// Presight Design System tokens
const ACCENTS = {
  indigo:   { name: 'Primary',  hex: '#1570EF', soft: '#D1E9FF' },   // primary-600 / 100
  graphite: { name: 'Slate',    hex: '#252B37', soft: '#E9EAEB' },   // neutral-800 / 200
  forest:   { name: 'Success',  hex: '#039855', soft: '#ECFDF3' },   // success-600 / 50
  sienna:   { name: 'Teal',     hex: '#14B8A6', soft: 'rgba(45,212,191,0.13)' },
};

const THEMES = {
  light: {
    bg:      'var(--bg-hp, linear-gradient(2deg, #EEF4FE 58.94%, #FFF 105.69%))',
    surface: '#FFFFFF',
    ink:     '#181D27',  // neutral-900
    ink2:    '#414651',  // neutral-700
    muted:   '#535862',  // neutral-600
    faint:   '#A4A7AE',  // neutral-400
    line:    '#E9EAEB',  // neutral-200
    line2:   '#F5F5F5',  // neutral-100
    chip:    '#F5F5F5',  // neutral-100
    success: '#039855',  // success-600
    warn:    '#DC6803',  // amber
    danger:  '#D92D20',  // error-600
  },
  warm: {
    bg:      '#FAFAFA',  // neutral-050
    surface: '#FFFFFF',
    ink:     '#181D27',
    ink2:    '#414651',
    muted:   '#535862',
    faint:   '#A4A7AE',
    line:    '#E9EAEB',
    line2:   '#F5F5F5',
    chip:    '#F5F5F5',
    success: '#039855',
    warn:    '#DC6803',
    danger:  '#D92D20',
  },
  dark: {
    bg:      '#0A0D12',  // neutral-950
    surface: '#181D27',  // neutral-900
    ink:     '#FDFDFD',
    ink2:    '#D5D7DA',
    muted:   '#A4A7AE',
    faint:   '#717680',
    line:    '#252B37',  // neutral-800
    line2:   '#181D27',
    chip:    '#252B37',
    success: '#12B76A',
    warn:    '#F79009',
    danger:  '#F04438',
  },
};

// ─── Icons ────────────────────────────────────────────────
const I = {
  bell: (c) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M10 18a2 2 0 0 0 4 0" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  arrow: (c) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <polygon points="3,2 10,6 3,10" fill={c} stroke={c} strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  ),
  // Lucide: House
  home: (c, fill) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={fill||'none'} stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    </svg>
  ),
  // Lucide: BookOpen
  book: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 7v14"/>
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
    </svg>
  ),
  // Lucide: Route
  path: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="3"/>
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
      <circle cx="18" cy="5" r="3"/>
    </svg>
  ),
  // Lucide: MessageCircle
  circle: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
    </svg>
  ),
  // Lucide: ClipboardCheck
  check2: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <path d="m9 14 2 2 4-4"/>
    </svg>
  ),
  // Lucide: Compass
  compass: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  ),
  dot: (c) => <svg width="4" height="4" viewBox="0 0 4 4"><circle cx="2" cy="2" r="2" fill={c}/></svg>,
  // Lucide: Clock
  clock: (c) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  // Lucide: TrendingUp
  trendingUp: (c) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
      <polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
};

// ─── Brand mark ───────────────────────────────────────────
function Brand({ ink, accent }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:7 }}>
      <svg width="18" height="18" viewBox="0 0 18 18">
        <rect x="1" y="1" width="7" height="7" rx="1.5" fill={accent}/>
        <rect x="10" y="1" width="7" height="7" rx="1.5" fill={ink} opacity="0.85"/>
        <rect x="1" y="10" width="7" height="7" rx="1.5" fill={ink} opacity="0.85"/>
        <rect x="10" y="10" width="7" height="7" rx="3.5" fill={accent} opacity="0.35"/>
      </svg>
      <span style={{
        fontFamily:'"Poppins", system-ui', fontWeight:600, fontSize:15,
        letterSpacing:'-0.01em', color: ink,
      }}>Cohort<span style={{ color: accent }}>.</span></span>
    </div>
  );
}

// ─── Avatar (placeholder) ─────────────────────────────────
function Avatar({ initials, accent }) {
  return (
    <div style={{
      width:40, height:40, borderRadius:20,
      background: `linear-gradient(135deg, ${accent}, oklch(70% 0.10 264))`,
      display:'flex', alignItems:'center', justifyContent:'center',
      color:'#fff', fontFamily:'"Poppins", system-ui', fontWeight:600, fontSize:14,
      letterSpacing:'-0.01em', flexShrink:0,
    }}>{initials}</div>
  );
}

// ─── Card ─────────────────────────────────────────────────
function Card({ t, pad = 16, children, style = {} }) {
  return (
    <div style={{
      background: '#FFF', borderRadius: 12,
      border: '1px solid #E9EAEB',
      boxShadow: '0 2px 8px 0 rgba(16, 24, 40, 0.06)',
      padding: pad,
      ...style,
    }}>{children}</div>
  );
}

// ─── Segmented control ────────────────────────────────────
function Segmented({ items, value, onChange, t, accent }) {
  return (
    <div style={{
      display:'flex', background: 'rgba(21,112,239,0.06)', borderRadius: 10, padding: 3,
      border: '1px solid rgba(21,112,239,0.10)',
    }}>
      {items.map(it => {
        const active = it === value;
        return (
          <button key={it} onClick={() => onChange(it)} style={{
            flex:1, height: 30, border:'none', borderRadius: 8,
            background: active ? t.surface : 'transparent',
            color: active ? t.ink : t.muted,
            fontFamily:'"Poppins", system-ui', fontWeight: active ? 550 : 450,
            fontSize: 12.5, letterSpacing:'-0.005em', cursor:'pointer',
            boxShadow: active ? '0 1px 2px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)' : 'none',
            transition:'all .15s',
          }}>{it}</button>
        );
      })}
    </div>
  );
}

// ─── Sparkline ────────────────────────────────────────────
function Sparkline({ data, color, w = 88, h = 28 }) {
  const min = Math.min(...data), max = Math.max(...data);
  const span = max - min || 1;
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * w,
    h - 2 - ((v - min) / span) * (h - 4),
  ]);
  const d = pts.map((p,i) => `${i?'L':'M'}${p[0]} ${p[1]}`).join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx={pts.at(-1)[0]} cy={pts.at(-1)[1]} r="2" fill={color}/>
    </svg>
  );
}

// ─── Performance chart ────────────────────────────────────
function PerfChart({ t, accent }) {
  // Avg score across last 6 months
  const data = [62, 68, 64, 75, 81, 86];
  const labels = ['Oct','Nov','Dec','Jan','Feb','Mar'];
  const W = 340, H = 130, padL = 4, padR = 4, padT = 8, padB = 22;
  const min = 50, max = 95;
  const x = i => padL + (i / (data.length - 1)) * (W - padL - padR);
  const y = v => padT + (1 - (v - min) / (max - min)) * (H - padT - padB);
  const pts = data.map((v, i) => [x(i), y(v)]);
  const line = pts.map((p,i) => `${i?'L':'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L ${pts.at(-1)[0].toFixed(1)} ${H-padB} L ${pts[0][0].toFixed(1)} ${H-padB} Z`;

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display:'block' }}>
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.18"/>
          <stop offset="100%" stopColor={accent} stopOpacity="0"/>
        </linearGradient>
      </defs>
      {/* grid */}
      {[0,1,2,3].map(i => {
        const yy = padT + (i/3) * (H - padT - padB);
        return <line key={i} x1={padL} x2={W-padR} y1={yy} y2={yy} stroke={t.line2} strokeWidth="1"/>;
      })}
      <path d={area} fill="url(#grad)"/>
      <path d={line} fill="none" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      {pts.map(([px,py], i) => (
        <circle key={i} cx={px} cy={py} r={i === pts.length - 1 ? 3.5 : 2} fill={t.surface} stroke={accent} strokeWidth={i === pts.length - 1 ? 2 : 1.25}/>
      ))}
      {labels.map((l, i) => (
        <text key={l} x={x(i)} y={H - 6} fill={t.faint} fontSize="10" fontFamily='"JetBrains Mono", ui-monospace' textAnchor="middle">{l}</text>
      ))}
    </svg>
  );
}

// ─── Image placeholder ────────────────────────────────────
function ImagePlaceholder({ t, accent, label }) {
  return (
    <div style={{
      position:'relative', width:'100%', aspectRatio:'16/9',
      borderRadius: 10, overflow:'hidden',
      background: `repeating-linear-gradient(135deg, ${t.chip} 0 8px, ${t.surface} 8px 16px)`,
      border: `1px solid ${t.line}`,
      display:'flex', alignItems:'center', justifyContent:'center',
    }}>
      <span style={{
        fontFamily:'"JetBrains Mono", ui-monospace', fontSize:10, color: t.muted,
        background: t.surface, padding:'3px 8px', borderRadius:6,
        border:`1px solid ${t.line}`, letterSpacing:'0.02em',
      }}>{label}</span>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────
function Dashboard({ onLogout }) {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [tab, setTab] = React.useState('Dashboard');
  const [circleDmOpen, setCircleDmOpen] = React.useState(false);
  const [continueIdx, setContinueIdx] = React.useState(0);
  const continueScrollerRef = React.useRef(null);

  // Reset DM-open flag when switching away from Circle tab
  React.useEffect(() => {
    if (tab !== 'Circle' && circleDmOpen) setCircleDmOpen(false);
  }, [tab, circleDmOpen]);

  const t = THEMES[tweaks.theme] || THEMES.light;
  const accent = ACCENTS[tweaks.accent].hex;
  const dense = tweaks.density === 'compact';
  const isDark = tweaks.theme === 'dark';

  if (tab === 'My Course') {
    return (
      <div style={{ width:'100%', height:'100%', position:'relative', overflow:'hidden' }}>
        <MyCourse/>
        <DashboardTabBar tab={tab} setTab={setTab} t={t} accent={accent} tweaks={tweaks} isDark={isDark}/>
      </div>
    );
  }

  if (tab === 'Journey') {
    return (
      <div style={{ width:'100%', height:'100%', position:'relative', overflow:'hidden' }}>
        <JourneyScreen/>
        <DashboardTabBar tab={tab} setTab={setTab} t={t} accent={accent} tweaks={tweaks} isDark={isDark}/>
      </div>
    );
  }

  if (tab === 'Assessment') {
    return (
      <div style={{ width:'100%', height:'100%', position:'relative', overflow:'hidden' }}>
        <AssessScreen/>
        <DashboardTabBar tab={tab} setTab={setTab} t={t} accent={accent} tweaks={tweaks} isDark={isDark}/>
      </div>
    );
  }

  if (tab === 'Circle') {
    return (
      <div style={{ width:'100%', height:'100%', position:'relative', overflow:'hidden' }}>
        <CircleScreen onDmChange={setCircleDmOpen}/>
        {!circleDmOpen && (
          <DashboardTabBar tab={tab} setTab={setTab} t={t} accent={accent} tweaks={tweaks} isDark={isDark}/>
        )}
      </div>
    );
  }

  if (tab === 'Profile') {
    return (
      <div style={{ width:'100%', height:'100%', position:'relative', overflow:'hidden' }}>
        <ProfileScreen onBack={() => setTab('Dashboard')} onLogout={onLogout}/>
      </div>
    );
  }

  return (
    <div style={{
      width:'100%', height:'100%', background: t.bg, color: t.ink,
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
      paddingTop: 60, paddingBottom: 120,
      overflowY:'auto',
    }}>
      <div style={{ padding:'0 18px', display:'flex', flexDirection:'column', gap: dense ? 10 : 14 }}>

        {/* Header */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop: 4, marginBottom: 4 }}>
          <button onClick={() => setTab('Profile')} style={{
            display:'flex', alignItems:'center', gap:11,
            background:'transparent', border:'none', padding: 0, cursor:'pointer',
            textAlign:'left', fontFamily:'inherit',
          }}>
            <Avatar initials="PS" accent={accent}/>
            <div style={{ display:'flex', flexDirection:'column', gap:1 }}>
              <div style={{ fontSize:15.5, color: t.ink, fontWeight:550, letterSpacing:'-0.015em' }}>Priya Sharma</div>
              <div style={{ fontSize:12, color: t.muted, fontWeight:450, letterSpacing:'-0.005em' }}>Marketing - Digital Marketing</div>
            </div>
          </button>
          <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <button style={{
              width:36, height:36, borderRadius:10, border:`1px solid ${t.line}`,
              background: t.surface, display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', position:'relative',
            }}>
              {I.bell(t.ink2)}
              <span style={{ position:'absolute', top:8, right:9, width:6, height:6, borderRadius:3, background: t.danger }}/>
            </button>
          </div>
        </div>

        {/* Continue Learning — primary action hero */}
        <Card t={t} pad={dense ? 12 : 14}>
          <div style={{ display:'flex', alignItems:'center', gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10, flexShrink: 0,
              border: `1px solid ${t.line}`, background:'#FFF',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize:16, fontWeight:650, letterSpacing:'-0.015em', color: t.ink }}>Continue Learning</div>
              <div style={{ fontSize:12.5, color: t.muted, marginTop: 2 }}>Let’s continue the course</div>
            </div>
          </div>
          {(() => {
            const courses = [
              { title:'Digital Marketing Essentials', pct: 45, mod: 4, total: 9, left:'1h 40m left',
                img:'https://api-ajari-develop.ajari.app/v1/lx-upload/fetch/temp/1774942022561689.png' },
              { title:'Data Analytics Foundations', pct: 72, mod: 7, total: 10, left:'42m left',
                img:'https://api-ajari-develop.ajari.app/v1/lx-upload/fetch/temp/1774942022561689.png' },
              { title:'Leadership for Managers', pct: 20, mod: 2, total: 8, left:'3h 10m left',
                img:'https://api-ajari-develop.ajari.app/v1/lx-upload/fetch/temp/1774942022561689.png' },
              { title:'UX Research Fundamentals', pct: 88, mod: 11, total: 12, left:'18m left',
                img:'https://api-ajari-develop.ajari.app/v1/lx-upload/fetch/temp/1774942022561689.png' },
            ];
            return (
              <>
                <div
                  ref={continueScrollerRef}
                  onScroll={(e) => {
                    const el = e.currentTarget;
                    const slide = el.firstElementChild;
                    if (!slide) return;
                    const step = slide.getBoundingClientRect().width + 12; // gap
                    const idx = Math.round(el.scrollLeft / step);
                    if (idx !== continueIdx) setContinueIdx(idx);
                  }}
                  style={{
                    display:'flex', gap: 12,
                    overflowX:'auto', scrollSnapType:'x mandatory',
                    marginRight: dense ? -12 : -14,
                    paddingRight: dense ? 12 : 14,
                    paddingBottom: 4,
                    WebkitOverflowScrolling:'touch', scrollbarWidth:'none',
                  }}
                >
                  {courses.map((c, i) => (
                    <div key={i} style={{
                      flex:'0 0 calc(100% - 24px)', scrollSnapAlign:'start',
                      display:'flex', flexDirection:'column',
                      background:'#FFF', border:`1px solid ${t.line}`, borderRadius: 12, padding: 12,
                    }}>
                      <div style={{ display:'flex', gap: 12, alignItems:'flex-start' }}>
                        <div style={{
                          width: 88, height: 88, borderRadius: 12, flexShrink: 0, overflow:'hidden',
                          border: `1px solid ${t.line}`,
                        }}>
                          <img
                            src={c.img}
                            alt="Course cover"
                            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
                          />
                        </div>
                        <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
                          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:8 }}>
                            <div style={{ fontSize:15, fontWeight:650, letterSpacing:'-0.015em', color: t.ink, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{c.title}</div>
                            <div style={{ fontSize:13, color: t.ink, fontFamily:'"JetBrains Mono", ui-monospace', fontWeight:600, fontVariantNumeric:'tabular-nums' }}>{c.pct}%</div>
                          </div>
                          <div style={{ display:'flex', alignItems:'center', gap:6, marginTop: 6, fontSize:12, color: t.muted }}>
                            <span>Module {c.mod} of {c.total}</span>
                            {I.dot(t.faint)}
                            <span>{c.left}</span>
                          </div>
                          <div style={{
                            marginTop: 10, height: 6, borderRadius: 3, background: t.chip,
                            overflow:'hidden', position:'relative',
                          }}>
                            <div style={{
                              position:'absolute', inset:0, width:`${c.pct}%`,
                              background: accent, borderRadius: 3,
                            }}/>
                          </div>
                        </div>
                      </div>
                      <button style={{
                        marginTop: 12, width:'100%', borderRadius: 10,
                        padding:'10px 0',
                        border:'none', background: accent, color:'#FFF',
                        fontFamily:'inherit', fontWeight: 500, fontSize: 13.5,
                        letterSpacing:'-0.005em', cursor:'pointer',
                        display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
                      }}>
                        Continue →
                      </button>
                    </div>
                  ))}
                </div>
                <div style={{ display:'flex', justifyContent:'center', gap: 6, marginTop: 12 }}>
                  {courses.map((_, i) => {
                    const active = i === continueIdx;
                    return (
                      <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => {
                          const el = continueScrollerRef.current;
                          if (!el) return;
                          const slide = el.firstElementChild;
                          if (!slide) return;
                          const step = slide.getBoundingClientRect().width + 12;
                          el.scrollTo({ left: step * i, behavior:'smooth' });
                        }}
                        style={{
                          width: active ? 18 : 6, height: 6, borderRadius: 3,
                          border:'none', padding: 0, cursor:'pointer',
                          background: active ? accent : t.line,
                          transition:'width 180ms ease, background 180ms ease',
                        }}
                      />
                    );
                  })}
                </div>
              </>
            );
          })()}
        </Card>

        {/* KPI strip — 3 even tiles with icon */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 10 }}>
          {[
            { k:'9 / 12', l:'Courses', sub:'completed', tileBg:'#EFF8FF', tileBorder:'#B2DDFF', iconColor:'#1570EF', icon: (c) => (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>
              </svg>
            )},
            { k:'82%',    l:'Avg quiz', sub:'last 30 days', tileBg:'#EFF8FF', tileBorder:'#B2DDFF', iconColor:'#1570EF', icon: (c) => (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            )},
            { k:'Normal', l:'Velocity', sub:'on track', tileBg:'#EFF8FF', tileBorder:'#B2DDFF', iconColor:'#1570EF', icon: (c) => (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 7h6v6"/>
                <path d="m22 7-8.5 8.5-5-5L2 17"/>
              </svg>
            )},
          ].map((kpi, i) => (
            <Card t={t} pad={12} key={i} style={{ display:'flex', flexDirection:'column' }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: kpi.tileBg, border: `1px solid ${kpi.tileBorder}`,
                display:'flex', alignItems:'center', justifyContent:'center',
                marginBottom: 10,
              }}>{kpi.icon(kpi.iconColor)}</div>
              <div style={{
                fontSize: kpi.k === 'Normal' ? 17 : 22,
                fontWeight: 550, letterSpacing:'-0.025em', color: t.ink,
                fontVariantNumeric:'tabular-nums', lineHeight: 1.1,
                marginTop: kpi.k === 'Normal' ? 3 : 0,
              }}>{kpi.k}</div>
              <div style={{ fontSize:11.5, color: t.ink2, fontWeight:500, marginTop: 4 }}>{kpi.l}</div>
              <div style={{ fontSize:10.5, color: t.faint, fontWeight: 400 }}>{kpi.sub}</div>
            </Card>
          ))}
        </div>

        {/* Achievement Badges — outperforming hero */}
        <div style={{
          background:'linear-gradient(145.29deg, #194185 0%, #1570EF 38.9%, #1570EF 70.72%)',
          borderRadius: 12, position:'relative', overflow:'hidden',
          padding: 16, boxShadow:'0 2px 8px rgba(16,24,40,0.06)',
          color:'#FFF',
        }}>
          <div style={{
            position:'absolute', top:-30, right:-30, width: 140, height: 140,
            borderRadius:'50%', background:'rgba(255,255,255,0.08)',
          }}/>
          <div style={{
            position:'absolute', bottom:-40, left:-20, width: 110, height: 110,
            borderRadius:'50%', background:'rgba(255,255,255,0.06)',
          }}/>
          <div style={{ position:'relative' }}>
            <div style={{ display:'flex', alignItems:'center', gap: 8, marginBottom: 4 }}>
              <div style={{
                width: 26, height: 26, borderRadius: 8,
                background:'rgba(255,255,255,0.18)',
                display:'flex', alignItems:'center', justifyContent:'center',
                border:'1px solid rgba(255,255,255,0.25)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 600, letterSpacing:'-0.01em' }}>
                You're Outperforming The Average Learner
              </div>
            </div>
            <div style={{ fontSize: 11.5, fontWeight: 450, color:'rgba(255,255,255,0.85)', marginBottom: 12, letterSpacing:'-0.005em' }}>
              You're on a roll! Keep up the great work.
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
              {[
                { t:'7-Day Streak',    s:"You've kept a 7-day learning streak going",         emoji:'🔥' },
                { t:'Great Progress',  s:"You've completed 3 advanced exercises",             emoji:'⭐' },
                { t:'High Achiever',   s:'Your quiz scores are consistently above average',   emoji:'🏆' },
              ].map((b, i) => (
                <div key={i} style={{
                  display:'flex', alignItems:'center', gap: 10,
                  background:'rgba(255,255,255,0.12)',
                  border:'1px solid rgba(255,255,255,0.18)',
                  borderRadius: 10, padding:'8px 10px',
                  backdropFilter:'blur(4px)',
                }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: 8,
                    background:'rgba(255,255,255,0.18)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize: 15, flexShrink: 0,
                  }}>{b.emoji}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing:'-0.01em' }}>{b.t}</div>
                    <div style={{ fontSize: 11, color:'rgba(255,255,255,0.82)', fontWeight: 450, letterSpacing:'-0.005em' }}>{b.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning hours — 3-column summary */}
        <Card t={t} pad={dense ? 14 : 18}>
          <div style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 14 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: '#EFF8FF', border: '1px solid #B2DDFF',
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
            }}>
              {I.clock(accent)}
            </div>
            <div>
              <div style={{ fontSize:14, fontWeight:550, letterSpacing:'-0.015em', color: t.ink }}>Learning hours</div>
              <div style={{ fontSize:12, color: t.muted, marginTop: 2 }}>Hours spent learning per week this quarter</div>
            </div>
          </div>
          <div aria-hidden style={{ height: 1, background: t.line, marginBottom: 14 }}/>
          <div style={{ display:'flex', alignItems:'stretch' }}>
            {[
              { label:'This Week',  value:'12'   },
              { label:'This Month', value:'34h'  },
              { label:'Total',      value:'164h' },
            ].map((col, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div aria-hidden style={{
                    width: 1, alignSelf:'stretch',
                    background: '#D0D5DD',
                    margin: '4px 0',
                  }}/>
                )}
                <div style={{
                  flex: 1, display:'flex', flexDirection:'column', gap: 6,
                  paddingLeft: i === 0 ? 0 : 16,
                  paddingRight: i === 2 ? 0 : 16,
                }}>
                  <div style={{ fontSize:14, color: t.muted, fontWeight: 400 }}>{col.label}</div>
                  <div style={{
                    fontSize:32, fontWeight:550, letterSpacing:'-0.04em',
                    color: t.ink, lineHeight: 1, fontVariantNumeric:'tabular-nums',
                  }}>{col.value}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </Card>

        {/* Quick Actions — compact */}
        <Card t={t} pad={dense ? 12 : 14}>
          <div style={{
            fontSize: 14, fontWeight: 550, letterSpacing:'-0.015em',
            color: t.ink, marginBottom: 10,
          }}>Quick Actions</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 8 }}>
            {[
              { l:'Browse Courses', bg:'#F5F3FF', bd:'#D8D4FC', fg:'#7C3AED', svg: (color) => (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 7v14"/>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
                </svg>
              ) },
              { l:'My Schedule', bg:'#EFF8FF', bd:'#B2DDFF', fg:'#1570EF', svg: (color) => (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2v4"/><path d="M16 2v4"/>
                  <rect width="18" height="18" x="3" y="4" rx="2"/>
                  <path d="M3 10h18"/>
                </svg>
              ) },
              { l:'Submit Work', bg:'#ECFDF3', bd:'#A6F4C5', fg:'#059669', svg: (color) => (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
              ) },
              { l:'Get Help', bg:'#FFF7ED', bd:'#FDBA74', fg:'#EA580C', svg: (color) => (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <path d="M12 17h.01"/>
                </svg>
              ) },
            ].map((qa, i) => (
              <button key={i} style={{
                display:'flex', flexDirection:'row', alignItems:'center', gap: 10,
                padding:'10px 12px', borderRadius: 10, border: `1px solid ${t.line2}`,
                background: t.surface, cursor:'pointer', textAlign:'left',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: qa.bg, border: `1px solid ${qa.bd}`,
                  display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
                }}>{qa.svg(qa.fg)}</div>
                <span style={{ fontSize: 12.5, color: t.ink, fontWeight: 500, letterSpacing:'-0.005em' }}>{qa.l}</span>
              </button>
            ))}
          </div>
        </Card>

        {/* Performance trend */}
        <Card t={t} pad={dense ? 14 : 16}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: 6 }}>
            <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: '#EFF8FF', border: '1px solid #B2DDFF',
                display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
              }}>
                {I.trendingUp(accent)}
              </div>
              <div>
                <div style={{ fontSize:14, fontWeight:550, letterSpacing:'-0.015em', color: t.ink }}>Performance trend</div>
                <div style={{ fontSize:11.5, color: t.muted, marginTop: 2 }}>Avg score · last 6 courses</div>
              </div>
            </div>
          </div>
          <PerfChart t={t} accent={accent}/>
        </Card>

        <div style={{ height: 8 }}/>
      </div>

      {/* Floating bottom tab bar */}
      <DashboardTabBar tab={tab} setTab={setTab} t={t} accent={accent} tweaks={tweaks} isDark={isDark}/>
    </div>
  );
}

// Bottom tab bar — shared between Dashboard and other in-app tabs (My Course, etc.)
function DashboardTabBar({ tab, setTab, t, accent, tweaks, isDark }) {
  return (
    <div style={{
      position:'absolute', left: 16, right: 16, bottom: 22, zIndex: 30,
      background: isDark ? 'rgba(20,20,24,0.92)' : 'rgba(255,255,255,0.96)',
      backdropFilter:'blur(20px) saturate(180%)',
      WebkitBackdropFilter:'blur(20px) saturate(180%)',
      border: '1px solid #E9EAEB',
      borderRadius: 22,
      boxShadow: '0 8px 24px rgba(16,24,40,0.10), 0 2px 6px rgba(16,24,40,0.06)',
      padding: '8px 6px',
    }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)' }}>
        {[
          { k:'Dashboard', icon: I.home },
          { k:'My Course', icon: I.book },
          { k:'Circle',    icon: I.circle },
          { k:'Journey',   icon: I.path },
          { k:'Assessment', icon: I.check2 },
        ].map(it => {
          const active = it.k === tab;
          const ACTIVE_BLUE = '#1570EF';
          const INACTIVE_GRAY = '#535862';
          const color = active ? ACTIVE_BLUE : INACTIVE_GRAY;
          return (
            <button key={it.k} onClick={() => setTab(it.k)} style={{
              display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap: 4,
              background:'transparent', border:'none', cursor:'pointer',
              padding:'4px 0',
              color,
            }}>
              {it.icon(color, 'none')}
              <span style={{ fontSize:10.5, fontFamily:'inherit', fontWeight: active ? 600 : 500, letterSpacing:'-0.005em' }}>{it.k}</span>
              <span style={{
                width: 14, height: 2, borderRadius: 1,
                background: active ? ACTIVE_BLUE : 'transparent',
                transition: 'background .2s',
              }}/>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Tweaks ──────────────────────────────────────────────
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [account, setAccount] = React.useState(null);
  const authed = !!account;
  const t = THEMES[tweaks.theme] || THEMES.light;
  const accent = ACCENTS[tweaks.accent].hex;

  const logout = () => setAccount(null);

  let screen;
  if (!authed) {
    screen = <Login onSuccess={(acc) => setAccount(acc || { role: 'trainee' })}/>;
  } else if (account.role === 'line_manager') {
    screen = <ManagerDashboard onLogout={logout}/>;
  } else {
    screen = <Dashboard onLogout={logout}/>;
  }

  return (
    <>
      <div style={{
        minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
        background:'#E8E6E1',
        fontFamily:'"Poppins", system-ui',
        padding:'40px 20px',
      }}>
        <IOSDevice width={402} height={874} dark={!authed || tweaks.theme === 'dark'}>
          {screen}
        </IOSDevice>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakRadio
            label="Mode"
            value={tweaks.theme}
            options={[
              { value:'light', label:'Light' },
              { value:'warm',  label:'Warm' },
              { value:'dark',  label:'Dark' },
            ]}
            onChange={v => setTweak('theme', v)}
          />
          <TweakRadio
            label="Accent"
            value={tweaks.accent}
            options={[
              { value:'indigo',   label:'Indigo' },
              { value:'graphite', label:'Slate' },
              { value:'forest',   label:'Forest' },
              { value:'sienna',   label:'Sienna' },
            ]}
            onChange={v => setTweak('accent', v)}
          />
        </TweakSection>
        <TweakSection label="Layout">
          <TweakRadio
            label="Density"
            value={tweaks.density}
            options={[
              { value:'comfortable', label:'Comfy' },
              { value:'compact',     label:'Compact' },
            ]}
            onChange={v => setTweak('density', v)}
          />
          <TweakToggle
            label="Hours sparkline"
            value={tweaks.showSparkline}
            onChange={v => setTweak('showSparkline', v)}
          />
        </TweakSection>
        <TweakSection label="Flow">
          <TweakRadio
            label="Screen"
            value={!authed ? 'login' : (account.role === 'line_manager' ? 'manager' : 'trainee')}
            options={[
              { value:'login',    label:'Login' },
              { value:'trainee',  label:'Trainee' },
              { value:'manager',  label:'Manager' },
            ]}
            onChange={v => {
              if (v === 'login') setAccount(null);
              else if (v === 'manager') setAccount({ role:'line_manager', name:'Kaushal Yainne' });
              else setAccount({ role:'trainee', name:'Priya Sharma' });
            }}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
