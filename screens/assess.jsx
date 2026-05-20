// Trainee Assessment screen
// Depends on: data/trainee-assess.data.js (AS_PENDING_SUMMARY, AS_PENDING, AS_GRADED)

const AS_PRIMARY = '#1570EF';
const AS_PRIMARY_SOFT = '#D1E9FF';
const AS_INK = '#252B37';
const AS_BODY = '#414651';
const AS_MUTED = '#717680';
const AS_FAINT = '#A4A7AE';
const AS_LINE = '#E9EAEB';
const AS_LINE2 = '#F5F5F5';

const AS_ALL = AS_PENDING.concat(AS_GRADED);

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
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
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
      padding:'4px 10px', borderRadius: 999,
      background: config.bg, color: config.fg,
      fontSize: 12, fontWeight: 600, lineHeight:'16px',
    }}>{status}</span>
  );
}

function AsTypeBadge({ type }) {
  const isQuiz = type === 'Quiz';
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap: 4,
      padding:'4px 10px', borderRadius: 6,
      background: isQuiz ? '#EFF8FF' : '#F4F3FF',
      color: isQuiz ? '#175CD3' : '#5925DC',
      fontSize: 12, fontWeight: 600, lineHeight:'16px',
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
      padding: 16, borderRadius: 12,
      background:'#FFF', border:'1px solid ' + AS_LINE,
      display:'flex', flexDirection:'column', gap: 10,
    }}>
      {/* 1. Title */}
      <div style={{
        fontSize: 15, fontWeight: 600, color: AS_INK, lineHeight:'20px',
        letterSpacing:'-0.01em',
      }}>{item.assessmentName}</div>

      {/* 2. Description (course) */}
      <div style={{
        fontSize: 13, color: AS_MUTED, lineHeight:'18px',
      }}>{item.courseName}</div>

      {/* 3. Labels row (type + status) */}
      <div style={{ display:'flex', flexWrap:'wrap', gap: 8, alignItems:'center' }}>
        <AsTypeBadge type={item.assessmentType}/>
        <AsStatusBadge status={item.status}/>
        {item.score != null ? (
          <span style={{
            marginLeft:'auto',
            fontSize: 13, fontWeight: 600, color: AS_INK,
            fontVariantNumeric:'tabular-nums',
          }}>Score {item.score}</span>
        ) : null}
      </div>

      {/* 4. Date row */}
      <span style={{
        display:'inline-flex', alignItems:'center', gap: 6,
        fontSize: 13, color: isOverdue ? '#B42318' : AS_BODY,
        fontWeight: isOverdue ? 600 : 500,
      }}>
        <AsIcCalendar c={isOverdue ? '#B42318' : AS_MUTED}/>
        <span>{item.deadline}</span>
      </span>

      <button onClick={() => onView(item.id)} style={{
        height: 40, borderRadius: 8, marginTop: 2,
        background: AS_PRIMARY_SOFT, color: AS_PRIMARY, border:'none', cursor:'pointer',
        fontFamily:'inherit', fontSize: 13.5, fontWeight: 600,
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
            <div style={{ fontSize: 20, fontWeight: 600, lineHeight:'24px', letterSpacing:'-0.015em' }}>
              <span style={{ color: AS_MUTED }}>Track your </span>
              <span style={{ color: AS_PRIMARY }}>assessments.</span>
            </div>
          </div>
        </div>

        {/* Pending Assessments — metric summary */}
        <div style={{
          background:'#FFF', border:'1px solid ' + AS_LINE, borderRadius: 12, padding: 14,
          display:'flex', flexDirection:'column', gap: 12,
        }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: AS_INK, lineHeight:'20px', letterSpacing:'-0.005em' }}>Pending Assessments</div>
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
          <div style={{ display:'flex', alignItems:'flex-start', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'rgba(21,112,239,0.10)',
              display:'flex', alignItems:'center', justifyContent:'center',
              flexShrink: 0,
            }}>
              <AsIcClipboard c={AS_PRIMARY}/>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap: 2 }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: AS_INK, lineHeight:'20px', letterSpacing:'-0.01em' }}>Assessment List</div>
              <div style={{ fontSize: 12, color: AS_MUTED, lineHeight:'16px' }}>
                Browse and complete your quizzes and assignments
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{
            display:'flex', background: 'rgba(21,112,239,0.06)', borderRadius: 10, padding: 3,
            border:'1px solid rgba(21,112,239,0.10)',
          }}>
            {[
              { k:'pending', label:'Pending',         count: AS_PENDING.length },
              { k:'all',     label:'All Assessments', count: AS_ALL.length },
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
                  display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
                }}>
                  <span>{it.label}</span>
                  <span style={{
                    display:'inline-flex', alignItems:'center', justifyContent:'center',
                    minWidth: 20, height: 18, padding:'0 6px', borderRadius: 999,
                    background: active ? AS_PRIMARY_SOFT : 'rgba(21,112,239,0.10)',
                    color: AS_PRIMARY, fontSize: 11, fontWeight: 600, lineHeight: 1,
                    fontVariantNumeric:'tabular-nums',
                  }}>{it.count}</span>
                </button>
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
