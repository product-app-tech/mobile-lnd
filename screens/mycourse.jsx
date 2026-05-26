// My Course screen — mobile adaptation of /trainee/upskill
// Source: ridho/lnd-presight-demo/src/pages/trainee/upskill
// Sections: tabbed Course List · Completion Rate · Course Details · Upskill Hub

const MC_PRIMARY = '#1056d9';
const MC_PRIMARY_HOVER = '#0d47c2';
const MC_PRIMARY_SOFT = '#e8effc';
const MC_INK = '#252B37';
const MC_BODY = '#414651';
const MC_MUTED = '#717680';
const MC_SUBTLE = '#868d9d';
const MC_LINE = '#E9EAEB';
const MC_SUCCESS = '#039855';
const MC_SUCCESS_SOFT = '#ECFDF3';

const MC_TABS = [
  { key: 'assigned',  label: 'Assigned' },
  { key: 'ongoing',   label: 'Ongoing'  },
  { key: 'upcoming',  label: 'Upcoming' },
  { key: 'completed', label: 'Completed' },
];

// ─── Tiny icons (inline so no deps) ────────────────────────────

const McIcon = {
  book:   (c='currentColor') => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke={c} strokeWidth="1.6"/></svg>),
  clock:  (c='currentColor') => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/><path d="M12 7v5l3 2" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>),
  bars:   (c='currentColor') => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 20V10M12 20V4M20 20v-7" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>),
  award:  (c='currentColor') => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="6" stroke={c} strokeWidth="1.6"/><path d="m8 14-1 8 5-3 5 3-1-8" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  arrow:  (c='currentColor') => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  trend:  (c='currentColor') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-9" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 6h7v7" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  target: (c='currentColor') => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/><circle cx="12" cy="12" r="5" stroke={c} strokeWidth="1.6"/><circle cx="12" cy="12" r="1.5" fill={c}/></svg>),
  flame:  (c='currentColor') => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3s4 4 4 8a4 4 0 1 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3 0-5 0-7Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  sparkle:(c='currentColor') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>),
  external:(c='currentColor') => (<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M14 4h6v6M20 4l-9 9M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  back:   (c='currentColor') => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 18l-6-6 6-6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  // 26px versions for stat tiles
  targetLg:(c='currentColor') => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/><circle cx="12" cy="12" r="5" stroke={c} strokeWidth="1.6"/><circle cx="12" cy="12" r="1.6" fill={c}/></svg>),
  awardLg: (c='currentColor') => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="6" stroke={c} strokeWidth="1.6"/><path d="m8 14-1 8 5-3 5 3-1-8" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  bookLg:  (c='currentColor') => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke={c} strokeWidth="1.6"/></svg>),
  flameLg: (c='currentColor') => (<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 3s4 4 4 8a4 4 0 1 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3 0-5 0-7Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  // 18px meta-row icons (matches ProgramDetail Figma)
  barChart: (c='currentColor') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><line x1="18" y1="20" x2="18" y2="10" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="20" x2="12" y2="4" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><line x1="6" y1="20" x2="6" y2="14" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>),
  bookOpen: (c='currentColor') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 7v14" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/></svg>),
  clock18:  (c='currentColor') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={c} strokeWidth="1.8"/><polyline points="12 6 12 12 16 14" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>),
  calendar:(c='currentColor') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke={c} strokeWidth="1.8"/><line x1="16" y1="2" x2="16" y2="6" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><line x1="8" y1="2" x2="8" y2="6" stroke={c} strokeWidth="1.8" strokeLinecap="round"/><line x1="3" y1="10" x2="21" y2="10" stroke={c} strokeWidth="1.8"/></svg>),
  // Detail-page extras
  chevronUp:   (c='currentColor', s=18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="m18 15-6-6-6 6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  chevronDown: (c='currentColor', s=18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  awardSm:     (c='currentColor') => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="6" stroke={c} strokeWidth="1.6"/><path d="m15.477 12.89 1.523 9.11-5-3-5 3 1.523-9.11" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  check:       (c='currentColor') => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  eye:         (c='currentColor', s=18) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" stroke={c} strokeWidth="1.8"/><circle cx="12" cy="12" r="3" stroke={c} strokeWidth="1.8"/></svg>),
  // 16px book / clock for module meta
  book16:      (c='currentColor') => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 7v14" stroke={c} strokeWidth="1.6" strokeLinecap="round"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  clock16:     (c='currentColor') => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke={c} strokeWidth="1.6"/><polyline points="12 6 12 12 16 14" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  // Activity-type icons (20px)
  bulb:        (c='currentColor') => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.7.7 1 1.5 1 2.3v.5h6V17c0-.8.3-1.6 1-2.3A7 7 0 0 0 12 2Z" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  video:       (c='currentColor') => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="6" width="14" height="12" rx="2" stroke={c} strokeWidth="1.7"/><path d="m22 8-6 4 6 4Z" stroke={c} strokeWidth="1.7" strokeLinejoin="round"/></svg>),
  slides:      (c='currentColor') => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="14" rx="2" stroke={c} strokeWidth="1.7"/><line x1="12" y1="17" x2="12" y2="21" stroke={c} strokeWidth="1.7" strokeLinecap="round"/><line x1="8"  y1="21" x2="16" y2="21" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>),
  clipCheck:   (c='currentColor') => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="8" y="2" width="8" height="4" rx="1" stroke={c} strokeWidth="1.7"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke={c} strokeWidth="1.7"/><path d="m9 14 2 2 4-4" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  radio:       (c='currentColor') => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" stroke={c} strokeWidth="1.7"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.48M20.49 4a10 10 0 0 1 0 16M3.51 20a10 10 0 0 1 0-16" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>),
  file:        (c='currentColor') => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke={c} strokeWidth="1.7" strokeLinejoin="round"/><polyline points="14 2 14 8 20 8" stroke={c} strokeWidth="1.7" strokeLinejoin="round"/></svg>),
  // 14px building icon for the "Source: LnD" row
  building14:  (c='currentColor') => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" stroke={c} strokeWidth="1.6"/><line x1="9" y1="22" x2="9" y2="18" stroke={c} strokeWidth="1.6" strokeLinecap="round"/><line x1="15" y1="22" x2="15" y2="18" stroke={c} strokeWidth="1.6" strokeLinecap="round"/><line x1="8" y1="7" x2="10" y2="7" stroke={c} strokeWidth="1.6" strokeLinecap="round"/><line x1="14" y1="7" x2="16" y2="7" stroke={c} strokeWidth="1.6" strokeLinecap="round"/><line x1="8" y1="11" x2="10" y2="11" stroke={c} strokeWidth="1.6" strokeLinecap="round"/><line x1="14" y1="11" x2="16" y2="11" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>),
  // 18px horizontal ellipsis (overflow button)
  moreH:       (c='currentColor') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="5"  cy="12" r="1.6" fill={c}/><circle cx="12" cy="12" r="1.6" fill={c}/><circle cx="19" cy="12" r="1.6" fill={c}/></svg>),
};

