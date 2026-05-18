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

// ─── Journey screen (inlined) ─────────────────────────────
// Data adapted from ridho/lnd-presight-demo/src/pages/trainee/journey

const JN_PRIMARY = '#1056d9';
const JN_PRIMARY_SOFT = '#e8effc';
const JN_INK = '#252B37';
const JN_BODY = '#414651';
const JN_MUTED = '#717680';
const JN_LINE = '#E9EAEB';
const JN_SUCCESS = '#039855';
const JN_SUCCESS_SOFT = '#ECFDF3';

const JN_ASSIGNED = [{
  id: 'ja-1',
  title: 'Data Storytelling Mastery',
  category: 'Professional Development',
  duration: '2 Weeks',
  totalModules: 6,
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70',
}];

const JN_ONGOING = [{
  id: 'jo-1',
  title: 'Digital Marketing Leadership Track',
  category: 'Leadership',
  duration: '4 Weeks',
  totalModules: 10,
  progress: 45,
  completedModules: 4,
  image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=70',
}];

const JN_UPCOMING = [{
  id: 'ju-1',
  title: 'AI Strategy for Business Leaders',
  category: 'Strategy',
  duration: '3 Weeks',
  totalModules: 9,
  startDate: '01 Jun 2026',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=70',
}];

const JN_COMPLETED = [{
  id: 'jc-1',
  title: 'Foundations of Product Management',
  category: 'Professional Development',
  duration: '3 Weeks',
  totalModules: 8,
  completedAt: '12 Apr 2026',
  certified: true,
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=70',
}];

const JN_HUB_PROGRAMS = [
  { id: 'jp-1', title: 'Professional Development & Certifications: Data Analytics', category: 'Professional Development', duration: '3 Weeks', totalModules: 12, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70' },
  { id: 'jp-2', title: 'Leadership Program: Marketing', category: 'Leadership', duration: '2 Weeks', totalModules: 8, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=70' },
  { id: 'jp-3', title: 'Cloud Architecture Specialist Track', category: 'Technical', duration: '5 Weeks', totalModules: 14, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=70' },
];

const JN_SUMMARY = { totalJourneys: 4, completed: 1, inProgress: 1, certificates: 1, hoursThisMonth: 18, overallRate: 38 };

const JN_TABS = [
  { key: 'assigned',  label: 'Assigned' },
  { key: 'journey',   label: 'Journey' },
  { key: 'ongoing',   label: 'Ongoing Journey' },
  { key: 'upcoming',  label: 'Upcoming Journey' },
  { key: 'completed', label: 'Completed Journey' },
];

const JN_JOURNEY_ALL = JN_ASSIGNED.concat(JN_ONGOING, JN_UPCOMING, JN_COMPLETED);

function JnIcRoute({ c = JN_PRIMARY, s = 20 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="19" r="3" stroke={c} strokeWidth="1.6"/>
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="5" r="3" stroke={c} strokeWidth="1.6"/>
    </svg>
  );
}
function JnIcCompass({ c = JN_PRIMARY }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/>
      <path d="m15.5 8.5-2 5.5-5.5 2 2-5.5 5.5-2Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}
function JnIcTarget({ c = JN_PRIMARY }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="5" stroke={c} strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="1.5" fill={c}/>
    </svg>
  );
}
function JnIcAward({ c = JN_SUCCESS }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="9" r="6" stroke={c} strokeWidth="1.6"/>
      <path d="m8 14-1 8 5-3 5 3-1-8" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}
function JnIcClock({ c = JN_MUTED }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/>
      <path d="M12 7v5l3 2" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function JnIcLayers({ c = JN_PRIMARY }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="m12 2 9 5-9 5-9-5 9-5Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}
function JnIcRocket({ c = '#d97706' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M14 14s-2 4-6 4 0-6 0-6M4 14c2-7 7-11 14-11 0 7-4 12-11 14L4 14Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="14" cy="9" r="1.5" stroke={c} strokeWidth="1.6"/>
    </svg>
  );
}
function JnIcTrophy({ c = '#ea580c' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M6 4h12v4a6 6 0 0 1-12 0V4Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3M12 14v4M9 22h6" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function JnIcArrow({ c = '#FFF' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function JnIcEye({ c = JN_PRIMARY }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" stroke={c} strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="3" stroke={c} strokeWidth="1.6"/>
    </svg>
  );
}
function JnIcMore({ c = JN_BODY }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="12" r="1.5" fill={c}/>
      <circle cx="12" cy="12" r="1.5" fill={c}/>
      <circle cx="18" cy="12" r="1.5" fill={c}/>
    </svg>
  );
}
function JnIcExternal({ c = JN_PRIMARY }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M14 4h6v6M20 4l-9 9M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function JnSectionHeader({ icon, title, subtitle }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-start', gap: 10, marginBottom: 12 }}>
      <div style={{
        width: 38, height: 38, borderRadius: 10,
        background: 'rgba(16,86,217,0.10)',
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>{icon}</div>
      <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: JN_INK, lineHeight:'20px', letterSpacing:'-0.01em' }}>{title}</div>
        <div style={{ fontSize: 12, color: JN_MUTED, lineHeight:'16px' }}>{subtitle}</div>
      </div>
    </div>
  );
}

function JnInfoRow({ label, value }) {
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 10 }}>
      <span style={{ fontSize: 12.5, color: JN_MUTED }}>{label}</span>
      <span style={{ fontSize: 12.5, color: JN_INK, fontWeight: 500, textAlign:'right' }}>{value}</span>
    </div>
  );
}

function JnStatTile({ icon, iconBg, label, value }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
      <div style={{
        width: 30, height: 30, borderRadius: 8, background: iconBg,
        display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
      }}>{icon}</div>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: JN_INK, lineHeight:'18px' }}>{value}</div>
        <div style={{ fontSize: 10.5, color: JN_MUTED, lineHeight:'14px' }}>{label}</div>
      </div>
    </div>
  );
}

function JnEmptyState({ title, message, ctaLabel }) {
  return (
    <div style={{
      background:'#FFF', border:'1px solid ' + JN_LINE, borderRadius: 12,
      padding:'28px 20px', textAlign:'center',
      display:'flex', flexDirection:'column', alignItems:'center', gap: 8,
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: 18, background: JN_PRIMARY_SOFT,
        display:'flex', alignItems:'center', justifyContent:'center', marginBottom: 4,
      }}>
        <JnIcRoute c={JN_PRIMARY}/>
      </div>
      <div style={{ fontSize: 15, fontWeight: 600, color: JN_BODY }}>{title}</div>
      <div style={{ fontSize: 12.5, color: JN_MUTED, lineHeight:'17px', maxWidth: 280 }}>{message}</div>
      {ctaLabel ? (
        <button style={{
          marginTop: 6, height: 36, padding:'0 18px', borderRadius: 18,
          background: JN_PRIMARY, color:'#FFF', border:'none', cursor:'pointer',
          fontFamily:'inherit', fontSize: 13, fontWeight: 600,
          display:'inline-flex', alignItems:'center', gap: 6,
        }}>
          <span>{ctaLabel}</span>
          <JnIcArrow c="#FFF"/>
        </button>
      ) : null}
    </div>
  );
}

function JnProgramCard({ program, footer, badge }) {
  return (
    <div style={{
      background:'#FFF', border:'1px solid ' + JN_LINE,
      borderRadius: 12, overflow:'hidden',
      display:'flex', flexDirection:'column',
    }}>
      <div style={{ position:'relative', width:'100%', aspectRatio:'16 / 9', background:'#F5F5F5' }}>
        <img src={program.image} alt={program.title}
          style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
        <div style={{
          position:'absolute', top:0, left:0, right:0, bottom:0,
          background:'linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.15) 55%, transparent)',
        }}/>
        <div style={{
          position:'absolute', left: 12, right: 12, bottom: 10,
          color:'#FFF', fontSize: 14.5, fontWeight: 600, letterSpacing:'-0.01em',
          lineHeight:'18px',
        }}>{program.title}</div>
        {badge}
      </div>
      <div style={{ padding: 14, display:'flex', flexDirection:'column', gap: 10 }}>
        <div style={{ display:'flex', flexDirection:'column', gap: 6, paddingBottom: 8, borderBottom:'1px solid rgba(0,0,0,0.05)' }}>
          <JnInfoRow label="Modules" value={program.totalModules + ' Courses'}/>
          <JnInfoRow label="Duration" value={program.duration}/>
          <JnInfoRow label="Category" value={program.category}/>
        </div>
        {footer}
      </div>
    </div>
  );
}

function JnAssignedFooter() {
  return (
    <div style={{ display:'flex', gap: 8 }}>
      <button style={{
        flex: 1, height: 40, borderRadius: 10,
        background: JN_PRIMARY, color:'#FFF', border:'none', cursor:'pointer',
        fontFamily:'inherit', fontSize: 13.5, fontWeight: 600,
        display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
      }}>
        <span>Start Journey</span><JnIcArrow c="#FFF"/>
      </button>
      <button style={{
        width: 40, height: 40, borderRadius: 10,
        background:'#F5F5F5', color: JN_BODY, border:'none', cursor:'pointer',
        display:'inline-flex', alignItems:'center', justifyContent:'center',
      }}>
        <JnIcMore c={JN_BODY}/>
      </button>
    </div>
  );
}

function JnOngoingFooter({ program }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
      <div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 6 }}>
          <span style={{ fontSize: 11.5, color: JN_MUTED }}>
            {program.completedModules}/{program.totalModules} modules complete
          </span>
          <span style={{ fontSize: 12, fontWeight: 600, color: JN_PRIMARY }}>{program.progress}%</span>
        </div>
        <div style={{ height: 6, borderRadius: 999, background: JN_PRIMARY_SOFT, overflow:'hidden' }}>
          <div style={{
            width: program.progress + '%', height:'100%', borderRadius: 999,
            background:'linear-gradient(90deg, #5B8DEF, #1056d9)',
          }}/>
        </div>
      </div>
      <button style={{
        height: 40, borderRadius: 10,
        background: JN_PRIMARY_SOFT, color: JN_PRIMARY, border:'none', cursor:'pointer',
        fontFamily:'inherit', fontSize: 13.5, fontWeight: 600,
        display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
      }}>
        <span>Resume Journey</span><JnIcArrow c={JN_PRIMARY}/>
      </button>
    </div>
  );
}

