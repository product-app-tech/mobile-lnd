// Journey screen — mobile adaptation of /trainee/journey
// Source: ridho/lnd-presight-demo/src/pages/trainee/journey
// Sections: My Journey (Assigned · Ongoing · Upcoming · Completed) · Completion Rate · Journey Hub

console.log('[journey.jsx] script start');

const JN_PRIMARY = '#1056d9';
const JN_PRIMARY_HOVER = '#0d47c2';
const JN_PRIMARY_SOFT = '#e8effc';
const JN_INK = '#252B37';
const JN_BODY = '#414651';
const JN_MUTED = '#717680';
const JN_SUBTLE = '#868d9d';
const JN_LINE = '#E9EAEB';
const JN_SUCCESS = '#039855';
const JN_SUCCESS_SOFT = '#ECFDF3';

// ─── Mock data (mirrors source repo) ──────────────────────────

const JN_ASSIGNED = [
  {
    id: 'ja-1',
    title: 'Data Storytelling Mastery',
    category: 'Professional Development',
    targetLevel: 'G3 - Mid Level',
    duration: '2 Weeks',
    totalModules: 6,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70',
  },
];

const JN_ONGOING = [
  {
    id: 'jo-1',
    title: 'Digital Marketing Leadership Track',
    category: 'Leadership',
    targetLevel: 'G4 - Senior Level',
    duration: '4 Weeks',
    totalModules: 10,
    progress: 45,
    completedModules: 4,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=70',
  },
];

const JN_UPCOMING = [
  {
    id: 'ju-1',
    title: 'AI Strategy for Business Leaders',
    category: 'Strategy',
    targetLevel: 'G4 - Senior Level',
    duration: '3 Weeks',
    totalModules: 9,
    startDate: '01 Jun 2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=70',
  },
];

const JN_COMPLETED = [
  {
    id: 'jc-1',
    title: 'Foundations of Product Management',
    category: 'Professional Development',
    targetLevel: 'G3 - Mid Level',
    duration: '3 Weeks',
    totalModules: 8,
    completedAt: '12 Apr 2026',
    certified: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=70',
  },
];

const JN_HUB_PROGRAMS = [
  {
    id: 'jp-1',
    title: 'Professional Development & Certifications: Data Analytics',
    category: 'Professional Development',
    targetRole: 'All',
    targetLevel: 'G4 - Senior Level',
    duration: '3 Weeks',
    totalModules: 12,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70',
  },
  {
    id: 'jp-2',
    title: 'Leadership Program: Marketing',
    category: 'Leadership',
    targetRole: 'Marketing',
    targetLevel: 'G4 - Senior Level',
    duration: '2 Weeks',
    totalModules: 8,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=70',
  },
  {
    id: 'jp-3',
    title: 'Cloud Architecture Specialist Track',
    category: 'Technical',
    targetRole: 'Engineering',
    targetLevel: 'G3 - Mid Level',
    duration: '5 Weeks',
    totalModules: 14,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=70',
  },
];

const JN_SUMMARY = {
  totalJourneys: 4,
  completed: 1,
  inProgress: 1,
  certificates: 1,
  hoursThisMonth: 18,
  overallRate: 38,
};

const JN_TABS = [
  { key: 'assigned',  label: 'Assigned' },
  { key: 'ongoing',   label: 'Ongoing'  },
  { key: 'upcoming',  label: 'Upcoming' },
  { key: 'completed', label: 'Completed' },
];

// ─── Icons (inline, no deps) ──────────────────────────────────

