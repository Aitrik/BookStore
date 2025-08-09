import React from "react";

const Hero = () => {
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
            <div className="bg-gradient-to-r from-blue-900/90 to-indigo-900/90 backdrop-blur-lg rounded-2xl p-8 text-white shadow-2xl border border-white/20">
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-amber-300 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                Dristi2020store.com
              </h2>
              <div className="w-28 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-10 text-center shadow-xl border border-amber-100 relative">
          {/* Soft glow effect */}
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