function JnUpcomingFooter({ program }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
      <div style={{
        display:'inline-flex', alignItems:'center', gap: 6,
        padding:'8px 10px', borderRadius: 8,
        background: '#FFF7ED', color:'#C2410C',
        fontSize: 12, fontWeight: 500,
      }}>
        <JnIcClock c="#C2410C"/>
        <span>Starts {program.startDate}</span>
      </div>
      <button style={{
        height: 40, borderRadius: 10,
        background:'transparent', color: JN_PRIMARY, border:'1px solid ' + JN_PRIMARY_SOFT,
        cursor:'pointer', fontFamily:'inherit', fontSize: 13.5, fontWeight: 600,
        display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
      }}>
        <span>View Details</span><JnIcArrow c={JN_PRIMARY}/>
      </button>
    </div>
  );
}

function JnCompletedFooter({ program }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
      <div style={{ height: 6, borderRadius: 999, background:'#ECFDF3', overflow:'hidden' }}>
        <div style={{ width:'100%', height:'100%', background:'linear-gradient(90deg, #12B76A, #039855)' }}/>
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span style={{ fontSize: 11.5, color: JN_MUTED }}>Completed {program.completedAt}</span>
        <button style={{
          background: JN_PRIMARY_SOFT, color: JN_PRIMARY, border:'none', cursor:'pointer',
          padding:'6px 14px', borderRadius: 10,
          fontFamily:'inherit', fontSize: 12.5, fontWeight: 600,
        }}>View Certificate</button>
      </div>
    </div>
  );
}

function JnCertifiedBadge() {
  return (
    <div style={{
      position:'absolute', top: 10, left: 10, zIndex: 2,
      display:'inline-flex', alignItems:'center', gap: 4,
      padding:'3px 8px', borderRadius: 999,
      background: JN_SUCCESS_SOFT, color: JN_SUCCESS,
      fontSize: 10.5, fontWeight: 600,
    }}>
      <JnIcAward c={JN_SUCCESS}/>
      <span>Certified</span>
    </div>
  );
}

function JnJourneyList({ tab }) {
  if (tab === 'assigned') {
    if (JN_ASSIGNED.length === 0) {
      return <JnEmptyState title="No Assigned Journey" message="You don't have any assigned journey right now." ctaLabel="Explore Journey Hub"/>;
    }
    return (
      <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
        {JN_ASSIGNED.map(p => <JnProgramCard key={p.id} program={p} footer={<JnAssignedFooter/>}/>)}
      </div>
    );
  }
  if (tab === 'journey') {
    return (
      <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
        {JN_JOURNEY_ALL.map(p => <JnProgramCard key={p.id} program={p}/>)}
      </div>
    );
  }
  if (tab === 'ongoing') {
    if (JN_ONGOING.length === 0) {
      return <JnEmptyState title="No Ongoing Journey" message="You don't have any active journey right now. Start a new journey to begin learning!" ctaLabel="Explore Journey Hub"/>;
    }
    return (
      <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
        {JN_ONGOING.map(p => <JnProgramCard key={p.id} program={p} footer={<JnOngoingFooter program={p}/>}/>)}
      </div>
    );
  }
  if (tab === 'upcoming') {
    if (JN_UPCOMING.length === 0) {
      return <JnEmptyState title="No Upcoming Journey" message="No upcoming journey scheduled for you yet." ctaLabel="Discover Journey"/>;
    }
    return (
      <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
        {JN_UPCOMING.map(p => <JnProgramCard key={p.id} program={p} footer={<JnUpcomingFooter program={p}/>}/>)}
      </div>
    );
  }
  // completed
  if (JN_COMPLETED.length === 0) {
    return <JnEmptyState title="No Completed Journey" message="You haven't completed any journey yet. Keep going, you're doing great!" ctaLabel="Browse Journey"/>;
  }
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
      {JN_COMPLETED.map(p => (
        <JnProgramCard
          key={p.id}
          program={p}
          badge={p.certified ? <JnCertifiedBadge/> : null}
          footer={<JnCompletedFooter program={p}/>}
        />
      ))}
    </div>
  );
}

function JnCompletionRate() {
  return (
    <div style={{
      background:'#FFF', border:'1px solid ' + JN_LINE, borderRadius: 12, padding: 16,
      display:'flex', flexDirection:'column', gap: 16,
    }}>
      <JnSectionHeader icon={<JnIcTarget c={JN_PRIMARY}/>} title="Journey Completion Rate" subtitle="Your overall journey progress"/>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10 }}>
        <JnStatTile icon={<JnIcLayers c={JN_PRIMARY}/>}  iconBg='rgba(16,86,217,0.10)' label="Total"        value={JN_SUMMARY.totalJourneys}/>
        <JnStatTile icon={<JnIcAward c="#16a34a"/>}      iconBg='#ECFDF3'              label="Completed"    value={JN_SUMMARY.completed}/>
        <JnStatTile icon={<JnIcRocket c="#d97706"/>}     iconBg='#FFFBEB'              label="In Progress"  value={JN_SUMMARY.inProgress}/>
        <JnStatTile icon={<JnIcTrophy c="#ea580c"/>}     iconBg='#FFF7ED'              label="Certificates" value={JN_SUMMARY.certificates}/>
      </div>
      <div style={{
        display:'flex', alignItems:'center', gap: 8,
        background:'#f8f9fb', borderRadius: 10, padding:'10px 12px',
      }}>
        <JnIcClock c={JN_MUTED}/>
        <span style={{ fontSize: 12.5, color: JN_BODY }}>
          <span style={{ fontWeight: 600 }}>{JN_SUMMARY.hoursThisMonth}h</span> journey learning this month
        </span>
      </div>
    </div>
  );
}

function JnJourneyHub() {
  return (
    <div style={{
      background:'#FFF', border:'1px solid ' + JN_LINE, borderRadius: 12, padding: 16,
      display:'flex', flexDirection:'column', gap: 12,
    }}>
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap: 10 }}>
        <JnSectionHeader icon={<JnIcCompass c={JN_PRIMARY}/>} title="Journey Hub" subtitle="Explore development programs and certifications."/>
        <button style={{
          background:'transparent', border:'none', cursor:'pointer',
          color: JN_PRIMARY, fontFamily:'inherit', fontSize: 12.5, fontWeight: 600,
          display:'inline-flex', alignItems:'center', gap: 4, padding: 0, marginTop: 6,
        }}>
          <span>Open Hub</span><JnIcExternal c={JN_PRIMARY}/>
        </button>
      </div>
      <div style={{
        display:'flex', gap: 12, overflowX:'auto',
        paddingBottom: 4, margin:'0 -16px', padding:'0 16px 4px',
        scrollSnapType:'x mandatory',
        scrollbarWidth:'none', msOverflowStyle:'none',
      }}>
        {JN_HUB_PROGRAMS.map(p => (
          <div key={p.id} style={{
            flexShrink: 0, width: 260,
            scrollSnapAlign:'start',
            border:'1px solid ' + JN_LINE, borderRadius: 12, overflow:'hidden',
            background:'#FFF', display:'flex', flexDirection:'column',
          }}>
            <div style={{ position:'relative', width:'100%', aspectRatio:'16 / 9', background:'#F5F5F5' }}>
              <img src={p.image} alt={p.title}
                style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
              <div style={{
                position:'absolute', top:0, left:0, right:0, bottom:0,
                background:'linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.15) 55%, transparent)',
              }}/>
              <div style={{
                position:'absolute', left: 12, right: 12, bottom: 10,
                color:'#FFF', fontSize: 14, fontWeight: 600, letterSpacing:'-0.01em',
                lineHeight:'18px',
              }}>{p.title}</div>
            </div>
            <div style={{ padding: 14, display:'flex', flexDirection:'column', gap: 10 }}>
              <div style={{ display:'flex', flexDirection:'column', gap: 6, paddingBottom: 8, borderBottom:'1px solid rgba(0,0,0,0.05)' }}>
                <JnInfoRow label="Courses"  value={p.totalModules + ' Courses'}/>
                <JnInfoRow label="Duration" value={p.duration}/>
                <JnInfoRow label="Category" value={p.category}/>
              </div>
              <div style={{ display:'flex', gap: 8 }}>
                <button style={{
                  flex: 1, height: 40, borderRadius: 8,
                  background: JN_PRIMARY_SOFT, color: JN_PRIMARY, border:'none', cursor:'pointer',
                  fontFamily:'inherit', fontSize: 13.5, fontWeight: 600,
                  display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
                }}>
                  <JnIcEye c={JN_PRIMARY}/>
                  <span>View Details</span>
                </button>
                <button style={{
                  width: 40, height: 40, borderRadius: 8,
                  background:'#F5F5F5', color: JN_BODY, border:'none', cursor:'pointer',
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                }}>
                  <JnIcMore c={JN_BODY}/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function JourneyScreen() {
  const [tab, setTab] = React.useState('assigned');
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom:0,
      background:'#F7F8FA',
      paddingTop: 60, paddingBottom: 120,
      overflowY:'auto',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
    }}>
      <div style={{ padding:'0 18px', display:'flex', flexDirection:'column', gap: 16 }}>
        <div style={{ display:'flex', alignItems:'flex-start', gap: 10, marginTop: 4 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10, background:'#FFF',
            border:'1px solid ' + JN_LINE,
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <JnIcRoute c={JN_PRIMARY}/>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
            <div style={{ fontSize: 12.5, color: JN_MUTED, lineHeight:'16px' }}>Your Learning Journey</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: JN_INK, lineHeight:'24px', letterSpacing:'-0.015em' }}>
              <span>Track your </span>
              <span style={{ color: JN_PRIMARY }}>growth milestones!</span>
            </div>
          </div>
        </div>
        <JnCompletionRate/>
        <div style={{
          background:'#FFF', border:'1px solid ' + JN_LINE, borderRadius: 12, padding: 16,
          display:'flex', flexDirection:'column', gap: 14,
        }}>
          <JnSectionHeader icon={<JnIcRoute c={JN_PRIMARY}/>} title="My Journey" subtitle="Track your journey progress and upcoming schedules."/>
          <div style={{ display:'flex', gap: 6, overflowX:'auto', paddingBottom: 2 }}>
            {JN_TABS.map(it => {
              const active = it.key === tab;
              return (
                <button key={it.key} onClick={() => setTab(it.key)} style={{
                  flexShrink: 0, height: 32, padding:'2px 14px', borderRadius: 999,
                  background: active ? JN_PRIMARY : '#FFF',
                  color: active ? '#FFF' : JN_BODY,
                  border: active ? 'none' : '1px solid ' + JN_LINE,
                  cursor:'pointer', fontFamily:'inherit', fontSize: 13, fontWeight: 500,
                  whiteSpace:'nowrap',
                }}>{it.label}</button>
              );
            })}
          </div>
          <JnJourneyList tab={tab}/>
        </div>
        <JnJourneyHub/>
      </div>
    </div>
  );
}