const JnIcon = {
  route:    (c='currentColor') => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="19" r="3" stroke={c} strokeWidth="1.6"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="18" cy="5" r="3" stroke={c} strokeWidth="1.6"/></svg>),
  compass:  (c='currentColor') => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/><path d="m15.5 8.5-2 5.5-5.5 2 2-5.5 5.5-2Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  clock:    (c='currentColor') => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/><path d="M12 7v5l3 2" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>),
  layers:   (c='currentColor') => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="m12 2 9 5-9 5-9-5 9-5Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  award:    (c='currentColor') => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="6" stroke={c} strokeWidth="1.6"/><path d="m8 14-1 8 5-3 5 3-1-8" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  arrow:    (c='currentColor') => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  eye:      (c='currentColor') => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" stroke={c} strokeWidth="1.6"/><circle cx="12" cy="12" r="3" stroke={c} strokeWidth="1.6"/></svg>),
  more:     (c='currentColor') => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="12" r="1.5" fill={c}/><circle cx="12" cy="12" r="1.5" fill={c}/><circle cx="18" cy="12" r="1.5" fill={c}/></svg>),
  trophy:   (c='currentColor') => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 4h12v4a6 6 0 0 1-12 0V4Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/><path d="M6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3M12 14v4M9 22h6" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>),
  target:   (c='currentColor') => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/><circle cx="12" cy="12" r="5" stroke={c} strokeWidth="1.6"/><circle cx="12" cy="12" r="1.5" fill={c}/></svg>),
  rocket:   (c='currentColor') => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 14s-2 4-6 4 0-6 0-6M4 14c2-7 7-11 14-11 0 7-4 12-11 14L4 14Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/><circle cx="14" cy="9" r="1.5" stroke={c} strokeWidth="1.6"/></svg>),
  external: (c='currentColor') => (<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M14 4h6v6M20 4l-9 9M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>),
};

// ─── Reusable bits ────────────────────────────────────────────

function JnSectionHeader({ icon, title, subtitle }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-start', gap: 10, marginBottom: 12 }}>
      <div style={{
        width: 38, height: 38, borderRadius: 10,
        background: 'rgba(16,86,217,0.10)',
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>{icon(JN_PRIMARY)}</div>
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

// ─── Empty state ──────────────────────────────────────────────

function JnEmptyState({ title, message, ctaLabel, onCta }) {
  return (
    <div style={{
      background:'#FFF', border:`1px solid ${JN_LINE}`, borderRadius: 12,
      padding:'28px 20px', textAlign:'center',
      display:'flex', flexDirection:'column', alignItems:'center', gap: 8,
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: 18, background: JN_PRIMARY_SOFT,
        display:'flex', alignItems:'center', justifyContent:'center', marginBottom: 4,
      }}>{JnIcon.route(JN_PRIMARY)}</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: JN_BODY }}>{title}</div>
      <div style={{ fontSize: 12.5, color: JN_MUTED, lineHeight:'17px', maxWidth: 280 }}>{message}</div>
      {ctaLabel && (
        <button onClick={onCta} style={{
          marginTop: 6, height: 36, padding:'0 18px', borderRadius: 18,
          background: JN_PRIMARY, color:'#FFF', border:'none', cursor:'pointer',
          fontFamily:'inherit', fontSize: 13, fontWeight: 600,
          display:'inline-flex', alignItems:'center', gap: 6,
        }}>{ctaLabel} {JnIcon.arrow('#FFF')}</button>
      )}
    </div>
  );
}

// ─── Program card ─────────────────────────────────────────────

function JnProgramCard({ program, footer, badge }) {
  return (
    <div style={{
      background:'#FFF', border:`1px solid ${JN_LINE}`,
      borderRadius: 12, overflow:'hidden',
      display:'flex', flexDirection:'column',
    }}>
      <div style={{ position:'relative', width:'100%', aspectRatio:'16 / 9', background:'#F5F5F5' }}>
        <img src={program.image} alt={program.title}
          onError={e => { e.currentTarget.style.display='none'; }}
          style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.15) 55%, transparent)',
        }}/>
        <div style={{
          position:'absolute', left: 12, right: 12, bottom: 10,
          color:'#FFF', fontSize: 14.5, fontWeight: 600, letterSpacing:'-0.01em',
          lineHeight:'18px',
          display:'-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient:'vertical', overflow:'hidden',
        }}>{program.title}</div>
        {badge}
      </div>
      <div style={{ padding: 14, display:'flex', flexDirection:'column', gap: 10 }}>
        <div style={{ display:'flex', flexDirection:'column', gap: 6, paddingBottom: 8, borderBottom:`1px solid rgba(0,0,0,0.05)` }}>
          <JnInfoRow label="Modules" value={`${program.totalModules} Courses`}/>
          <JnInfoRow label="Duration" value={program.duration}/>
          <JnInfoRow label="Category" value={program.category}/>
        </div>
        {footer}
      </div>
    </div>
  );
}

// ─── My Journey list per tab ──────────────────────────────────

