'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Calendar, 
  Heart, 
  Brain, 
  Smile, 
  Frown, 
  Meh, 
  Edit3, 
  Save,
  Mic,
  Image,
  TrendingUp,
  BookOpen,
  Zap
} from 'lucide-react';

interface JournalEntry {
  id: string;
  date: string;
  mood: string;
  moodScore: number;
  title: string;
  content: string;
  tags: string[];
  aiInsights?: string[];
}

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: '1',
      date: '2024-01-20',
      mood: 'happy',
      moodScore: 8,
      title: 'Great day at work',
      content: 'Had a productive day at the office. Completed the project presentation and received positive feedback from the team. Feeling accomplished and energized.',
      tags: ['work', 'achievement', 'positive'],
      aiInsights: [
        'Your mood has improved significantly after work achievements',
        'Consider maintaining this positive momentum',
        'Work satisfaction seems to be a key mood booster for you'
      ]
    },
    {
      id: '2',
      date: '2024-01-19',
      mood: 'anxious',
      moodScore: 4,
      title: 'Worried about health checkup',
      content: 'Have my annual health checkup tomorrow. Feeling a bit anxious about the results, especially after the recent changes in my diet and exercise routine.',
      tags: ['health', 'anxiety', 'checkup'],
      aiInsights: [
        'Health-related anxiety is common and normal',
        'Your proactive approach to health is commendable',
        'Consider relaxation techniques before medical appointments'
      ]
    }
  ]);

  const [isWriting, setIsWriting] = useState(false);
  const [newEntry, setNewEntry] = useState({
    mood: 'neutral',
    moodScore: 5,
    title: '',
    content: '',
    tags: []
  });

  const moods = [
    { id: 'happy', name: 'Happy', icon: Smile, color: 'text-green-500', emoji: '😊' },
    { id: 'neutral', name: 'Neutral', icon: Meh, color: 'text-gray-500', emoji: '😐' },
    { id: 'sad', name: 'Sad', icon: Frown, color: 'text-blue-500', emoji: '😢' },
    { id: 'anxious', name: 'Anxious', icon: Zap, color: 'text-purple-500', emoji: '😰' },
    { id: 'stressed', name: 'Stressed', icon: Brain, color: 'text-red-500', emoji: '😤' }
  ];

  const getMoodConfig = (mood: string) => {
    return moods.find(m => m.id === mood) || moods[1];
  };

  const handleSaveEntry = () => {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      mood: newEntry.mood,
      moodScore: newEntry.moodScore,
      title: newEntry.title,
      content: newEntry.content,
      tags: newEntry.tags,
      aiInsights: [
        'Thank you for sharing your thoughts',
        'Regular journaling can improve mental well-being',
        'Consider reflecting on patterns in your entries'
      ]
    };

    setEntries([entry, ...entries]);
    setNewEntry({
      mood: 'neutral',
      moodScore: 5,
      title: '',
      content: '',
      tags: []
    });
    setIsWriting(false);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Journal</h1>
          <p className="text-gray-600">Track your thoughts, mood, and wellness journey</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="glass p-4 rounded-2xl shadow-gentle text-center">
            <BookOpen className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{entries.length}</div>
            <div className="text-sm text-gray-600">Entries</div>
          </div>
          <div className="glass p-4 rounded-2xl shadow-gentle text-center">
            <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">7.2</div>
            <div className="text-sm text-gray-600">Avg Mood</div>
          </div>
          <div className="glass p-4 rounded-2xl shadow-gentle text-center">
            <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">15</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
          <div className="glass p-4 rounded-2xl shadow-gentle text-center">
            <Heart className="h-6 w-6 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">85%</div>
            <div className="text-sm text-gray-600">Wellness</div>
          </div>
        </motion.div>

        {/* New Entry Button */}
        {!isWriting && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsWriting(true)}
            className="w-full glass p-6 rounded-2xl shadow-gentle hover:shadow-md transition-all mb-8 border-2 border-dashed border-emerald-300 hover:border-emerald-400"
          >
            <Plus className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-lg font-medium text-gray-900">Write New Entry</div>
            <div className="text-sm text-gray-600">Share your thoughts and feelings</div>
          </motion.button>
        )}

        {/* New Entry Form */}
        {isWriting && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-6 rounded-2xl shadow-gentle mb-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">New Journal Entry</h3>
            
            {/* Mood Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">How are you feeling?</label>
              <div className="grid grid-cols-5 gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => setNewEntry({...newEntry, mood: mood.id})}
                    className={`p-3 rounded-xl text-center transition-all ${
                      newEntry.mood === mood.id
                        ? 'bg-emerald-100 border-2 border-emerald-500'
                        : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{mood.emoji}</div>
                    <div className="text-xs font-medium">{mood.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mood Score */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Mood Score: {newEntry.moodScore}/10
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={newEntry.moodScore}
                onChange={(e) => setNewEntry({...newEntry, moodScore: parseInt(e.target.value)})}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={newEntry.title}
                onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                placeholder="Give your entry a title..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Content */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your thoughts</label>
              <textarea
                value={newEntry.content}
                onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                placeholder="Write about your day, feelings, or anything on your mind..."
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <Mic className="h-4 w-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <Image className="h-4 w-4" />
                </motion.button>
              </div>
              
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsWriting(false)}
                  className="px-4 py-2 border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSaveEntry}
                  disabled={!newEntry.title || !newEntry.content}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="h-4 w-4" />
                  Save Entry
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Journal Entries */}
        <div className="space-y-6">
          {entries.map((entry, index) => {
            const moodConfig = getMoodConfig(entry.mood);
            
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl shadow-gentle"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{moodConfig.emoji}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{entry.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(entry.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {entry.moodScore}/10
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <Edit3 className="h-4 w-4" />
                  </motion.button>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed">{entry.content}</p>
                </div>

                {entry.tags.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-lg"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {entry.aiInsights && (
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="h-4 w-4 text-purple-600" />
                      <h4 className="font-medium text-purple-900">AI Insights</h4>
                    </div>
                    <div className="space-y-1">
                      {entry.aiInsights.map((insight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-purple-800">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}