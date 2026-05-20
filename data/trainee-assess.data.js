// Trainee Assessment mock data
// Source: ridho/lnd-presight-demo/src/pages/trainee/assessment

const AS_PENDING_SUMMARY = { pendingQuizzes: 3, pendingAssignments: 2 };

const AS_PENDING = [
  { id: 'assess-1',  assessmentName: 'Knowledge Check-Fundamentals of AI Ethics', courseName: 'AI Ethics & Responsible AI Implementation', assessmentType: 'Quiz',       deadline: '16 March 2026', status: 'Incomplete', score: null },
  { id: 'assess-2',  assessmentName: 'Statistics & Probability Basics',           courseName: 'Data Science Foundations',                   assessmentType: 'Quiz',       deadline: '18 March 2026', status: 'Incomplete', score: null },
  { id: 'assess-3',  assessmentName: 'Supervised Learning Project',               courseName: 'Machine Learning Fundamentals',              assessmentType: 'Assignment', deadline: '20 March 2026', status: 'Pending',    score: null },
  { id: 'assess-9',  assessmentName: 'Data Cleaning Exercise',                    courseName: 'Data Science Foundations',                   assessmentType: 'Assignment', deadline: '22 March 2026', status: 'Late',       score: null },
  { id: 'assess-10', assessmentName: 'Neural Networks Basics',                    courseName: 'Deep Learning Specialization',               assessmentType: 'Quiz',       deadline: '25 March 2026', status: 'Incomplete', score: null },
];

const AS_GRADED = [
  { id: 'assess-4', assessmentName: 'Applied Scenario Exercise',           courseName: 'AI Ethics & Responsible AI Implementation', assessmentType: 'Assignment', deadline: '17 March 2026', status: 'Graded',    score: 78   },
  { id: 'assess-5', assessmentName: 'Data Visualization Quiz',             courseName: 'Data Science Foundations',                   assessmentType: 'Quiz',       deadline: '15 March 2026', status: 'Submitted', score: 92   },
  { id: 'assess-6', assessmentName: 'Object-Oriented Programming Project', courseName: 'Python Programming Essentials',              assessmentType: 'Assignment', deadline: '12 March 2026', status: 'Submitted', score: null },
  { id: 'assess-7', assessmentName: 'Regression Analysis Quiz',            courseName: 'Machine Learning Fundamentals',              assessmentType: 'Quiz',       deadline: '10 March 2026', status: 'Submitted', score: 85   },
  { id: 'assess-8', assessmentName: 'CNN Architecture Project',            courseName: 'Deep Learning Specialization',               assessmentType: 'Assignment', deadline:  '8 March 2026', status: 'Graded',    score: 88   },
];
