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

// ─── Mock data (mirrors source repo) ──────────────────────────

const MC_ASSIGNED = [
  {
    id: 'as-1',
    title: 'Digital Marketing Essentials',
    level: 'Beginner',
    duration: '1h 40 min',
    type: 'Self-Learning',
    source: 'LnD',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=70',
  },
];

const MC_UPCOMING = [
  {
    id: 'up-1',
    title: 'AI Ethics & Responsible AI Implementation',
    level: 'Intermediate',
    date: '16 Mar – 17 Mar 2026',
    type: 'Blended Learning',
    source: 'LnD',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=70',
  },
];

const MC_COMPLETED = [
  {
    id: 'cm-1',
    title: 'Foundations of Data Storytelling',
    level: 'Intermediate', duration: '3h 20 min',
    source: 'LinkedIn Learning',
    lessons: { done: 12, total: 12 },
    certified: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=70',
  },
  {
    id: 'cm-2',
    title: 'Leadership Essentials for New Managers',
    level: 'Beginner', duration: '2h 10 min',
    source: 'O’Reilly',
    lessons: { done: 9, total: 9 },
    certified: true,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=70',
  },
];

const MC_ONGOING = [
  {
    id: 'og-1',
    title: 'Advanced React Patterns',
    level: 'Advanced', duration: '4h 12 min',
    source: 'LnD',
    progress: 62,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=70',
  },
];

const MC_SUMMARY = {
  averageProgress: 68, totalSkills: 12,
  achieved: 4, inProgress: 6, streakDays: 14, hoursMonth: 23,
};

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
  // 24px versions for stat tiles
  targetLg:(c='currentColor') => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.6"/><circle cx="12" cy="12" r="5" stroke={c} strokeWidth="1.6"/><circle cx="12" cy="12" r="1.6" fill={c}/></svg>),
  awardLg: (c='currentColor') => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="9" r="6" stroke={c} strokeWidth="1.6"/><path d="m8 14-1 8 5-3 5 3-1-8" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  bookLg:  (c='currentColor') => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke={c} strokeWidth="1.6"/></svg>),
  flameLg: (c='currentColor') => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3s4 4 4 8a4 4 0 1 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3 0-5 0-7Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/></svg>),
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

function McCourseCard({ course, footer, badge }) {
  return (
    <div style={{
      flexShrink: 0, width: 260, scrollSnapAlign:'start',
      background:'#FFF', border:`1px solid ${MC_LINE}`,
      borderRadius: 12, overflow:'hidden',
      display:'flex', flexDirection:'column',
    }}>
      <div style={{ position:'relative', width:'100%', height: 140, background:'#F5F5F5' }}>
        <img src={course.image} alt={course.title}
          onError={e => { e.currentTarget.style.display='none'; }}
          style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        {badge && (
          <div style={{ position:'absolute', top: 10, right: 10 }}>{badge}</div>
        )}
      </div>
      <div style={{ padding: 14, display:'flex', flexDirection:'column', gap: 8 }}>
        {course.source && (
          <div style={{ display:'flex' }}>
            <McSourceBadge source={course.source}/>
          </div>
        )}
        <div style={{
          fontSize: 14, fontWeight: 600, color: MC_INK, lineHeight:'18px',
          letterSpacing:'-0.01em', minHeight: 36,
          display:'-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient:'vertical', overflow:'hidden',
        }}>{course.title}</div>
        <McMetaRow items={[
          { icon: McIcon.bars(MC_MUTED),  text: course.level },
          { icon: McIcon.clock(MC_MUTED), text: course.duration || course.date },
        ]}/>
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
        <>
          <McProgressBar value={0}/>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 2 }}>
            <span style={{ fontSize: 11.5, color: MC_MUTED }}>Not started</span>
          </div>
          <button onClick={() => onDetails(c.id)} style={{
            marginTop: 4, height: 36, borderRadius: 10,
            background: MC_PRIMARY_SOFT, color: MC_PRIMARY, border:'none', cursor:'pointer',
            fontFamily:'inherit', fontSize: 13, fontWeight: 600,
            display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
          }}>Start Course {McIcon.arrow(MC_PRIMARY)}</button>
        </>
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
      <>
        <McProgressBar value={100} accentFrom='#12B76A' accentTo='#039855' track='#ECFDF3'/>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 2 }}>
          <span style={{ fontSize: 11.5, color: MC_MUTED }}>{c.lessons.done}/{c.lessons.total} lessons</span>
        </div>
        <button onClick={() => onDetails(c.id)} style={{
          marginTop: 4, height: 36, borderRadius: 10,
          background: MC_PRIMARY_SOFT, color: MC_PRIMARY, border:'none', cursor:'pointer',
          fontFamily:'inherit', fontSize: 13, fontWeight: 600,
          display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
        }}>View Certificate {McIcon.arrow(MC_PRIMARY)}</button>
      </>
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

