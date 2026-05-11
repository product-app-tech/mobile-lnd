// Login screen — matches auth/LoginPage.tsx structure
// (Generic wordmark used in place of branded logo per copyright guidance)

const MOCK_ACCOUNTS = [
  { email: 'ld@learnxpert.com',           password: 'ld123',         role: 'ld_team',      name: 'Diana Hartwell',  badge: 'L&D' },
  { email: 'trainee@learnxpert.com',      password: 'trainee123',    role: 'trainee',      name: 'Priya Sharma',    badge: 'Trainee' },
  { email: 'hr@learnxpert.com',           password: 'hr123',         role: 'hr',           name: 'Sarah Johnson',   badge: 'HR' },
  { email: 'trainer@learnxpert.com',      password: 'trainer123',    role: 'trainer',      name: 'Michael Torres',  badge: 'Instructor' },
  { email: 'kaushalyainne@learnxpert.com',password: 'manager123',    role: 'line_manager', name: 'Kaushal Yainne',  badge: 'Line Manager' },
  { email: 'superadmin@learnxpert.com',   password: 'superadmin123', role: 'superadmin',   name: 'Super Admin',     badge: 'Super Admin' },
];

const PRIMARY = '#1056d9';
const PRIMARY_HOVER = '#0d47b3';
const INK = '#1e1e1e';
const LABEL = '#414651';
const PLACEHOLDER = '#9AA2B1';
const BORDER = '#d5d7da';
const MUTED = '#868d9d';

