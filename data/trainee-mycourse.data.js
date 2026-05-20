// Trainee My Course mock data
// Source: ridho/lnd-presight-demo/src/pages/trainee/upskill

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

const MC_INSTRUCTOR = {
  name: 'Dr. Sarah Mitchell',
  company: 'AI Ethics Institute',
  experience: 10,
  rating: 4.8,
  certifications: 5,
  avatarInitials: 'SM',
  avatarGradient: 'linear-gradient(135deg, #c06e84, #6e3a85)',
};

// Extra detail fields per course (description, objectives, gain, skills, course overview).
// Indexed by course id; falls back to MC_DEFAULT_DETAILS if not present.
const MC_PROGRAM_DETAILS = {
  'up-1': {
    description:
      'Comprehensive program on AI ethics and responsible AI implementation. Covers fairness, transparency, accountability, and practical frameworks for deploying AI systems that align with organizational values and regulatory requirements.',
    learningObjectives: [
      'Understand core principles of AI ethics and responsible AI.',
      'Identify bias and fairness risks in real-world AI systems.',
      'Apply governance frameworks to AI product decisions.',
      'Build transparency and accountability into AI workflows.',
    ],
    whatYoullGain: [
      'Certificate of Completion',
      'Responsible AI Practitioner Badge',
    ],
    skillsCovered: [
      'AI Ethics',
      'Bias Detection',
      'AI Governance',
      'Transparent AI',
      'Risk Assessment',
    ],
    courseOverview: [
      {
        id: 'ai-sec-1',
        title: 'Foundations of AI Ethics',
        duration: '1h 20m',
        level: 'Beginner',
        source: null,
        description: 'Core ethical principles, frameworks, and why AI ethics matters today.',
        courseModules: [
          {
            id: 'ai-mod-1',
            title: 'What is AI Ethics?',
            duration: '40 min',
            activities: [
              { id: 'ai-act-1', title: 'Defining Responsible AI',          type: 'Reading Material',     duration: '12 min' },
              { id: 'ai-act-2', title: 'Case Study: AI Bias in Hiring',    type: 'Microlearning Video',  duration: '15 min' },
              { id: 'ai-act-3', title: 'Ethics Knowledge Check',           type: 'Quiz',                 duration: '13 min' },
            ],
          },
          {
            id: 'ai-mod-2',
            title: 'Ethical Frameworks for AI',
            duration: '40 min',
            activities: [
              { id: 'ai-act-4', title: 'Utilitarian vs Deontological AI',  type: 'Microlearning Slides', duration: '20 min' },
              { id: 'ai-act-5', title: 'Framework Application Exercise',   type: 'Assignment',           duration: '20 min' },
            ],
          },
        ],
      },
      {
        id: 'ai-sec-2',
        title: 'Bias, Fairness & Transparency',
        duration: '2h 10m',
        level: 'Intermediate',
        source: null,
        description: 'Detecting and mitigating bias; designing transparent and explainable AI systems.',
        courseModules: [
          {
            id: 'ai-mod-3',
            title: 'Detecting Bias in Datasets',
            duration: '55 min',
            activities: [
              { id: 'ai-act-6', title: 'Sources of Bias',                  type: 'Reading Material',     duration: '15 min' },
              { id: 'ai-act-7', title: 'Bias Audit Walkthrough',           type: 'Microlearning Video',  duration: '25 min' },
              { id: 'ai-act-8', title: 'Practice: Audit a Dataset',        type: 'Assignment',           duration: '15 min' },
            ],
          },
          {
            id: 'ai-mod-4',
            title: 'Building Transparent AI',
            duration: '75 min',
            activities: [
              { id: 'ai-act-9',  title: 'Explainability Methods Overview', type: 'Microlearning Slides', duration: '20 min' },
              { id: 'ai-act-10', title: 'Live Q&A with Researcher',        type: 'Live Session',         duration: '45 min' },
              { id: 'ai-act-11', title: 'Transparency Checklist Quiz',     type: 'Quiz',                 duration: '10 min' },
            ],
          },
        ],
      },
      {
        id: 'ai-sec-3',
        title: 'Governance & Practical Implementation',
        duration: '2h 30m',
        level: 'Advanced',
        source: "O'Reilly",
        description: 'Externally hosted on O’Reilly — covers responsible AI governance, regulation, and rollout playbooks.',
        courseModules: null,
      },
    ],
  },
};

const MC_DEFAULT_DETAILS = {
  description: 'Detailed course information will be available soon.',
  learningObjectives: [],
  whatYoullGain: [],
  skillsCovered: [],
  courseOverview: [],
};

const MC_HUB_PICKS = [
  { id:'h1', title:'Prompt Engineering for Marketers', tag:'AI · 1h 20m',
    gradient:'linear-gradient(132.73deg, rgb(6, 78, 156) 0%, rgb(156, 66, 255) 73.21%)' },
  { id:'h2', title:'Effective Stakeholder Communication', tag:'Soft · 45m',
    gradient:'linear-gradient(132.73deg, rgb(229, 138, 82) 0%, rgb(184, 55, 106) 73.21%)' },
  { id:'h3', title:'Data Literacy 101', tag:'Data · 2h',
    gradient:'linear-gradient(132.73deg, rgb(16, 125, 156) 0%, rgb(18, 66, 106) 73.21%)' },
];
