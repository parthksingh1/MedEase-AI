'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MessageCircle, 
  Activity, 
  Users, 
  FileText, 
  Map, 
  BookOpen,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Brain,
  Heart,
  Shield,
  Zap,
  Globe,
  Camera,
  Mic
} from 'lucide-react';

export default function InstructionsPage() {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Health Chat',
      description: 'Chat with our AI assistant in Hindi or English. Ask about symptoms, medications, or general health questions.',
      steps: [
        'Go to the Chat page',
        'Type your health question or use voice input',
        'Get instant AI-powered responses',
        'Upload images for visual symptom analysis'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Activity,
      title: 'Health Dashboard',
      description: 'Track your vitals, medications, and get personalized health insights.',
      steps: [
        'View your current health metrics',
        'Log daily vitals like BP and blood sugar',
        'Track medication adherence',
        'Review AI-generated health insights'
      ],
      color: 'bg-emerald-500'
    },
    {
      icon: Users,
      title: 'Find Doctors',
      description: 'Discover qualified doctors near you based on your specific health needs.',
      steps: [
        'Search by specialty or location',
        'View doctor profiles and ratings',
        'Check availability and fees',
        'Book appointments directly'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: FileText,
      title: 'Medical Reports',
      description: 'Upload and analyze your lab reports with AI-powered insights.',
      steps: [
        'Upload lab reports or medical images',
        'Get AI analysis of your results',
        'Understand what your numbers mean',
        'Share reports with your doctors'
      ],
      color: 'bg-orange-500'
    },
    {
      icon: BookOpen,
      title: 'Health Journal',
      description: 'Track your daily mood, symptoms, and wellness journey.',
      steps: [
        'Log daily mood and symptoms',
        'Write about your health experiences',
        'Get AI insights on patterns',
        'Track your wellness progress'
      ],
      color: 'bg-pink-500'
    },
    {
      icon: Map,
      title: 'Healthcare Map',
      description: 'Find nearby hospitals, clinics, pharmacies, and labs.',
      steps: [
        'View healthcare facilities on the map',
        'Filter by type (hospital, clinic, pharmacy)',
        'Get directions and contact information',
        'Access emergency services quickly'
      ],
      color: 'bg-red-500'
    }
  ];

  const quickTips = [
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Use MedEase AI on any device - phone, tablet, or computer'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Chat in Hindi, English, or mix both languages naturally'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Get intelligent health insights powered by advanced AI'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your health data is encrypted and kept completely private'
    },
    {
      icon: Camera,
      title: 'Visual Analysis',
      description: 'Upload photos of symptoms, rashes, or reports for AI analysis'
    },
    {
      icon: Mic,
      title: 'Voice Input',
      description: 'Speak your symptoms or questions instead of typing'
    }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-gradient">MedEase AI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your comprehensive AI-powered health assistant. Learn how to make the most of all our features 
            to take control of your health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-mint text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-soft flex items-center gap-2"
              >
                Start AI Chat
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-emerald-200 text-emerald-700 px-8 py-4 rounded-2xl font-semibold text-lg shadow-gentle flex items-center gap-2"
              >
                View Dashboard
                <Activity className="h-5 w-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose MedEase AI?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="glass p-6 rounded-2xl shadow-gentle text-center"
              >
                <div className="gradient-mint p-4 rounded-2xl w-fit mx-auto mb-4">
                  <tip.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Guides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How to Use Each Feature</h2>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass p-8 rounded-2xl shadow-gentle"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className={`${feature.color} p-4 rounded-2xl w-fit mb-4`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">How to get started:</h4>
                    <div className="space-y-3">
                      {feature.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {stepIndex + 1}
                          </div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Getting Started Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-8 rounded-2xl shadow-gentle text-center"
        >
          <div className="gradient-mint p-6 rounded-full w-fit mx-auto mb-6">
            <Zap className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Begin your health journey today. Start with our AI chat to ask any health questions, 
            or explore your personalized dashboard to track your wellness.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-white/50 rounded-xl">
              <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Step 1</h3>
              <p className="text-sm text-gray-600">Start with the AI chat to ask your first health question</p>
            </div>
            <div className="p-4 bg-white/50 rounded-xl">
              <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Step 2</h3>
              <p className="text-sm text-gray-600">Explore your dashboard and log your health data</p>
            </div>
            <div className="p-4 bg-white/50 rounded-xl">
              <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Step 3</h3>
              <p className="text-sm text-gray-600">Upload reports and connect with doctors as needed</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-mint text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-soft flex items-center gap-2"
              >
                Start Your Health Journey
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-emerald-200 text-emerald-700 px-8 py-4 rounded-2xl font-semibold text-lg shadow-gentle"
              >
                Explore Dashboard
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}