// ─── Assess screen (inlined) ──────────────────────────────
// Data adapted from ridho/lnd-presight-demo/src/pages/trainee/assessment

const AS_PRIMARY = '#1570EF';
const AS_PRIMARY_SOFT = '#D1E9FF';
const AS_INK = '#252B37';
const AS_BODY = '#414651';
const AS_MUTED = '#717680';
const AS_FAINT = '#A4A7AE';
const AS_LINE = '#E9EAEB';
const AS_LINE2 = '#F5F5F5';

const AS_PENDING_SUMMARY = { pendingQuizzes: 3, pendingAssignments: 2 };

const AS_PENDING = [
  { id: 'assess-1',  assessmentName: 'Knowledge Check-Fundamentals of AI Ethics', courseName: 'AI Ethics & Responsible AI Implementation', assessmentType: 'Quiz',       deadline: '16 March 2026', status: 'Incomplete', score: null },
  { id: 'assess-2',  assessmentName: 'Statistics & Probability Basics',           courseName: 'Data Science Foundations',                   assessmentType: 'Quiz',       deadline: '18 March 2026', status: 'Incomplete', score: null },
  { id: 'assess-3',  assessmentName: 'Supervised Learning Project',               courseName: 'Machine Learning Fundamentals',              assessmentType: 'Assignment', deadline: '20 March 2026', status: 'Pending',    score: null },
  { id: 'assess-9',  assessmentName: 'Data Cleaning Exercise',                    courseName: 'Data Science Foundations',                   assessmentType: 'Assignment', deadline: '22 March 2026', status: 'Late',       score: null },
  { id: 'assess-10', assessmentName: 'Neural Networks Basics',                    courseName: 'Deep Learning Specialization',               assessmentType: 'Quiz',       deadline: '25 March 2026', status: 'Incomplete', score: null },
];

const AS_ALL = AS_PENDING.concat([
  { id: 'assess-4', assessmentName: 'Applied Scenario Exercise',           courseName: 'AI Ethics & Responsible AI Implementation', assessmentType: 'Assignment', deadline: '17 March 2026', status: 'Graded',    score: 78   },
  { id: 'assess-5', assessmentName: 'Data Visualization Quiz',             courseName: 'Data Science Foundations',                   assessmentType: 'Quiz',       deadline: '15 March 2026', status: 'Submitted', score: 92   },
  { id: 'assess-6', assessmentName: 'Object-Oriented Programming Project', courseName: 'Python Programming Essentials',              assessmentType: 'Assignment', deadline: '12 March 2026', status: 'Submitted', score: null },
  { id: 'assess-7', assessmentName: 'Regression Analysis Quiz',            courseName: 'Machine Learning Fundamentals',              assessmentType: 'Quiz',       deadline: '10 March 2026', status: 'Submitted', score: 85   },
  { id: 'assess-8', assessmentName: 'CNN Architecture Project',            courseName: 'Deep Learning Specialization',               assessmentType: 'Assignment', deadline:  '8 March 2026', status: 'Graded',    score: 88   },
]);

