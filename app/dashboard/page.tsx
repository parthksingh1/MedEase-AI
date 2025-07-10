'use client';

import { motion } from 'framer-motion';
import { 
  Activity, 
  Heart, 
  Droplets, 
  Weight, 
  Pill, 
  Calendar,
  TrendingUp,
  AlertTriangle,
  Users,
  MessageSquare,
  QrCode,
  Bell
} from 'lucide-react';
import { dummyUser, dummyMoodData, dummyHealthTimeline } from '@/data/dummyUsers';
import { VitalCard } from '@/components/VitalCard';
import { MoodTracker } from '@/components/MoodTracker';
import { HealthTimeline } from '@/components/HealthTimeline';
import { MedicationTracker } from '@/components/MedicationTracker';
import { EmergencyQR } from '@/components/EmergencyQR';

export default function Dashboard() {
  const vitals = [
    {
      icon: Heart,
      label: 'Blood Pressure',
      value: `${dummyUser.vitals.bloodPressure.systolic}/${dummyUser.vitals.bloodPressure.diastolic}`,
      unit: 'mmHg',
      status: 'warning',
      trend: 'up',
      color: 'text-red-600'
    },
    {
      icon: Droplets,
      label: 'Blood Sugar',
      value: dummyUser.vitals.bloodSugar.value,
      unit: 'mg/dL',
      status: 'warning',
      trend: 'up',
      color: 'text-orange-600'
    },
    {
      icon: Weight,
      label: 'Weight',
      value: dummyUser.vitals.weight.value,
      unit: 'kg',
      status: 'normal',
      trend: 'stable',
      color: 'text-green-600'
    },
    {
      icon: Activity,
      label: 'Heart Rate',
      value: dummyUser.vitals.heartRate.value,
      unit: 'bpm',
      status: 'normal',
      trend: 'stable',
      color: 'text-blue-600'
    }
  ];

  const todayInsights = [
    {
      type: 'medication',
      message: 'Take your evening Metformin dose at 8 PM',
      time: '6:30 PM',
      priority: 'high'
    },
    {
      type: 'activity',
      message: 'Great job! You walked 8,500 steps today',
      time: '5:00 PM',
      priority: 'normal'
    },
    {
      type: 'reminder',
      message: 'Schedule your monthly diabetes checkup',
      time: '4:00 PM',
      priority: 'medium'
    }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {dummyUser.name}! 👋
              </h1>
              <p className="text-gray-600 mt-1">Here's your health overview for today</p>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-gentle hover:shadow-md transition-all"
              >
                <Bell className="h-4 w-4" />
                <span className="text-sm font-medium">Notifications</span>
              </motion.button>
              <EmergencyQR user={dummyUser} />
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { icon: MessageSquare, label: 'AI Chat', href: '/chat', color: 'bg-blue-500' },
            { icon: Calendar, label: 'Appointments', href: '/doctors', color: 'bg-green-500' },
            { icon: Users, label: 'Find Doctors', href: '/doctors', color: 'bg-purple-500' },
            { icon: QrCode, label: 'Emergency', href: '#', color: 'bg-red-500' }
          ].map((action, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass p-4 rounded-2xl shadow-gentle hover:shadow-md transition-all"
            >
              <div className={`${action.color} p-3 rounded-xl w-fit mx-auto mb-3`}>
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-700">{action.label}</div>
            </motion.button>
          ))}
        </motion.div>

        {/* Vitals Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {vitals.map((vital, index) => (
            <VitalCard key={index} vital={vital} />
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass p-6 rounded-2xl shadow-gentle"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                Today's AI Insights
              </h2>
              <div className="space-y-4">
                {todayInsights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white/50">
                    <div className={`p-2 rounded-lg ${
                      insight.priority === 'high' ? 'bg-red-100 text-red-600' :
                      insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {insight.type === 'medication' && <Pill className="h-4 w-4" />}
                      {insight.type === 'activity' && <Activity className="h-4 w-4" />}
                      {insight.type === 'reminder' && <Calendar className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{insight.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{insight.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mood Tracker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <MoodTracker moodData={dummyMoodData} />
            </motion.div>

            {/* Health Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <HealthTimeline timeline={dummyHealthTimeline} />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Medication Tracker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <MedicationTracker medications={dummyUser.medications} />
            </motion.div>

            {/* Health Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass p-6 rounded-2xl shadow-gentle"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Score</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient mb-2">78</div>
                <div className="text-sm text-gray-600 mb-4">Good Overall Health</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Vitals</span>
                  <span className="font-medium">82/100</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Medication</span>
                  <span className="font-medium">90/100</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Activity</span>
                  <span className="font-medium">65/100</span>
                </div>
              </div>
            </motion.div>

            {/* Care Circle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass p-6 rounded-2xl shadow-gentle"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Care Circle</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{dummyUser.emergencyContact.name}</div>
                    <div className="text-sm text-gray-600">{dummyUser.emergencyContact.relation}</div>
                  </div>
                </div>
                <button className="w-full py-2 px-4 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  + Add Family Member
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}