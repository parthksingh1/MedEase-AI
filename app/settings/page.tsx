'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Palette, 
  Download, 
  Trash2,
  Edit,
  Save,
  Camera,
  Phone,
  Mail,
  MapPin,
  Heart,
  Pill,
  Users,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react';
import { dummyUser } from '@/data/dummyUsers';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userProfile, setUserProfile] = useState(dummyUser);

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'privacy', name: 'Privacy', icon: Shield },
    { id: 'language', name: 'Language', icon: Globe },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'data', name: 'Data', icon: Download }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="glass p-4 rounded-2xl shadow-gentle">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-600 hover:bg-white/60'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass p-8 rounded-2xl shadow-gentle">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900">Profile Information</h2>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors"
                    >
                      {isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                      {isEditing ? 'Save' : 'Edit'}
                    </motion.button>
                  </div>

                  {/* Profile Picture */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative">
                      <img
                        src={userProfile.avatar}
                        alt={userProfile.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      {isEditing && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute -bottom-2 -right-2 p-2 bg-emerald-500 text-white rounded-full shadow-lg"
                        >
                          <Camera className="h-4 w-4" />
                        </motion.button>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{userProfile.name}</h3>
                      <p className="text-gray-600">{userProfile.email}</p>
                    </div>
                  </div>

                  {/* Profile Form */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          value={userProfile.name}
                          onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                      <input
                        type="number"
                        value={userProfile.age}
                        onChange={(e) => setUserProfile({...userProfile, age: parseInt(e.target.value)})}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          value={userProfile.email}
                          onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          value={userProfile.phone}
                          onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-50"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          value={userProfile.location}
                          onChange={(e) => setUserProfile({...userProfile, location: e.target.value})}
                          disabled={!isEditing}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
                        <input
                          type="text"
                          value={userProfile.bloodType}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-50"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
                        <input
                          type="text"
                          value={userProfile.allergies.join(', ')}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-50"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Medical Conditions</label>
                        <input
                          type="text"
                          value={userProfile.conditions.join(', ')}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-8">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    {[
                      { title: 'Medication Reminders', description: 'Get notified when it\'s time to take your medications' },
                      { title: 'Appointment Reminders', description: 'Receive reminders about upcoming doctor appointments' },
                      { title: 'Health Insights', description: 'Get AI-powered insights about your health data' },
                      { title: 'Emergency Alerts', description: 'Receive critical health alerts and emergency notifications' },
                      { title: 'Weekly Reports', description: 'Get weekly summaries of your health progress' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                        <div>
                          <h3 className="font-medium text-gray-900">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === 'privacy' && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-8">Privacy & Security</h2>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-white/50 rounded-xl">
                      <h3 className="font-medium text-gray-900 mb-2">Change Password</h3>
                      <div className="space-y-4">
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Current password"
                            className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                          </button>
                        </div>
                        <input
                          type="password"
                          placeholder="New password"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <input
                          type="password"
                          placeholder="Confirm new password"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors"
                        >
                          Update Password
                        </motion.button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { title: 'Data Sharing with Doctors', description: 'Allow your doctors to access your health data' },
                        { title: 'Anonymous Analytics', description: 'Help improve our services with anonymous usage data' },
                        { title: 'Marketing Communications', description: 'Receive updates about new features and health tips' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                          <div>
                            <h3 className="font-medium text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked={index === 0} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Other tabs would be implemented similarly */}
              {activeTab === 'language' && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-8">Language & Region</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                        <option value="hi">हिंदी (Hindi)</option>
                        <option value="en">English</option>
                        <option value="bn">বাংলা (Bengali)</option>
                        <option value="te">తెలుగు (Telugu)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'data' && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-8">Data Management</h2>
                  <div className="space-y-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-4 border border-emerald-500 text-emerald-600 rounded-xl font-medium hover:bg-emerald-50 transition-colors"
                    >
                      <Download className="h-5 w-5 mx-auto mb-2" />
                      Export All Data
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-4 border border-red-500 text-red-600 rounded-xl font-medium hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="h-5 w-5 mx-auto mb-2" />
                      Delete Account
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}