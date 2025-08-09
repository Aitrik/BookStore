import { useState } from 'react';
import { Search, Facebook, Twitter, Youtube, Instagram, MessageCircle, Bookmark, Menu, X, Bell, Globe, Book } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const navItems = [
    "মনলট কাহিনী",
    "কথাসাহিত্য",
    "প্রবন্ধ-নিবন্ধ",
    "কলমকারী",
    "ভাল থাকা",
    "আহার",
    "ব্লগ",
    "কিশলয়",
    "ফটো স্টোরি",
    "পড়াশুনো",
    "ভিডিও",
    "শব্দযাত্রা"
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-amber-900 via-amber-800 to-orange-800 text-white py-2 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <Facebook size={16} className="cursor-pointer hover:text-amber-200 hover:scale-110 transition-all duration-300 hover:rotate-12" />
              <Twitter size={16} className="cursor-pointer hover:text-amber-200 hover:scale-110 transition-all duration-300 hover:rotate-12" />
              <Youtube size={16} className="cursor-pointer hover:text-amber-200 hover:scale-110 transition-all duration-300 hover:rotate-12" />
              <Instagram size={16} className="cursor-pointer hover:text-amber-200 hover:scale-110 transition-all duration-300 hover:rotate-12" />
            </div>
            <div className="hidden md:flex items-center space-x-2 text-xs hover:text-amber-200 transition-colors cursor-pointer group">
              <MessageCircle size={14} className="group-hover:animate-bounce" />
              <span>Join our WhatsApp Group</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <div className="hidden sm:flex items-center space-x-2 text-amber-200">
              <Globe size={14} />
              <span>Live from Kolkata</span>
            </div>
            <div className="text-amber-100 font-medium bg-amber-800/30 px-3 py-1 rounded-full backdrop-blur-sm">
              আগস্ট ৯, ২০২৫ | ১৪২৫ আশ্বিন, ১৩৮৬
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-xl border-b border-amber-100 sticky top-0 z-50 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4 min-w-0">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-amber-50 rounded-lg transition-colors flex-shrink-0"
              >
                <Menu size={24} className="text-amber-700" />
              </button>

              <div className="flex items-center space-x-2 min-w-0">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-lg"><Book /></span>
                </div>
                <h1 className="text-2xl md:text-3xl p-2 font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-red-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer whitespace-nowrap">
                  দৃষ্টি
                </h1>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              {/* Search */}
              <div className={`relative transition-all duration-300 ${isSearchExpanded ? 'w-64 max-w-[250px]' : 'w-10'}`}>
                <input
                  type="text"
                  placeholder="খোঁজ করুন..."
                  className={`pl-4 pr-12 py-2.5 w-full border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md ${isSearchExpanded ? 'opacity-100' : 'opacity-0 w-0 pl-0 pr-0'}`}
                  onBlur={() => setIsSearchExpanded(false)}
                />
                <button
                  onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                  className="absolute right-0 top-0 h-full px-3 text-amber-600 hover:text-amber-700 hover:bg-amber-50 rounded-full transition-all duration-300"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gradient-to-r from-gray-50 via-amber-50 to-orange-50 border-t border-amber-100 w-full">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="w-full overflow-x-auto scrollbar-hide">
              <nav className="flex items-center space-x-1 py-3 w-max min-w-full">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-amber-700 hover:text-amber-900 hover:bg-white/70 px-4 py-2.5 rounded-full whitespace-nowrap font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-sm hover:shadow-md backdrop-blur-sm flex-shrink-0"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 shadow-2xl">
            <div className="p-4 h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-amber-800">মেনু</h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-amber-50 rounded-full"
                >
                  <X size={24} className="text-amber-700" />
                </button>
              </div>

              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-amber-700 hover:text-amber-900 hover:bg-amber-50 px-4 py-3 rounded-lg font-medium transition-all duration-300 border-l-4 border-transparent hover:border-amber-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-amber-100">
                <div className="flex items-center space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300">
                    সাইন ইন
                  </button>
                  <button className="p-3 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg">
                    <Bell size={20} />
                  </button>
                  <button className="p-3 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg">
                    <Bookmark size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;