function AsIcClipboard({ c = AS_PRIMARY }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="8" y="2" width="8" height="4" rx="1" stroke={c} strokeWidth="1.6"/>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke={c} strokeWidth="1.6"/>
      <path d="m9 14 2 2 4-4" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function AsIcQuiz({ c = AS_PRIMARY }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/>
      <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5M12 17h.01" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function AsIcDoc({ c = AS_PRIMARY }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M14 2v6h6M8 13h8M8 17h5" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function AsIcCalendar({ c = AS_MUTED }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke={c} strokeWidth="1.6"/>
      <path d="M3 10h18M8 2v4M16 2v4" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function AsIcSearch({ c = AS_MUTED }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke={c} strokeWidth="1.6"/>
      <path d="m20 20-3.5-3.5" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function AsIcArrow({ c = '#FFF' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AsStatusBadge({ status }) {
  const config = {
    Incomplete: { bg: '#FEF3F2', fg: '#B42318' },
    Pending:    { bg: '#FFFAEB', fg: '#B54708' },
    Late:       { bg: '#FEF3F2', fg: '#B42318' },
    Submitted:  { bg: '#EFF8FF', fg: '#175CD3' },
    Graded:     { bg: '#ECFDF3', fg: '#027A48' },
  }[status] || { bg: '#F5F5F5', fg: AS_BODY };
  return (
    <span style={{
      display:'inline-flex', alignItems:'center',
      padding:'2px 8px', borderRadius: 999,
      background: config.bg, color: config.fg,
      fontSize: 10.5, fontWeight: 600, lineHeight:'14px',
    }}>{status}</span>
  );
}

function AsTypeBadge({ type }) {
  const isQuiz = type === 'Quiz';
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap: 4,
      padding:'2px 8px', borderRadius: 6,
      background: isQuiz ? '#EFF8FF' : '#F4F3FF',
      color: isQuiz ? '#175CD3' : '#5925DC',
      fontSize: 10.5, fontWeight: 600, lineHeight:'14px',
    }}>{type}</span>
  );
}

function AsSummaryCard({ icon, iconBg, label, count, suffix }) {
  return (
    <div style={{
      background:'#FFF', border:'1px solid ' + AS_LINE, borderRadius: 12, padding: 14,
      display:'flex', alignItems:'center', gap: 12, flex: 1,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10, background: iconBg,
        display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
      }}>{icon}</div>
      <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
        <div style={{
          fontSize: 22, fontWeight: 600, color: AS_INK, lineHeight: 1,
          fontVariantNumeric:'tabular-nums',
        }}>{count}</div>
        <div style={{ fontSize: 11.5, color: AS_MUTED, lineHeight:'15px' }}>{label}{suffix ? ' · ' + suffix : ''}</div>
      </div>
    </div>
  );
}

function AsAssessmentItem({ item, onView }) {
  const isOverdue = item.status === 'Late';
  return (
    <div style={{
      padding: 14, borderRadius: 12,
      background:'#FFF', border:'1px solid ' + AS_LINE,
      display:'flex', flexDirection:'column', gap: 10,
    }}>
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 13.5, fontWeight: 600, color: AS_INK, lineHeight:'18px',
            letterSpacing:'-0.005em', marginBottom: 3,
          }}>{item.assessmentName}</div>
          <div style={{
            fontSize: 11.5, color: AS_MUTED, lineHeight:'15px',
            display:'-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient:'vertical', overflow:'hidden',
          }}>{item.courseName}</div>
        </div>
        <AsTypeBadge type={item.assessmentType}/>
      </div>

      <div style={{ display:'flex', flexWrap:'wrap', gap: 10, alignItems:'center' }}>
        <span style={{
          display:'inline-flex', alignItems:'center', gap: 4,
          fontSize: 11.5, color: isOverdue ? '#B42318' : AS_MUTED,
          fontWeight: isOverdue ? 600 : 400,
        }}>
          <AsIcCalendar c={isOverdue ? '#B42318' : AS_MUTED}/>
          <span>{item.deadline}</span>
        </span>
        <AsStatusBadge status={item.status}/>
        {item.score != null ? (
          <span style={{
            marginLeft:'auto',
            fontSize: 12, fontWeight: 600, color: AS_INK,
            fontVariantNumeric:'tabular-nums',
          }}>Score {item.score}</span>
        ) : null}
      </div>

      <button onClick={() => onView(item.id)} style={{
        height: 36, borderRadius: 8,
        background: AS_PRIMARY_SOFT, color: AS_PRIMARY, border:'none', cursor:'pointer',
        fontFamily:'inherit', fontSize: 12.5, fontWeight: 600,
        display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
      }}>
        <span>View Detail</span>
        <AsIcArrow c={AS_PRIMARY}/>
      </button>
    </div>
  );
}

function AsEmptyState({ message }) {
  return (
    <div style={{
      background:'#FFF', border:'1px solid ' + AS_LINE, borderRadius: 12,
      padding:'28px 20px', textAlign:'center',
      display:'flex', flexDirection:'column', alignItems:'center', gap: 8,
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: 14, background: AS_PRIMARY_SOFT,
        display:'flex', alignItems:'center', justifyContent:'center', marginBottom: 4,
      }}>
        <AsIcClipboard c={AS_PRIMARY}/>
      </div>
      <div style={{ fontSize: 14.5, fontWeight: 600, color: AS_BODY }}>No assessments found</div>
      <div style={{ fontSize: 12.5, color: AS_MUTED, maxWidth: 260, lineHeight:'17px' }}>{message}</div>
    </div>
  );
}

function AssessScreen() {
  const [activeTab, setActiveTab] = React.useState('pending');
  const [search, setSearch] = React.useState('');
  const [filterType, setFilterType] = React.useState('All');

  const base = activeTab === 'pending' ? AS_PENDING : AS_ALL;

  const filtered = base.filter(a => {
    if (search && !a.assessmentName.toLowerCase().includes(search.toLowerCase())) return false;
    if (filterType !== 'All' && a.assessmentType !== filterType) return false;
    return true;
  });

  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom:0,
      background:'#F7F8FA',
      paddingTop: 60, paddingBottom: 120,
      overflowY:'auto',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
    }}>
      <div style={{ padding:'0 18px', display:'flex', flexDirection:'column', gap: 16 }}>

        {/* Page title */}
        <div style={{ display:'flex', alignItems:'flex-start', gap: 10, marginTop: 4 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10, background:'#FFF',
            border:'1px solid ' + AS_LINE,
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <AsIcClipboard c={AS_PRIMARY}/>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
            <div style={{ fontSize: 12.5, color: AS_FAINT, lineHeight:'16px' }}>Assessment</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: AS_INK, lineHeight:'24px', letterSpacing:'-0.015em' }}>
              <span style={{ color: AS_MUTED }}>Track your </span>
              <span style={{ color: AS_PRIMARY }}>assessments.</span>
            </div>
          </div>
        </div>

        {/* Pending Assessments — metric summary */}
        <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: AS_BODY }}>Pending Assessments</div>
          <div style={{ display:'flex', gap: 10 }}>
            <AsSummaryCard
              icon={<AsIcQuiz c={AS_PRIMARY}/>}
              iconBg='rgba(21,112,239,0.10)'
              label="Quizzes"
              count={AS_PENDING_SUMMARY.pendingQuizzes}
            />
            <AsSummaryCard
              icon={<AsIcDoc c="#7C3AED"/>}
              iconBg='#F4F3FF'
              label="Assignments"
              count={AS_PENDING_SUMMARY.pendingAssignments}
            />
          </div>
        </div>

        {/* Assessment List */}
        <div style={{
          background:'#FFF', border:'1px solid ' + AS_LINE, borderRadius: 12, padding: 14,
          display:'flex', flexDirection:'column', gap: 12,
        }}>
          {/* Header */}
          <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
            <div style={{ fontSize: 14.5, fontWeight: 600, color: AS_INK, lineHeight:'20px' }}>Assessment List</div>
            <div style={{ fontSize: 11.5, color: AS_MUTED }}>
              {filtered.length} of {base.length} assessments
            </div>
          </div>

          {/* Tabs */}
          <div style={{
            display:'flex', background: 'rgba(21,112,239,0.06)', borderRadius: 10, padding: 3,
            border:'1px solid rgba(21,112,239,0.10)',
          }}>
            {[
              { k:'pending', label:'Pending' },
              { k:'all',     label:'All Assessments' },
            ].map(it => {
              const active = it.k === activeTab;
              return (
                <button key={it.k} onClick={() => { setActiveTab(it.k); setSearch(''); setFilterType('All'); }} style={{
                  flex: 1, height: 32, border:'none', borderRadius: 8,
                  background: active ? '#FFF' : 'transparent',
                  color: active ? AS_INK : AS_MUTED,
                  fontFamily:'inherit', fontWeight: active ? 600 : 500,
                  fontSize: 12.5, cursor:'pointer',
                  boxShadow: active ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                }}>{it.label}</button>
              );
            })}
          </div>

          {/* Search + Filter */}
          <div style={{ display:'flex', gap: 8 }}>
            <div style={{
              flex: 1, height: 36, borderRadius: 8,
              border:'1px solid ' + AS_LINE, background:'#FFF',
              display:'flex', alignItems:'center', gap: 6, padding:'0 10px',
            }}>
              <AsIcSearch c={AS_MUTED}/>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search assessment..."
                style={{
                  flex: 1, border:'none', outline:'none', background:'transparent',
                  fontFamily:'inherit', fontSize: 12.5, color: AS_INK,
                }}/>
            </div>
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              style={{
                height: 36, borderRadius: 8,
                border:'1px solid ' + AS_LINE, background:'#FFF', color: AS_BODY,
                fontFamily:'inherit', fontSize: 12.5, padding:'0 8px', cursor:'pointer',
              }}>
              <option value="All">All Types</option>
              <option value="Quiz">Quiz</option>
              <option value="Assignment">Assignment</option>
            </select>
          </div>

          {/* List */}
          {filtered.length === 0 ? (
            <AsEmptyState message="Try adjusting your search or filters to find what you're looking for."/>
          ) : (
            <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
              {filtered.map(item => (
                <AsAssessmentItem key={item.id} item={item} onView={() => {}}/>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// ─── Circle screen (inlined) ──────────────────────────────
// Data adapted from ridho/lnd-presight-demo/src/pages/trainee/circle

const CR_PRIMARY = '#1570EF';
const CR_PRIMARY_SOFT = '#D1E9FF';
const CR_INK = '#252B37';
const CR_BODY = '#414651';
const CR_MUTED = '#717680';
const CR_FAINT = '#A4A7AE';
const CR_LINE = '#E9EAEB';
const CR_LINE2 = '#F5F5F5';
const CR_DANGER = '#D92D20';

const CR_AVATARS = {
  michael: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=80&q=70',
  robert:  'https://images.unsplash.com/photo-1758600587839-56ba05596c69?w=80&q=70',
  group:   'https://images.unsplash.com/photo-1761250246894-ee2314939662?w=80&q=70',
  citra:   'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?w=80&q=70',
  andi:    'https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?w=80&q=70',
};

const CR_CONTACTS = [
  { id:'michael',     name:'Michael Torres',       avatarUrl: CR_AVATARS.michael, isOnline:true,  lastMessage:'Score kamu 88/100 — analisis stakeholder-nya sangat tajam! 🎉', time:'10:30 AM', unreadCount:1 },
  { id:'robert',      name:'Robert Chen',          avatarUrl: CR_AVATARS.robert,  isOnline:false, lastMessage:'Teruslah semangat ya Pri! IDP kamu on-track, proud of you.', time:'9:45 AM' },
  { id:'study-group', name:'Study Group Batch 3',  avatarUrl: CR_AVATARS.group,   isOnline:true, isGroup:true, lastMessage:'Citra: Meet virtual jam 8 malam ya untuk bahas capstone!', time:'9:00 AM', unreadCount:4 },
  { id:'citra',       name:'Citra Lestari',        avatarUrl: CR_AVATARS.citra,   isOnline:true,  lastMessage:'Pri, share notes sesi 3 dong, kemarin aku ketinggalan beberapa poin', time:'8:30 AM' },
  { id:'andi',        name:'Andi Pratama',         avatarUrl: CR_AVATARS.andi,    isOnline:false, lastMessage:'Bagian executive summary capstone project aku assign ke kamu ya', time:'Yesterday', unreadCount:1 },
];

const CR_CHANNELS = [
  { id:'study-group-ch',    displayName:'Study Group — Batch 3',           section:'project', memberCount: 8,  imageUrl:'https://images.unsplash.com/photo-1765020553552-6286dde23660?w=80&q=70', unreadCount:6 },
  { id:'capstone-project',  displayName:'Capstone Project — Team A',       section:'project', memberCount: 5,  imageUrl:'https://images.unsplash.com/photo-1758876203342-fc14c0bba67c?w=80&q=70', unreadCount:2 },
  { id:'leadership-batch3', displayName:'Leadership Development — Batch 3', section:'course', memberCount: 24, imageUrl:'https://images.unsplash.com/photo-1765438863789-1396d28db24b?w=80&q=70', unreadCount:3 },
  { id:'digital-bootcamp',  displayName:'Digital Skills Bootcamp — Feb 2026', section:'course', memberCount: 42, imageUrl:'https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?w=80&q=70' },
];

function CrIcChat({ c = CR_PRIMARY, s = 20 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M21 12a8 8 0 0 1-12.36 6.74L3 20l1.26-5.64A8 8 0 1 1 21 12Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}
function CrIcSearch({ c = CR_MUTED }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke={c} strokeWidth="1.6"/>
      <path d="m20 20-3.5-3.5" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function CrIcHash({ c = CR_MUTED, s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function CrIcEdit({ c = '#FFF' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}

function CrAvatar({ src, name, size = 44, online }) {
  return (
    <div style={{ position:'relative', width: size, height: size, flexShrink: 0 }}>
      <img src={src} alt={name}
        style={{
          width:'100%', height:'100%', borderRadius:'50%',
          objectFit:'cover', display:'block',
          background: CR_LINE2,
        }}/>
      {online ? (
        <span style={{
          position:'absolute', right: 0, bottom: 0,
          width: 11, height: 11, borderRadius:'50%',
          background:'#12B76A', border:'2px solid #FFF',
        }}/>
      ) : null}
    </div>
  );
}

function CrUnreadDot({ count }) {
  return (
    <span style={{
      minWidth: 18, height: 18, padding:'0 5px', borderRadius: 999,
      background: CR_PRIMARY, color:'#FFF',
      fontSize: 10.5, fontWeight: 600,
      display:'inline-flex', alignItems:'center', justifyContent:'center',
      fontVariantNumeric:'tabular-nums',
    }}>{count}</span>
  );
}

function CrContactRow({ c, onOpen }) {
  return (
    <button onClick={() => onOpen(c.id)} style={{
      width:'100%', background:'transparent', border:'none', cursor:'pointer',
      padding:'10px 4px', textAlign:'left',
      display:'flex', alignItems:'center', gap: 12,
      borderBottom:'1px solid ' + CR_LINE2,
      fontFamily:'inherit',
    }}>
      <CrAvatar src={c.avatarUrl} name={c.name} online={c.isOnline}/>
      <div style={{ flex: 1, minWidth: 0, display:'flex', flexDirection:'column', gap: 2 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 8 }}>
          <span style={{
            fontSize: 13.5, fontWeight: 600, color: CR_INK,
            letterSpacing:'-0.005em',
            overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
          }}>{c.name}</span>
          <span style={{ fontSize: 10.5, color: CR_FAINT, flexShrink: 0, fontVariantNumeric:'tabular-nums' }}>{c.time}</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 8 }}>
          <span style={{
            flex: 1, fontSize: 12, color: c.unreadCount ? CR_BODY : CR_MUTED,
            fontWeight: c.unreadCount ? 500 : 400,
            overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
          }}>{c.lastMessage}</span>
          {c.unreadCount ? <CrUnreadDot count={c.unreadCount}/> : null}
        </div>
      </div>
    </button>
  );
}

function CrChannelRow({ ch, onOpen }) {
  return (
    <button onClick={() => onOpen(ch.id)} style={{
      width:'100%', background:'transparent', border:'none', cursor:'pointer',
      padding:'10px 4px', textAlign:'left',
      display:'flex', alignItems:'center', gap: 12,
      borderBottom:'1px solid ' + CR_LINE2,
      fontFamily:'inherit',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 10, overflow:'hidden',
        background: CR_LINE2, flexShrink: 0, position:'relative',
      }}>
        <img src={ch.imageUrl} alt={ch.displayName}
          style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
        <span style={{
          position:'absolute', left: 4, bottom: 4,
          width: 16, height: 16, borderRadius: 4,
          background:'rgba(0,0,0,0.55)',
          display:'inline-flex', alignItems:'center', justifyContent:'center',
        }}>
          <CrIcHash c="#FFF" s={10}/>
        </span>
      </div>
      <div style={{ flex: 1, minWidth: 0, display:'flex', flexDirection:'column', gap: 2 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 8 }}>
          <span style={{
            fontSize: 13.5, fontWeight: 600, color: CR_INK,
            letterSpacing:'-0.005em',
            overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
          }}>{ch.displayName}</span>
          {ch.unreadCount ? <CrUnreadDot count={ch.unreadCount}/> : null}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap: 6, fontSize: 11, color: CR_MUTED }}>
          <span style={{
            padding:'1px 6px', borderRadius: 6,
            background: ch.section === 'course' ? '#EFF8FF' : '#F4F3FF',
            color: ch.section === 'course' ? '#175CD3' : '#5925DC',
            fontWeight: 600, fontSize: 10,
          }}>{ch.section.toUpperCase()}</span>
          <span>{ch.memberCount} members</span>
        </div>
      </div>
    </button>
  );
}

function CircleScreen() {
  const [tab, setTab] = React.useState('dm');
  const [search, setSearch] = React.useState('');

  const dms = CR_CONTACTS.filter(c =>
    !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.lastMessage.toLowerCase().includes(search.toLowerCase())
  );
  const channels = CR_CHANNELS.filter(c =>
    !search || c.displayName.toLowerCase().includes(search.toLowerCase())
  );

  const totalUnreadDM = CR_CONTACTS.reduce((s, c) => s + (c.unreadCount || 0), 0);
  const totalUnreadCh = CR_CHANNELS.reduce((s, c) => s + (c.unreadCount || 0), 0);

  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom:0,
      background:'#F7F8FA',
      paddingTop: 60, paddingBottom: 120,
      overflowY:'auto',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
    }}>
      <div style={{ padding:'0 18px', display:'flex', flexDirection:'column', gap: 14 }}>

        {/* Page title */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 10, marginTop: 4 }}>
          <div style={{ display:'flex', alignItems:'flex-start', gap: 10 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10, background:'#FFF',
              border:'1px solid ' + CR_LINE,
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <CrIcChat c={CR_PRIMARY}/>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
              <div style={{ fontSize: 12.5, color: CR_FAINT, lineHeight:'16px' }}>Circle</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: CR_INK, lineHeight:'24px', letterSpacing:'-0.015em' }}>
                <span style={{ color: CR_MUTED }}>Stay </span>
                <span style={{ color: CR_PRIMARY }}>connected.</span>
              </div>
            </div>
          </div>
          <button style={{
            width: 40, height: 40, borderRadius: 10,
            background: CR_PRIMARY, color:'#FFF', border:'none', cursor:'pointer',
            display:'inline-flex', alignItems:'center', justifyContent:'center',
            boxShadow:'0 2px 6px rgba(21,112,239,0.30)',
          }}>
            <CrIcEdit c="#FFF"/>
          </button>
        </div>

        {/* Search */}
        <div style={{
          height: 38, borderRadius: 10,
          border:'1px solid ' + CR_LINE, background:'#FFF',
          display:'flex', alignItems:'center', gap: 8, padding:'0 12px',
        }}>
          <CrIcSearch c={CR_MUTED}/>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search messages..."
            style={{
              flex: 1, border:'none', outline:'none', background:'transparent',
              fontFamily:'inherit', fontSize: 13, color: CR_INK,
            }}/>
        </div>

        {/* Tabs */}
        <div style={{
          display:'flex', background:'rgba(21,112,239,0.06)', borderRadius: 10, padding: 3,
          border:'1px solid rgba(21,112,239,0.10)',
        }}>
          {[
            { k:'dm',      label:'Direct',   unread: totalUnreadDM },
            { k:'channel', label:'Channels', unread: totalUnreadCh },
          ].map(it => {
            const active = it.k === tab;
            return (
              <button key={it.k} onClick={() => setTab(it.k)} style={{
                flex: 1, height: 32, border:'none', borderRadius: 8,
                background: active ? '#FFF' : 'transparent',
                color: active ? CR_INK : CR_MUTED,
                fontFamily:'inherit', fontWeight: active ? 600 : 500,
                fontSize: 12.5, cursor:'pointer',
                display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
                boxShadow: active ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
              }}>
                <span>{it.label}</span>
                {it.unread > 0 ? (
                  <span style={{
                    minWidth: 16, height: 16, padding:'0 5px', borderRadius: 999,
                    background: active ? CR_PRIMARY : CR_FAINT, color:'#FFF',
                    fontSize: 10, fontWeight: 600,
                    display:'inline-flex', alignItems:'center', justifyContent:'center',
                  }}>{it.unread}</span>
                ) : null}
              </button>
            );
          })}
        </div>

        {/* List */}
        <div style={{
          background:'#FFF', border:'1px solid ' + CR_LINE, borderRadius: 12,
          padding:'4px 12px',
        }}>
          {tab === 'dm' ? (
            dms.length === 0
              ? <div style={{ padding:'28px 0', textAlign:'center', fontSize: 13, color: CR_MUTED }}>No conversations found.</div>
              : dms.map(c => <CrContactRow key={c.id} c={c} onOpen={() => {}}/>)
          ) : (
            channels.length === 0
              ? <div style={{ padding:'28px 0', textAlign:'center', fontSize: 13, color: CR_MUTED }}>No channels found.</div>
              : channels.map(ch => <CrChannelRow key={ch.id} ch={ch} onOpen={() => {}}/>)
          )}
        </div>

      </div>
    </div>
  );
}

// ─── Profile screen (inlined) ─────────────────────────────

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
          }}>PS</div>
          <div style={{ textAlign:'center', display:'flex', flexDirection:'column', gap: 2 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: PR_INK, letterSpacing:'-0.015em' }}>Priya Sharma</div>
            <div style={{ fontSize: 12.5, color: PR_MUTED }}>priya.sharma@cohort.io</div>
          </div>
          <div style={{ display:'flex', gap: 6, marginTop: 4 }}>
            <span style={{
              padding:'3px 10px', borderRadius: 999,
              background: PR_PRIMARY_SOFT, color: PR_PRIMARY,
              fontSize: 10.5, fontWeight: 600,
            }}>Marketing</span>
            <span style={{
              padding:'3px 10px', borderRadius: 999,
              background:'#F5F5F5', color: PR_BODY,
              fontSize: 10.5, fontWeight: 600,
            }}>Batch 3 · Leadership Dev</span>
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

