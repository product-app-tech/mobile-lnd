// Line Manager Dashboard mock data
// Source: ridho/lnd-presight-demo/src/pages/line-manager

const LM_PROFILE = {
  name: 'Kaushal Yainne',
  role: 'Line Manager',
  department: 'Marketing - Digital Marketing',
  level: 'Senior Manager',
  teamSize: 8,
  avatarUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=70',
};

const LM_METRICS = [
  { key:'completion', title:'Completion Rate',      value:'87%', trend:'+5% vs last month', trendPositive:true  },
  { key:'avg-score',  title:'Avg Score',            value:'84%', trend:'+3% vs last month', trendPositive:true  },
  { key:'active',     title:'Member Active Course', value:'12',  trend:'+2 this week',      trendPositive:true  },
];

const LM_TEAM = [
  { id:'1', name:'Priya Sharma', role:'Junior Staff', avatarUrl:'https://images.unsplash.com/photo-1667035533110-7964092f44a6?w=200&q=70', progress:78, status:'On Track', coursesCompleted:8, totalCourses:12 },
  { id:'2', name:'James Chen',   role:'Associate',    avatarUrl:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70', progress:45, status:'At Risk',  coursesCompleted:3, totalCourses:8  },
  { id:'3', name:'Aisha Patel',  role:'Junior Staff', avatarUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70', progress:92, status:'On Track', coursesCompleted:9, totalCourses:10 },
  { id:'4', name:'David Kim',    role:'Associate',    avatarUrl:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=70', progress:30, status:'At Risk',  coursesCompleted:2, totalCourses:9  },
];

const LM_ASSIGNED = [
  { id:'1', title:'Digital Marketing Essentials', trainee:'Priya Sharma', traineeAvatarUrl:'https://images.unsplash.com/photo-1667035533110-7964092f44a6?w=200&q=70', progress:0,   status:'not-started', dueDate:'Apr 15, 2026' },
  { id:'2', title:'Content Marketing Strategy',   trainee:'James Chen',   traineeAvatarUrl:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70', progress:0,   status:'not-started', dueDate:'Apr 20, 2026' },
];
const LM_COMPLETED = [
  { id:'3', title:'Social Media Marketing', trainee:'Aisha Patel', traineeAvatarUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70', progress:100, status:'completed', dueDate:'Mar 10, 2026' },
];
const LM_INPROGRESS = [
  { id:'4', title:'Marketing Analytics & Performance', trainee:'Priya Sharma', traineeAvatarUrl:'https://images.unsplash.com/photo-1667035533110-7964092f44a6?w=200&q=70', progress:78, status:'in-progress', dueDate:'Apr 10, 2026' },
  { id:'5', title:'SEO Optimization',                  trainee:'Aisha Patel',  traineeAvatarUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=70', progress:45, status:'in-progress', dueDate:'Apr 5, 2026'  },
  { id:'6', title:'Paid Advertising',                  trainee:'James Chen',   traineeAvatarUrl:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=70', progress:62, status:'in-progress', dueDate:'Mar 25, 2026' },
];

const LM_MONTHLY_TREND = [
  { month:'Oct', score: 78 },
  { month:'Nov', score: 80 },
  { month:'Dec', score: 79 },
  { month:'Jan', score: 82 },
  { month:'Feb', score: 81 },
  { month:'Mar', score: 84 },
];