function JnJourneyList({ tab, onDetails }) {
  if (tab === 'assigned') {
    if (JN_ASSIGNED.length === 0) {
      return <JnEmptyState
        title="No Assigned Journey"
        message="You don't have any assigned journey right now. Check the hub for available programs!"
        ctaLabel="Explore Journey Hub" onCta={() => {}}/>;
    }
    return JN_ASSIGNED.map(p => (
      <JnProgramCard key={p.id} program={p} footer={
        <div style={{ display:'flex', gap: 8 }}>
          <button onClick={() => onDetails(p.id)} style={{
            flex: 1, height: 40, borderRadius: 10,
            background: JN_PRIMARY, color:'#FFF', border:'none', cursor:'pointer',
            fontFamily:'inherit', fontSize: 13.5, fontWeight: 600,
            display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
          }}>Start Journey {JnIcon.arrow('#FFF')}</button>
          <button style={{
            width: 40, height: 40, borderRadius: 10,
            background:'#F5F5F5', color: JN_BODY, border:'none', cursor:'pointer',
            display:'inline-flex', alignItems:'center', justifyContent:'center',
          }}>{JnIcon.more(JN_BODY)}</button>
        </div>
      }/>
    ));
  }

  if (tab === 'ongoing') {
    if (JN_ONGOING.length === 0) {
      return <JnEmptyState
        title="No Ongoing Journey"
        message="You don't have any active journey right now. Start a new journey to begin learning!"
        ctaLabel="Explore Journey Hub" onCta={() => {}}/>;
    }
    return JN_ONGOING.map(p => (
      <JnProgramCard key={p.id} program={p} footer={
        <>
          <div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 6 }}>
              <span style={{ fontSize: 11.5, color: JN_MUTED }}>
                {p.completedModules}/{p.totalModules} modules complete
              </span>
              <span style={{ fontSize: 12, fontWeight: 600, color: JN_PRIMARY }}>{p.progress}%</span>
            </div>
            <div style={{ height: 6, borderRadius: 999, background: JN_PRIMARY_SOFT, overflow:'hidden' }}>
              <div style={{
                width: `${p.progress}%`, height:'100%', borderRadius: 999,
                background:'linear-gradient(90deg, #5B8DEF, #1056d9)',
              }}/>
            </div>
          </div>
          <button onClick={() => onDetails(p.id)} style={{
            marginTop: 2, height: 40, borderRadius: 10,
            background: JN_PRIMARY_SOFT, color: JN_PRIMARY, border:'none', cursor:'pointer',
            fontFamily:'inherit', fontSize: 13.5, fontWeight: 600,
            display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
          }}>Resume Journey {JnIcon.arrow(JN_PRIMARY)}</button>
        </>
      }/>
    ));
  }

  if (tab === 'upcoming') {
    if (JN_UPCOMING.length === 0) {
      return <JnEmptyState
        title="No Upcoming Journey"
        message="No upcoming journey scheduled for you yet. Check the hub for available programs!"
        ctaLabel="Discover Journey" onCta={() => {}}/>;
    }
    return JN_UPCOMING.map(p => (
      <JnProgramCard key={p.id} program={p} footer={
        <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap: 6,
            padding:'8px 10px', borderRadius: 8,
            background: '#FFF7ED', color:'#C2410C',
            fontSize: 12, fontWeight: 500,
          }}>
            {JnIcon.clock('#C2410C')} Starts {p.startDate}
          </div>
          <button onClick={() => onDetails(p.id)} style={{
            height: 40, borderRadius: 10,
            background:'transparent', color: JN_PRIMARY, border:`1px solid ${JN_PRIMARY_SOFT}`,
            cursor:'pointer', fontFamily:'inherit', fontSize: 13.5, fontWeight: 600,
            display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
          }}>View Details {JnIcon.arrow(JN_PRIMARY)}</button>
        </div>
      }/>
    ));
  }

  // completed
  if (JN_COMPLETED.length === 0) {
    return <JnEmptyState
      title="No Completed Journey"
      message="You haven't completed any journey yet. Keep going, you're doing great!"
      ctaLabel="Browse Journey" onCta={() => {}}/>;
  }
  return JN_COMPLETED.map(p => (
    <JnProgramCard key={p.id} program={p} badge={p.certified && (
      <div style={{
        position:'absolute', top: 10, left: 10, zIndex: 2,
        display:'inline-flex', alignItems:'center', gap: 4,
        padding:'3px 8px', borderRadius: 999,
        background: JN_SUCCESS_SOFT, color: JN_SUCCESS,
        fontSize: 10.5, fontWeight: 600,
      }}>{JnIcon.award(JN_SUCCESS)} Certified</div>
    )} footer={
      <>
        <div style={{ height: 6, borderRadius: 999, background:'#ECFDF3', overflow:'hidden' }}>
          <div style={{ width:'100%', height:'100%', background:'linear-gradient(90deg, #12B76A, #039855)' }}/>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span style={{ fontSize: 11.5, color: JN_MUTED }}>Completed {p.completedAt}</span>
          <button onClick={() => onDetails(p.id)} style={{
            background: JN_PRIMARY_SOFT, color: JN_PRIMARY, border:'none', cursor:'pointer',
            padding:'6px 14px', borderRadius: 10,
            fontFamily:'inherit', fontSize: 12.5, fontWeight: 600,
          }}>View Certificate</button>
        </div>
      </>
    }/>
  ));
}