// ─── Reusable bits ────────────────────────────────────────────

function McSectionHeader({ icon, title, subtitle }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-start', gap: 10, marginBottom: 12 }}>
      <div style={{
        width: 38, height: 38, borderRadius: 10,
        background: 'rgba(16,86,217,0.10)',
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>{icon(MC_PRIMARY)}</div>
      <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: MC_INK, lineHeight:'20px', letterSpacing:'-0.01em' }}>{title}</div>
        <div style={{ fontSize: 12, color: MC_MUTED, lineHeight:'16px' }}>{subtitle}</div>
      </div>
    </div>
  );
}

function McMetaRow({ items }) {
  return (
    <div style={{ display:'flex', flexWrap:'wrap', gap: 10, alignItems:'center' }}>
      {items.map((it, i) => (
        <span key={i} style={{
          display:'inline-flex', alignItems:'center', gap: 4,
          fontSize: 11.5, color: MC_MUTED, lineHeight:'14px',
        }}>
          {it.icon} {it.text}
        </span>
      ))}
    </div>
  );
}

function McSourceBadge({ source }) {
  const isLnD = source === 'LnD';
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap: 4,
      padding:'2px 8px', borderRadius: 999,
      background: isLnD ? MC_PRIMARY_SOFT : '#F5F5F5',
      color: isLnD ? MC_PRIMARY : MC_BODY,
      fontSize: 10.5, fontWeight: 600, letterSpacing:'-0.005em',
    }}>{source}</span>
  );
}

function McTypeBadge({ type }) {
  return (
    <span style={{
      display:'inline-flex', alignItems:'center',
      padding:'4px 10px', borderRadius: 999,
      background: MC_PRIMARY_SOFT, color: MC_PRIMARY,
      fontSize: 11, fontWeight: 600, letterSpacing:'-0.005em',
    }}>{type}</span>
  );
}

function McInfoRow({ label, value, valueIcon }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <span style={{ fontSize: 12.5, color: MC_MUTED }}>{label}</span>
      <span style={{
        display:'inline-flex', alignItems:'center', gap: 6,
        fontSize: 12.5, fontWeight: 500, color: MC_INK,
      }}>
        {valueIcon}{value}
      </span>
    </div>
  );
}

function McCourseCard({ course, footer, badge }) {
  return (
    <div style={{
      flexShrink: 0, width: 260, scrollSnapAlign:'start',
      background:'#FFF', border:`1px solid ${MC_LINE}`,
      borderRadius: 12, overflow:'hidden',
      display:'flex', flexDirection:'column',
      boxShadow:'0 1px 2px rgba(16, 24, 40, 0.04)',
    }}>
      <div style={{ position:'relative', width:'100%', height: 160, background:'#F5F5F5' }}>
        <img src={course.image} alt={course.title}
          onError={e => { e.currentTarget.style.display='none'; }}
          style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{
          position:'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)',
        }}/>
        {badge && (
          <div style={{ position:'absolute', top: 10, left: 10 }}>{badge}</div>
        )}
        {course.type && (
          <div style={{ position:'absolute', top: 10, right: 10 }}>
            <McTypeBadge type={course.type}/>
          </div>
        )}
        <div style={{
          position:'absolute', left: 14, right: 14, bottom: 12,
          fontSize: 16, fontWeight: 700, color:'#FFF', lineHeight:'20px',
          letterSpacing:'-0.01em',
          textShadow:'0 1px 2px rgba(0,0,0,0.4)',
          display:'-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient:'vertical', overflow:'hidden',
        }}>{course.title}</div>
      </div>
      <div style={{ padding: 14, display:'flex', flexDirection:'column', gap: 8 }}>
        <McInfoRow label="Level" value={course.level}/>
        {course.source && (
          <McInfoRow label="Source" value={course.source}
            valueIcon={McIcon.building14(MC_MUTED)}/>
        )}
        {course.lessons && (
          <McInfoRow label="Lessons"
            value={`${course.lessons.done}/${course.lessons.total} completed`}/>
        )}
        <McInfoRow label="Duration" value={course.duration || course.date}/>
        {footer}
      </div>
    </div>
  );
}

// ─── Course list per tab ──────────────────────────────────────

function McProgressBar({ value, accentFrom = '#5B8DEF', accentTo = MC_PRIMARY, track = MC_PRIMARY_SOFT }) {
  return (
    <div style={{ height: 6, borderRadius: 999, background: track, overflow:'hidden' }}>
      <div style={{
        width: `${value}%`, height:'100%', borderRadius: 999,
        background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
      }}/>
    </div>
  );
}

