'use client';

import { motion } from 'framer-motion';
import { Smile, Frown, Meh, Heart, Zap } from 'lucide-react';

interface MoodData {
  date: string;
  mood: string;
  score: number;
  notes: string;
}

interface MoodTrackerProps {
  moodData: MoodData[];
}

export function MoodTracker({ moodData }: MoodTrackerProps) {
  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'happy': return { icon: Smile, color: 'text-green-500', bg: 'bg-green-100' };
      case 'sad': return { icon: Frown, color: 'text-blue-500', bg: 'bg-blue-100' };
      case 'stressed': return { icon: Zap, color: 'text-red-500', bg: 'bg-red-100' };
      case 'anxious': return { icon: Heart, color: 'text-purple-500', bg: 'bg-purple-100' };
      case 'calm': return { icon: Heart, color: 'text-emerald-500', bg: 'bg-emerald-100' };
      default: return { icon: Meh, color: 'text-gray-500', bg: 'bg-gray-100' };
    }
  };

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'happy': return '😊';
      case 'sad': return '😢';
      case 'stressed': return '😰';
      case 'anxious': return '😟';
      case 'calm': return '😌';
      default: return '😐';
    }
  };

  const latest = moodData[moodData.length - 1];
  const averageScore = Math.round(moodData.reduce((sum, day) => sum + day.score, 0) / moodData.length);

  return (
    <div className="glass p-6 rounded-2xl shadow-gentle">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Mood Tracker</h2>
        <div className="text-right">
          <div className="text-2xl font-bold text-gradient">{averageScore}/10</div>
          <div className="text-sm text-gray-600">Average</div>
        </div>
      </div>

      {/* Current Mood */}
      <div className="mb-6 p-4 rounded-xl bg-white/50">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-2xl">{getMoodEmoji(latest.mood)}</div>
          <div>
            <div className="font-medium text-gray-900 capitalize">Today: {latest.mood}</div>
            <div className="text-sm text-gray-600">Score: {latest.score}/10</div>
          </div>
        </div>
        <p className="text-sm text-gray-600 italic">"{latest.notes}"</p>
      </div>

      {/* Mood Timeline */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700">Recent Mood History</h3>
        <div className="grid grid-cols-6 gap-2">
          {moodData.map((day, index) => {
            const moodConfig = getMoodIcon(day.mood);
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`p-2 rounded-lg text-center cursor-pointer ${moodConfig.bg} hover:shadow-md transition-all`}
                title={`${day.date}: ${day.mood} (${day.score}/10)`}
              >
                <div className="text-lg mb-1">{getMoodEmoji(day.mood)}</div>
                <div className="text-xs text-gray-600">{day.score}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Add Mood Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 py-3 px-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
      >
        + Log Today's Mood
      </motion.button>
    </div>
  );
}