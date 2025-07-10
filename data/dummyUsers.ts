export const dummyUser = {
  id: 'user-1',
  name: 'Aarav Singh',
  age: 32,
  location: 'Lucknow, Uttar Pradesh',
  phone: '+91 9876543210',
  email: 'aarav.singh@email.com',
  conditions: ['High BP', 'Pre-diabetes'],
  language: 'Hindi',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  emergencyContact: {
    name: 'Ananya Sharma',
    relation: 'Wife',
    phone: '+91 9876543211'
  },
  vitals: {
    bloodPressure: { systolic: 130, diastolic: 90, timestamp: '2024-01-20T10:30:00Z' },
    bloodSugar: { value: 140, unit: 'mg/dL', timestamp: '2024-01-20T08:00:00Z' },
    weight: { value: 78, unit: 'kg', timestamp: '2024-01-20T07:00:00Z' },
    height: { value: 175, unit: 'cm' },
    heartRate: { value: 72, timestamp: '2024-01-20T10:30:00Z' },
    oxygenSaturation: { value: 98, timestamp: '2024-01-20T10:30:00Z' }
  },
  medications: [
    {
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      timeSlots: ['08:00', '20:00'],
      startDate: '2024-01-01',
      endDate: '2024-03-01',
      taken: [
        { date: '2024-01-20', time: '08:00', taken: true },
        { date: '2024-01-20', time: '20:00', taken: false }
      ]
    },
    {
      name: 'Amlodipine',
      dosage: '5mg',
      frequency: 'Once daily',
      timeSlots: ['08:00'],
      startDate: '2024-01-01',
      endDate: '2024-06-01',
      taken: [
        { date: '2024-01-20', time: '08:00', taken: true }
      ]
    }
  ],
  allergies: ['Penicillin', 'Shellfish'],
  bloodType: 'A+',
  insurance: {
    provider: 'Star Health',
    policyNumber: 'SH123456789',
    coverage: 500000,
    expiryDate: '2024-12-31'
  }
};

export const dummyMoodData = [
  { date: '2024-01-15', mood: 'happy', score: 8, notes: 'Feeling great after morning walk' },
  { date: '2024-01-16', mood: 'stressed', score: 4, notes: 'Work pressure high' },
  { date: '2024-01-17', mood: 'calm', score: 7, notes: 'Meditation session helped' },
  { date: '2024-01-18', mood: 'anxious', score: 3, notes: 'Worried about test results' },
  { date: '2024-01-19', mood: 'happy', score: 8, notes: 'Test results were good!' },
  { date: '2024-01-20', mood: 'content', score: 6, notes: 'Regular day' }
];

export const dummyHealthTimeline = [
  {
    date: '2024-01-20',
    type: 'vitals',
    title: 'Blood Pressure Check',
    description: 'BP: 130/90 - Slightly elevated',
    icon: 'activity'
  },
  {
    date: '2024-01-18',
    type: 'appointment',
    title: 'Dr. Neha Verma Consultation',
    description: 'Routine diabetes checkup - HbA1c: 6.8%',
    icon: 'stethoscope'
  },
  {
    date: '2024-01-15',
    type: 'medication',
    title: 'Started New Medication',
    description: 'Amlodipine 5mg for blood pressure',
    icon: 'pill'
  },
  {
    date: '2024-01-10',
    type: 'lab',
    title: 'Lab Test Results',
    description: 'Complete Blood Count - All values normal',
    icon: 'file-text'
  },
  {
    date: '2024-01-05',
    type: 'symptom',
    title: 'Reported Symptoms',
    description: 'Chest tightness after climbing stairs',
    icon: 'heart'
  }
];