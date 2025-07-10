'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Menu, 
  X, 
  MessageCircle, 
  Activity, 
  Users, 
  FileText, 
  Map, 
  Settings,
  Home,
  BookOpen
} from 'lucide-react';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/instructions', icon: BookOpen, label: 'Guide' },
    { href: '/dashboard', icon: Activity, label: 'Dashboard' },
    { href: '/chat', icon: MessageCircle, label: 'AI Chat' },
    { href: '/doctors', icon: Users, label: 'Doctors' },
    { href: '/reports', icon: FileText, label: 'Reports' },
    { href: '/journal', icon: BookOpen, label: 'Journal' },
    { href: '/map', icon: Map, label: 'Map' },
    { href: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <HeartHandshake className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gradient">MedEase AI</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 px-3 py-2 rounded-xl text-gray-700 hover:bg-white/60 transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-white/60 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 px-3 py-3 rounded-xl text-gray-700 hover:bg-white/60 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}