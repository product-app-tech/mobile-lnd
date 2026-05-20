// Line Manager screens
// Depends on: data/lm-dashboard.data.js (LM_PROFILE, LM_METRICS, LM_TEAM,
//   LM_ASSIGNED, LM_COMPLETED, LM_INPROGRESS, LM_MONTHLY_TREND)
// Depends on: screens/profile.jsx (ProfileScreen, Pr* helpers — reused for LmProfileScreen)

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
