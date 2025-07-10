export const dummyDoctors = [
  {
    id: 'doc-1',
    name: 'Dr. Neha Verma',
    specialization: 'Cardiologist',
    qualification: 'MD, DM Cardiology',
    experience: 15,
    hospital: 'AIIMS, Delhi',
    location: 'Delhi',
    rating: 4.9,
    reviews: 450,
    languages: ['Hindi', 'English'],
    avatar: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
    availability: {
      today: true,
      nextSlot: '2024-01-21T10:00:00Z'
    },
    fees: {
      consultation: 800,
      followup: 500
    },
    about: 'Experienced cardiologist specializing in preventive cardiology and heart disease management.',
    conditions: ['Heart Disease', 'High Blood Pressure', 'Cholesterol', 'Chest Pain']
  },
  {
    id: 'doc-2',
    name: 'Dr. Raj Mehta',
    specialization: 'Endocrinologist',
    qualification: 'MD, DM Endocrinology',
    experience: 12,
    hospital: 'Max Hospital, Mumbai',
    location: 'Mumbai',
    rating: 4.8,
    reviews: 320,
    languages: ['Hindi', 'English', 'Marathi'],
    avatar: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
    availability: {
      today: false,
      nextSlot: '2024-01-22T14:00:00Z'
    },
    fees: {
      consultation: 900,
      followup: 600
    },
    about: 'Diabetes specialist with expertise in managing complex endocrine disorders.',
    conditions: ['Diabetes', 'Thyroid', 'PCOS', 'Obesity']
  },
  {
    id: 'doc-3',
    name: 'Dr. Priya Sharma',
    specialization: 'General Physician',
    qualification: 'MBBS, MD Internal Medicine',
    experience: 8,
    hospital: 'Apollo Hospital, Bangalore',
    location: 'Bangalore',
    rating: 4.7,
    reviews: 280,
    languages: ['Hindi', 'English', 'Kannada'],
    avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
    availability: {
      today: true,
      nextSlot: '2024-01-21T16:00:00Z'
    },
    fees: {
      consultation: 600,
      followup: 400
    },
    about: 'General physician with focus on preventive medicine and chronic disease management.',
    conditions: ['Fever', 'Cold & Cough', 'Stomach Issues', 'General Checkup']
  },
  {
    id: 'doc-4',
    name: 'Dr. Amit Kumar',
    specialization: 'Psychiatrist',
    qualification: 'MBBS, MD Psychiatry',
    experience: 10,
    hospital: 'Fortis Hospital, Gurgaon',
    location: 'Gurgaon',
    rating: 4.9,
    reviews: 190,
    languages: ['Hindi', 'English'],
    avatar: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
    availability: {
      today: true,
      nextSlot: '2024-01-21T11:00:00Z'
    },
    fees: {
      consultation: 1200,
      followup: 800
    },
    about: 'Mental health specialist with expertise in anxiety, depression, and stress management.',
    conditions: ['Depression', 'Anxiety', 'Stress', 'Sleep Disorders']
  }
];

export const dummyPatientCases = [
  {
    id: 'case-1',
    patientName: 'Aarav Singh',
    age: 32,
    gender: 'Male',
    chiefComplaint: 'Chest tightness and shortness of breath',
    symptoms: ['Chest tightness', 'Shortness of breath', 'Mild fatigue'],
    vitalSigns: {
      bloodPressure: '130/90',
      heartRate: '72 bpm',
      temperature: '98.6°F',
      respiratoryRate: '18/min'
    },
    medicalHistory: ['Hypertension', 'Pre-diabetes'],
    medications: ['Metformin 500mg BD', 'Amlodipine 5mg OD'],
    aiSuggestions: [
      'Consider ECG to rule out cardiac causes',
      'Monitor blood pressure regularly',
      'Stress test may be beneficial',
      'Consider anxiety as differential diagnosis'
    ],
    urgency: 'Medium',
    assignedDoctor: 'Dr. Neha Verma',
    lastUpdated: '2024-01-20T10:30:00Z'
  }
];