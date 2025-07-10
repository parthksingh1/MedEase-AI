'use client';

import { motion } from 'framer-motion';
import { 
  Activity, 
  Stethoscope, 
  Pill, 
  FileText, 
  Heart,
  Calendar,
  ChevronRight
} from 'lucide-react';

interface TimelineItem {
  date: string;
  type: string;
  title: string;
  description: string;
  icon: string;
}

interface HealthTimelineProps {
  timeline: TimelineItem[];
}

export function HealthTimeline({ timeline }: HealthTimelineProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'activity': return Activity;
      case 'stethoscope': return Stethoscope;
      case 'pill': return Pill;
      case 'file-text': return FileText;
      case 'heart': return Heart;
      default: return Calendar;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'vitals': return 'bg-blue-500';
      case 'appointment': return 'bg-green-500';
      case 'medication': return 'bg-purple-500';
      case 'lab': return 'bg-yellow-500';
      case 'symptom': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="glass p-6 rounded-2xl shadow-gentle">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Health Timeline</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
        >
          View All
          <ChevronRight className="h-4 w-4" />
        </motion.button>
      </div>

      <div className="space-y-4">
        {timeline.map((item, index) => {
          const Icon = getIcon(item.icon);
          const colorClass = getTypeColor(item.type);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-all cursor-pointer"
            >
              <div className={`p-2 rounded-lg ${colorClass} flex-shrink-0`}>
                <Icon className="h-4 w-4 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-gray-900 truncate">{item.title}</h3>
                  <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Add Entry Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 py-3 px-4 border-2 border-dashed border-gray-300 text-gray-600 rounded-xl font-medium hover:border-emerald-400 hover:text-emerald-600 transition-all"
      >
        + Add Health Entry
      </motion.button>
    </div>
  );
}