// ─── Line Manager screens (inlined) ───────────────────────
// Data adapted from ridho/lnd-presight-demo/src/pages/line-manager

const LM_PRIMARY = '#1056d9';
const LM_PRIMARY_SOFT = '#e8effc';
const LM_INK = '#252B37';
const LM_BODY = '#414651';
const LM_MUTED = '#717680';
const LM_FAINT = '#A4A7AE';
const LM_LINE = '#E9EAEB';
const LM_LINE2 = '#F5F5F5';
const LM_SUCCESS = '#039855';
const LM_SUCCESS_SOFT = '#ECFDF3';
const LM_WARN = '#DC6803';
const LM_WARN_SOFT = '#FFFAEB';
const LM_DANGER = '#D92D20';
const LM_DANGER_SOFT = '#FEF3F2';

const LM_PROFILE = {
  name: 'Kaushal Yainne',
  role: 'Line Manager',
  department: 'Marketing - Digital Marketing',
  level: 'Senior Manager',
  teamSize: 8,
  avatarUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=70',
};

const LM_METRICS = [
  { key:'completion', title:'Completion Rate',      value:'87%', trend:'+5% vs last month', trendPositive:true  },
  { key:'avg-score',  title:'Avg Score',            value:'84%', trend:'+3% vs last month', trendPositive:true  },
  { key:'active',     title:'Member Active Course', value:'12',  trend:'+2 this week',      trendPositive:true  },
];

