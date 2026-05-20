// Trainee Circle screen
// Depends on: data/trainee-circle.data.js (CR_AVATARS, CR_CONTACTS, CR_CHANNELS,
//   CR_DM_MESSAGES, CR_ACTIVITIES, CR_SAVED, CR_RECENT_CALLS)

const CR_PRIMARY = '#1570EF';
const CR_PRIMARY_SOFT = '#D1E9FF';
const CR_INK = '#252B37';
const CR_BODY = '#414651';
const CR_MUTED = '#717680';
const CR_FAINT = '#A4A7AE';
const CR_LINE = '#E9EAEB';
const CR_LINE2 = '#F5F5F5';
const CR_DANGER = '#D92D20';

function makeInitialsAvatar(initials) {
  const safe = (initials || '?').slice(0, 2);
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">'
    + '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1570EF"/><stop offset="1" stop-color="#7C3AED"/></linearGradient></defs>'
    + '<rect width="80" height="80" fill="url(#g)"/>'
    + '<text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="Poppins, system-ui, sans-serif" font-size="32" font-weight="600" fill="#FFFFFF">' + safe + '</text>'
    + '</svg>';
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

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
function CrIcPlus({ c = '#FFF', s = 18 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function CrIcPlusSquare({ c = CR_BODY, s = 16 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke={c} strokeWidth="1.6"/>
      <path d="M12 8v8M8 12h8" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function CrIcClose({ c = CR_MUTED, s = 16 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M18 6 6 18M6 6l12 12" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
function CrIcBell({ c = '#FFF', s = 16 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" stroke={c} strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M10 18a2 2 0 0 0 4 0" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}
function CrIcAtSign({ c = '#1570EF', s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke={c} strokeWidth="1.6"/>
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function CrIcMessageSquare({ c = '#6366F1', s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}
function CrIcThumbsUp({ c = '#F59E0B', s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M7 22V11M2 13v7a2 2 0 0 0 2 2h3M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9A2 2 0 0 0 21.66 9H14Z" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CrIcPinSolid({ c = '#FFF', s = 16 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 17v5M5 10V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5l2 4H3l2-4Z" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CrIcPhoneIncoming({ c = '#10B981', s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M16 2v6h6M22 2l-7 7" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CrIcPhoneOutgoing({ c = '#1570EF', s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M23 7v6h-6M16 14l7-7" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CrIcPhoneMissed({ c = '#EF4444', s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M23 1l-6 6M17 1l6 6" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CrIcActivity({ c = CR_MUTED, s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CrIcPin({ c = CR_MUTED, s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 17v5M5 10V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5l2 4H3l2-4Z" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CrIcCall({ c = CR_MUTED, s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
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

// ─── DM icons ─────────────────────────────────────────────
function CrIcArrowLeft({ c = CR_INK }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M19 12H5M11 18l-6-6 6-6" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}
function CrIcPhone({ c = CR_FAINT }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}
function CrIcVideo({ c = CR_FAINT }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <polygon points="23 7 16 12 23 17 23 7" stroke={c} strokeWidth="1.7" strokeLinejoin="round"/>
    <rect x="1" y="5" width="15" height="14" rx="2" stroke={c} strokeWidth="1.7"/>
  </svg>;
}
function CrIcMore({ c = CR_FAINT }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="5"  cy="12" r="1.5" fill={c}/>
    <circle cx="12" cy="12" r="1.5" fill={c}/>
    <circle cx="19" cy="12" r="1.5" fill={c}/>
  </svg>;
}
function CrIcPaperclip({ c = CR_FAINT }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}
function CrIcSend({ c = '#FFF' }) {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <line x1="22" y1="2" x2="11" y2="13" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
  </svg>;
}
function CrIcCheck({ c = '#9CA3AF', double }) {
  if (double) {
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <polyline points="18 6 7 17 2 12" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="22 10 13.5 18.5" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;
  }
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <polyline points="20 6 9 17 4 12" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}

function CrMessageStatus({ status }) {
  if (!status) return null;
  if (status === 'read')      return <CrIcCheck c="#BFDBFE" double/>;
  if (status === 'delivered') return <CrIcCheck c="#D1D5DB" double/>;
  return <CrIcCheck c="#D1D5DB"/>;
}

function CrMessageBubble({ message }) {
  if (message.isSent) {
    return (
      <div style={{ display:'flex', justifyContent:'flex-end', marginBottom: 10 }}>
        <div style={{ maxWidth:'78%' }}>
          <div style={{
            background:'linear-gradient(135deg, #3B82F6, #4F46E5)',
            color:'#FFF', borderRadius: 16, borderBottomRightRadius: 6,
            padding:'10px 14px',
            boxShadow:'0 4px 12px rgba(59,130,246,0.20)',
          }}>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight:'19px' }}>{message.content}</p>
          </div>
          {(message.time || message.status) && (
            <div style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', gap: 4, marginTop: 4, paddingRight: 4 }}>
              <CrMessageStatus status={message.status}/>
              {message.time && <span style={{ fontSize: 11, color:'#9CA3AF' }}>{message.time}</span>}
            </div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div style={{ display:'flex', justifyContent:'flex-start', marginBottom: 10 }}>
      <div style={{ maxWidth:'78%' }}>
        <div style={{
          background:'#F3F4F6', color:'#1F2937',
          borderRadius: 16, borderBottomLeftRadius: 6,
          padding:'10px 14px',
        }}>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight:'19px' }}>{message.content}</p>
        </div>
        {message.time && (
          <div style={{ display:'flex', alignItems:'center', gap: 4, marginTop: 4, paddingLeft: 4 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#9CA3AF" strokeWidth="1.7"/>
              <polyline points="12 6 12 12 16 14" stroke="#9CA3AF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 11, color:'#9CA3AF' }}>{message.time}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function CrDmView({ contact, onBack }) {
  const messages = CR_DM_MESSAGES[contact.id] || [];
  const [input, setInput] = React.useState('');
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages.length]);

  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom: 0,
      background:'#FFF',
      display:'flex', flexDirection:'column',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
      paddingTop: 60,
    }}>
      {/* Header */}
      <div style={{
        padding:'12px 16px', borderBottom:'1px solid #F3F4F6',
        display:'flex', alignItems:'center', gap: 12,
        background:'rgba(255,255,255,0.95)', flexShrink: 0,
      }}>
        <button onClick={onBack} aria-label="Back" style={{
          width: 32, height: 32, borderRadius: 8,
          background:'transparent', border:'none', cursor:'pointer',
          display:'inline-flex', alignItems:'center', justifyContent:'center', padding: 0,
        }}>
          <CrIcArrowLeft c={CR_INK}/>
        </button>

        <div style={{ position:'relative', flexShrink: 0 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 999, overflow:'hidden',
            boxShadow:'0 0 0 2px #DBEAFE, 0 0 0 3px #FFF',
          }}>
            <img src={contact.avatarUrl} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
          </div>
          {contact.isOnline && (
            <span style={{
              position:'absolute', bottom: 0, right: 0,
              width: 11, height: 11, borderRadius: 999,
              background:'#00C073', border:'2px solid #FFF',
            }}/>
          )}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 14.5, fontWeight: 700, color:'#0F172A',
            overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
            letterSpacing:'-0.01em',
          }}>{contact.name}</div>
          <div style={{
            fontSize: 11.5, fontWeight: 600,
            color: contact.isOnline ? '#00C073' : '#9CA3AF',
          }}>{contact.isOnline ? 'Active now' : 'Offline'}</div>
        </div>

        <div style={{ display:'flex', alignItems:'center', gap: 2, flexShrink: 0 }}>
          <button aria-label="Call" style={{
            width: 32, height: 32, borderRadius: 10,
            background:'transparent', border:'none', cursor:'pointer',
            display:'inline-flex', alignItems:'center', justifyContent:'center', color: CR_FAINT,
          }}><CrIcPhone/></button>
          <button aria-label="Video" style={{
            width: 32, height: 32, borderRadius: 10,
            background:'transparent', border:'none', cursor:'pointer',
            display:'inline-flex', alignItems:'center', justifyContent:'center', color: CR_FAINT,
          }}><CrIcVideo/></button>
          <button aria-label="More" style={{
            width: 32, height: 32, borderRadius: 10,
            background:'transparent', border:'none', cursor:'pointer',
            display:'inline-flex', alignItems:'center', justifyContent:'center', color: CR_FAINT,
          }}><CrIcMore/></button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} style={{
        flex: 1, overflowY:'auto', minHeight: 0,
        padding:'18px 16px',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap: 10, margin:'8px 0 14px' }}>
          <div style={{ flex: 1, height: 1, background:'#F3F4F6' }}/>
          <span style={{
            fontSize: 10.5, fontWeight: 700, color:'#9CA3AF',
            textTransform:'uppercase', letterSpacing:'0.12em',
          }}>Today</span>
          <div style={{ flex: 1, height: 1, background:'#F3F4F6' }}/>
        </div>
        {messages.map(msg => <CrMessageBubble key={msg.id} message={msg}/>)}
      </div>

      {/* Input bar */}
      <div style={{
        padding:'10px 14px 18px', borderTop:'1px solid #F3F4F6',
        flexShrink: 0, background:'rgba(255,255,255,0.95)',
      }}>
        <div style={{
          display:'flex', alignItems:'center', gap: 10,
          background:'#FFF', border:'1px solid #E5E7EB', borderRadius: 18,
          padding:'8px 12px',
          boxShadow:'0 2px 8px rgba(0,0,0,0.04)',
        }}>
          <button aria-label="Attach" style={{
            background:'transparent', border:'none', cursor:'pointer', padding: 0,
            display:'inline-flex', alignItems:'center', color: CR_FAINT,
          }}><CrIcPaperclip/></button>
          <input
            type="text"
            placeholder={`Message ${contact.name}...`}
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{
              flex: 1, border:'none', outline:'none', background:'transparent',
              fontFamily:'inherit', fontSize: 13, color:'#1F2937', minWidth: 0,
            }}
          />
          <button
            disabled={!input.trim()}
            onClick={() => setInput('')}
            style={{
              width: 30, height: 30, borderRadius: 10, border:'none',
              cursor: input.trim() ? 'pointer' : 'not-allowed',
              display:'inline-flex', alignItems:'center', justifyContent:'center',
              background: input.trim()
                ? 'linear-gradient(135deg, #3B82F6, #4F46E5)'
                : '#F3F4F6',
              color: input.trim() ? '#FFF' : '#D1D5DB',
              boxShadow: input.trim() ? '0 4px 10px rgba(59,130,246,0.25)' : 'none',
              flexShrink: 0,
            }}
          ><CrIcSend c={input.trim() ? '#FFF' : '#D1D5DB'}/></button>
        </div>
      </div>
    </div>
  );
}

function CircleScreen({ onDmChange }) {
  const [tab, setTab] = React.useState('dm');
  const [search, setSearch] = React.useState('');
  const [openContactId, setOpenContactId] = React.useState(null);
  const [subView, setSubView] = React.useState(null); // 'activity' | 'pin' | 'call' | null
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [addOpen, setAddOpen] = React.useState(false);
  const [modal, setModal] = React.useState(null); // 'chat' | 'channel' | null
  const [extraContacts, setExtraContacts] = React.useState([]);
  const [extraChannels, setExtraChannels] = React.useState([]);
  const menuRef = React.useRef(null);
  const addRef = React.useRef(null);

  React.useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [menuOpen]);

  React.useEffect(() => {
    if (!addOpen) return;
    const onDown = (e) => {
      if (addRef.current && !addRef.current.contains(e.target)) setAddOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [addOpen]);

  const allContacts = React.useMemo(() => [...extraContacts, ...CR_CONTACTS], [extraContacts]);
  const allChannels = React.useMemo(() => [...extraChannels, ...CR_CHANNELS], [extraChannels]);

  React.useEffect(() => {
    if (onDmChange) onDmChange(!!openContactId || !!subView);
  }, [openContactId, subView, onDmChange]);

  const openContact = openContactId
    ? allContacts.find(c => c.id === openContactId)
    : null;

  if (openContact) {
    return <CrDmView contact={openContact} onBack={() => setOpenContactId(null)}/>;
  }

  if (subView === 'activity') {
    return <CrActivityScreen onBack={() => setSubView(null)}/>;
  }
  if (subView === 'pin') {
    return <CrPinScreen onBack={() => setSubView(null)}/>;
  }
  if (subView === 'call') {
    return <CrCallScreen onBack={() => setSubView(null)}/>;
  }

  const dms = allContacts.filter(c =>
    !search || c.name.toLowerCase().includes(search.toLowerCase()) || (c.lastMessage || '').toLowerCase().includes(search.toLowerCase())
  );
  const channels = allChannels.filter(c =>
    !search || c.displayName.toLowerCase().includes(search.toLowerCase())
  );

  const totalUnreadDM = allContacts.reduce((s, c) => s + (c.unreadCount || 0), 0);
  const totalUnreadCh = allChannels.reduce((s, c) => s + (c.unreadCount || 0), 0);

  const handleAddContact = (name) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const id = 'new-' + Date.now();
    const initials = trimmed.split(/\s+/).map(s => s[0]).slice(0, 2).join('').toUpperCase();
    const avatarUrl = makeInitialsAvatar(initials);
    setExtraContacts(list => [
      { id, name: trimmed, avatarUrl, isOnline: false, lastMessage: 'Say hi to start the conversation.', time: 'Now' },
      ...list,
    ]);
    setModal(null);
    setTab('dm');
  };

  const handleAddChannel = (name, section) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const id = 'ch-' + Date.now();
    const initials = trimmed.split(/[\s-]+/).map(s => s[0]).slice(0, 2).join('').toUpperCase();
    const imageUrl = makeInitialsAvatar(initials);
    setExtraChannels(list => [
      { id, displayName: trimmed, section, memberCount: 1, imageUrl },
      ...list,
    ]);
    setModal(null);
    setTab('channel');
  };

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
          <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
            <div ref={menuRef} style={{ position:'relative' }}>
              <button
                aria-label="More options"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(o => !o)}
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  background:'#FFF', border:'1px solid ' + CR_LINE, cursor:'pointer',
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                }}>
                <CrIcMore c={CR_BODY}/>
              </button>
              {menuOpen && (
                <div role="menu" style={{
                  position:'absolute', top: 44, right: 0, zIndex: 50,
                  minWidth: 184, background:'#FFF',
                  border:'1px solid ' + CR_LINE, borderRadius: 12,
                  boxShadow:'0 8px 24px rgba(15,23,42,0.10)',
                  padding: 6, display:'flex', flexDirection:'column', gap: 2,
                }}>
                  {[
                    { k:'activity', label:'Activity',        icon: CrIcActivity },
                    { k:'pin',      label:'Pinned messages', icon: CrIcPin },
                    { k:'call',     label:'Calls',           icon: CrIcCall },
                  ].map(it => {
                    const Icon = it.icon;
                    return (
                      <button key={it.k} role="menuitem"
                        onClick={() => { setMenuOpen(false); setSubView(it.k); }}
                        style={{
                        display:'flex', alignItems:'center', gap: 10,
                        padding:'9px 10px', borderRadius: 8,
                        background:'transparent', border:'none', cursor:'pointer',
                        fontFamily:'inherit', fontSize: 13, fontWeight: 500,
                        color: CR_INK, textAlign:'left',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(21,112,239,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                      >
                        <Icon c={CR_BODY} s={16}/>
                        <span>{it.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
            <div ref={addRef} style={{ position:'relative' }}>
              <button
                aria-label="Add"
                aria-haspopup="menu"
                aria-expanded={addOpen}
                onClick={() => setAddOpen(o => !o)}
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: CR_PRIMARY, color:'#FFF', border:'none', cursor:'pointer',
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                  boxShadow:'0 2px 6px rgba(21,112,239,0.30)',
                }}>
                <CrIcPlus c="#FFF" s={20}/>
              </button>
              {addOpen && (
                <div role="menu" style={{
                  position:'absolute', top: 48, right: 0, zIndex: 50,
                  minWidth: 184, background:'#FFF',
                  border:'1px solid ' + CR_LINE, borderRadius: 12,
                  boxShadow:'0 8px 24px rgba(15,23,42,0.10)',
                  padding: 6, display:'flex', flexDirection:'column', gap: 2,
                }}>
                  <button role="menuitem"
                    onClick={() => { setAddOpen(false); setModal('chat'); }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(21,112,239,0.06)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                    style={{
                      display:'flex', alignItems:'center', gap: 10,
                      padding:'9px 10px', borderRadius: 8,
                      background:'transparent', border:'none', cursor:'pointer',
                      fontFamily:'inherit', fontSize: 13, fontWeight: 500,
                      color: CR_INK, textAlign:'left',
                    }}>
                    <CrIcPlusSquare c={CR_BODY} s={16}/>
                    <span>New chat</span>
                  </button>
                  <button role="menuitem"
                    onClick={() => { setAddOpen(false); setModal('channel'); }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(21,112,239,0.06)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                    style={{
                      display:'flex', alignItems:'center', gap: 10,
                      padding:'9px 10px', borderRadius: 8,
                      background:'transparent', border:'none', cursor:'pointer',
                      fontFamily:'inherit', fontSize: 13, fontWeight: 500,
                      color: CR_INK, textAlign:'left',
                    }}>
                    <CrIcHash c={CR_BODY} s={16}/>
                    <span>Create channel</span>
                  </button>
                </div>
              )}
            </div>
          </div>
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

        {/* Primary tabs: Direct / Channels */}
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
              : dms.map(c => <CrContactRow key={c.id} c={c} onOpen={() => setOpenContactId(c.id)}/>)
          ) : (
            channels.length === 0
              ? <div style={{ padding:'28px 0', textAlign:'center', fontSize: 13, color: CR_MUTED }}>No channels found.</div>
              : channels.map(ch => <CrChannelRow key={ch.id} ch={ch} onOpen={() => {}}/>)
          )}
        </div>

      </div>

      {modal === 'chat' && (
        <CrNewChatModal onClose={() => setModal(null)} onSubmit={handleAddContact}/>
      )}
      {modal === 'channel' && (
        <CrNewChannelModal onClose={() => setModal(null)} onSubmit={handleAddChannel}/>
      )}
    </div>
  );
}

function CrModalShell({ title, onClose, children }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div
      onClick={onClose}
      style={{
        position:'fixed', inset: 0, background:'rgba(15,23,42,0.42)',
        display:'flex', alignItems:'center', justifyContent:'center',
        zIndex: 1000, padding: 16,
      }}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={e => e.stopPropagation()}
        style={{
          width:'100%', maxWidth: 380, background:'#FFF',
          borderRadius: 14, padding: 18,
          boxShadow:'0 20px 50px rgba(15,23,42,0.20)',
          fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
          letterSpacing:'-0.005em',
          display:'flex', flexDirection:'column', gap: 14,
        }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: CR_INK }}>{title}</div>
          <button onClick={onClose} aria-label="Close" style={{
            width: 28, height: 28, borderRadius: 8,
            background:'transparent', border:'none', cursor:'pointer',
            display:'inline-flex', alignItems:'center', justifyContent:'center',
          }}>
            <CrIcClose c={CR_MUTED} s={16}/>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function CrFieldLabel({ children }) {
  return (
    <div style={{ fontSize: 12, fontWeight: 600, color: CR_BODY, marginBottom: 6 }}>{children}</div>
  );
}

function CrTextInput({ value, onChange, placeholder, autoFocus }) {
  return (
    <input
      autoFocus={autoFocus}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width:'100%', height: 40, padding:'0 12px',
        border:'1px solid ' + CR_PRIMARY_SOFT, borderRadius: 10,
        background:'#FFF', outline:'none',
        fontFamily:'inherit', fontSize: 13, color: CR_INK,
        boxShadow:'0 0 0 3px rgba(21,112,239,0.10)',
      }}
    />
  );
}

function CrModalActions({ onCancel, onSubmit, submitLabel, disabled }) {
  return (
    <div style={{ display:'flex', justifyContent:'flex-end', gap: 8, marginTop: 4 }}>
      <button onClick={onCancel} style={{
        padding:'9px 16px', borderRadius: 10,
        background:'transparent', border:'none', cursor:'pointer',
        fontFamily:'inherit', fontSize: 13, fontWeight: 600, color: CR_BODY,
      }}>Cancel</button>
      <button onClick={onSubmit} disabled={disabled} style={{
        padding:'9px 16px', borderRadius: 10,
        background: disabled ? 'rgba(21,112,239,0.40)' : CR_PRIMARY,
        color:'#FFF', border:'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily:'inherit', fontSize: 13, fontWeight: 600,
      }}>{submitLabel}</button>
    </div>
  );
}

function CrNewChatModal({ onClose, onSubmit }) {
  const [name, setName] = React.useState('');
  return (
    <CrModalShell title="Start new chat" onClose={onClose}>
      <div>
        <CrFieldLabel>Contact name</CrFieldLabel>
        <CrTextInput value={name} onChange={setName} placeholder="e.g. Jane Doe" autoFocus/>
      </div>
      <CrModalActions
        onCancel={onClose}
        onSubmit={() => onSubmit(name)}
        submitLabel="Start chat"
        disabled={!name.trim()}
      />
    </CrModalShell>
  );
}

function CrNewChannelModal({ onClose, onSubmit }) {
  const [name, setName] = React.useState('');
  const [section, setSection] = React.useState('project');
  return (
    <CrModalShell title="Create new channel" onClose={onClose}>
      <div>
        <CrFieldLabel>Channel name</CrFieldLabel>
        <CrTextInput value={name} onChange={setName} placeholder="e.g. design-team" autoFocus/>
      </div>
      <div>
        <CrFieldLabel>Section</CrFieldLabel>
        <div style={{ display:'flex', gap: 8 }}>
          {[
            { k:'project', label:'Project' },
            { k:'course',  label:'Course' },
          ].map(opt => {
            const active = section === opt.k;
            return (
              <button key={opt.k} onClick={() => setSection(opt.k)} style={{
                flex: 1, height: 40, borderRadius: 10,
                background: active ? CR_PRIMARY_SOFT : '#FFF',
                color: active ? CR_PRIMARY : CR_BODY,
                border: active ? '1px solid ' + CR_PRIMARY : '1px solid ' + CR_LINE,
                cursor:'pointer',
                fontFamily:'inherit', fontSize: 13, fontWeight: 600,
              }}>{opt.label}</button>
            );
          })}
        </div>
      </div>
      <CrModalActions
        onCancel={onClose}
        onSubmit={() => onSubmit(name, section)}
        submitLabel="Create channel"
        disabled={!name.trim()}
      />
    </CrModalShell>
  );
}

// ─── Activity / Pin / Call sub-screens ────────────────────

function CrSubScreenHeader({ onBack, gradient, icon, title, subtitle, action }) {
  return (
    <div style={{
      padding:'12px 16px', borderBottom:'1px solid #F3F4F6',
      display:'flex', alignItems:'center', gap: 12,
      background:'#FFF', flexShrink: 0,
    }}>
      <button onClick={onBack} aria-label="Back" style={{
        width: 32, height: 32, borderRadius: 8,
        background:'transparent', border:'none', cursor:'pointer',
        display:'inline-flex', alignItems:'center', justifyContent:'center', padding: 0,
      }}>
        <CrIcArrowLeft c={CR_INK}/>
      </button>
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        background: gradient,
        display:'inline-flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 4px 10px rgba(21,112,239,0.20)', flexShrink: 0,
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: CR_INK, letterSpacing:'-0.01em' }}>{title}</div>
        <div style={{ fontSize: 11.5, color: CR_FAINT, marginTop: 1 }}>{subtitle}</div>
      </div>
      {action ? action : null}
    </div>
  );
}

function CrActivityScreen({ onBack }) {
  const typeIcon = {
    mention:  <CrIcAtSign c="#1570EF" s={12}/>,
    reply:    <CrIcMessageSquare c="#6366F1" s={12}/>,
    reaction: <CrIcThumbsUp c="#F59E0B" s={12}/>,
  };
  const typeBg = {
    mention:  '#EFF6FF',
    reply:    '#EEF2FF',
    reaction: '#FFFBEB',
  };
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom: 0,
      background:'#FFF',
      display:'flex', flexDirection:'column',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
      paddingTop: 60,
    }}>
      <CrSubScreenHeader
        onBack={onBack}
        gradient="linear-gradient(135deg, #1570EF, #6366F1)"
        icon={<CrIcBell c="#FFF" s={16}/>}
        title="Activity"
        subtitle="Mentions, replies & reactions"
      />
      <div style={{ flex: 1, overflowY:'auto', padding:'8px 12px' }}>
        {CR_ACTIVITIES.map(item => (
          <div key={item.id} style={{
            display:'flex', alignItems:'flex-start', gap: 12,
            padding:'12px', borderRadius: 12, cursor:'pointer',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F9FAFB'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            <div style={{ position:'relative', flexShrink: 0 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 999, overflow:'hidden',
                boxShadow:'0 0 0 2px #F3F4F6',
              }}>
                <img src={item.avatarUrl} alt={item.user} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              </div>
              <div style={{
                position:'absolute', bottom: -2, right: -2,
                width: 18, height: 18, borderRadius: 999,
                background: typeBg[item.type],
                boxShadow:'0 0 0 2px #FFF',
                display:'inline-flex', alignItems:'center', justifyContent:'center',
              }}>
                {typeIcon[item.type]}
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display:'flex', alignItems:'baseline', gap: 8 }}>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: CR_INK, letterSpacing:'-0.005em' }}>{item.user}</span>
                <span style={{ fontSize: 11.5, color: CR_FAINT }}>{item.time}</span>
              </div>
              <div style={{ fontSize: 12.5, color: CR_BODY, marginTop: 2, lineHeight: '18px' }}>{item.content}</div>
              <div style={{ fontSize: 11.5, color: CR_FAINT, marginTop: 4, fontWeight: 500 }}>#{item.channel}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CrPinScreen({ onBack }) {
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom: 0,
      background:'#FFF',
      display:'flex', flexDirection:'column',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
      paddingTop: 60,
    }}>
      <CrSubScreenHeader
        onBack={onBack}
        gradient="linear-gradient(135deg, #FBBF24, #F97316)"
        icon={<CrIcPinSolid c="#FFF" s={16}/>}
        title="Saved Items"
        subtitle="Pinned & bookmarked messages"
      />
      <div style={{ flex: 1, overflowY:'auto', padding:'12px', display:'flex', flexDirection:'column', gap: 8 }}>
        {CR_SAVED.map(item => (
          <div key={item.id} style={{
            padding:'14px', borderRadius: 12,
            border:'1px solid ' + CR_LINE, background:'#FFF',
            cursor:'pointer', transition:'background 120ms',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FFFBEB'; e.currentTarget.style.borderColor = '#FDE68A'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FFF'; e.currentTarget.style.borderColor = CR_LINE; }}
          >
            <div style={{ display:'flex', alignItems:'flex-start', gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 999, overflow:'hidden',
                boxShadow:'0 0 0 2px #F3F4F6', flexShrink: 0,
              }}>
                <img src={item.avatarUrl} alt={item.authorName} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display:'flex', alignItems:'baseline', gap: 8, marginBottom: 2 }}>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: CR_INK }}>{item.authorName}</span>
                  <span style={{ fontSize: 11.5, color: CR_FAINT }}>{item.savedAt}</span>
                </div>
                <div style={{ fontSize: 13, color: CR_BODY, lineHeight: '20px' }}>{item.content}</div>
                <div style={{ display:'flex', alignItems:'center', gap: 6, marginTop: 6 }}>
                  <CrIcHash c={CR_FAINT} s={12}/>
                  <span style={{ fontSize: 11.5, color: CR_FAINT, fontWeight: 500 }}>{item.channel}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CrCallScreen({ onBack }) {
  const dirIcon = {
    incoming: <CrIcPhoneIncoming c="#10B981" s={13}/>,
    outgoing: <CrIcPhoneOutgoing c="#1570EF" s={13}/>,
    missed:   <CrIcPhoneMissed c="#EF4444" s={13}/>,
  };
  const dirLabel = (call) => {
    if (call.direction === 'missed') return 'Missed call';
    const kind = call.kind === 'video' ? 'Video' : 'Voice';
    return kind + ' call · ' + call.duration;
  };
  return (
    <div style={{
      position:'absolute', top:0, left:0, right:0, bottom: 0,
      background:'#FFF',
      display:'flex', flexDirection:'column',
      fontFamily:'"Poppins", -apple-system, system-ui, sans-serif',
      letterSpacing:'-0.005em',
      paddingTop: 60,
      overflowY:'auto',
    }}>
      <CrSubScreenHeader
        onBack={onBack}
        gradient="linear-gradient(135deg, #1570EF, #6366F1)"
        icon={<CrIcPhone c="#FFF"/>}
        title="Calls"
        subtitle="Your recent call history"
        action={
          <button style={{
            display:'inline-flex', alignItems:'center', gap: 6,
            padding:'8px 12px', borderRadius: 10,
            background: CR_PRIMARY, color:'#FFF', border:'none', cursor:'pointer',
            fontFamily:'inherit', fontSize: 12.5, fontWeight: 600,
            boxShadow:'0 2px 6px rgba(21,112,239,0.30)', flexShrink: 0,
          }}>
            <CrIcPlus c="#FFF" s={14}/>
            <span>New call</span>
          </button>
        }
      />

      <div style={{ padding:'16px 18px 24px' }}>
        {/* Section label */}
        <div style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing:'0.16em',
          color: CR_FAINT, textTransform:'uppercase', marginBottom: 8,
        }}>Recent</div>

        {/* Recent calls list */}
        <div style={{
          borderRadius: 16,
          border:'1px solid ' + CR_LINE, overflow:'hidden', background:'#FFF',
        }}>
          {CR_RECENT_CALLS.map((call, i) => (
            <div key={call.id} style={{
              display:'flex', alignItems:'center', gap: 12,
              padding:'14px 16px',
              borderTop: i === 0 ? 'none' : '1px solid ' + CR_LINE,
              cursor:'pointer',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F9FAFB'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              <div style={{
                width: 40, height: 40,
                borderRadius: call.isGroup ? 10 : 999,
                overflow:'hidden', boxShadow:'0 0 0 1px #E5E7EB', flexShrink: 0,
              }}>
                <img src={call.avatarUrl} alt={call.name} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
                  <span style={{
                    fontSize: 14, fontWeight: 600,
                    color: call.direction === 'missed' ? '#DC2626' : CR_INK,
                    overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
                  }}>{call.name}</span>
                  {call.context && (
                    <span style={{ fontSize: 11.5, color: CR_FAINT, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{call.context}</span>
                  )}
                </div>
                <div style={{ display:'flex', alignItems:'center', gap: 6, marginTop: 3 }}>
                  {dirIcon[call.direction]}
                  <span style={{
                    fontSize: 12.5,
                    color: call.direction === 'missed' ? '#DC2626' : CR_MUTED,
                    fontWeight: call.direction === 'missed' ? 500 : 400,
                  }}>{dirLabel(call)}</span>
                </div>
              </div>
              <div style={{ fontSize: 12, color: CR_FAINT, flexShrink: 0 }}>{call.timeLabel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