// ─── Completion-rate ring + stats ─────────────────────────────

function McCompletionRate() {
  return (
    <div style={{
      background:'#FFF', border:`1px solid ${MC_LINE}`, borderRadius: 12, padding: 14,
      display:'flex', flexDirection:'column', gap: 12,
    }}>
      <McSectionHeader icon={McIcon.trend} title="Course Completion Rate"
        subtitle="Your current upskilling progress"/>

      <div style={{ width:'100%', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 8 }}>
        <McStat icon={McIcon.targetLg(MC_PRIMARY)} iconBg='rgba(16,86,217,0.10)' label="Total Skills" value={MC_SUMMARY.totalSkills}/>
        <McStat icon={McIcon.awardLg('#16a34a')}   iconBg='#ECFDF3'              label="Achieved"    value={MC_SUMMARY.achieved}/>
        <McStat icon={McIcon.bookLg('#d97706')}    iconBg='#FFFBEB'              label="In Progress" value={MC_SUMMARY.inProgress}/>
        <McStat icon={McIcon.flameLg('#ea580c')}   iconBg='#FFF7ED'              label="Day Streak"  value={MC_SUMMARY.streakDays}/>
      </div>

      <div style={{
        display:'flex', alignItems:'center', gap: 6,
        borderTop:`1px solid ${MC_LINE}`, paddingTop: 10,
      }}>
        {McIcon.clock(MC_MUTED)}
        <span style={{ fontSize: 12, color: MC_BODY }}>
          <span style={{ fontWeight: 600 }}>{MC_SUMMARY.hoursMonth}h</span> learning this month
        </span>
      </div>
    </div>
  );
}

function McStat({ icon, iconBg, label, value }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10, background: iconBg,
        display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
      }}>{icon}</div>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: MC_INK, lineHeight:'20px', letterSpacing:'-0.01em' }}>{value}</div>
        <div style={{ fontSize: 10.5, color: MC_MUTED, lineHeight:'13px' }}>{label}</div>
      </div>
    </div>
  );
}

// ─── Course details (selected course preview) ─────────────────