const LM_TEAM = [
  { id:'1', name:'Priya Sharma', role:'Junior Staff', avatarUrl:'https://images.unsplash.com/photo-1667035533110-7964092f44a6?w=200&q=70', progress:78, status:'On Track', coursesCompleted:8, totalCourses:12 },
  { id:'2', name:'James Chen',   role:'Associate',    avatarUrl:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70', progress:45, status:'At Risk',  coursesCompleted:3, totalCourses:8  },
  { id:'3', name:'Aisha Patel',  role:'Junior Staff', avatarUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70', progress:92, status:'On Track', coursesCompleted:9, totalCourses:10 },
  { id:'4', name:'David Kim',    role:'Associate',    avatarUrl:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=70', progress:30, status:'At Risk',  coursesCompleted:2, totalCourses:9  },
];

const LM_ASSIGNED = [
  { id:'1', title:'Digital Marketing Essentials', trainee:'Priya Sharma', traineeAvatarUrl:'https://images.unsplash.com/photo-1667035533110-7964092f44a6?w=200&q=70', progress:0,   status:'not-started', dueDate:'Apr 15, 2026' },
  { id:'2', title:'Content Marketing Strategy',   trainee:'James Chen',   traineeAvatarUrl:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70', progress:0,   status:'not-started', dueDate:'Apr 20, 2026' },
];
const LM_COMPLETED = [
  { id:'3', title:'Social Media Marketing', trainee:'Aisha Patel', traineeAvatarUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70', progress:100, status:'completed', dueDate:'Mar 10, 2026' },
];
const LM_INPROGRESS = [
  { id:'4', title:'Marketing Analytics & Performance', trainee:'Priya Sharma', traineeAvatarUrl:'https://images.unsplash.com/photo-1667035533110-7964092f44a6?w=200&q=70', progress:78, status:'in-progress', dueDate:'Apr 10, 2026' },
  { id:'5', title:'SEO Optimization',                  trainee:'Aisha Patel',  traineeAvatarUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70', progress:45, status:'in-progress', dueDate:'Apr 5, 2026'  },
  { id:'6', title:'Paid Advertising',                  trainee:'James Chen',   traineeAvatarUrl:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70', progress:62, status:'in-progress', dueDate:'Mar 25, 2026' },
];

const LM_MONTHLY_TREND = [
  { month:'Oct', score: 78 },
  { month:'Nov', score: 80 },
  { month:'Dec', score: 79 },
  { month:'Jan', score: 82 },
  { month:'Feb', score: 81 },
  { month:'Mar', score: 84 },
];

// ─── LM Icons ───────────────────────────────────────────────

function LmIcUsers({ c = LM_PRIMARY }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
function LmIcHome({ c = LM_PRIMARY }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    </svg>
  );
}
function LmIcChart({ c = LM_PRIMARY }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/>
      <path d="m19 9-5 5-4-4-3 3"/>
    </svg>
  );
}
function LmIcCircle({ c = LM_PRIMARY }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
    </svg>
  );
}
function LmIcBell({ c = LM_BODY }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M10 18a2 2 0 0 0 4 0" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function LmIcTrendUp({ c = LM_SUCCESS }) {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M3 9L9 3M9 3H4.5M9 3v4.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function LmIcQa1({ c }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    </svg>
  );
}
function LmIcQa2({ c }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
    </svg>
  );
}
function LmIcQa3({ c }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>
    </svg>
  );
}
function LmIcQa4({ c }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>
    </svg>
  );
}
function LmIcChev({ c = LM_FAINT }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="m9 6 6 6-6 6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── LM Metric card ─────────────────────────────────────────

function LmMetricCard({ m }) {
  return (
    <div style={{
      background:'#FFF', border:'1px solid ' + LM_LINE, borderRadius: 12,
      padding: 12, display:'flex', flexDirection:'column', gap: 4,
    }}>
      <div style={{ fontSize: 11.5, color: LM_MUTED, fontWeight: 500 }}>{m.title}</div>
      <div style={{ fontSize: 22, fontWeight: 600, color: LM_INK, letterSpacing:'-0.02em', lineHeight: 1.05, fontVariantNumeric:'tabular-nums' }}>{m.value}</div>
      <div style={{
        display:'inline-flex', alignItems:'center', gap: 3,
        fontSize: 10.5, color: m.trendPositive ? LM_SUCCESS : LM_DANGER,
        fontFamily:'"JetBrains Mono", ui-monospace',
      }}>
        <LmIcTrendUp c={m.trendPositive ? LM_SUCCESS : LM_DANGER}/>
        <span>{m.trend}</span>
      </div>
    </div>
  );
}

// ─── LM Profile Header ──────────────────────────────────────

function LmProfileHeader({ onTapProfile }) {
  return (
    <button onClick={onTapProfile} style={{
      width:'100%', background:'#FFF', border:'1px solid ' + LM_LINE, borderRadius: 14,
      padding: 14, cursor:'pointer', fontFamily:'inherit', textAlign:'left',
      display:'flex', alignItems:'center', gap: 12,
    }}>
      <img src={LM_PROFILE.avatarUrl} alt={LM_PROFILE.name}
        style={{
          width: 52, height: 52, borderRadius: '50%', objectFit:'cover',
          flexShrink: 0, background: LM_LINE2,
        }}/>
      <div style={{ flex: 1, minWidth: 0, display:'flex', flexDirection:'column', gap: 2 }}>
        <div style={{ fontSize: 15.5, fontWeight: 600, color: LM_INK, letterSpacing:'-0.015em' }}>{LM_PROFILE.name}</div>
        <div style={{ fontSize: 11.5, color: LM_MUTED, lineHeight:'15px' }}>{LM_PROFILE.department}</div>
        <div style={{ display:'flex', gap: 6, marginTop: 4, flexWrap:'wrap' }}>
          <span style={{
            padding:'2px 8px', borderRadius: 999,
            background: LM_PRIMARY_SOFT, color: LM_PRIMARY,
            fontSize: 10, fontWeight: 600,
          }}>{LM_PROFILE.level}</span>
          <span style={{
            padding:'2px 8px', borderRadius: 999,
            background: LM_LINE2, color: LM_BODY,
            fontSize: 10, fontWeight: 600,
          }}>Team of {LM_PROFILE.teamSize}</span>
        </div>
      </div>
      <LmIcChev c={LM_FAINT}/>
    </button>
  );
}

// ─── LM Quick Actions ───────────────────────────────────────

function LmQuickActions({ onAction }) {
  const items = [
    { id:'team-progress', label:'Team Progress',  bg:'#F5F3FF', bd:'#D8D4FC', fg:'#7C3AED', svg: LmIcQa1 },
    { id:'assign',        label:'Assign Courses', bg:'#EFF8FF', bd:'#B2DDFF', fg:'#1570EF', svg: LmIcQa2 },
    { id:'schedule',      label:'Team Schedule',  bg:'#ECFDF3', bd:'#A6F4C5', fg:'#059669', svg: LmIcQa3 },
    { id:'reports',       label:'Reports',        bg:'#FFF7ED', bd:'#FDBA74', fg:'#EA580C', svg: LmIcQa4 },
  ];
  return (
    <div style={{
      background:'#FFF', border:'1px solid ' + LM_LINE, borderRadius: 12, padding: 14,
      display:'flex', flexDirection:'column', gap: 12,
    }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: LM_INK, letterSpacing:'-0.01em' }}>Quick Actions</div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap: 10 }}>
        {items.map(qa => {
          const Icon = qa.svg;
          return (
            <button key={qa.id} onClick={() => onAction && onAction(qa.id)} style={{
              display:'flex', flexDirection:'column', alignItems:'flex-start', gap: 10,
              padding: 12, borderRadius: 10, border:'1px solid ' + LM_LINE2,
              background:'#FFF', cursor:'pointer', textAlign:'left', fontFamily:'inherit',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: qa.bg, border:'1px solid ' + qa.bd,
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <Icon c={qa.fg}/>
              </div>
              <span style={{ fontSize: 12.5, color: LM_INK, fontWeight: 500 }}>{qa.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── LM Course Overview ─────────────────────────────────────

function LmCourseRow({ c }) {
  const statusBadge = {
    'not-started': { bg:'#F5F5F5',          fg: LM_BODY,    label:'Not started' },
    'in-progress': { bg: LM_PRIMARY_SOFT,   fg: LM_PRIMARY, label:'In progress' },
    'completed':   { bg: LM_SUCCESS_SOFT,   fg: LM_SUCCESS, label:'Completed'   },
  }[c.status] || { bg:'#F5F5F5', fg: LM_BODY, label: c.status };

  return (
    <div style={{
      padding:'10px 0',
      borderBottom:'1px solid ' + LM_LINE2,
      display:'flex', alignItems:'center', gap: 10,
    }}>
      <img src={c.traineeAvatarUrl} alt={c.trainee}
        style={{
          width: 34, height: 34, borderRadius:'50%', objectFit:'cover',
          flexShrink: 0, background: LM_LINE2,
        }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 12.5, fontWeight: 600, color: LM_INK, letterSpacing:'-0.005em',
          overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
        }}>{c.title}</div>
        <div style={{ fontSize: 11, color: LM_MUTED }}>{c.trainee} · Due {c.dueDate}</div>
        <div style={{ height: 4, borderRadius: 999, background: LM_LINE2, overflow:'hidden', marginTop: 5 }}>
          <div style={{
            width: c.progress + '%', height:'100%', borderRadius: 999,
            background: c.status === 'completed' ? LM_SUCCESS : LM_PRIMARY,
          }}/>
        </div>
      </div>
      <span style={{
        flexShrink: 0,
        padding:'2px 8px', borderRadius: 999,
        background: statusBadge.bg, color: statusBadge.fg,
        fontSize: 10, fontWeight: 600,
      }}>{statusBadge.label}</span>
    </div>
  );
}

function LmCourseOverview() {
  const [tab, setTab] = React.useState('inprogress');
  const list = tab === 'assigned' ? LM_ASSIGNED
             : tab === 'completed' ? LM_COMPLETED
             : LM_INPROGRESS;
  const counts = {
    inprogress: LM_INPROGRESS.length,
    assigned:   LM_ASSIGNED.length,
    completed:  LM_COMPLETED.length,
  };
  return (
    <div style={{
      background:'#FFF', border:'1px solid ' + LM_LINE, borderRadius: 12, padding: 14,
      display:'flex', flexDirection:'column', gap: 10,
    }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: LM_INK, letterSpacing:'-0.01em' }}>Course Overview</div>
        <span style={{ fontSize: 11.5, color: LM_PRIMARY, fontWeight: 500 }}>View all →</span>
      </div>

      {/* tabs */}
      <div style={{
        display:'flex', background:'rgba(16,86,217,0.06)', borderRadius: 10, padding: 3,
        border:'1px solid rgba(16,86,217,0.10)',
      }}>
        {[
          { k:'inprogress', label:'In Progress', n: counts.inprogress },
          { k:'assigned',   label:'Assigned',    n: counts.assigned },
          { k:'completed',  label:'Completed',   n: counts.completed },
        ].map(it => {
          const active = it.k === tab;
          return (
            <button key={it.k} onClick={() => setTab(it.k)} style={{
              flex: 1, height: 30, border:'none', borderRadius: 8,
              background: active ? '#FFF' : 'transparent',
              color: active ? LM_INK : LM_MUTED,
              fontFamily:'inherit', fontWeight: active ? 600 : 500,
              fontSize: 12, cursor:'pointer',
              display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 5,
              boxShadow: active ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
            }}>
              <span>{it.label}</span>
              <span style={{
                fontSize: 10, fontWeight: 600,
                padding:'0 5px', borderRadius: 999,
                background: active ? LM_PRIMARY_SOFT : LM_LINE2,
                color: active ? LM_PRIMARY : LM_MUTED,
              }}>{it.n}</span>
            </button>
          );
        })}
      </div>

      {/* list */}
      <div>
        {list.length === 0 ? (
          <div style={{ padding:'20px 0', textAlign:'center', fontSize: 12.5, color: LM_MUTED }}>
            No courses in this category.
          </div>
        ) : (
          list.map(c => <LmCourseRow key={c.id} c={c}/>)
        )}
      </div>
    </div>
  );
}

// ─── LM Dashboard Screen ────────────────────────────────────

function LmDashboardScreen({ onOpenProfile }) {
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom:0,
      background:'linear-gradient(2deg, #EEF4FE 58.94%, #FFF 105.69%)',
      paddingTop: 60, paddingBottom: 120,
      overflowY:'auto',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
    }}>
      <div style={{ padding:'0 18px', display:'flex', flexDirection:'column', gap: 14 }}>

        {/* Greeting bar */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 10 }}>
          <button onClick={onOpenProfile} style={{
            flex: 1, minWidth: 0, display:'flex', alignItems:'center', gap: 12,
            background:'transparent', border:'none', padding: 0, cursor:'pointer',
            textAlign:'left', fontFamily:'inherit',
          }}>
            <img src={LM_PROFILE.avatarUrl} alt={LM_PROFILE.name}
              style={{
                width: 44, height: 44, borderRadius:'50%', objectFit:'cover',
                flexShrink: 0, background: LM_LINE2,
              }}/>
            <div style={{ display:'flex', flexDirection:'column', gap: 1, minWidth: 0 }}>
              <div style={{ fontSize: 17, fontWeight: 600, color: LM_INK, letterSpacing:'-0.015em' }}>{LM_PROFILE.name.split(' ')[0]}</div>
            </div>
          </button>
          <button style={{
            width:36, height:36, borderRadius:10, border:'1px solid ' + LM_LINE,
            background:'#FFF', cursor:'pointer', flexShrink: 0,
            display:'flex', alignItems:'center', justifyContent:'center', position:'relative',
          }}>
            <LmIcBell c={LM_BODY}/>
            <span style={{ position:'absolute', top:8, right:9, width:6, height:6, borderRadius:3, background: LM_DANGER }}/>
          </button>
        </div>

        {/* General Metric */}
        <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: LM_BODY, padding:'0 2px' }}>General Metric</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 8 }}>
            {LM_METRICS.map(m => <LmMetricCard key={m.key} m={m}/>)}
          </div>
        </div>

        {/* Quick Actions */}
        <LmQuickActions onAction={() => {}}/>

        {/* Course Overview */}
        <LmCourseOverview/>

      </div>
    </div>
  );
}

