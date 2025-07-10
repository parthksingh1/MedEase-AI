'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Clock, 
  Star, 
  Filter,
  Search,
  Heart,
  Stethoscope,
  Pill,
  Ambulance,
  Building2,
  Route
} from 'lucide-react';

interface HealthcareLocation {
  id: string;
  name: string;
  type: 'hospital' | 'clinic' | 'pharmacy' | 'lab';
  address: string;
  distance: string;
  rating: number;
  isOpen: boolean;
  phone: string;
  specialties?: string[];
  coordinates: { lat: number; lng: number };
}

export default function MapPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const healthcareLocations: HealthcareLocation[] = [
    {
      id: '1',
      name: 'AIIMS Lucknow',
      type: 'hospital',
      address: 'Bijnaur Road, Lucknow, UP 226014',
      distance: '2.3 km',
      rating: 4.8,
      isOpen: true,
      phone: '+91-522-2677777',
      specialties: ['Cardiology', 'Neurology', 'Emergency'],
      coordinates: { lat: 26.8467, lng: 80.9462 }
    },
    {
      id: '2',
      name: 'Apollo Pharmacy',
      type: 'pharmacy',
      address: 'Hazratganj, Lucknow, UP 226001',
      distance: '0.8 km',
      rating: 4.5,
      isOpen: true,
      phone: '+91-522-4567890',
      coordinates: { lat: 26.8467, lng: 80.9462 }
    },
    {
      id: '3',
      name: 'SRL Diagnostics',
      type: 'lab',
      address: 'Gomti Nagar, Lucknow, UP 226010',
      distance: '1.5 km',
      rating: 4.6,
      isOpen: false,
      phone: '+91-522-3456789',
      coordinates: { lat: 26.8467, lng: 80.9462 }
    },
    {
      id: '4',
      name: 'Max Super Speciality Hospital',
      type: 'hospital',
      address: 'Vibhuti Khand, Gomti Nagar, Lucknow',
      distance: '3.2 km',
      rating: 4.7,
      isOpen: true,
      phone: '+91-522-6677888',
      specialties: ['Oncology', 'Orthopedics', 'Pediatrics'],
      coordinates: { lat: 26.8467, lng: 80.9462 }
    },
    {
      id: '5',
      name: 'City Clinic',
      type: 'clinic',
      address: 'Alambagh, Lucknow, UP 226005',
      distance: '1.2 km',
      rating: 4.3,
      isOpen: true,
      phone: '+91-522-2345678',
      specialties: ['General Medicine', 'Dermatology'],
      coordinates: { lat: 26.8467, lng: 80.9462 }
    }
  ];

  const locationTypes = [
    { id: 'all', name: 'All', icon: MapPin, color: 'text-gray-600' },
    { id: 'hospital', name: 'Hospitals', icon: Building2, color: 'text-red-600' },
    { id: 'clinic', name: 'Clinics', icon: Stethoscope, color: 'text-blue-600' },
    { id: 'pharmacy', name: 'Pharmacies', icon: Pill, color: 'text-green-600' },
    { id: 'lab', name: 'Labs', icon: Heart, color: 'text-purple-600' }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hospital': return Building2;
      case 'clinic': return Stethoscope;
      case 'pharmacy': return Pill;
      case 'lab': return Heart;
      default: return MapPin;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'hospital': return 'text-red-600 bg-red-100';
      case 'clinic': return 'text-blue-600 bg-blue-100';
      case 'pharmacy': return 'text-green-600 bg-green-100';
      case 'lab': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredLocations = healthcareLocations.filter(location => {
    const matchesType = selectedType === 'all' || location.type === selectedType;
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Healthcare Map</h1>
          <p className="text-gray-600">Find nearby hospitals, clinics, pharmacies, and labs</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-6 rounded-2xl shadow-gentle mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search healthcare facilities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Type Filters */}
            <div className="flex gap-2 overflow-x-auto">
              {locationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                    selectedType === type.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <type.icon className="h-4 w-4" />
                  {type.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass p-6 rounded-2xl shadow-gentle h-96 lg:h-[600px]">
              <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-gray-300"></div>
                    ))}
                  </div>
                </div>
                
                {/* Location Markers */}
                {filteredLocations.map((location, index) => {
                  const Icon = getTypeIcon(location.type);
                  return (
                    <motion.div
                      key={location.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`absolute p-2 rounded-full shadow-lg cursor-pointer ${getTypeColor(location.type)}`}
                      style={{
                        left: `${20 + (index * 15) % 60}%`,
                        top: `${20 + (index * 20) % 60}%`
                      }}
                      title={location.name}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                  );
                })}

                {/* Center Text */}
                <div className="text-center z-10">
                  <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600">Healthcare facilities near you</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Nearby Facilities ({filteredLocations.length})
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-4 w-4" />
              </motion.button>
            </div>

            <div className="space-y-4 max-h-[500px] overflow-y-auto">
              {filteredLocations.map((location, index) => {
                const Icon = getTypeIcon(location.type);
                
                return (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-4 rounded-2xl shadow-gentle hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(location.type)}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 truncate">{location.name}</h4>
                          <div className="flex items-center gap-1 ml-2">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{location.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                        
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1">
                            <Navigation className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{location.distance}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className={`text-sm ${location.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                              {location.isOpen ? 'Open' : 'Closed'}
                            </span>
                          </div>
                        </div>

                        {location.specialties && (
                          <div className="mb-3">
                            <div className="flex flex-wrap gap-1">
                              {location.specialties.slice(0, 2).map((specialty, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-lg"
                                >
                                  {specialty}
                                </span>
                              ))}
                              {location.specialties.length > 2 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                                  +{location.specialties.length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1 px-3 py-1.5 border border-emerald-500 text-emerald-600 rounded-lg text-sm font-medium hover:bg-emerald-50 transition-colors"
                          >
                            <Phone className="h-3 w-3" />
                            Call
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1 px-3 py-1.5 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
                          >
                            <Route className="h-3 w-3" />
                            Directions
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Emergency Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 bg-red-500 text-white rounded-2xl font-semibold shadow-lg hover:bg-red-600 transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <Ambulance className="h-5 w-5" />
                Emergency - Call 108
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}