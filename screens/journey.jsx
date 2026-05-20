// Trainee Journey screen
// Depends on: data/trainee-journey.data.js (JN_ASSIGNED, JN_ONGOING, JN_UPCOMING,
//   JN_COMPLETED, JN_HUB_PROGRAMS)

const JN_PRIMARY = '#1056d9';
const JN_PRIMARY_SOFT = '#e8effc';
const JN_INK = '#252B37';
const JN_BODY = '#414651';
const JN_MUTED = '#717680';
const JN_LINE = '#E9EAEB';
const JN_SUCCESS = '#039855';
const JN_SUCCESS_SOFT = '#ECFDF3';

const JN_TABS = [
  { key: 'assigned',  label: 'Assigned' },
  { key: 'journey',   label: 'Journey' },
  { key: 'ongoing',   label: 'Ongoing' },
  { key: 'upcoming',  label: 'Upcoming' },
  { key: 'completed', label: 'Completed' },
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
function JnIcArrow({ c = '#FFF' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
      <div style={{
        position:'relative', width:'100%', height: 175,
        background: program.gradient || 'linear-gradient(135deg, #0684C0 0%, #2C5AA0 100%)',
      }}>
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
        <div style={{ display:'flex', flexDirection:'column', gap: 4 }}>
          <JnInfoRow label="Modules" value={program.totalModules + ' Modules'}/>
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
    </div>
  );
}

function JnOngoingFooter({ program }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
      <div style={{ display:'flex', flexDirection:'column', gap: 4 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
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
        <span>Resume Journey →</span>
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

function JnJourneyHub() {
  return (
    <div style={{
      background:'#FFF', border:'1px solid ' + JN_LINE, borderRadius: 12, padding: 16,
      display:'flex', flexDirection:'column', gap: 12,
      boxShadow:'0px 2px 8px 0px rgba(16,24,40,0.06)',
    }}>
      <JnSectionHeader icon={<JnIcCompass c={JN_PRIMARY}/>} title="Journey Hub" subtitle="Discover more journey programs"/>
      <div style={{
        display:'flex', gap: 12, overflowX:'auto',
        paddingBottom: 4, marginLeft: 6, marginRight: 6, marginTop: 0, marginBottom: 0,
        paddingLeft: 16, paddingRight: 16,
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
            <div style={{
              position:'relative', width:'100%', height: 146,
              background: p.gradient,
            }}>
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
            <div style={{ padding: 14, display:'flex', flexDirection:'column', gap: 8 }}>
              <div style={{ display:'flex', flexDirection:'column', gap: 4 }}>
                <JnInfoRow label="Courses"  value={p.totalModules + ' Modules'}/>
                <JnInfoRow label="Duration" value={p.duration}/>
                <JnInfoRow label="Category" value={p.category}/>
              </div>
              <div style={{ paddingTop: 6 }}>
                <button style={{
                  width:'100%', height: 40, borderRadius: 8,
                  background: JN_PRIMARY_SOFT, color: JN_PRIMARY, border:'none', cursor:'pointer',
                  fontFamily:'inherit', fontSize: 12.5, fontWeight: 600,
                  display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
                }}>
                  <span>View Details</span>
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
  const [tab, setTab] = React.useState('ongoing');
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
        <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10, background:'#FFF',
            border:'1px solid ' + JN_LINE,
            display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
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
        <div style={{
          background:'#FFF', border:'1px solid ' + JN_LINE, borderRadius: 12, padding: 16,
          display:'flex', flexDirection:'column', gap: 14,
          boxShadow:'0px 2px 8px 0px rgba(16,24,40,0.06)',
        }}>
          <JnSectionHeader icon={<JnIcRoute c={JN_PRIMARY}/>} title="My Journey" subtitle="Track your journey progress and upcoming schedules."/>
          <div style={{ display:'flex', gap: 6, overflowX:'auto', paddingBottom: 2, scrollbarWidth:'none', msOverflowStyle:'none' }}>
            {JN_TABS.map(it => {
              const active = it.key === tab;
              return (
                <button key={it.key} onClick={() => setTab(it.key)} style={{
                  flexShrink: 0, height: 30, padding:'6px 14px', borderRadius: 999,
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