// ─── LM My Team Screen ──────────────────────────────────────

function LmTeamMemberRow({ m }) {
  const statusCfg = {
    'On Track':  { bg: LM_SUCCESS_SOFT, fg: LM_SUCCESS },
    'At Risk':   { bg: LM_DANGER_SOFT,  fg: LM_DANGER  },
    'Behind':    { bg: LM_WARN_SOFT,    fg: LM_WARN    },
  }[m.status] || { bg: LM_LINE2, fg: LM_BODY };
  return (
    <div style={{
      background:'#FFF', border:'1px solid ' + LM_LINE, borderRadius: 12, padding: 12,
      display:'flex', alignItems:'center', gap: 12,
    }}>
      <img src={m.avatarUrl} alt={m.name}
        style={{
          width: 44, height: 44, borderRadius:'50%', objectFit:'cover',
          flexShrink: 0, background: LM_LINE2,
        }}/>
      <div style={{ flex: 1, minWidth: 0, display:'flex', flexDirection:'column', gap: 4 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 8 }}>
          <span style={{ fontSize: 13.5, fontWeight: 600, color: LM_INK, letterSpacing:'-0.005em', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{m.name}</span>
          <span style={{
            flexShrink: 0,
            padding:'2px 8px', borderRadius: 999,
            background: statusCfg.bg, color: statusCfg.fg,
            fontSize: 10, fontWeight: 600,
          }}>{m.status}</span>
        </div>
        <div style={{ fontSize: 11.5, color: LM_MUTED }}>{m.role} · {m.coursesCompleted}/{m.totalCourses} courses</div>
        <div style={{ height: 4, borderRadius: 999, background: LM_LINE2, overflow:'hidden' }}>
          <div style={{
            width: m.progress + '%', height:'100%', borderRadius: 999,
            background: m.status === 'At Risk' ? LM_DANGER : LM_PRIMARY,
          }}/>
        </div>
      </div>
    </div>
  );
}

function LmTeamScreen() {
  const [filter, setFilter] = React.useState('all');
  const list = LM_TEAM.filter(m =>
    filter === 'all' ? true :
    filter === 'risk' ? m.status === 'At Risk' :
    m.status === 'On Track'
  );
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom:0,
      background:'#F7F8FA',
      paddingTop: 60, paddingBottom: 120,
      overflowY:'auto',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
    }}>
      <div style={{ padding:'0 18px', display:'flex', flexDirection:'column', gap: 14 }}>
        <div style={{ display:'flex', flexDirection:'column', gap: 2, marginTop: 4 }}>
          <div style={{ fontSize: 12.5, color: LM_FAINT }}>My Team</div>
          <div style={{ fontSize: 20, fontWeight: 600, color: LM_INK, letterSpacing:'-0.015em' }}>
            <span style={{ color: LM_MUTED }}>Manage your </span>
            <span style={{ color: LM_PRIMARY }}>team members.</span>
          </div>
        </div>

        {/* filter tabs */}
        <div style={{
          display:'flex', background:'rgba(16,86,217,0.06)', borderRadius: 10, padding: 3,
          border:'1px solid rgba(16,86,217,0.10)',
        }}>
          {[
            { k:'all',  label:'All',      n: LM_TEAM.length },
            { k:'on',   label:'On Track', n: LM_TEAM.filter(x=>x.status==='On Track').length },
            { k:'risk', label:'At Risk',  n: LM_TEAM.filter(x=>x.status==='At Risk').length },
          ].map(it => {
            const active = it.k === filter;
            return (
              <button key={it.k} onClick={() => setFilter(it.k)} style={{
                flex: 1, height: 32, border:'none', borderRadius: 8,
                background: active ? '#FFF' : 'transparent',
                color: active ? LM_INK : LM_MUTED,
                fontFamily:'inherit', fontWeight: active ? 600 : 500,
                fontSize: 12.5, cursor:'pointer',
                display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 5,
                boxShadow: active ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
              }}>
                <span>{it.label}</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: LM_FAINT }}>({it.n})</span>
              </button>
            );
          })}
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
          {list.map(m => <LmTeamMemberRow key={m.id} m={m}/>)}
        </div>
      </div>
    </div>
  );
}

// ─── LM Performance Screen ──────────────────────────────────

function LmTrendChart() {
  const data = LM_MONTHLY_TREND;
  const W = 320, H = 130, padL = 8, padR = 8, padT = 8, padB = 22;
  const min = 70, max = 90;
  const x = i => padL + (i / (data.length - 1)) * (W - padL - padR);
  const y = v => padT + (1 - (v - min) / (max - min)) * (H - padT - padB);
  const pts = data.map((d, i) => [x(i), y(d.score)]);
  const line = pts.map((p,i) => `${i?'L':'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L ${pts.at(-1)[0].toFixed(1)} ${H-padB} L ${pts[0][0].toFixed(1)} ${H-padB} Z`;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display:'block' }}>
      <defs>
        <linearGradient id="lmg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={LM_PRIMARY} stopOpacity="0.18"/>
          <stop offset="100%" stopColor={LM_PRIMARY} stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[0,1,2,3].map(i => {
        const yy = padT + (i/3) * (H - padT - padB);
        return <line key={i} x1={padL} x2={W-padR} y1={yy} y2={yy} stroke={LM_LINE2} strokeWidth="1"/>;
      })}
      <path d={area} fill="url(#lmg)"/>
      <path d={line} fill="none" stroke={LM_PRIMARY} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      {pts.map(([px,py], i) => (
        <circle key={i} cx={px} cy={py} r={i === pts.length - 1 ? 3.5 : 2} fill="#FFF" stroke={LM_PRIMARY} strokeWidth={i === pts.length - 1 ? 2 : 1.25}/>
      ))}
      {data.map((d, i) => (
        <text key={d.month} x={x(i)} y={H - 6} fill={LM_FAINT} fontSize="10" fontFamily='"JetBrains Mono", ui-monospace' textAnchor="middle">{d.month}</text>
      ))}
    </svg>
  );
}

function LmPerformanceScreen() {
  const top = [...LM_TEAM].sort((a,b) => b.progress - a.progress).slice(0, 3);
  const atRisk = LM_TEAM.filter(m => m.status === 'At Risk');
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom:0,
      background:'#F7F8FA',
      paddingTop: 60, paddingBottom: 120,
      overflowY:'auto',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
    }}>
      <div style={{ padding:'0 18px', display:'flex', flexDirection:'column', gap: 14 }}>
        <div style={{ display:'flex', flexDirection:'column', gap: 2, marginTop: 4 }}>
          <div style={{ fontSize: 12.5, color: LM_FAINT }}>Performance</div>
          <div style={{ fontSize: 20, fontWeight: 600, color: LM_INK, letterSpacing:'-0.015em' }}>
            <span style={{ color: LM_MUTED }}>Team </span>
            <span style={{ color: LM_PRIMARY }}>performance trend.</span>
          </div>
        </div>

        {/* KPI strip */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap: 10 }}>
          {LM_METRICS.slice(0,2).map(m => <LmMetricCard key={m.key} m={m}/>)}
        </div>

        {/* Chart */}
        <div style={{
          background:'#FFF', border:'1px solid ' + LM_LINE, borderRadius: 12, padding: 14,
          display:'flex', flexDirection:'column', gap: 8,
        }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: LM_INK, letterSpacing:'-0.01em' }}>Monthly Performance Trend</div>
              <div style={{ fontSize: 11.5, color: LM_MUTED, marginTop: 2 }}>Avg score · last 6 months</div>
            </div>
            <span style={{
              display:'inline-flex', alignItems:'center', gap: 3,
              padding:'3px 8px', borderRadius: 999,
              background: LM_SUCCESS_SOFT, color: LM_SUCCESS,
              fontSize: 11, fontWeight: 600, fontVariantNumeric:'tabular-nums',
            }}>
              <LmIcTrendUp c={LM_SUCCESS}/>
              <span>+6 pts</span>
            </span>
          </div>
          <LmTrendChart/>
        </div>

        {/* Top performers */}
        <div style={{
          background:'#FFF', border:'1px solid ' + LM_LINE, borderRadius: 12, padding: 14,
          display:'flex', flexDirection:'column', gap: 10,
        }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: LM_INK, letterSpacing:'-0.01em' }}>Top Performers</div>
          <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
            {top.map((m, i) => (
              <div key={m.id} style={{ display:'flex', alignItems:'center', gap: 10 }}>
                <span style={{
                  width: 22, height: 22, borderRadius:'50%',
                  background: i === 0 ? '#FFFAEB' : LM_LINE2,
                  color: i === 0 ? '#B54708' : LM_BODY,
                  fontSize: 11, fontWeight: 700,
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                  flexShrink: 0,
                }}>{i+1}</span>
                <img src={m.avatarUrl} alt={m.name}
                  style={{ width: 32, height: 32, borderRadius:'50%', objectFit:'cover', background: LM_LINE2 }}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: LM_INK, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{m.name}</div>
                  <div style={{ fontSize: 11, color: LM_MUTED }}>{m.role} · {m.coursesCompleted}/{m.totalCourses} courses</div>
                </div>
                <span style={{ fontSize: 13, fontWeight: 600, color: LM_PRIMARY, fontVariantNumeric:'tabular-nums' }}>{m.progress}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Members needing attention */}
        <div style={{
          background:'#FFF', border:'1px solid ' + LM_LINE, borderRadius: 12, padding: 14,
          display:'flex', flexDirection:'column', gap: 10,
        }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: LM_INK, letterSpacing:'-0.01em' }}>Needs Attention</div>
            <span style={{ fontSize: 11, fontWeight: 600, color: LM_DANGER }}>{atRisk.length} at risk</span>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
            {atRisk.length === 0
              ? <div style={{ padding:'10px 0', fontSize: 12.5, color: LM_MUTED, textAlign:'center' }}>Nobody at risk this week. 🎉</div>
              : atRisk.map(m => (
                  <div key={m.id} style={{ display:'flex', alignItems:'center', gap: 10 }}>
                    <img src={m.avatarUrl} alt={m.name}
                      style={{ width: 32, height: 32, borderRadius:'50%', objectFit:'cover', background: LM_LINE2 }}/>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12.5, fontWeight: 600, color: LM_INK }}>{m.name}</div>
                      <div style={{ fontSize: 11, color: LM_MUTED }}>{m.progress}% · {m.coursesCompleted}/{m.totalCourses}</div>
                    </div>
                    <button style={{
                      height: 28, padding:'0 10px', borderRadius: 8,
                      background: LM_PRIMARY_SOFT, color: LM_PRIMARY,
                      border:'none', cursor:'pointer',
                      fontFamily:'inherit', fontSize: 11.5, fontWeight: 600,
                    }}>Reach out</button>
                  </div>
                ))
            }
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── LM Bottom tab bar ──────────────────────────────────────

