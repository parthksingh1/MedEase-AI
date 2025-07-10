'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, X, Download, Share } from 'lucide-react';
import QRCode from 'qrcode.react';

interface EmergencyQRProps {
  user: any;
}

export function EmergencyQR({ user }: EmergencyQRProps) {
  const [showQR, setShowQR] = useState(false);

  const emergencyData = {
    name: user.name,
    age: user.age,
    bloodType: user.bloodType,
    allergies: user.allergies,
    conditions: user.conditions,
    medications: user.medications.map(m => `${m.name} ${m.dosage}`),
    emergencyContact: user.emergencyContact,
    phone: user.phone
  };

  const qrData = JSON.stringify(emergencyData);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowQR(true)}
        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl shadow-gentle hover:bg-red-600 transition-all"
      >
        <QrCode className="h-4 w-4" />
        <span className="text-sm font-medium">Emergency QR</span>
      </motion.button>

      {showQR && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowQR(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Emergency QR Code</h2>
              <button
                onClick={() => setShowQR(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="bg-white p-4 rounded-xl shadow-inner mb-4">
                <QRCode 
                  value={qrData} 
                  size={200}
                  className="mx-auto"
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                This QR code contains your essential medical information for emergency situations. 
                Healthcare providers can scan it to access your allergies, medications, and emergency contacts.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium text-gray-900">Information Included:</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Personal: {user.name}, {user.age} years, {user.bloodType}</div>
                <div>• Allergies: {user.allergies.join(', ')}</div>
                <div>• Conditions: {user.conditions.join(', ')}</div>
                <div>• Emergency Contact: {user.emergencyContact.name}</div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 text-white py-3 rounded-xl font-medium hover:bg-emerald-600 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                <Share className="h-4 w-4" />
                Share
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}