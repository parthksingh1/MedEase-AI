'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, AlertTriangle } from 'lucide-react';

interface VitalCardProps {
  vital: {
    icon: any;
    label: string;
    value: string | number;
    unit: string;
    status: 'normal' | 'warning' | 'critical';
    trend: 'up' | 'down' | 'stable';
    color: string;
  };
}

export function VitalCard({ vital }: VitalCardProps) {
  const getTrendIcon = () => {
    switch (vital.trend) {
      case 'up': return TrendingUp;
      case 'down': return TrendingDown;
      default: return Minus;
    }
  };

  const TrendIcon = getTrendIcon();
  const statusColors = {
    normal: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    critical: 'bg-red-50 border-red-200'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`glass p-6 rounded-2xl shadow-gentle border-2 ${statusColors[vital.status]} hover:shadow-md transition-all`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl bg-white/80`}>
            <vital.icon className={`h-5 w-5 ${vital.color}`} />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-700">{vital.label}</div>
            <div className="text-2xl font-bold text-gray-900">{vital.value}</div>
          </div>
        </div>
        {vital.status === 'warning' && (
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
        )}
        {vital.status === 'critical' && (
          <AlertTriangle className="h-5 w-5 text-red-600" />
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{vital.unit}</span>
        <div className="flex items-center gap-1">
          <TrendIcon className={`h-4 w-4 ${
            vital.trend === 'up' ? 'text-red-500' :
            vital.trend === 'down' ? 'text-green-500' :
            'text-gray-400'
          }`} />
          <span className="text-xs text-gray-500 capitalize">{vital.trend}</span>
        </div>
      </div>
    </motion.div>
  );
}