function LmTabBar({ tab, setTab }) {
  const items = [
    { k:'Dashboard', icon: LmIcHome },
    { k:'My Team',   icon: LmIcUsers },
    { k:'Circle',    icon: LmIcCircle },
    { k:'Performance', icon: LmIcChart },
  ];
  return (
    <div style={{
      position:'absolute', left: 16, right: 16, bottom: 22, zIndex: 30,
      background:'rgba(255,255,255,0.96)',
      backdropFilter:'blur(20px) saturate(180%)',
      WebkitBackdropFilter:'blur(20px) saturate(180%)',
      border:'1px solid ' + LM_LINE,
      borderRadius: 22,
      boxShadow:'0 8px 24px rgba(16,24,40,0.10), 0 2px 6px rgba(16,24,40,0.06)',
      padding:'8px 6px',
    }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
        {items.map(it => {
          const active = it.k === tab;
          const Icon = it.icon;
          return (
            <button key={it.k} onClick={() => setTab(it.k)} style={{
              display:'flex', flexDirection:'column', alignItems:'center', gap: 3,
              background:'transparent', border:'none', cursor:'pointer',
              padding:'4px 0',
              color: active ? LM_PRIMARY : LM_MUTED,
              fontFamily:'inherit',
            }}>
              <Icon c={active ? LM_PRIMARY : LM_MUTED}/>
              <span style={{ fontSize:10.5, fontWeight: active ? 600 : 450, letterSpacing:'-0.005em' }}>{it.k}</span>
              <span style={{
                width: active ? 14 : 0, height: 2, borderRadius: 1, background: LM_PRIMARY,
                transition:'width .2s', marginTop: -1,
              }}/>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── LM Profile (re-use trainee ProfileScreen with custom data) ─

function LmProfileScreen({ onBack, onLogout }) {
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom:0,
      background:'#F7F8FA',
      paddingTop: 60, paddingBottom: 40,
      overflowY:'auto',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
    }}>
      <div style={{ padding:'0 18px', display:'flex', flexDirection:'column', gap: 18 }}>
        <div style={{ display:'flex', alignItems:'center', gap: 10, marginTop: 4 }}>
          <button onClick={onBack} style={{
            width: 36, height: 36, borderRadius: 10,
            background:'#FFF', border:'1px solid ' + LM_LINE, cursor:'pointer',
            display:'inline-flex', alignItems:'center', justifyContent:'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M11 6l-6 6 6 6" stroke={LM_INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div style={{ fontSize: 16, fontWeight: 600, color: LM_INK, letterSpacing:'-0.01em' }}>Profile</div>
        </div>

        <div style={{
          background:'#FFF', border:'1px solid ' + LM_LINE, borderRadius: 14, padding: 18,
          display:'flex', flexDirection:'column', alignItems:'center', gap: 10,
        }}>
          <img src={LM_PROFILE.avatarUrl} alt={LM_PROFILE.name}
            style={{
              width: 80, height: 80, borderRadius:'50%', objectFit:'cover',
              boxShadow:'0 6px 14px rgba(16,86,217,0.20)',
            }}/>
          <div style={{ textAlign:'center', display:'flex', flexDirection:'column', gap: 2 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: LM_INK, letterSpacing:'-0.015em' }}>{LM_PROFILE.name}</div>
            <div style={{ fontSize: 12.5, color: LM_MUTED }}>{LM_PROFILE.role} · {LM_PROFILE.level}</div>
          </div>
          <div style={{ display:'flex', gap: 6, marginTop: 4, flexWrap:'wrap', justifyContent:'center' }}>
            <span style={{
              padding:'3px 10px', borderRadius: 999,
              background: LM_PRIMARY_SOFT, color: LM_PRIMARY,
              fontSize: 10.5, fontWeight: 600,
            }}>{LM_PROFILE.department}</span>
            <span style={{
              padding:'3px 10px', borderRadius: 999,
              background: LM_LINE2, color: LM_BODY,
              fontSize: 10.5, fontWeight: 600,
            }}>Team of {LM_PROFILE.teamSize}</span>
          </div>
        </div>

        <button onClick={onLogout} style={{
          height: 44, borderRadius: 10,
          background: LM_DANGER_SOFT, color: LM_DANGER, border:'none', cursor:'pointer',
          fontFamily:'inherit', fontSize: 14, fontWeight: 600,
        }}>Sign out</button>

        <div style={{ textAlign:'center', fontSize: 10.5, color: LM_FAINT }}>
          Cohort. © 2026 · Line Manager
        </div>
      </div>
    </div>
  );
}

// ─── LM Dashboard (root) ────────────────────────────────────

function ManagerDashboard({ onLogout }) {
  const [tab, setTab] = React.useState('Dashboard');

  if (tab === 'Profile') {
    return (
      <div style={{ width:'100%', height:'100%', position:'relative', overflow:'hidden' }}>
        <LmProfileScreen onBack={() => setTab('Dashboard')} onLogout={onLogout}/>
      </div>
    );
  }

  let screen;
  if (tab === 'My Team')      screen = <LmTeamScreen/>;
  else if (tab === 'Circle')  screen = <CircleScreen/>;
  else if (tab === 'Performance') screen = <LmPerformanceScreen/>;
  else screen = <LmDashboardScreen onOpenProfile={() => setTab('Profile')}/>;

  return (
    <div style={{ width:'100%', height:'100%', position:'relative', overflow:'hidden' }}>
      {screen}
      <LmTabBar tab={tab} setTab={setTab}/>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────
function Dashboard({ onLogout }) {
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

  if (tab === 'Assess') {
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
        <CircleScreen/>
        <DashboardTabBar tab={tab} setTab={setTab} t={t} accent={accent} tweaks={tweaks} isDark={isDark}/>
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
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 10 }}>
            <div style={{ fontSize:14, fontWeight:550, letterSpacing:'-0.015em' }}>Continue learning</div>
            <span style={{ fontSize:11.5, color: accent, fontWeight:500 }}>View all →</span>
          </div>
          <div style={{ display:'flex', gap: 12, alignItems:'flex-start' }}>
            <div style={{
              width: 64, height: 64, borderRadius: 10, flexShrink: 0, overflow:'hidden',
              border: `1px solid ${t.line}`,
            }}>
              <img
                src="https://api-ajari-develop.ajari.app/v1/lx-upload/fetch/temp/1774942022561689.png"
                alt="Course cover"
                style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:8 }}>
                <div style={{ fontSize:14, fontWeight:550, letterSpacing:'-0.015em', color: t.ink }}>Digital Marketing Essentials</div>
                <div style={{ fontSize:12, color: t.ink, fontFamily:'"JetBrains Mono", ui-monospace', fontWeight:500, fontVariantNumeric:'tabular-nums' }}>45%</div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:6, marginTop: 3, fontSize:11, color: t.muted }}>
                <span>Module 4 of 9</span>
                {I.dot(t.faint)}
                <span>1h 40m left</span>
              </div>
              <div style={{
                marginTop: 8, height: 5, borderRadius: 3, background: t.chip,
                overflow:'hidden', position:'relative',
              }}>
                <div style={{
                  position:'absolute', inset:0, width:'45%',
                  background: accent, borderRadius: 3,
                }}/>
              </div>
            </div>
          </div>
          <button style={{
            marginTop: 12, width:'100%', height: 40, borderRadius: 10,
            border:'none', background: accent, color:'#FFF',
            fontFamily:'inherit', fontWeight: 550, fontSize: 13.5,
            letterSpacing:'-0.005em', cursor:'pointer',
            display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
          }}>
            Continue
            {I.arrow('#FFF')}
          </button>
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
              <div style={{ fontSize:10.5, color: t.faint, fontFamily:'"JetBrains Mono", ui-monospace' }}>{kpi.sub}</div>
            </Card>
          ))}
        </div>

        {/* Learning hours — secondary, full card below stats */}
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