function McCourseDetails({ courseId, onBack }) {
  const course = [...MC_ASSIGNED, ...MC_UPCOMING, ...MC_ONGOING, ...MC_COMPLETED]
    .find(c => c.id === courseId) || MC_ASSIGNED[0];
  const lessons = [
    { title:'Introduction & Course Goals', dur:'8 min', done:true },
    { title:'Core Concepts Walkthrough',   dur:'22 min', done:true },
    { title:'Hands-on Practice',           dur:'35 min', done:false },
    { title:'Wrap-up & Assessment',        dur:'15 min', done:false },
  ];
  const remainingMin = lessons.filter(l => !l.done).reduce((s, l) => s + parseInt(l.dur, 10), 0);
  const timeRemaining = remainingMin >= 60
    ? `${Math.floor(remainingMin / 60)}h ${remainingMin % 60}m left`
    : `${remainingMin}m left`;

  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
      {/* Back row */}
      <button onClick={onBack} style={{
        alignSelf:'flex-start',
        display:'inline-flex', alignItems:'center', gap: 6,
        background:'transparent', border:'none', cursor:'pointer', padding: 0,
        color: MC_BODY, fontFamily:'inherit', fontSize: 13.5, fontWeight: 500,
      }}>{McIcon.back(MC_BODY)} Back</button>

      <div style={{
        background:'#FFF', border:`1px solid ${MC_LINE}`, borderRadius: 12, padding: 16,
        display:'flex', flexDirection:'column', gap: 14,
      }}>
        <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
          <div style={{ position:'relative', width:'100%', height: 180, borderRadius: 10, overflow:'hidden', background:'#F5F5F5' }}>
            <img src={course.image} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            <div style={{ position:'absolute', top: 10, right: 10 }}>
              <McSourceBadge source={course.source}/>
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap: 6 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: MC_INK, lineHeight:'20px', letterSpacing:'-0.01em' }}>{course.title}</div>
            <McMetaRow items={[
              { icon: McIcon.bars(MC_MUTED),  text: course.level },
              { icon: McIcon.clock(MC_MUTED), text: course.duration || course.date },
            ]}/>
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
          {lessons.map((l, i) => (
            <div key={i} style={{
              display:'flex', alignItems:'center', gap: 10,
              padding:'10px 12px', borderRadius: 10,
              background: l.done ? MC_SUCCESS_SOFT : '#FAFAFA',
              border:`1px solid ${l.done ? '#D1FADF' : MC_LINE}`,
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: 999,
                background: l.done ? MC_SUCCESS : '#FFF',
                border: l.done ? 'none' : `1.5px solid ${MC_LINE}`,
                display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
              }}>
                {l.done && <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5 9-11" stroke="#FFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
              <div style={{ flex: 1, fontSize: 13, color: MC_BODY, fontWeight: l.done ? 500 : 550 }}>{l.title}</div>
              <span style={{ fontSize: 11.5, color: MC_MUTED }}>{l.dur}</span>
            </div>
          ))}
        </div>

        <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
          <span style={{
            display:'inline-flex', alignItems:'center', gap: 4,
            padding:'4px 10px', borderRadius: 999,
            background: MC_PRIMARY_SOFT, color: MC_PRIMARY,
            fontSize: 11.5, fontWeight: 600,
          }}>{McIcon.clock(MC_PRIMARY)} {timeRemaining}</span>
          <button style={{
            flex: 1, height: 42, borderRadius: 10,
            background: MC_PRIMARY, color:'#FFF', border:'none', cursor:'pointer',
            fontFamily:'inherit', fontSize: 13.5, fontWeight: 600,
            display:'inline-flex', alignItems:'center', justifyContent:'center', gap: 6,
          }}>Continue Learning {McIcon.arrow('#FFF')}</button>
        </div>
      </div>
    </div>
  );
}

// ─── Upskill Hub teaser ───────────────────────────────────────

const MC_HUB_PICKS = [
  { id:'h1', title:'Prompt Engineering for Marketers', tag:'AI · 1h 20m', image:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=70' },
  { id:'h2', title:'Effective Stakeholder Communication', tag:'Soft · 45m',  image:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=70' },
  { id:'h3', title:'Data Literacy 101', tag:'Data · 2h',             image:'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=70' },
];

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
            <div style={{ width:'100%', aspectRatio:'16 / 10', background:'#F5F5F5' }}>
              <img src={p.image} alt="" onError={e => { e.currentTarget.style.display='none'; }}
                style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            </div>
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

  const openDetails = id => setSelected(id);
  const closeDetails = () => setSelected(null);

  return (
    <div style={{
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
          <McCourseDetails courseId={selected} onBack={closeDetails}/>
        ) : (
          <>
            {/* Page title */}
            <div style={{ display:'flex', alignItems:'flex-start', gap: 10, marginTop: 4 }}>
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

            {/* Completion Rate — first */}
            <McCompletionRate/>

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
              marginLeft: -18, marginRight: -18,
              paddingLeft: 18, paddingRight: 18,
            }}>
              <McCourseList tab={tab} onDetails={openDetails}/>
            </div>
          </>
        )}

      </div>
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
