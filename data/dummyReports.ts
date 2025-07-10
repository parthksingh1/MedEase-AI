export const dummyLabReports = [
  {
    id: 'report-1',
    date: '2024-01-18',
    labName: 'SRL Diagnostics',
    reportType: 'Complete Blood Count',
    status: 'Completed',
    results: {
      hemoglobin: { value: 11.3, unit: 'g/dL', normal: '12-16', status: 'Low' },
      whiteBloodCells: { value: 7800, unit: '/μL', normal: '4000-11000', status: 'Normal' },
      platelets: { value: 280000, unit: '/μL', normal: '150000-450000', status: 'Normal' },
      hematocrit: { value: 38.5, unit: '%', normal: '37-48', status: 'Normal' }
    },
    aiInsights: [
      'Mild anemia detected (Hemoglobin: 11.3 g/dL)',
      'Consider iron deficiency evaluation',
      'Other blood parameters are within normal limits',
      'Follow up with iron studies recommended'
    ],
    doctorNotes: 'Patient shows signs of iron deficiency anemia. Recommend iron supplements and dietary modifications.',
    downloadUrl: '#'
  },
  {
    id: 'report-2',
    date: '2024-01-15',
    labName: 'Thyrocare',
    reportType: 'Diabetes Profile',
    status: 'Completed',
    results: {
      fastingGlucose: { value: 118, unit: 'mg/dL', normal: '70-100', status: 'High' },
      hba1c: { value: 6.8, unit: '%', normal: '<5.7', status: 'High' },
      postPrandialGlucose: { value: 165, unit: 'mg/dL', normal: '<140', status: 'High' },
      insulin: { value: 12.5, unit: 'μU/mL', normal: '2.6-24.9', status: 'Normal' }
    },
    aiInsights: [
      'Pre-diabetes confirmed (HbA1c: 6.8%)',
      'Fasting glucose is elevated',
      'Post-meal glucose shows poor control',
      'Lifestyle modifications and medication review needed'
    ],
    doctorNotes: 'Continue current medication. Strict dietary control and regular exercise recommended.',
    downloadUrl: '#'
  },
  {
    id: 'report-3',
    date: '2024-01-10',
    labName: 'Dr. Lal PathLabs',
    reportType: 'Lipid Profile',
    status: 'Completed',
    results: {
      totalCholesterol: { value: 220, unit: 'mg/dL', normal: '<200', status: 'High' },
      ldlCholesterol: { value: 145, unit: 'mg/dL', normal: '<100', status: 'High' },
      hdlCholesterol: { value: 38, unit: 'mg/dL', normal: '>40', status: 'Low' },
      triglycerides: { value: 185, unit: 'mg/dL', normal: '<150', status: 'High' }
    },
    aiInsights: [
      'Dyslipidemia detected - multiple parameters abnormal',
      'High cardiovascular risk profile',
      'Consider statin therapy',
      'Dietary modifications essential'
    ],
    doctorNotes: 'Significant dyslipidemia. Start statin therapy and lifestyle modifications immediately.',
    downloadUrl: '#'
  }
];

export const dummyImageReports = [
  {
    id: 'image-1',
    date: '2024-01-20',
    type: 'Chest X-Ray',
    findings: 'Mild cardiomegaly noted. No acute pulmonary pathology.',
    aiAnalysis: 'AI detects slight enlargement of cardiac silhouette. Recommend echocardiogram for further evaluation.',
    imageUrl: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Reviewed'
  },
  {
    id: 'image-2',
    date: '2024-01-18',
    type: 'Skin Lesion',
    findings: 'Benign appearing mole on left forearm.',
    aiAnalysis: 'AI confidence: 94% benign. Regular monitoring recommended. No immediate concern.',
    imageUrl: 'https://images.pexels.com/photos/7089394/pexels-photo-7089394.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'Reviewed'
  }
];