function McCourseList({ tab, onDetails }) {
  if (tab === 'assigned') {
    return MC_ASSIGNED.map(c => (
      <McCourseCard key={c.id} course={c} footer={
        <button onClick={() => onDetails(c.id)} style={{
          marginTop: 4, width:'100%', height: 36, borderRadius: 10,
          background: MC_PRIMARY_SOFT, color: MC_PRIMARY, border:'none', cursor:'pointer',
          fontFamily:'inherit', fontSize: 13, fontWeight: 600,
          display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
        }}>{McIcon.eye(MC_PRIMARY, 16)} View Details</button>
      }/>
    ));
  }

  if (tab === 'ongoing') {
    if (MC_ONGOING.length === 0) {
      return <McEmptyState
        title="No Ongoing Courses"
        message="You don't have any active courses right now. Start a new course to begin learning!"/>;
    }
    return MC_ONGOING.map(c => (
      <McCourseCard key={c.id} course={c} footer={
        <>
          <McProgressBar value={c.progress}/>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 2 }}>
            <span style={{ fontSize: 11.5, color: MC_MUTED }}>{c.progress}% complete</span>
          </div>
          <button onClick={() => onDetails(c.id)} style={{
            marginTop: 4, height: 36, borderRadius: 10,
            background: MC_PRIMARY, color: '#FFF', border:'none', cursor:'pointer',
            fontFamily:'inherit', fontSize: 13, fontWeight: 600,
            display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
          }}>Continue {McIcon.arrow('#FFF')}</button>
        </>
      }/>
    ));
  }

  if (tab === 'upcoming') {
    return MC_UPCOMING.map(c => (
      <McCourseCard key={c.id} course={c} footer={
        <button onClick={() => onDetails(c.id)} style={{
          marginTop: 4, height: 36, borderRadius: 10,
          background: 'transparent', color: MC_PRIMARY, border:`1px solid ${MC_PRIMARY_SOFT}`,
          cursor:'pointer', fontFamily:'inherit', fontSize: 13, fontWeight: 600,
          display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
        }}>View Details {McIcon.arrow(MC_PRIMARY)}</button>
      }/>
    ));
  }

  // completed
  return MC_COMPLETED.map(c => (
    <McCourseCard key={c.id} course={c} badge={c.certified && (
      <span style={{
        display:'inline-flex', alignItems:'center', gap: 4,
        padding:'2px 8px', borderRadius: 999,
        background: MC_SUCCESS_SOFT, color: MC_SUCCESS,
        fontSize: 10.5, fontWeight: 600,
      }}>{McIcon.award(MC_SUCCESS)} Certified</span>
    )} footer={
      <button onClick={() => onDetails(c.id)} style={{
        marginTop: 4, width:'100%', height: 36, borderRadius: 10,
        background: MC_PRIMARY_SOFT, color: MC_PRIMARY, border:'none', cursor:'pointer',
        fontFamily:'inherit', fontSize: 13, fontWeight: 600,
        display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
      }}>{McIcon.eye(MC_PRIMARY, 16)} View Details</button>
    }/>
  ));
}

function McEmptyState({ title, message }) {
  return (
    <div style={{
      flexShrink: 0, width: '100%', minWidth: 260,
      background:'#FFF', border:`1px solid ${MC_LINE}`, borderRadius: 12,
      padding:'32px 20px', textAlign:'center',
      display:'flex', flexDirection:'column', alignItems:'center', gap: 8,
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: 16, background: MC_PRIMARY_SOFT,
        display:'flex', alignItems:'center', justifyContent:'center', marginBottom: 4,
      }}>{McIcon.book(MC_PRIMARY)}</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: MC_BODY }}>{title}</div>
      <div style={{ fontSize: 12.5, color: MC_MUTED, lineHeight:'17px', maxWidth: 260 }}>{message}</div>
    </div>
  );
}

// ─── Program Detail page (replaces inline McCourseDetails) ─────
// Source: /Users/ridho/lnd-presight-demo/src/pages/trainee/journey/program-detail/components
// Adapted for mobile 420px width — Figma frame ProgramDetail (node 9017:422)

const MC_STATUS_STYLES = {
  'Upcoming Program': { bg: '#eaf7ff', border: '#a9d1ff', fg: '#0f76ec' },
  'In Progress':      { bg: '#ecfdf3', border: '#2dd4bf', fg: '#0d9488' },
  'Completed':        { bg: '#d1fadf', border: '#17b26a', fg: '#059669' },
};

const MC_LEVEL_STYLES = {
  Beginner:     { bg: '#ECFDF3', fg: '#027A48' },
  Intermediate: { bg: '#FFFAEB', fg: '#B54708' },
  Advanced:     { bg: '#FEF3F2', fg: '#B42318' },
};


// Activity-type → icon + tint config (mirrors source)
const MC_ACTIVITY_CONFIG = {
  'Reading Material':      { color: '#F9AC4E', bg: 'rgba(254,202,87,0.15)', label: 'Reading Material' },
  'Microlearning Video':   { color: '#E53E3E', bg: 'rgba(229,62,62,0.15)',  label: 'Video Learning' },
  'Microlearning Slides':  { color: '#38A169', bg: 'rgba(56,161,105,0.15)', label: 'Slides Material' },
  'Microlearning':         { color: '#38A169', bg: 'rgba(56,161,105,0.15)', label: 'Microlearning' },
  'Quiz':                  { color: '#575FCF', bg: 'rgba(87,95,207,0.15)',  label: 'Knowledge Check' },
  'Live Session':          { color: '#3182CE', bg: 'rgba(49,130,206,0.15)', label: 'Live Session' },
  'Assignment':            { color: '#DD6B20', bg: 'rgba(221,107,32,0.15)', label: 'Assignment' },
};