// ─── Journey Completion Rate ──────────────────────────────────

function JnStat({ icon, iconBg, label, value }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
      <div style={{
        width: 30, height: 30, borderRadius: 8, background: iconBg,
        display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
      }}>{icon}</div>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: JN_INK, lineHeight:'20px', letterSpacing:'-0.01em' }}>{value}</div>
        <div style={{ fontSize: 10.5, color: JN_MUTED, lineHeight:'13px' }}>{label}</div>
      </div>
    </div>
  );
}

function JnCompletionRate() {
  const rate = JN_SUMMARY.overallRate;
  const circumference = 2 * Math.PI * 38;
  const offset = circumference - (rate / 100) * circumference;

  return (
    <div style={{
      background:'#FFF', border:`1px solid ${JN_LINE}`, borderRadius: 12, padding: 16,
      display:'flex', flexDirection:'column', gap: 16,
    }}>
      <JnSectionHeader icon={JnIcon.target} title="Journey Completion Rate"
        subtitle="Your overall journey progress"/>

      <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
        <div style={{ position:'relative', width: 96, height: 96, flexShrink: 0 }}>
          <svg width="96" height="96" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="38" fill="none" stroke={JN_PRIMARY_SOFT} strokeWidth="8"/>
            <circle cx="48" cy="48" r="38" fill="none" stroke={JN_PRIMARY} strokeWidth="8"
              strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
              transform="rotate(-90 48 48)"/>
          </svg>
          <div style={{
            position:'absolute', inset: 0,
            display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
          }}>
            <div style={{ fontSize: 22, fontWeight: 600, color: JN_INK, lineHeight: 1 }}>{rate}%</div>
            <div style={{ fontSize: 10, color: JN_MUTED, marginTop: 2 }}>complete</div>
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10, flex: 1 }}>
          <JnStat icon={JnIcon.layers(JN_PRIMARY)}  iconBg='rgba(16,86,217,0.10)' label="Total"        value={JN_SUMMARY.totalJourneys}/>
          <JnStat icon={JnIcon.award('#16a34a')}    iconBg='#ECFDF3'              label="Completed"    value={JN_SUMMARY.completed}/>
          <JnStat icon={JnIcon.rocket('#d97706')}   iconBg='#FFFBEB'              label="In Progress"  value={JN_SUMMARY.inProgress}/>
          <JnStat icon={JnIcon.trophy('#ea580c')}   iconBg='#FFF7ED'              label="Certificates" value={JN_SUMMARY.certificates}/>
        </div>
      </div>

      <div style={{
        display:'flex', alignItems:'center', gap: 8,
        background:'#f8f9fb', borderRadius: 10, padding:'10px 12px',
      }}>
        {JnIcon.clock(JN_MUTED)}
        <span style={{ fontSize: 12.5, color: JN_BODY }}>
          <span style={{ fontWeight: 600 }}>{JN_SUMMARY.hoursThisMonth}h</span> journey learning this month
        </span>
      </div>
    </div>
  );
}

// ─── Journey Hub ──────────────────────────────────────────────

