import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 via-orange-900 to-amber-900 text-white mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">দৃষ্টি.com</h3>
            <p className="text-amber-200 text-sm leading-relaxed mb-4">
              বাংলা সাহিত্য ও সংস্কৃতির অন্যতম প্রতিনিধি অনলাইন ম্যাগাজিন। 
              আমাদের লক্ষ্য বাংলা ভাষা ও সাহিত্যের প্রচার ও প্রসার।
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-amber-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>মনলট কাহিনী</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>কথাসাহিত্য</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>প্রবন্ধ-নিবন্ধ</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>কলমকারী</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>আহার</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">বিভাগসমূহ</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-amber-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>ভাল থাকা</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>কিশলয়</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>ফটো স্টোরি</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>ভিডিও</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>শব্দযাত্রা</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">যোগাযোগ</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <Mail size={18} className="text-amber-400" />
                <span className="text-amber-200">info@dristi2020.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <Phone size={18} className="text-amber-400" />
                <span className="text-amber-200">+91 8017888222</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                <MapPin size={18} className="text-amber-400" />
                <span className="text-amber-200">গেইথার্সবার্গ, ইউনিয়েটেড স্টেটস</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-200 text-sm font-medium">
            © ২০২৫ দৃষ্টি.com। সকল অধিকার সংরক্ষিত।
          </p>
          
          <div className="flex space-x-5 mt-6 md:mt-0">
            <Facebook size={22} className="cursor-pointer hover:text-amber-200 hover:scale-125 transition-all duration-300" />
            <Twitter size={22} className="cursor-pointer hover:text-amber-200 hover:scale-125 transition-all duration-300" />
            <Youtube size={22} className="cursor-pointer hover:text-amber-200 hover:scale-125 transition-all duration-300" />
            <Instagram size={22} className="cursor-pointer hover:text-amber-200 hover:scale-125 transition-all duration-300" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;