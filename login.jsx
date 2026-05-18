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
      position:'relative',
      width:'100%', height:'100%',
      background:'linear-gradient(180deg, #04040e 0%, #1056d9 100%)',
      borderRadius: 24,
      boxShadow:'0px 8px 10px -6px rgba(0,0,0,0.1), 0px 20px 25px -5px rgba(0,0,0,0.1)',
      display:'flex', flexDirection:'column',
      paddingTop: 60, paddingBottom: 40,
      overflow:'hidden',
      fontFamily:'"Poppins", system-ui, sans-serif',
    }}>
      {/* Accent shapes — soft pillars at the bottom (Figma: 8885:12032 Accents 2) */}
      <div aria-hidden="true" style={{
        position:'absolute', left:'50%', bottom: -470,
        width: '100%', height: 753,
        transform:'translateX(-50%)',
        opacity: 0.75, pointerEvents:'none',
      }}>
        <svg
          viewBox="0 0 758.896 1158.62"
          width="100%" height="100%"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display:'block', opacity: 0.5, mixBlendMode:'soft-light' }}
        >
          <g fill="rgba(255,255,255,0.25)">
            <path d="M107.889 1158.62V964.923C107.895 954.274 105.109 943.729 99.6891 933.889C94.2696 924.049 86.3235 915.108 76.3044 907.577C66.2854 900.045 54.3899 894.071 41.2974 889.995C28.2048 885.919 14.1718 883.82 0 883.82V1077.61C0.022626 1099.1 11.3995 1119.71 31.6302 1134.9C51.861 1150.09 79.2901 1158.62 107.889 1158.62Z"/>
            <path d="M107.889 569.407V375.71C107.895 365.061 105.109 354.515 99.6891 344.675C94.2696 334.836 86.3235 325.895 76.3044 318.363C66.2854 310.832 54.3899 304.857 41.2974 300.781C28.2048 296.705 14.1718 294.607 0 294.607V488.4C0.022626 509.891 11.3995 530.495 31.6302 545.685C51.861 560.875 79.2901 569.407 107.889 569.407Z"/>
            <path d="M629.142 1158.62V964.923C629.148 954.274 626.361 943.729 620.942 933.889C615.522 924.049 607.576 915.108 597.557 907.577C587.538 900.045 575.642 894.071 562.55 889.995C549.457 885.919 535.424 883.82 521.253 883.82V1077.61C521.275 1099.1 532.652 1119.71 552.883 1134.9C573.114 1150.09 600.543 1158.62 629.142 1158.62Z"/>
            <path d="M629.142 569.407V375.71C629.148 365.061 626.361 354.515 620.942 344.675C615.522 334.836 607.576 325.895 597.557 318.363C587.538 310.832 575.642 304.857 562.55 300.781C549.457 296.705 535.424 294.607 521.253 294.607V488.4C521.275 509.891 532.652 530.495 552.883 545.685C573.114 560.875 600.543 569.407 629.142 569.407Z"/>
            <path d="M367.718 1158.62V964.923C367.723 954.274 364.937 943.729 359.517 933.889C354.098 924.049 346.152 915.108 336.133 907.577C326.114 900.045 314.218 894.071 301.126 889.995C288.033 885.919 274 883.82 259.828 883.82V1077.61C259.851 1099.1 271.228 1119.71 291.458 1134.9C311.689 1150.09 339.118 1158.62 367.718 1158.62Z"/>
            <path d="M367.718 569.407V375.71C367.723 365.061 364.937 354.515 359.517 344.675C354.098 334.836 346.152 325.895 336.133 318.363C326.114 310.832 314.218 304.857 301.126 300.781C288.033 296.705 274 294.607 259.828 294.607V488.4C259.851 509.891 271.228 530.495 291.458 545.685C311.689 560.875 339.118 569.407 367.718 569.407Z"/>
            <path d="M129.754 1158.62V964.923C129.749 954.274 132.535 943.729 137.955 933.889C143.374 924.049 151.32 915.108 161.339 907.577C171.358 900.045 183.254 894.071 196.347 889.995C209.439 885.919 223.472 883.82 237.644 883.82V1077.61C237.621 1099.1 226.244 1119.71 206.014 1134.9C185.783 1150.09 158.354 1158.62 129.754 1158.62Z"/>
            <path d="M129.754 569.407V375.71C129.749 365.061 132.535 354.515 137.955 344.675C143.374 334.836 151.32 325.895 161.339 318.363C171.358 310.832 183.254 304.857 196.347 300.781C209.439 296.705 223.472 294.607 237.644 294.607V488.4C237.621 509.891 226.244 530.495 206.014 545.685C185.783 560.875 158.354 569.407 129.754 569.407Z"/>
            <path d="M651.007 1158.62V964.923C651.001 954.274 653.788 943.729 659.207 933.889C664.627 924.049 672.573 915.108 682.592 907.577C692.611 900.045 704.507 894.071 717.599 889.995C730.692 885.919 744.725 883.82 758.896 883.82V1077.61C758.874 1099.1 747.497 1119.71 727.266 1134.9C707.036 1150.09 679.606 1158.62 651.007 1158.62Z"/>
            <path d="M651.007 569.407V375.71C651.001 365.061 653.788 354.515 659.207 344.675C664.627 334.836 672.573 325.895 682.592 318.363C692.611 310.832 704.507 304.857 717.599 300.781C730.692 296.705 744.725 294.607 758.896 294.607V488.4C758.874 509.891 747.497 530.495 727.266 545.685C707.036 560.875 679.606 569.407 758.896 569.407Z"/>
            <path d="M389.583 1158.62V964.923C389.577 954.274 392.364 943.729 397.783 933.889C403.202 924.049 411.149 915.108 421.168 907.577C431.187 900.045 443.082 894.071 456.175 889.995C469.267 885.919 483.3 883.82 497.472 883.82V1077.61C497.449 1099.1 486.073 1119.71 465.842 1134.9C445.611 1150.09 418.182 1158.62 389.583 1158.62Z"/>
            <path d="M389.583 569.407V375.71C389.577 365.061 392.364 354.515 397.783 344.675C403.202 334.836 411.149 325.895 421.168 318.363C431.187 310.832 443.082 304.857 456.175 300.781C469.267 296.705 483.3 294.607 497.472 294.607V488.4C497.449 509.891 486.073 530.495 465.842 545.685C445.611 560.875 418.182 569.407 389.583 569.407Z"/>
            <path d="M0.638407 864.014V670.316C0.632801 659.667 3.41931 649.122 8.83875 639.282C14.2582 629.443 22.2044 620.502 32.2234 612.97C42.2424 605.439 54.1379 599.464 67.2305 595.388C80.323 591.312 94.356 589.214 108.528 589.214V783.007C108.505 804.497 97.1283 825.102 76.8976 840.291C56.6668 855.481 29.2377 864.014 0.638407 864.014Z"/>
            <path d="M0.638407 274.8V81.1028C0.632801 70.4537 3.41931 59.9082 8.83875 50.0685C14.2582 40.2289 22.2044 31.2879 32.2234 23.7564C42.2424 16.2249 54.1379 10.2504 67.2305 6.17421C80.323 2.09802 94.356 0 108.528 0V193.794C108.505 215.284 97.1283 235.888 76.8976 251.078C56.6668 266.268 29.2377 274.8 0.638407 274.8Z"/>
            <path d="M521.891 864.014V670.316C521.885 659.667 524.672 649.122 530.091 639.282C535.511 629.443 543.457 620.502 553.476 612.97C563.495 605.439 575.391 599.464 588.483 595.388C601.576 591.312 615.609 589.214 629.78 589.214V783.007C629.758 804.497 618.381 825.102 598.15 840.291C577.919 855.481 550.49 864.014 521.891 864.014Z"/>
            <path d="M521.891 274.8V81.1028C521.885 70.4537 524.672 59.9082 530.091 50.0685C535.511 40.2289 543.457 31.2879 553.476 23.7564C563.495 16.2249 575.391 10.2504 588.483 6.17421C601.576 2.09802 615.609 0 629.78 0V193.794C629.758 215.284 618.381 235.888 598.15 251.078C577.919 266.268 550.49 274.8 521.891 274.8Z"/>
            <path d="M260.467 864.014V670.316C260.461 659.667 263.248 649.122 268.667 639.282C274.086 629.443 282.033 620.502 292.052 612.97C302.071 605.439 313.966 599.464 327.059 595.388C340.151 591.312 354.184 589.214 368.356 589.214V783.007C368.333 804.497 356.957 825.102 336.726 840.291C316.495 855.481 289.066 864.014 260.467 864.014Z"/>
            <path d="M260.467 274.8V81.1028C260.461 70.4537 263.248 59.9082 268.667 50.0685C274.086 40.2289 282.033 31.2879 292.052 23.7564C302.071 16.2249 313.966 10.2504 327.059 6.17421C340.151 2.09802 354.184 0 368.356 0V193.794C368.333 215.284 356.957 235.888 336.726 251.078C316.495 266.268 289.066 274.8 260.467 274.8Z"/>
            <path d="M237.005 864.014V670.316C237.011 659.667 234.225 649.122 228.805 639.282C223.386 629.443 215.439 620.502 205.42 612.97C195.401 605.439 183.506 599.464 170.413 595.388C157.321 591.312 143.288 589.214 129.116 589.214V783.007C129.139 804.497 140.516 825.102 160.746 840.291C180.977 855.481 208.406 864.014 237.005 864.014Z"/>
            <path d="M237.005 274.8V81.1028C237.011 70.4537 234.225 59.9082 228.805 50.0685C223.386 40.2289 215.439 31.2879 205.42 23.7564C195.401 16.2249 183.506 10.2504 170.413 6.17421C157.321 2.09802 143.288 0 129.116 0V193.794C129.139 215.284 140.516 235.888 160.746 251.078C180.977 266.268 208.406 274.8 237.005 274.8Z"/>
            <path d="M758.258 864.014V670.316C758.264 659.667 755.477 649.122 750.058 639.282C744.638 629.443 736.692 620.502 726.673 612.97C716.654 605.439 704.759 599.464 691.666 595.388C678.573 591.312 664.54 589.214 650.369 589.214V783.007C650.391 804.497 661.768 825.102 681.999 840.291C702.23 855.481 729.659 864.014 758.258 864.014Z"/>
            <path d="M758.258 274.8V81.1028C758.264 70.4537 755.477 59.9082 750.058 50.0685C744.638 40.2289 736.692 31.2879 726.673 23.7564C716.654 16.2249 704.759 10.2504 691.666 6.17421C678.573 2.09802 664.54 0 650.369 0V193.794C650.391 215.284 661.768 235.888 681.999 251.078C702.23 266.268 729.659 274.8 758.258 274.8Z"/>
            <path d="M496.834 864.014V670.316C496.839 659.667 494.053 649.122 488.633 639.282C483.214 629.443 475.268 620.502 465.249 612.97C455.23 605.439 443.334 599.464 430.242 595.388C417.149 591.312 403.116 589.214 388.944 589.214V783.007C388.967 804.497 400.344 825.102 420.575 840.291C440.805 855.481 468.234 864.014 496.834 864.014Z"/>
            <path d="M496.834 274.8V81.1028C496.839 70.4537 494.053 59.9082 488.633 50.0685C483.214 40.2289 475.268 31.2879 465.249 23.7564C455.23 16.2249 443.334 10.2504 430.242 6.17421C417.149 2.09802 403.116 0 388.944 0V193.794C388.967 215.284 400.344 235.888 420.575 251.078C440.805 266.268 468.234 274.8 496.834 274.8Z"/>
          </g>
        </svg>
      </div>

      <div style={{
        position:'relative', zIndex: 1,
        flex:1, display:'flex', flexDirection:'column',
        justifyContent:'center', alignItems:'center',
        padding:'24px 24px 32px',
      }}>
        <div style={{ width:'100%', maxWidth: 342, display:'flex', flexDirection:'column', gap: 56 }}>
          {/* Logo area */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-end', height: 74 }}>
            <img
              src="uploads/logo-learnxpert-white.png"
              alt="LearnXpert"
              style={{ width: 184, height: 69, objectFit:'contain' }}
            />
          </div>

          {/* Form */}
          <div style={{ display:'flex', flexDirection:'column', gap: 24 }}>
            {/* Email */}
            <div style={{ display:'flex', flexDirection:'column', gap: 6 }}>
              <label style={{ fontSize: 14, fontWeight: 500, lineHeight:'20px', color: '#F7F7F7' }}>Email</label>
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
              <label style={{ fontSize: 14, fontWeight: 500, lineHeight:'20px', color: '#F7F7F7' }}>Password</label>
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
                color: '#FFFFFF', cursor:'pointer', padding:0, fontFamily:'inherit',
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
          </div>
        </div>
      </div>

      <p style={{
        margin:0, padding:'0 24px',
        textAlign:'center',
        fontSize: 12, lineHeight:'16px', color: MUTED,
        userSelect:'none', position:'relative', zIndex: 2,
      }}>
        ©2026 LearnXpert LnD
      </p>
    </div>
  );
}

window.Login = Login;