function JnJourneyHub({ onViewDetails }) {
  return (
    <div style={{
      background:'#FFF', border:`1px solid ${JN_LINE}`, borderRadius: 12, padding: 16,
      display:'flex', flexDirection:'column', gap: 12,
    }}>
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap: 10 }}>
        <JnSectionHeader icon={JnIcon.compass} title="Journey Hub"
          subtitle="Explore development programs and certifications."/>
        <button style={{
          background:'transparent', border:'none', cursor:'pointer',
          color: JN_PRIMARY, fontFamily:'inherit', fontSize: 12.5, fontWeight: 600,
          display:'inline-flex', alignItems:'center', gap: 4, padding: 0, marginTop: 6,
        }}>Open Hub {JnIcon.external(JN_PRIMARY)}</button>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
        {JN_HUB_PROGRAMS.map(p => (
          <div key={p.id} style={{
            border:`1px solid ${JN_LINE}`, borderRadius: 12, overflow:'hidden',
            background:'#FFF', display:'flex', flexDirection:'column',
          }}>
            <div style={{ position:'relative', width:'100%', aspectRatio:'16 / 9', background:'#F5F5F5' }}>
              <img src={p.image} alt={p.title}
                onError={e => { e.currentTarget.style.display='none'; }}
                style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              <div style={{
                position:'absolute', inset:0,
                background:'linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.15) 55%, transparent)',
              }}/>
              <div style={{
                position:'absolute', left: 12, right: 12, bottom: 10,
                color:'#FFF', fontSize: 14, fontWeight: 600, letterSpacing:'-0.01em',
                lineHeight:'18px',
                display:'-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient:'vertical', overflow:'hidden',
              }}>{p.title}</div>
            </div>
            <div style={{ padding: 14, display:'flex', flexDirection:'column', gap: 10 }}>
              <div style={{ display:'flex', flexDirection:'column', gap: 6, paddingBottom: 8, borderBottom:`1px solid rgba(0,0,0,0.05)` }}>
                <JnInfoRow label="Courses"  value={`${p.totalModules} Courses`}/>
                <JnInfoRow label="Duration" value={p.duration}/>
                <JnInfoRow label="Category" value={p.category}/>
              </div>
              <div style={{ display:'flex', gap: 8 }}>
                <button onClick={() => onViewDetails(p.id)} style={{
                  flex: 1, height: 40, borderRadius: 8,
                  background: JN_PRIMARY_SOFT, color: JN_PRIMARY, border:'none', cursor:'pointer',
                  fontFamily:'inherit', fontSize: 13.5, fontWeight: 600,
                  display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
                }}>{JnIcon.eye(JN_PRIMARY)} View Details</button>
                <button style={{
                  width: 40, height: 40, borderRadius: 8,
                  background:'#F5F5F5', color: JN_BODY, border:'none', cursor:'pointer',
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                }}>{JnIcon.more(JN_BODY)}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────

function Journey() {
  const [tab, setTab] = React.useState('assigned');
  const [selected, setSelected] = React.useState(null);

  return (
    <div style={{
      width:'100%', height:'100%', background:'#F7F8FA',
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
            border:`1px solid ${JN_LINE}`,
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>{JnIcon.route(JN_PRIMARY)}</div>
          <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
            <div style={{ fontSize: 12.5, color: JN_MUTED, lineHeight:'16px' }}>Your Learning Journey</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: JN_INK, lineHeight:'24px', letterSpacing:'-0.015em' }}>
              Track your <span style={{ color: JN_PRIMARY }}>growth milestones!</span>
            </div>
          </div>
        </div>

        {/* Completion Rate */}
        <JnCompletionRate/>

        {/* My Journey */}
        <div style={{
          background:'#FFF', border:`1px solid ${JN_LINE}`, borderRadius: 12, padding: 16,
          display:'flex', flexDirection:'column', gap: 14,
        }}>
          <JnSectionHeader icon={JnIcon.route} title="My Journey"
            subtitle="Track your journey progress and upcoming schedules."/>

          <div style={{
            display:'flex', gap: 6, overflowX:'auto', paddingBottom: 2,
            scrollbarWidth:'none', msOverflowStyle:'none',
          }}>
            {JN_TABS.map(it => {
              const active = it.key === tab;
              return (
                <button key={it.key} onClick={() => setTab(it.key)} style={{
                  flexShrink: 0, height: 32, padding:'2px 14px', borderRadius: 999,
                  background: active ? JN_PRIMARY : '#FFF',
                  color: active ? '#FFF' : JN_BODY,
                  border: active ? 'none' : `1px solid ${JN_LINE}`,
                  cursor:'pointer', fontFamily:'inherit', fontSize: 13, fontWeight: 500,
                }}>{it.label}</button>
              );
            })}
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
            <JnJourneyList tab={tab} onDetails={id => setSelected(id)}/>
          </div>
        </div>

        {/* Journey Hub */}
        <JnJourneyHub onViewDetails={id => setSelected(id)}/>

      </div>
    </div>
  );
}

window.Journey = Journey;
console.log('[journey.jsx] window.Journey assigned:', typeof window.Journey);
