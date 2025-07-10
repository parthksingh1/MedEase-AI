'use client';

import { motion } from 'framer-motion';
import { Pill, Clock, Check, X, AlertCircle } from 'lucide-react';

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  timeSlots: string[];
  taken: { date: string; time: string; taken: boolean }[];
}

interface MedicationTrackerProps {
  medications: Medication[];
}

export function MedicationTracker({ medications }: MedicationTrackerProps) {
  const today = new Date().toISOString().split('T')[0];
  
  const getTodayStatus = (medication: Medication) => {
    const todayTaken = medication.taken.filter(t => t.date === '2024-01-20');
    const totalSlots = medication.timeSlots.length;
    const takenCount = todayTaken.filter(t => t.taken).length;
    
    return {
      taken: takenCount,
      total: totalSlots,
      percentage: Math.round((takenCount / totalSlots) * 100)
    };
  };

  const getNextDose = (medication: Medication) => {
    const now = new Date();
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    for (const slot of medication.timeSlots) {
      const [hour, minute] = slot.split(':').map(Number);
      const slotTime = hour * 100 + minute;
      
      if (slotTime > currentTime) {
        return slot;
      }
    }
    
    return medication.timeSlots[0] + ' (tomorrow)';
  };

  return (
    <div className="glass p-6 rounded-2xl shadow-gentle">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Medications</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
        >
          + Add Medicine
        </motion.button>
      </div>

      <div className="space-y-4">
        {medications.map((medication, index) => {
          const status = getTodayStatus(medication);
          const nextDose = getNextDose(medication);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl bg-white/50 border border-white/20"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                    <Pill className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{medication.name}</h3>
                    <p className="text-sm text-gray-600">{medication.dosage} • {medication.frequency}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {status.taken}/{status.total} doses
                  </div>
                  <div className="text-xs text-gray-500">today</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${status.percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Time Slots */}
              <div className="flex items-center gap-2 mb-3">
                {medication.timeSlots.map((slot, slotIndex) => {
                  const todayTaken = medication.taken.find(t => 
                    t.date === '2024-01-20' && t.time === slot
                  );
                  
                  return (
                    <div
                      key={slotIndex}
                      className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs ${
                        todayTaken?.taken 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {todayTaken?.taken ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <Clock className="h-3 w-3" />
                      )}
                      {slot}
                    </div>
                  );
                })}
              </div>

              {/* Next Dose */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <AlertCircle className="h-4 w-4" />
                <span>Next dose: {nextDose}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Today's Summary */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-500">
              <Check className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Today's Progress</div>
              <div className="text-sm text-gray-600">2 of 3 doses taken</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-600">67%</div>
            <div className="text-xs text-gray-500">Adherence</div>
          </div>
        </div>
      </div>
    </div>
  );
}