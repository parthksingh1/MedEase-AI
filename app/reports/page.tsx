'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  FileText, 
  Image, 
  Download, 
  Eye, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Brain,
  TrendingUp,
  Share
} from 'lucide-react';
import { dummyLabReports, dummyImageReports } from '@/data/dummyReports';

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState('lab');
  const [selectedReport, setSelectedReport] = useState(null);

  const tabs = [
    { id: 'lab', name: 'Lab Reports', icon: FileText },
    { id: 'imaging', name: 'Medical Images', icon: Image },
    { id: 'upload', name: 'Upload New', icon: Upload }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      case 'normal': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Medical Reports</h1>
          <p className="text-gray-600">View and analyze your medical reports with AI insights</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-2xl w-fit"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-emerald-600 shadow-gentle'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.name}
            </button>
          ))}
        </motion.div>

        {/* Lab Reports Tab */}
        {activeTab === 'lab' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {dummyLabReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl shadow-gentle"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{report.reportType}</h3>
                    <p className="text-gray-600">{report.labName}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{report.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <Share className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Test Results */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {Object.entries(report.results).map(([key, result]) => (
                    <div key={key} className="p-4 bg-white/50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(result.status)}`}>
                          {result.status}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {result.value} {result.unit}
                      </div>
                      <div className="text-sm text-gray-600">
                        Normal: {result.normal}
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Insights */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="h-5 w-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">AI Insights</h4>
                  </div>
                  <div className="space-y-2">
                    {report.aiInsights.map((insight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">{insight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doctor Notes */}
                {report.doctorNotes && (
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <h4 className="font-medium text-blue-900">Doctor's Notes</h4>
                    </div>
                    <p className="text-sm text-blue-800">{report.doctorNotes}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Medical Images Tab */}
        {activeTab === 'imaging' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {dummyImageReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl shadow-gentle"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{report.type}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{report.date}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <img
                    src={report.imageUrl}
                    alt={report.type}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Findings</h4>
                    <p className="text-sm text-gray-700">{report.findings}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-4 w-4 text-purple-600" />
                      <h4 className="font-medium text-gray-900">AI Analysis</h4>
                    </div>
                    <p className="text-sm text-gray-700">{report.aiAnalysis}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 px-4 border border-emerald-500 text-emerald-600 rounded-xl font-medium hover:bg-emerald-50 transition-colors"
                  >
                    View Full Size
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 px-4 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors"
                  >
                    Download
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass p-8 rounded-2xl shadow-gentle text-center">
              <Upload className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Upload Medical Report</h3>
              <p className="text-gray-600 mb-8">
                Upload your lab reports or medical images for AI-powered analysis and insights
              </p>

              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 mb-6 hover:border-emerald-400 transition-colors">
                <div className="space-y-4">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-gray-600 mb-2">Drag and drop your files here, or</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors"
                    >
                      Browse Files
                    </motion.button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Supports PDF, JPG, PNG files up to 10MB
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="p-4 bg-emerald-50 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mb-2" />
                  <h4 className="font-medium text-emerald-900 mb-1">Lab Reports</h4>
                  <p className="text-sm text-emerald-700">
                    Blood tests, urine analysis, lipid profiles, and more
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl">
                  <Image className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-medium text-blue-900 mb-1">Medical Images</h4>
                  <p className="text-sm text-blue-700">
                    X-rays, MRI scans, CT scans, ultrasounds
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}