function Login({ onSuccess }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showHint, setShowHint] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleLogin = () => {
    const acc = MOCK_ACCOUNTS.find(
      a => a.email.toLowerCase() === email.toLowerCase() && a.password === password
    );
    if (acc) { setError(''); onSuccess(acc); }
    else { setError('Email atau password salah. Silakan coba lagi.'); }
  };

  const onKey = (e) => { if (e.key === 'Enter') handleLogin(); };

  const fieldShadow = '0px 1px 2px 0px rgba(10,13,18,0.05)';

  return (
    <div style={{
      width:'100%', height:'100%', background:'#FFFFFF',
      display:'flex', flexDirection:'column',
      paddingTop: 60, paddingBottom: 40,
      overflowY:'auto',
      fontFamily:'"Poppins", system-ui, sans-serif',
    }}>
      <div style={{
        flex:1, display:'flex', flexDirection:'column',
        justifyContent:'center', alignItems:'center',
        padding:'24px 24px 32px',
      }}>
        <div style={{ width:'100%', maxWidth: 342, display:'flex', flexDirection:'column', gap: 56 }}>
          {/* Logo area */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-end', height: 74 }}>
            <img
              src="https://api-ajari-develop.ajari.app/v1/lx-upload/fetch/assets/black_lx.png"
              alt="LearnXpert"
              style={{ width: 184, height: 69, objectFit:'contain' }}
            />
          </div>

          {/* Form */}
          <div style={{ display:'flex', flexDirection:'column', gap: 24 }}>
            {/* Email */}
            <div style={{ display:'flex', flexDirection:'column', gap: 6 }}>
              <label style={{ fontSize: 14, fontWeight: 500, lineHeight:'20px', color: LABEL }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); if (error) setError(''); }}
                onKeyDown={onKey}
                placeholder="yourname@learnxpert.com"
                style={{
                  height: 'auto', padding:'10px 14px',
                  fontSize: 14, color: INK,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                  boxShadow: fieldShadow,
                  outline:'none', fontFamily:'inherit',
                  background:'#FFF',
                }}
              />
            </div>

            {/* Password */}
            <div style={{ display:'flex', flexDirection:'column', gap: 6 }}>
              <label style={{ fontSize: 14, fontWeight: 500, lineHeight:'20px', color: LABEL }}>Password</label>
              <div style={{ position:'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); if (error) setError(''); }}
                  onKeyDown={onKey}
                  placeholder="Enter your password"
                  style={{
                    width:'100%', boxSizing:'border-box',
                    padding:'10px 40px 10px 14px',
                    fontSize: 14, color: INK,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 8,
                    boxShadow: fieldShadow,
                    outline:'none', fontFamily:'inherit',
                    background:'#FFF',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  style={{
                    position:'absolute', right: 12, top:'50%', transform:'translateY(-50%)',
                    background:'transparent', border:'none', cursor:'pointer',
                    color: MUTED, padding: 0, display:'flex',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    {showPassword ? (
                      <>
                        <path d="M3 3l18 18M10.5 10.7a2 2 0 0 0 2.8 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                        <path d="M9.4 5.3A10.5 10.5 0 0 1 12 5c5 0 9 4 10 7-0.4 1.2-1.3 2.6-2.6 3.9M6.4 6.6C4.3 8 2.7 10.1 2 12c1 3 5 7 10 7 1.7 0 3.3-.4 4.7-1.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                      </>
                    ) : (
                      <>
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" stroke="currentColor" strokeWidth="1.6"/>
                        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {error && (
              <div style={{
                fontSize: 12.5, color:'#D92D20',
                background:'#FEF3F2', border:'1px solid #FECDCA', padding:'8px 10px',
                borderRadius: 8,
              }}>{error}</div>
            )}
          </div>

          {/* Actions */}
          <div style={{ display:'flex', flexDirection:'column', gap: 24, alignItems:'center' }}>
            <button
              type="button"
              onClick={() => setShowHint(v => !v)}
              style={{
                width:'100%', textAlign:'center', background:'transparent', border:'none',
                fontSize: 14, fontWeight: 500, textTransform:'capitalize',
                color: INK, cursor:'pointer', padding:0, fontFamily:'inherit',
                textDecoration: showHint ? 'underline' : 'none',
              }}
            >View demo account</button>

            {showHint && (
              <div style={{
                width:'100%', borderRadius: 10, border:'1px solid #e5e7eb',
                background:'#f9fafb', padding: 12,
                display:'flex', flexDirection:'column', gap: 6,
              }}>
                <p style={{
                  margin:0, fontSize: 11, fontWeight: 600, color:'#6b7280',
                  textTransform:'uppercase', letterSpacing:'0.04em', marginBottom: 4,
                }}>Demo Account</p>
                {MOCK_ACCOUNTS.map(acc => (
                  <button
                    key={acc.email}
                    type="button"
                    onClick={() => { setEmail(acc.email); setPassword(acc.password); setShowHint(false); }}
                    style={{
                      display:'flex', alignItems:'center', justifyContent:'space-between',
                      borderRadius: 6, padding:'6px 10px',
                      background:'transparent', border:'none', cursor:'pointer',
                      fontFamily:'inherit', textAlign:'left', width:'100%',
                      transition:'background .15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#eff6ff'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start' }}>
                      <span style={{ fontSize: 12, fontWeight: 500, color: INK }}>{acc.name}</span>
                      <span style={{ fontSize: 11, color: PLACEHOLDER }}>{acc.email}</span>
                    </div>
                    <span style={{
                      fontSize: 11, padding:'2px 8px', borderRadius: 999,
                      background: 'rgba(16,86,217,0.10)', color: PRIMARY,
                      fontWeight: 500, textTransform:'capitalize',
                    }}>{acc.badge}</span>
                  </button>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={handleLogin}
              style={{
                width:'100%', height: 47, borderRadius: 6,
                background: PRIMARY, color:'#FFF', border:'none',
                fontSize: 14, fontWeight: 600, lineHeight:'16px',
                textTransform:'capitalize', cursor:'pointer', fontFamily:'inherit',
                transition:'background .15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = PRIMARY_HOVER}
              onMouseLeave={e => e.currentTarget.style.background = PRIMARY}
            >Login</button>

            <p style={{ margin:0, fontSize: 12, lineHeight:'16px', color: MUTED, userSelect:'none' }}>
              ©2026 LearnXpert LnD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Login = Login;
