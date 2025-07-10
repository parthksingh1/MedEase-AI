'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Video, 
  Calendar,
  Heart,
  Brain,
  Eye,
  Stethoscope,
  Users,
  Award,
  Languages,
  IndianRupee
} from 'lucide-react';
import { dummyDoctors } from '@/data/dummyDoctors';

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const specialties = [
    { id: 'all', name: 'All Specialties', icon: Stethoscope },
    { id: 'cardiology', name: 'Cardiology', icon: Heart },
    { id: 'endocrinology', name: 'Endocrinology', icon: Brain },
    { id: 'general', name: 'General Medicine', icon: Stethoscope },
    { id: 'psychiatry', name: 'Psychiatry', icon: Brain }
  ];

  const locations = [
    { id: 'all', name: 'All Cities' },
    { id: 'delhi', name: 'Delhi' },
    { id: 'mumbai', name: 'Mumbai' },
    { id: 'bangalore', name: 'Bangalore' },
    { id: 'gurgaon', name: 'Gurgaon' }
  ];

  const filteredDoctors = dummyDoctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            doctor.specialization.toLowerCase().includes(selectedSpecialty);
    const matchesLocation = selectedLocation === 'all' || 
                           doctor.location.toLowerCase().includes(selectedLocation);
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Doctor</h1>
          <p className="text-gray-600">Connect with qualified healthcare professionals</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-6 rounded-2xl shadow-gentle mb-8"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors, specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Specialty Filter */}
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {specialties.map(specialty => (
                <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {locations.map(location => (
                <option key={location.id} value={location.id}>{location.name}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Found {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl shadow-gentle hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={doctor.avatar}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-emerald-600 font-medium">{doctor.specialization}</p>
                  <p className="text-sm text-gray-600">{doctor.qualification}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                      <span className="text-sm text-gray-500">({doctor.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Award className="h-4 w-4" />
                      {doctor.experience} years
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  {doctor.hospital}, {doctor.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Languages className="h-4 w-4" />
                  {doctor.languages.join(', ')}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IndianRupee className="h-4 w-4" />
                  ₹{doctor.fees.consultation} consultation
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 leading-relaxed">{doctor.about}</p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {doctor.conditions.slice(0, 3).map((condition, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-lg"
                    >
                      {condition}
                    </span>
                  ))}
                  {doctor.conditions.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                      +{doctor.conditions.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {doctor.availability.today ? 'Available today' : 'Next available tomorrow'}
                  </span>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 px-3 py-2 border border-emerald-500 text-emerald-600 rounded-xl text-sm font-medium hover:bg-emerald-50 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 px-3 py-2 bg-emerald-500 text-white rounded-xl text-sm font-medium hover:bg-emerald-600 transition-colors"
                  >
                    <Calendar className="h-4 w-4" />
                    Book
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}