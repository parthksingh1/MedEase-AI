'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  HeartHandshake, 
  MessageCircle, 
  Activity, 
  Users, 
  FileText, 
  Brain,
  Shield,
  Zap,
  ArrowRight,
  Stethoscope,
  Pill,
  Calendar,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Camera,
  Mic,
  Map,
  BookOpen,
  Award,
  TrendingUp,
  Clock,
  Heart
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI Symptom Checker',
      description: 'Upload symptoms via text, voice, or image for instant AI analysis',
      gradient: 'gradient-mint',
      href: '/chat'
    },
    {
      icon: MessageCircle,
      title: 'Multilingual Chat',
      description: 'Chat with AI in Hindi & English for health queries',
      gradient: 'gradient-sky',
      href: '/chat'
    },
    {
      icon: Activity,
      title: 'Health Dashboard',
      description: 'Track vitals, mood, and get personalized AI insights',
      gradient: 'gradient-mint',
      href: '/dashboard'
    },
    {
      icon: Users,
      title: 'Doctor Matching',
      description: 'AI-powered doctor recommendations based on your needs',
      gradient: 'gradient-sky',
      href: '/doctors'
    },
    {
      icon: FileText,
      title: 'Smart Reports',
      description: 'Upload lab reports and get AI-powered explanations',
      gradient: 'gradient-mint',
      href: '/reports'
    },
    {
      icon: Shield,
      title: 'Emergency Care',
      description: 'QR code for instant medical information access',
      gradient: 'gradient-sky',
      href: '/dashboard'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Users' },
    { number: '1000+', label: 'Doctors' },
    { number: '24/7', label: 'AI Support' },
    { number: '99%', label: 'Accuracy' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      text: 'MedEase AI helped me understand my diabetes better. The AI explanations are so clear!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      text: 'Found an excellent cardiologist through the app. The doctor matching feature is amazing.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Anita Patel',
      location: 'Bangalore',
      text: 'The Hindi support makes it so easy for my parents to use. Great for the whole family!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  const capabilities = [
    {
      icon: Camera,
      title: 'Visual Symptom Analysis',
      description: 'Upload photos of rashes, wounds, or symptoms for AI analysis'
    },
    {
      icon: Mic,
      title: 'Voice Health Assistant',
      description: 'Speak your symptoms in Hindi or English for instant help'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Seamlessly switch between Hindi and English conversations'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect experience on any device, anywhere, anytime'
    }
  ];

  const healthJourney = [
    {
      step: '1',
      title: 'Share Your Symptoms',
      description: 'Tell our AI about your health concerns through text, voice, or images',
      icon: MessageCircle
    },
    {
      step: '2',
      title: 'Get AI Insights',
      description: 'Receive instant analysis and personalized health recommendations',
      icon: Brain
    },
    {
      step: '3',
      title: 'Connect with Doctors',
      description: 'Find and consult with qualified doctors based on AI recommendations',
      icon: Users
    },
    {
      step: '4',
      title: 'Track Your Progress',
      description: 'Monitor your health journey with smart dashboards and insights',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your AI-Powered
                <span className="text-gradient block mt-2">Health Assistant</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Get instant medical insights, connect with doctors, and take control of your health 
                with our comprehensive AI platform designed for Indian healthcare.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
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
              <Link href="/instructions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-emerald-200 text-emerald-700 px-8 py-4 rounded-2xl font-semibold text-lg shadow-gentle flex items-center gap-2"
                >
                  How It Works
                  <BookOpen className="h-5 w-5" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Health Journey in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From symptom checking to doctor consultations, we guide you every step of the way
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthJourney.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Health Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for complete health management in one intelligent platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={feature.href}>
                  <div className="glass p-8 rounded-3xl shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className={`${feature.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powered by cutting-edge AI technology designed for Indian healthcare needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl shadow-gentle text-center"
              >
                <div className="gradient-sky p-4 rounded-2xl w-fit mx-auto mb-4">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our users say about their health journey with MedEase AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl shadow-gentle"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Health Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From tracking to treatment, we've got every aspect of your health covered
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Map,
                title: 'Healthcare Map',
                description: 'Find nearby hospitals, clinics, and pharmacies with real-time availability',
                href: '/map'
              },
              {
                icon: BookOpen,
                title: 'Health Journal',
                description: 'Track your daily wellness journey with AI-powered insights',
                href: '/journal'
              },
              {
                icon: Pill,
                title: 'Medication Tracker',
                description: 'Never miss a dose with smart reminders and adherence tracking',
                href: '/dashboard'
              },
              {
                icon: Calendar,
                title: 'Appointment Scheduler',
                description: 'Book and manage appointments with top doctors seamlessly',
                href: '/doctors'
              },
              {
                icon: Award,
                title: 'Health Achievements',
                description: 'Gamified wellness goals to keep you motivated and healthy',
                href: '/dashboard'
              },
              {
                icon: Clock,
                title: '24/7 AI Support',
                description: 'Round-the-clock health assistance whenever you need it',
                href: '/chat'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={item.href}>
                  <div className="glass p-6 rounded-2xl shadow-gentle hover:shadow-md transition-all cursor-pointer group">
                    <div className="gradient-mint p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-3xl shadow-soft"
          >
            <div className="flex justify-center mb-8">
              <div className="gradient-mint p-6 rounded-full">
                <HeartHandshake className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Health Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust MedEase AI for their healthcare needs. 
              Start your journey to better health today with our comprehensive AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/instructions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gradient-mint text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-soft flex items-center gap-2 mx-auto sm:mx-0"
                >
                  Get Started Now
                  <Zap className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link href="/chat">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-emerald-200 text-emerald-700 px-10 py-4 rounded-2xl font-semibold text-lg shadow-gentle flex items-center gap-2 mx-auto sm:mx-0"
                >
                  Try AI Chat
                  <MessageCircle className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}