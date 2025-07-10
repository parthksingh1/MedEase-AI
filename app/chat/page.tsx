'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mic, 
  Image, 
  Bot, 
  User, 
  Camera,
  FileText,
  Heart,
  Thermometer,
  Pill
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  inputType?: 'text' | 'voice' | 'image';
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'नमस्ते! मैं आपका AI स्वास्थ्य सहायक हूं। मैं हिंदी और English दोनों में बात कर सकता हूं। आप अपने स्वास्थ्य संबंधी कोई भी सवाल पूछ सकते हैं। How can I help you today?',
      timestamp: new Date()
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    {
      icon: Heart,
      text: 'मुझे सीने में जलन हो रही है',
      color: 'bg-red-100 text-red-700'
    },
    {
      icon: Thermometer,
      text: 'I have fever after eating street food',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      icon: Pill,
      text: 'Can I take paracetamol with cold medicine?',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: FileText,
      text: 'मेरी lab report explain करें',
      color: 'bg-green-100 text-green-700'
    }
  ];

  const aiResponses = {
    'chest_pain': 'सीने में जलन के कई कारण हो सकते हैं:\n\n🔍 **संभावित कारण:**\n• Acidity/GERD (सबसे आम)\n• Anxiety/Stress\n• Muscle strain\n• Heart-related issues (कम संभावना)\n\n💊 **तुरंत राहत:**\n• Cold milk या buttermilk पिएं\n• Antacid ले सकते हैं\n• बैठकर आराम करें\n\n⚠️ **डॉक्टर से मिलें अगर:**\n• दर्द बढ़ता रहे\n• सांस लेने में तकलीफ\n• Left arm में दर्द\n\nक्या ये symptoms और भी हैं?',
    
    'fever_food': 'Street food के बाद fever suggests food poisoning:\n\n🦠 **Likely Causes:**\n• Bacterial infection (E.coli, Salmonella)\n• Viral gastroenteritis\n• Contaminated water/food\n\n🏥 **Immediate Care:**\n• Stay hydrated (ORS, coconut water)\n• Rest and avoid solid food\n• Paracetamol for fever\n• Monitor temperature\n\n⚠️ **See doctor if:**\n• Fever >102°F\n• Severe dehydration\n• Blood in stool\n• Persistent vomiting\n\nHow long have you had these symptoms?',
    
    'paracetamol_cold': 'Yes, paracetamol is generally safe with most cold medicines:\n\n✅ **Safe Combinations:**\n• Paracetamol + Antihistamines\n• Paracetamol + Decongestants\n• Paracetamol + Cough syrups\n\n⚠️ **Check Labels:**\n• Some cold medicines already contain paracetamol\n• Don\'t exceed 4g paracetamol per day\n• Read all ingredients carefully\n\n🚫 **Avoid with:**\n• Alcohol\n• Other paracetamol-containing drugs\n• If you have liver problems\n\nWhat specific cold medicine are you taking?',
    
    'lab_report': 'मैं आपकी lab report explain कर सकता हूं:\n\n📋 **Common Tests:**\n• CBC - Complete Blood Count\n• Liver Function Tests\n• Kidney Function\n• Diabetes markers\n• Lipid Profile\n\n📱 **To help you:**\n• Photo upload करें report की\n• या specific values बताएं\n• Normal ranges भी दूंगा\n\nकौन सी report है आपके पास?'
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputText,
      timestamp: new Date(),
      inputType: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      if (inputText.toLowerCase().includes('सीने में जलन') || inputText.toLowerCase().includes('chest pain')) {
        response = aiResponses.chest_pain;
      } else if (inputText.toLowerCase().includes('fever') && inputText.toLowerCase().includes('food')) {
        response = aiResponses.fever_food;
      } else if (inputText.toLowerCase().includes('paracetamol')) {
        response = aiResponses.paracetamol_cold;
      } else if (inputText.toLowerCase().includes('lab report') || inputText.toLowerCase().includes('report explain')) {
        response = aiResponses.lab_report;
      } else {
        response = 'I understand your concern. Based on your symptoms, I recommend:\n\n• Monitor your symptoms closely\n• Stay hydrated and rest\n• Consider consulting a doctor if symptoms worsen\n\nCan you provide more specific details about what you\'re experiencing?';
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputText(prompt);
  };

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    // Simulate voice recording
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setInputText('मुझे सिर दर्द हो रहा है और बुखार भी है');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Health Assistant
          </h1>
          <p className="text-gray-600">
            Chat in Hindi, English, or upload images for instant medical insights
          </p>
        </motion.div>

        {/* Quick Prompts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickPrompts.map((prompt, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleQuickPrompt(prompt.text)}
                className={`p-4 rounded-xl text-left transition-all ${prompt.color} hover:shadow-md`}
              >
                <div className="flex items-center gap-3">
                  <prompt.icon className="h-5 w-5" />
                  <span className="font-medium">{prompt.text}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Chat Container */}
        <div className="glass rounded-2xl shadow-soft overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-3 max-w-xs lg:max-w-md ${
                  message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}>
                  <div className={`p-2 rounded-full ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  
                  <div className={`p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white'
                      : 'bg-white shadow-gentle border border-gray-200'
                  }`}>
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content}
                    </div>
                    <div className={`text-xs mt-2 ${
                      message.type === 'user' ? 'text-emerald-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-gentle border border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-200 bg-white/80">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your health question in Hindi or English..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleVoiceRecord}
                  className={`p-3 rounded-xl transition-all ${
                    isRecording 
                      ? 'bg-red-500 text-white animate-pulse' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Mic className="h-5 w-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
                >
                  <Image className="h-5 w-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!inputText.trim()}
                  className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}