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
      <path d="M3 9L9 3M9 3H4.5M9 3v4.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
  // Lucide: ClipboardCheck
  check2: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
      <path d="m9 14 2 2 4-4"/>
    </svg>
  ),
  dot: (c) => <svg width="4" height="4" viewBox="0 0 4 4"><circle cx="2" cy="2" r="2" fill={c}/></svg>,
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
function Dashboard() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [period, setPeriod] = React.useState('Week');
  const [tab, setTab] = React.useState('Dashboard');

  const t = THEMES[tweaks.theme] || THEMES.light;
  const accent = ACCENTS[tweaks.accent].hex;
  const dense = tweaks.density === 'compact';
  const isDark = tweaks.theme === 'dark';

  const periodHours = { Week: '12', Month: '34', 'All time': '164' }[period];
  const periodDelta = { Week: '+3 vs last week', Month: '+11 vs last month', 'All time': '+164 lifetime' }[period];

  if (tab === 'My Course') {
    return (
      <div style={{ width:'100%', height:'100%', position:'relative' }}>
        <MyCourse/>
        <DashboardTabBar tab={tab} setTab={setTab} t={t} accent={accent} tweaks={tweaks} isDark={isDark}/>
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
          <div style={{ display:'flex', alignItems:'center', gap:11 }}>
            <Avatar initials="PS" accent={accent}/>
            <div style={{ display:'flex', flexDirection:'column', gap:1 }}>
              <div style={{ fontSize:15.5, color: t.ink, fontWeight:550, letterSpacing:'-0.015em' }}>Priya Sharma</div>
              <div style={{ fontSize:12, color: t.muted, fontWeight:450, letterSpacing:'-0.005em' }}>Marketing - Digital Marketing</div>
            </div>
          </div>
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

        {/* Hero stat — Learning hours */}
        <Card t={t} pad={dense ? 14 : 18}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize:14, fontWeight:550, letterSpacing:'-0.015em', color: t.ink }}>Learning hours</div>
              <div style={{ fontSize:11.5, color: t.muted, marginTop: 2 }}>Time invested · {period.toLowerCase()}</div>
            </div>
            {tweaks.showSparkline && (
              <Sparkline data={[6,8,5,9,7,11,12]} color={accent}/>
            )}
          </div>
          <div style={{ display:'flex', alignItems:'baseline', gap: 6 }}>
            <div style={{
              fontFamily:'"Poppins", system-ui', fontWeight:500, fontSize:46,
              letterSpacing:'-0.04em', color: t.ink, lineHeight:1,
              fontVariantNumeric:'tabular-nums',
            }}>{periodHours}</div>
            <div style={{ fontSize:18, color: t.muted, fontWeight:400, letterSpacing:'-0.02em' }}>hrs</div>
            <div style={{
              marginLeft:'auto', display:'inline-flex', alignItems:'center', gap:3,
              fontSize:12, fontFamily:'"JetBrains Mono", ui-monospace', color: t.success,
              fontVariantNumeric:'tabular-nums',
            }}>
              {I.arrow(t.success)}
              <span>{periodDelta}</span>
            </div>
          </div>
          {/* Mini distribution bar */}
          <div style={{ display:'flex', height: 4, borderRadius: 2, overflow:'hidden', marginTop: 14, gap: 2 }}>
            {[40,28,22,10].map((w,i) => (
              <div key={i} style={{
                width:`${w}%`,
                background: i === 0 ? accent : i === 1 ? `color-mix(in oklch, ${accent} 50%, transparent)`
                          : i === 2 ? `color-mix(in oklch, ${accent} 25%, transparent)` : t.chip,
              }}/>
            ))}
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', marginTop: 8, fontSize: 10.5, color: t.faint, fontFamily:'"JetBrains Mono", ui-monospace' }}>
            <span>Video 40%</span><span>Reading 28%</span><span>Quiz 22%</span><span>Other</span>
          </div>
        </Card>

        {/* KPI strip — 3 even tiles */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 10 }}>
          {[
            { k:'9 / 12', l:'Courses', sub:'completed' },
            { k:'82%',    l:'Avg quiz', sub:'last 30 days' },
            { k:'Normal', l:'Velocity', sub:'on track' },
          ].map((kpi, i) => (
            <Card t={t} pad={12} key={i} style={{ display:'flex', flexDirection:'column', gap: 3 }}>
              <div style={{
                fontSize: kpi.k === 'Normal' ? 17 : 22,
                fontWeight: 550, letterSpacing:'-0.025em', color: t.ink,
                fontVariantNumeric:'tabular-nums', lineHeight: 1.1,
                marginTop: kpi.k === 'Normal' ? 3 : 0,
              }}>{kpi.k}</div>
              <div style={{ fontSize:11.5, color: t.ink2, fontWeight:500, marginTop: 4 }}>{kpi.l}</div>
              <div style={{ fontSize:10.5, color: t.faint, fontFamily:'"JetBrains Mono", ui-monospace' }}>{kpi.sub}</div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card t={t} pad={dense ? 14 : 16}>
          <div style={{
            fontSize: 15, fontWeight: 700, letterSpacing:'-0.015em',
            color: t.ink, marginBottom: 12,
          }}>Quick Actions</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 10 }}>
            {[
              { l:'Browse Courses', bg:'#F5F3FF', bd:'#D8D4FC', fg:'#7C3AED', svg: (color) => (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 7v14"/>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
                </svg>
              ) },
              { l:'My Schedule', bg:'#EFF8FF', bd:'#B2DDFF', fg:'#1570EF', svg: (color) => (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2v4"/><path d="M16 2v4"/>
                  <rect width="18" height="18" x="3" y="4" rx="2"/>
                  <path d="M3 10h18"/>
                </svg>
              ) },
              { l:'Submit Work', bg:'#ECFDF3', bd:'#A6F4C5', fg:'#059669', svg: (color) => (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/>
                  <line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
              ) },
              { l:'Get Help', bg:'#FFF7ED', bd:'#FDBA74', fg:'#EA580C', svg: (color) => (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <path d="M12 17h.01"/>
                </svg>
              ) },
            ].map((qa, i) => (
              <button key={i} style={{
                display:'flex', flexDirection:'column', alignItems:'flex-start', gap: 10,
                padding: 14, borderRadius: 10, border: `1px solid ${t.line2}`,
                background: t.surface, cursor:'pointer', textAlign:'left',
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: qa.bg, border: `1px solid ${qa.bd}`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>{qa.svg(qa.fg)}</div>
                <span style={{ fontSize: 13, color: t.ink, fontWeight: 500, letterSpacing:'-0.005em' }}>{qa.l}</span>
              </button>
            ))}
          </div>
        </Card>

        {/* Performance trend */}
        <Card t={t} pad={dense ? 14 : 16}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: 6 }}>
            <div>
              <div style={{ fontSize:14, fontWeight:550, letterSpacing:'-0.015em', color: t.ink }}>Performance trend</div>
              <div style={{ fontSize:11.5, color: t.muted, marginTop: 2 }}>Avg score · last 6 courses</div>
            </div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:4,
              padding:'4px 8px', borderRadius: 999,
              background: ACCENTS[tweaks.accent].soft,
              fontSize:11, fontFamily:'"JetBrains Mono", ui-monospace', color: accent,
              fontWeight:500, fontVariantNumeric:'tabular-nums',
            }}>
              {I.arrow(accent)}
              <span>+15 pts</span>
            </div>
          </div>
          <PerfChart t={t} accent={accent}/>
        </Card>

        {/* Continue learning */}
        <Card t={t} pad={dense ? 12 : 14}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 10 }}>
            <div style={{ fontSize:14, fontWeight:550, letterSpacing:'-0.015em' }}>Ongoing course</div>
            <span style={{ fontSize:11.5, color: accent, fontWeight:500 }}>View all →</span>
          </div>
          <ImagePlaceholder t={t} accent={accent} label="COURSE THUMBNAIL"/>
          <div style={{ marginTop: 12 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:8 }}>
              <div style={{ fontSize:14.5, fontWeight:550, letterSpacing:'-0.015em', color: t.ink }}>Digital Marketing Essentials</div>
              <div style={{ fontSize:12, color: t.ink, fontFamily:'"JetBrains Mono", ui-monospace', fontWeight:500, fontVariantNumeric:'tabular-nums' }}>45%</div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:6, marginTop: 4, fontSize:11.5, color: t.muted }}>
              <span>Beginner</span>
              {I.dot(t.faint)}
              <span>1h 40m left</span>
              {I.dot(t.faint)}
              <span>Self-paced</span>
            </div>
            <div style={{
              marginTop: 10, height: 5, borderRadius: 3, background: t.chip,
              overflow:'hidden', position:'relative',
            }}>
              <div style={{
                position:'absolute', inset:0, width:'45%',
                background: accent, borderRadius: 3,
              }}/>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', marginTop: 6, fontSize: 10.5, color: t.faint, fontFamily:'"JetBrains Mono", ui-monospace' }}>
              <span>Module 4 of 9</span>
              <span>Next: Funnel metrics</span>
            </div>
          </div>
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
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
        {[
          { k:'Dashboard', icon: I.home },
          { k:'My Course', icon: I.book },
          { k:'Journey',   icon: I.path },
          { k:'Assess',    icon: I.check2 },
        ].map(it => {
          const active = it.k === tab;
          return (
            <button key={it.k} onClick={() => setTab(it.k)} style={{
              display:'flex', flexDirection:'column', alignItems:'center', gap: 3,
              background:'transparent', border:'none', cursor:'pointer',
              padding:'4px 0',
              color: active ? accent : t.muted,
            }}>
              {it.icon(active ? accent : t.muted, active ? ACCENTS[tweaks.accent].soft : 'none')}
              <span style={{ fontSize:10.5, fontWeight: active ? 550 : 450, letterSpacing:'-0.005em' }}>{it.k}</span>
              <span style={{
                width: active ? 14 : 0, height: 2, borderRadius: 1, background: accent,
                transition: 'width .2s', marginTop: -1,
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
  const [authed, setAuthed] = React.useState(false);
  const t = THEMES[tweaks.theme] || THEMES.light;
  const accent = ACCENTS[tweaks.accent].hex;

  return (
    <>
      <div style={{
        minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
        background:'#E8E6E1',
        fontFamily:'"Poppins", system-ui',
        padding:'40px 20px',
      }}>
        <IOSDevice width={402} height={874} dark={!authed || tweaks.theme === 'dark'}>
          {authed
            ? <Dashboard/>
            : <Login onSuccess={() => setAuthed(true)}/>}
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
            value={authed ? 'dashboard' : 'login'}
            options={[
              { value:'login',     label:'Login' },
              { value:'dashboard', label:'Dashboard' },
            ]}
            onChange={v => setAuthed(v === 'dashboard')}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