function McCourseDetails({ courseId, onBack, onStartCourse, onEnroll }) {
  const course = [...MC_ASSIGNED, ...MC_UPCOMING, ...MC_ONGOING, ...MC_COMPLETED]
    .find(c => c.id === courseId) || MC_ASSIGNED[0];

  // Derive programStatus from which collection course belongs to
  let programStatus = 'Upcoming Program';
  const isAssigned = !!MC_ASSIGNED.find(c => c.id === courseId);
  if (MC_ONGOING.find(c => c.id === courseId))         programStatus = 'In Progress';
  else if (MC_COMPLETED.find(c => c.id === courseId))  programStatus = 'Completed';
  else if (MC_UPCOMING.find(c => c.id === courseId))   programStatus = 'Upcoming Program';
  const status = MC_STATUS_STYLES[programStatus];

  // Detail payload (description, objectives, gain, skills, courseOverview)
  const details = MC_PROGRAM_DETAILS[courseId] || MC_DEFAULT_DETAILS;

  // Duration: ongoing/completed use course.duration ("4h 12 min"), upcoming uses course.date
  const durationText = course.duration || '12h';
  const dateText = course.date || '16 Mar - 17 Mar 2026';

  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
      {/* Header row: back button + label */}
      <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
        <button onClick={onBack} aria-label="Back" style={{
          width: 36, height: 36, borderRadius: 10,
          background:'#FFF', border:`1px solid ${MC_LINE}`, cursor:'pointer',
          display:'inline-flex', alignItems:'center', justifyContent:'center', padding: 0,
        }}>
          {McIcon.back(MC_INK)}
        </button>
        <span style={{ fontSize: 14, fontWeight: 500, color: MC_BODY }}>Back</span>
      </div>

      {/* Hero image (standalone) */}
      <div style={{
        position:'relative', width:'100%', height: 200,
        borderRadius: 12, overflow:'hidden',
        background: 'linear-gradient(135deg, #2d3e6b 0%, #4a55a8 50%, #6e4ac8 100%)',
      }}>
        <img src={course.image} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', opacity: 0.85 }}/>
        <div style={{
          position:'absolute', inset: 0,
          background:'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.35) 100%)',
        }}/>
      </div>

      {/* Course Info card (title + status + meta) */}
      <div style={{
        background:'#FFF', border:`1px solid ${MC_LINE}`, borderRadius: 12,
        padding: 16,
        display:'flex', flexDirection:'column', gap: 14,
        boxShadow:'0 2px 8px rgba(16,24,40,0.06)',
      }}>
        {/* Status chip */}
        <span style={{
          alignSelf:'flex-start',
          padding:'3px 9px', borderRadius: 10,
          background: status.bg, border:`1px solid ${status.border}`,
          fontSize: 11.5, fontWeight: 500, color: status.fg,
          display:'inline-flex', alignItems:'center',
        }}>{programStatus}</span>

        {/* Title */}
        <div style={{
          fontSize: 20, fontWeight: 600, color: MC_INK,
          lineHeight:'26px', letterSpacing:'-0.01em',
        }}>{course.title}</div>

        {/* Divider */}
        <div style={{ width:'100%', height: 0, borderTop:`1px solid ${MC_LINE}` }}/>

        {/* Meta grid (2 rows × 2 cols) */}
        <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
          <div style={{ display:'flex', gap: 16, alignItems:'center', flexWrap:'wrap' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap: 6 }}>
              {McIcon.barChart(MC_BODY)}
              <span style={{ fontSize: 13.5, color: MC_BODY }}>{course.level}</span>
            </div>
            <div style={{ display:'inline-flex', alignItems:'center', gap: 6 }}>
              {McIcon.bookOpen(MC_BODY)}
              <span style={{ fontSize: 13.5, color: MC_BODY }}>{course.type || 'Blended Learning'}</span>
            </div>
          </div>
          <div style={{ display:'flex', gap: 16, alignItems:'center', flexWrap:'wrap' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap: 6 }}>
              {McIcon.clock18(MC_BODY)}
              <span style={{ fontSize: 13.5, color: MC_BODY }}>{durationText}</span>
            </div>
            <div style={{ display:'inline-flex', alignItems:'center', gap: 6 }}>
              {McIcon.calendar(MC_BODY)}
              <span style={{ fontSize: 13.5, color: MC_BODY }}>{dateText}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Instructor card */}
      <div style={{
        background:'#FFF', border:`1px solid ${MC_LINE}`, borderRadius: 12,
        padding: 16,
        display:'flex', flexDirection:'column', gap: 16,
        boxShadow:'0 2px 8px rgba(16,24,40,0.06)',
      }}>
        {/* Top: avatar + name */}
        <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 999,
            background: MC_INSTRUCTOR.avatarGradient,
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'#FFF', fontSize: 20, fontWeight: 600, letterSpacing:'-0.01em',
            flexShrink: 0,
          }}>{MC_INSTRUCTOR.avatarInitials}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: MC_INK, lineHeight:'22px' }}>{MC_INSTRUCTOR.name}</div>
            <div style={{ fontSize: 12, fontWeight: 300, color: MC_MUTED, lineHeight:'18px' }}>{MC_INSTRUCTOR.company}</div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display:'flex', alignItems:'center', gap: 4 }}>
          <div style={{ flex: 1, display:'flex', flexDirection:'column', alignItems:'center' }}>
            <span style={{ fontSize: 20, fontWeight: 500, color:'#000', lineHeight:'20px' }}>{MC_INSTRUCTOR.experience}</span>
            <span style={{ fontSize: 12, fontWeight: 300, color: MC_MUTED, lineHeight:'18px' }}>Experience</span>
          </div>
          <button type="button" title="View course ratings" style={{
            flex: 1, display:'flex', flexDirection:'column', alignItems:'center',
            borderLeft:'1px solid rgba(0,0,0,0.10)', borderRight:'1px solid rgba(0,0,0,0.10)',
            borderTop:'none', borderBottom:'none',
            background:'transparent', cursor:'pointer', padding: 0,
          }}>
            <span style={{ fontSize: 20, fontWeight: 500, color:'#0f76ec', lineHeight:'20px' }}>{MC_INSTRUCTOR.rating}</span>
            <span style={{ fontSize: 12, fontWeight: 400, color:'#0f76ec', lineHeight:'18px' }}>Rating ›</span>
          </button>
          <div style={{ flex: 1, display:'flex', flexDirection:'column', alignItems:'center' }}>
            <span style={{ fontSize: 20, fontWeight: 500, color:'#000', lineHeight:'20px' }}>{MC_INSTRUCTOR.certifications}</span>
            <span style={{ fontSize: 12, fontWeight: 300, color: MC_MUTED, lineHeight:'18px' }}>Certification</span>
          </div>
        </div>
      </div>

      {/* Journey Details (description + objectives + gain + skills) */}
      <McProgramInfo details={details}/>

      {/* Journey Program (overview: course sections with expandable modules+activities) */}
      <McProgramOverview sections={details.courseOverview}/>

      {/* CTA — "Enroll Now" for assigned courses, "Start Course" otherwise */}
      <button onClick={isAssigned ? onEnroll : onStartCourse} style={{
        marginTop: 4, height: 48, borderRadius: 10,
        background: MC_PRIMARY, color:'#FFF', border:'none', cursor:'pointer',
        fontFamily:'inherit', fontSize: 14, fontWeight: 600,
        display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
      }}>{isAssigned ? 'Enroll Now' : 'Start Course'} {McIcon.arrow('#FFF')}</button>
    </div>
  );
}

