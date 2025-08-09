import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative floating gradient blobs */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-gradient-to-br from-indigo-300 to-pink-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-gradient-to-br from-amber-300 to-orange-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Hero Image */}
        <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.03] transition-transform duration-700">
          <img
            src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Bookstore"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-10">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20">
              {/* Animated blue gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 animate-gradient-x"></div>

              {/* Floating book images */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
                alt="Book Icon"
                className="absolute top-4 left-4 w-12 h-12 opacity-20 rotate-12"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
                alt="Book Icon"
                className="absolute bottom-6 right-6 w-16 h-16 opacity-15 -rotate-6"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
                alt="Book Icon"
                className="absolute top-1/2 left-10 w-10 h-10 opacity-10 rotate-45"
              />

              {/* Soft glowing orbs */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl opacity-20"></div>

              {/* Subtle diagonal pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[size:20px_20px]"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white flex flex-col md:flex-row md:items-center md:justify-between">
                <h2 className="text-5xl md:text-6xl p-3 font-extrabold bg-gradient-to-r from-amber-300 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                  দৃষ্টি
                </h2>
                <p className="text-lg md:text-2xl text-amber-200 font-light drop-shadow-sm mt-2 md:mt-4 md:ml-6">
                  বইয়ের জগতে আপনার পথপ্রদর্শক
                  <p className="text-lg  text-amber-200 font-light drop-shadow-sm mt-2 md:mt-0 md:ml-6">
                  পাঠের আনন্দে ভরে উঠুক প্রতিটি দিন
                </p>
                </p>
                
              </div>
              <div className="relative z-10 px-8 pb-6">
                <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-10 text-center shadow-xl border border-amber-100 relative">
          {/* Soft glow */}
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(255,193,7,0.2)] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-6xl text-amber-400 mb-4 animate-bounce">"</div>
            <p className="text-xl md:text-2xl text-gray-700 italic mb-4 leading-relaxed font-medium">
              "ঘরে আজ কষ্ণেশ হরে আজ শেষ শনিবার / একলা ট্রেন শিস দিচ্ছে প্রভাতে সিগন্যাল না দেশে। / দুঃখ প্রার্থে কেউ ফিরে ফিরে করে বলতেছি, 'অতীত মধুর, ও মধুর উঠে পড়ো।'"
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-400"></div>
              <p className="text-amber-800 font-bold text-lg tracking-wide">সুনীল বসু</p>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>
        </div>
      </div>

    </div>  
  );
};

export default Hero;
