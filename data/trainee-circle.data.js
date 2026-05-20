// Trainee Circle mock data
// Adapted from /Users/ridho/lnd-presight-demo/src/pages/trainee/circle/data/trainee-circle.mock.ts

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

const CR_DM_MESSAGES = {
  michael: [
    { id: 'm1', content: 'Pak Michael, saya mau tanya soal assignment sesi 3 — sudah saya submit tadi pagi.', time: '8:00 AM', isSent: true,  status: 'read' },
    { id: 'm2', content: 'Ada satu bagian di analisis stakeholder yang saya masih kurang yakin, terutama tentang cara mengidentifikasi hidden stakeholder.', time: '8:01 AM', isSent: true, status: 'read' },
    { id: 'm3', content: 'Score kamu 88/100 — analisis stakeholder-nya sangat tajam. Well done Priya! 🎉', time: '8:30 AM', isSent: false },
    { id: 'm4', content: 'Wah, terima kasih banyak Pak Michael! Senang sekali dengarnya 😊', time: '9:00 AM', isSent: true, status: 'read' },
    { id: 'm5', content: 'Pak Michael, boleh tanya soal case study sesi 4? Ada bagian tentang conflict resolution yang masih belum saya pahami.', time: '10:22 AM', isSent: true, status: 'delivered' },
    { id: 'm6', content: 'Score kamu 88/100 — analisis stakeholder-nya sangat tajam! 🎉', time: '10:30 AM', isSent: false },
  ],
  robert: [
    { id: 'r1', content: 'Selamat pagi Pak Robert! Ini update progress training saya minggu ini.', time: '9:00 AM', isSent: true, status: 'read' },
    { id: 'r2', content: 'Sesi 3 Leadership sudah selesai, nilai assignment 88/100.', time: '9:01 AM', isSent: true, status: 'read' },
    { id: 'r3', content: 'Minggu depan mulai sesi Conflict Resolution.', time: '9:02 AM', isSent: true, status: 'read' },
    { id: 'r4', content: 'Teruslah semangat ya Pri! IDP kamu on-track banget, proud of you.', time: '9:45 AM', isSent: false },
  ],
  'study-group': [
    { id: 'sg1', content: 'Teman-teman, gimana kalau kita bikin jadwal study session mingguan?', time: '8:00 AM', isSent: true, status: 'read' },
    { id: 'sg2', content: 'Setuju! Kamis aja lebih enak, setelah sesi hari itu masih fresh materinya.', time: '8:30 AM', isSent: false },
    { id: 'sg3', content: 'Citra: Meet virtual jam 8 malam ya untuk bahas capstone! Topic: pembagian tugas executive summary.', time: '9:00 AM', isSent: false },
  ],
  citra: [
    { id: 'c1', content: 'Pri, share notes sesi 3 dong, kemarin aku ketinggalan beberapa poin pas Pak Michael bahas leadership shadow.', time: '8:30 AM', isSent: false },
    { id: 'c2', content: 'Boleh banget Cit! Aku kirim notes-nya nanti malam ya 😊', time: '8:32 AM', isSent: true, status: 'read' },
  ],
  andi: [
    { id: 'a1', content: 'Pri, untuk capstone project, bagian executive summary aku assign ke kamu ya. Deadline minggu depan.', time: 'Yesterday', isSent: false },
    { id: 'a2', content: 'Siap Pak Andi, akan saya kerjakan!', time: 'Yesterday', isSent: true, status: 'read' },
  ],
};

const CR_ACTIVITIES = [
  { id:'a1', type:'mention',  user:'Emre Yilmaz',  avatarUrl:'https://images.unsplash.com/photo-1570274552732-05212a4f75ef?w=80&q=70', channel:'skynet-ai-project', content:'Hey @you, can you review the latest PR for the AI module?', time:'10 min ago' },
  { id:'a2', type:'reply',    user:'Elif Demir',   avatarUrl:'https://images.unsplash.com/photo-1708295925033-b58675a4fd6f?w=80&q=70', channel:'cloud-x-sky', content:'That deployment config looks good, just one small suggestion...', time:'25 min ago' },
  { id:'a3', type:'reaction', user:'Zeynep Kaya',  avatarUrl:'https://images.unsplash.com/photo-1543876020-fa0e86833073?w=80&q=70', channel:'digital-marketing', content:'reacted with 🔥 to your message', time:'1 hour ago' },
  { id:'a4', type:'mention',  user:'Burak Ozkan',  avatarUrl:'https://images.unsplash.com/photo-1768565422698-2faaefa61fcc?w=80&q=70', channel:'skynet-ai-project', content:'@you The final report is ready for your review.', time:'2 hours ago' },
];

const CR_SAVED = [
  { id:'s1', authorName:'Emre Yilmaz', avatarUrl:'https://images.unsplash.com/photo-1570274552732-05212a4f75ef?w=80&q=70', channel:'skynet-ai-project', content:"Here's the architecture diagram for the new ML pipeline. Make sure everyone follows this structure.", savedAt:'Today at 9:42 AM' },
  { id:'s2', authorName:'Elif Demir',  avatarUrl:'https://images.unsplash.com/photo-1708295925033-b58675a4fd6f?w=80&q=70', channel:'cloud-x-sky', content:'Deployment checklist: 1) Run tests, 2) Check env vars, 3) Deploy to staging first, 4) Verify health checks.', savedAt:'Yesterday at 3:15 PM' },
  { id:'s3', authorName:'Zeynep Kaya', avatarUrl:'https://images.unsplash.com/photo-1543876020-fa0e86833073?w=80&q=70', channel:'digital-marketing', content:'Campaign performance report links are updated in the shared drive. Q4 numbers look promising!', savedAt:'Mar 7 at 11:20 AM' },
];

const CR_RECENT_CALLS = [
  { id:'c1', name:'Sarah Chen',      avatarUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=70', direction:'incoming', kind:'voice', duration:'12m 04s', timeLabel:'Today, 2:14 PM' },
  { id:'c2', name:'Frontend Cohort', avatarUrl:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=80&q=70', isGroup:true, context:'#frontend-cohort', direction:'outgoing', kind:'video', duration:'48m 19s', timeLabel:'Today, 10:02 AM' },
  { id:'c3', name:'Alex Park',       avatarUrl:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=70', direction:'missed', kind:'voice', timeLabel:'Yesterday, 5:48 PM' },
  { id:'c4', name:'Design Review',   avatarUrl:'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&q=70', isGroup:true, context:'#design-review', direction:'outgoing', kind:'video', duration:'32m 51s', timeLabel:'Mon, 3:00 PM' },
  { id:'c5', name:'Priya Sharma',    avatarUrl:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=70', direction:'incoming', kind:'voice', duration:'7m 22s', timeLabel:'Mon, 11:18 AM' },
  { id:'c6', name:'Jordan Lee',      avatarUrl:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=70', direction:'missed', kind:'video', timeLabel:'Last week' },
];