function McNoticeModal({ onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position:'absolute', inset: 0, zIndex: 1000,
        background:'rgba(15,23,42,0.55)',
        display:'flex', alignItems:'center', justifyContent:'center',
        padding: 24, fontFamily:'inherit',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background:'#FFF', borderRadius: 16,
          maxWidth: 320, width:'100%',
          padding:'24px 20px 20px',
          display:'flex', flexDirection:'column', alignItems:'center', gap: 12,
          boxShadow:'0 24px 48px rgba(16,24,40,0.18), 0 4px 8px rgba(16,24,40,0.08)',
        }}
      >
        {/* Icon */}
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          background: MC_PRIMARY_SOFT,
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          {/* Browser/globe icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke={MC_PRIMARY} strokeWidth="1.8"/>
            <line x1="2" y1="12" x2="22" y2="12" stroke={MC_PRIMARY} strokeWidth="1.8"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke={MC_PRIMARY} strokeWidth="1.8"/>
          </svg>
        </div>

        <div style={{
          fontSize: 17, fontWeight: 600, color: MC_INK,
          textAlign:'center', letterSpacing:'-0.01em',
        }}>Continue on the web</div>

        <p style={{
          margin: 0,
          fontSize: 13.5, color: MC_BODY,
          textAlign:'center', lineHeight:'20px',
        }}>
          This course needs to be opened on the website. Please continue from your desktop browser to start learning.
        </p>

        <button onClick={onClose} style={{
          width:'100%', marginTop: 8, height: 44, borderRadius: 10,
          background: MC_PRIMARY, color:'#FFF', border:'none', cursor:'pointer',
          fontFamily:'inherit', fontSize: 14, fontWeight: 600,
        }}>Got it</button>
      </div>
    </div>
  );
}

function McEnrollModal({ courseTitle, onCancel, onConfirm }) {
  return (
    <div
      onClick={onCancel}
      style={{
        position:'absolute', inset: 0, zIndex: 1000,
        background:'rgba(15,23,42,0.55)',
        display:'flex', alignItems:'center', justifyContent:'center',
        padding: 24, fontFamily:'inherit',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position:'relative',
          background:'#FFF', borderRadius: 16,
          maxWidth: 340, width:'100%',
          padding:'24px 20px 20px',
          display:'flex', flexDirection:'column', alignItems:'center', gap: 12,
          boxShadow:'0 24px 48px rgba(16,24,40,0.18), 0 4px 8px rgba(16,24,40,0.08)',
        }}
      >
        {/* Close (×) */}
        <button onClick={onCancel} aria-label="Close" style={{
          position:'absolute', top: 12, right: 12,
          width: 28, height: 28, borderRadius: 8,
          background:'transparent', border:`1px solid ${MC_LINE}`, cursor:'pointer',
          display:'inline-flex', alignItems:'center', justifyContent:'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6 6 18" stroke={MC_BODY} strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Success check icon */}
        <div style={{
          width: 56, height: 56, borderRadius: 28,
          background: MC_SUCCESS_SOFT,
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke={MC_SUCCESS} strokeWidth="1.8"/>
            <polyline points="8 12 11 15 16 9" stroke={MC_SUCCESS} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>

        <div style={{
          fontSize: 17, fontWeight: 600, color: MC_INK,
          textAlign:'center', letterSpacing:'-0.01em',
        }}>Enroll Course?</div>

        <p style={{
          margin: 0,
          fontSize: 13.5, color: MC_BODY,
          textAlign:'center', lineHeight:'20px',
        }}>
          You're about to enroll in <strong style={{ color: MC_INK }}>"{courseTitle}"</strong>. You'll get access to all course materials and activities.
        </p>

        <div style={{ display:'flex', gap: 8, width:'100%', marginTop: 8 }}>
          <button onClick={onCancel} style={{
            flex: 1, height: 44, borderRadius: 10,
            background:'#FFF', color: MC_BODY, border:`1px solid ${MC_LINE}`, cursor:'pointer',
            fontFamily:'inherit', fontSize: 14, fontWeight: 600,
          }}>Cancel</button>
          <button onClick={onConfirm} style={{
            flex: 1, height: 44, borderRadius: 10,
            background: MC_PRIMARY, color:'#FFF', border:'none', cursor:'pointer',
            fontFamily:'inherit', fontSize: 14, fontWeight: 600,
          }}>Confirm Enroll</button>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components for ProgramDetail (Info + Overview) ────────

function McProgramInfo({ details }) {
  if (!details.description && (details.learningObjectives?.length ?? 0) === 0) return null;
  return (
    <div style={{
      background:'#FFF', borderRadius: 10, overflow:'hidden',
      border:`1px solid ${MC_LINE}`,
    }}>
      <div style={{ display:'flex', flexDirection:'column', gap: 16, padding: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 500, color: MC_INK, lineHeight:'20px' }}>Journey Details</div>
        <div style={{ width:'100%', height: 0, borderBottom:'1px solid rgba(0,0,0,0.10)' }}/>

        {details.description && (
          <p style={{ fontSize: 12, color: MC_BODY, lineHeight:'22px', margin: 0 }}>{details.description}</p>
        )}

        {/* Two-column section: objectives + gain (stacked on narrow mobile) */}
        {(details.learningObjectives?.length || details.whatYoullGain?.length) ? (
          <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
            {details.learningObjectives?.length > 0 && (
              <div>
                <p style={{ fontSize: 12, color: MC_MUTED, marginBottom: 6, margin: 0 }}>Learning objectives:</p>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, color: MC_BODY }}>
                  {details.learningObjectives.map((obj, i) => (
                    <li key={i} style={{ marginBottom: 2, listStyleType: 'disc' }}>{obj}</li>
                  ))}
                </ul>
              </div>
            )}
            {details.whatYoullGain?.length > 0 && (
              <div style={{ display:'flex', flexDirection:'column', gap: 9 }}>
                <p style={{ fontSize: 12, fontWeight: 300, color: MC_MUTED, margin: 0 }}>What you’ll gain:</p>
                {details.whatYoullGain.map((item, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap: 6 }}>
                    {McIcon.awardSm(MC_PRIMARY)}
                    <span style={{ fontSize: 12, color: MC_BODY, letterSpacing:'0.01em' }}>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}

        {/* Skills */}
        {details.skillsCovered?.length > 0 && (
          <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
            <p style={{ fontSize: 14, color: MC_BODY, opacity: 0.5, lineHeight:'20px', margin: 0 }}>Skills covered:</p>
            <div style={{ display:'flex', gap: 6, flexWrap:'wrap' }}>
              {details.skillsCovered.map((skill, i) => (
                <span key={i} style={{
                  padding:'4px 8px', borderRadius: 6,
                  border:'1px solid rgba(0,0,0,0.10)',
                  fontSize: 12, color: MC_BODY, lineHeight:'18px',
                }}>{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function McProgramOverview({ sections }) {
  const [expandedCourses, setExpandedCourses] = React.useState({});
  const [expandedModules, setExpandedModules] = React.useState({});
  if (!sections || sections.length === 0) return null;

  return (
    <div style={{
      background:'#FFF', borderRadius: 12,
      border:`1px solid ${MC_LINE}`,
    }}>
      <div style={{ display:'flex', flexDirection:'column', gap: 12, padding: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 500, color: MC_BODY, lineHeight:'28px' }}>Journey Program</div>
        {sections.map(section => (
          <McSectionCard
            key={section.id}
            section={section}
            isExpanded={!!expandedCourses[section.id]}
            onToggle={() => setExpandedCourses(prev => ({ ...prev, [section.id]: !prev[section.id] }))}
            expandedModules={expandedModules}
            onToggleModule={id => setExpandedModules(prev => ({ ...prev, [id]: !prev[id] }))}
          />
        ))}
      </div>
    </div>
  );
}

function McSectionCard({ section, isExpanded, onToggle, expandedModules, onToggleModule }) {
  const totalModules = section.courseModules?.length ?? 0;
  const isExternal = section.source === 'LinkedIn' || section.source === "O'Reilly";
  const levelStyle = section.level ? MC_LEVEL_STYLES[section.level] : null;

  return (
    <div style={{
      background:'#FFF', borderRadius: 16,
      border:'1px solid rgba(0,0,0,0.10)', overflow:'hidden',
    }}>
      <div style={{ display:'flex', flexDirection:'column', gap: 12, padding:'16px 20px' }}>
        {/* Header */}
        <button
          onClick={isExternal ? undefined : onToggle}
          disabled={isExternal}
          style={{
            display:'flex', alignItems:'center', justifyContent:'space-between',
            width:'100%', gap: 12, background:'transparent', border:'none',
            cursor: isExternal ? 'default' : 'pointer', padding: 0, textAlign:'left',
          }}>
          <span style={{
            fontSize: 16, fontWeight: 500, color: MC_BODY, lineHeight:'20px',
            flex: 1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
          }}>{section.title}</span>
          {isExternal ? (
            <span style={{
              height: 32, padding:'0 12px', borderRadius: 16,
              border:'1px solid #cfddf7', background:'#FFF',
              display:'inline-flex', alignItems:'center', gap: 8,
              fontSize: 12, color: MC_BODY,
            }}>{McIcon.eye('#88ABEC', 14)} View</span>
          ) : (
            isExpanded ? McIcon.chevronUp(MC_MUTED) : McIcon.chevronDown(MC_MUTED)
          )}
        </button>

        {/* Meta */}
        <div style={{ display:'flex', alignItems:'center', gap: 12, flexWrap:'wrap' }}>
          {totalModules > 0 && (
            <div style={{ display:'inline-flex', alignItems:'center', gap: 4 }}>
              {McIcon.book16('#292952')}
              <span style={{ fontSize: 13, color: MC_BODY }}>{totalModules} Module{totalModules > 1 ? 's' : ''}</span>
            </div>
          )}
          {section.duration && (
            <div style={{ display:'inline-flex', alignItems:'center', gap: 4 }}>
              {McIcon.clock16('#292952')}
              <span style={{ fontSize: 13, color: MC_BODY }}>{section.duration}</span>
            </div>
          )}
          {levelStyle && (
            <span style={{
              padding:'2px 8px', borderRadius: 16,
              fontSize: 11, fontWeight: 500,
              background: levelStyle.bg, color: levelStyle.fg,
              whiteSpace:'nowrap',
            }}>{section.level}</span>
          )}
          {section.source && (
            <span style={{ fontSize: 11, color: MC_MUTED }}>{section.source}</span>
          )}
        </div>

        {section.description && (
          <p style={{ fontSize: 13, color:'#535862', margin: 0 }}>{section.description}</p>
        )}

        {/* Expanded modules */}
        {!isExternal && isExpanded && section.courseModules && (
          <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
            {section.courseModules.map(mod => (
              <McModuleCard
                key={mod.id}
                module={mod}
                isExpanded={!!expandedModules[mod.id]}
                onToggle={() => onToggleModule(mod.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function McModuleCard({ module, isExpanded, onToggle }) {
  return (
    <div style={{
      borderRadius: 12, border:'1px solid #cfddf7', overflow:'hidden',
      marginLeft: 12, background:'#f3f6fd',
    }}>
      <div style={{ display:'flex', flexDirection:'column', gap: 8, padding:'12px 14px' }}>
        <button onClick={onToggle} style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          width:'100%', gap: 12, background:'transparent', border:'none',
          cursor:'pointer', padding: 0, textAlign:'left',
        }}>
          <span style={{
            fontSize: 13, fontWeight: 500, color:'#0A0D12',
            flex: 1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
          }}>{module.title}</span>
          {isExpanded ? McIcon.chevronUp(MC_MUTED, 14) : McIcon.chevronDown(MC_MUTED, 14)}
        </button>

        <div style={{ display:'flex', alignItems:'center', gap: 10, flexWrap:'wrap' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap: 4 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 7v14M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" stroke="#292952" strokeWidth="1.7" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: 11, color: MC_BODY }}>{module.activities.length} Activit{module.activities.length > 1 ? 'ies' : 'y'}</span>
          </div>
          <div style={{ display:'inline-flex', alignItems:'center', gap: 4 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#414651" strokeWidth="1.7"/><polyline points="12 6 12 12 16 14" stroke="#414651" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: 11, color: MC_BODY }}>{module.duration}</span>
          </div>
        </div>

        {isExpanded && (
          <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
            {module.activities.map(act => <McActivityCard key={act.id} activity={act}/>)}
          </div>
        )}
      </div>
    </div>
  );
}

function McActivityCard({ activity }) {
  const cfg = MC_ACTIVITY_CONFIG[activity.type] || { color: MC_PRIMARY, bg: MC_PRIMARY_SOFT, label: 'Learning Activity' };
  const iconForType = (type, c) => {
    switch (type) {
      case 'Reading Material':     return McIcon.bulb(c);
      case 'Microlearning Video':  return McIcon.video(c);
      case 'Microlearning Slides':
      case 'Microlearning':        return McIcon.slides(c);
      case 'Quiz':                 return McIcon.clipCheck(c);
      case 'Live Session':         return McIcon.radio(c);
      case 'Assignment':           return McIcon.file(c);
      default:                     return McIcon.book(c);
    }
  };
  return (
    <div style={{
      background:'#FFF', borderRadius: 8, border:`1px solid ${MC_LINE}`,
      padding: 12, marginLeft: 12,
    }}>
      <div style={{ display:'flex', alignItems:'center', gap: 8, width:'100%' }}>
        <div style={{
          width: 32, height: 32, borderRadius: 6,
          background: cfg.bg, flexShrink: 0,
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>{iconForType(activity.type, cfg.color)}</div>
        <div style={{ display:'flex', flexDirection:'column', gap: 2, flex: 1, minWidth: 0 }}>
          <p style={{
            fontSize: 13, fontWeight: 500, color:'#0A0D12', margin: 0,
            overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
          }}>{activity.title}</p>
          <div style={{ display:'flex', alignItems:'center', gap: 6, flexWrap:'wrap' }}>
            <span style={{
              padding:'1px 6px', borderRadius: 12,
              fontSize: 11, fontWeight: 500,
              background:'#F5F5F5', color:'#6B7280',
            }}>{cfg.label}</span>
            <div style={{ display:'inline-flex', alignItems:'center', gap: 4 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#414651" strokeWidth="1.7"/><polyline points="12 6 12 12 16 14" stroke="#414651" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{ fontSize: 11, color: MC_BODY }}>{activity.duration}</span>
            </div>
          </div>
        </div>
        <span style={{
          height: 28, padding:'0 10px', borderRadius: 14,
          display:'inline-flex', alignItems:'center',
          fontSize: 11, color: MC_MUTED,
        }}>Available</span>
      </div>
    </div>
  );
}


function McUpskillHub() {
  return (
    <div style={{
      background:'#FFF', border:`1px solid ${MC_LINE}`, borderRadius: 12, padding: 16,
      display:'flex', flexDirection:'column', gap: 12,
    }}>
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap: 10 }}>
        <McSectionHeader icon={McIcon.sparkle} title="Upskill Hub" subtitle="Recommended for your role"/>
        <button style={{
          background:'transparent', border:'none', cursor:'pointer',
          color: MC_PRIMARY, fontFamily:'inherit', fontSize: 12.5, fontWeight: 600,
          display:'inline-flex', alignItems:'center', gap: 4, padding: 0,
          marginTop: 6,
        }}>Open Hub {McIcon.external(MC_PRIMARY)}</button>
      </div>

      <div style={{
        display:'flex', gap: 10, overflowX:'auto', paddingBottom: 4,
        scrollSnapType:'x mandatory',
      }}>
        {MC_HUB_PICKS.map(p => (
          <div key={p.id} style={{
            flexShrink: 0, width: 200,
            border:`1px solid ${MC_LINE}`, borderRadius: 12, overflow:'hidden',
            scrollSnapAlign:'start', background:'#FFF',
          }}>
            <div style={{ width:'100%', height: 125, background: p.gradient }}/>
            <div style={{ padding: 10, display:'flex', flexDirection:'column', gap: 4 }}>
              <div style={{
                fontSize: 13, fontWeight: 600, color: MC_INK, lineHeight:'17px',
                display:'-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient:'vertical', overflow:'hidden',
              }}>{p.title}</div>
              <div style={{ fontSize: 11, color: MC_MUTED }}>{p.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────

function MyCourse() {
  const [tab, setTab] = React.useState('ongoing');
  const [selected, setSelected] = React.useState(null);
  const [noticeOpen, setNoticeOpen] = React.useState(false);
  const [enrollOpen, setEnrollOpen] = React.useState(false);

  const openDetails = id => setSelected(id);
  const closeDetails = () => setSelected(null);

  const selectedCourse = selected
    ? [...MC_ASSIGNED, ...MC_UPCOMING, ...MC_ONGOING, ...MC_COMPLETED].find(c => c.id === selected)
    : null;

  return (
    <div style={{
      position:'relative',
      width:'100%', height:'100%', background:'#F7F8FA',
      overflowY:'auto', WebkitOverflowScrolling:'touch',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
    }}>
      <div style={{
        padding:'60px 18px 120px',
        display:'flex', flexDirection:'column', gap: 16,
      }}>

        {selected ? (
          <McCourseDetails
            courseId={selected}
            onBack={closeDetails}
            onStartCourse={() => setNoticeOpen(true)}
            onEnroll={() => setEnrollOpen(true)}
          />
        ) : (
          <div style={{
            background:'#FFF', border:`1px solid ${MC_LINE}`, borderRadius: 12,
            padding: 14,
            display:'flex', flexDirection:'column', gap: 14,
          }}>
            {/* Page title */}
            <div style={{ display:'flex', alignItems:'flex-start', gap: 10 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, background:'#FFF',
                border:`1px solid ${MC_LINE}`,
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>{McIcon.book(MC_PRIMARY)}</div>
              <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
                <div style={{ fontSize: 20, fontWeight: 600, color: MC_INK, lineHeight:'22px', letterSpacing:'-0.015em' }}>My Course</div>
                <div style={{ fontSize: 12.5, color: MC_MUTED }}>Track your course progress and upcoming schedules.</div>
              </div>
            </div>

            {/* Tabs — horizontal scroll */}
            <div style={{
              display:'flex', gap: 6, overflowX:'auto', paddingBottom: 2,
              scrollbarWidth:'none', msOverflowStyle:'none',
            }}>
              {MC_TABS.map(it => {
                const active = it.key === tab;
                return (
                  <button key={it.key} onClick={() => setTab(it.key)} style={{
                    flexShrink: 0, height: 32, padding:'2px 14px', borderRadius: 999,
                    background: active ? MC_PRIMARY : '#FFF',
                    color: active ? '#FFF' : MC_BODY,
                    border: active ? 'none' : `1px solid ${MC_LINE}`,
                    cursor:'pointer', fontFamily:'inherit', fontSize: 13, fontWeight: 500,
                  }}>{it.label}</button>
                );
              })}
            </div>

            {/* Course list — horizontal scroll, ~1.5 cards visible */}
            <div style={{
              display:'flex', flexDirection:'row', gap: 12,
              overflowX:'auto', scrollSnapType:'x mandatory',
              paddingBottom: 4,
              scrollbarWidth:'none', msOverflowStyle:'none',
            }}>
              <McCourseList tab={tab} onDetails={openDetails}/>
            </div>
          </div>
        )}

      </div>

      {noticeOpen && <McNoticeModal onClose={() => setNoticeOpen(false)}/>}
      {enrollOpen && selectedCourse && (
        <McEnrollModal
          courseTitle={selectedCourse.title}
          onCancel={() => setEnrollOpen(false)}
          onConfirm={() => setEnrollOpen(false)}
        />
      )}
    </div>
  );
}

// ─── Discover screen ──────────────────────────────────────────

function DiscoverScreen() {
  return (
    <div style={{
      width:'100%', height:'100%', background:'#F7F8FA',
      paddingTop: 60, paddingBottom: 120,
      overflowY:'auto',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
    }}>
      <div style={{ padding:'0 18px', display:'flex', flexDirection:'column', gap: 16 }}>

        <div style={{ display:'flex', alignItems:'flex-start', gap: 10, marginTop: 4 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10, background:'#FFF',
            border:`1px solid ${MC_LINE}`,
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>{McIcon.sparkle(MC_PRIMARY)}</div>
          <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
            <div style={{ fontSize: 20, fontWeight: 600, color: MC_INK, lineHeight:'22px', letterSpacing:'-0.015em' }}>Discover</div>
            <div style={{ fontSize: 12.5, color: MC_MUTED }}>Explore recommended courses to grow your skills.</div>
          </div>
        </div>

        <McUpskillHub/>

      </div>
    </div>
  );
}

window.MyCourse = MyCourse;
window.DiscoverScreen = DiscoverScreen;
