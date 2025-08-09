import React from 'react'
import ContentCard from './ContentCard'

const essays = [
  {
    title: "শহরের প্রবাহিনী",
    author: "শর্মিষ্ট দত্ত",
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
  },
  {
    title: "অন্তর্জগৎ, নারী জাগরণের প্রতীক: অনলা বসু",
    author: "পায়েল চট্টোপাধ্যায়",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
  },
  {
    title: "পারসেন রবীন্দ্রনাথ, জমিদিরে",
    author: "দিব্যা কুমার ঘোষ",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
  },
  {
    title: "গর্বর সমুদ্রে করগনি শশের ধৈর্যে",
    author: "নিশিঙ চার্জিরি",
    image: "https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
  }
];

const foodSection = [
  {
    title: "বনজ কুইপ্ম পর্ব - ১৫",
    author: "আধুর ভার্মি",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
  },
  {
    title: "বনজ কুইপ্ম পর্ব - ১৪",
    author: "আধুর ভার্মি",
    image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
  },
  {
    title: "ডাল বাহার",
    author: "শিমিত হালগার",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
  },
  {
    title: "বনজ কুইপ্ম পর্ব - ১৩",
    author: "আধুর ভার্মি",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
  }
];

const travelSection = [
  {
    title: "দার্জিলিং এর মেঘলা সকাল",
    author: "অর্পিতা মজুমদার",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=250&fit=crop&auto=format"
  },
  {
    title: "সুন্দরবনের গহন বন",
    author: "সুব্রত দত্ত",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop&auto=format"
  },
  {
    title: "কলকাতার রাজপথে",
    author: "রিতু চট্টোপাধ্যায়",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=400&h=250&fit=crop&auto=format"
  },
  {
    title: "কুয়াশায় ঢাকা গ্রামবাংলা",
    author: "প্রদীপ সেন",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format"
  }
];

const featureSection = [
  {
    title: "বাংলা সিনেমার সোনালী যুগ",
    author: "সুবর্ণা মিত্র",
    image: "https://images.unsplash.com/photo-1582196882946-55e30b37c939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZ2xhJTIwY2luZW1hfGVufDB8fDB8fHww"
  },
  {
    title: "পথের পাঁচালী থেকে বর্তমান",
    author: "দেবাশিস চক্রবর্তী",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=250&fit=crop&auto=format"
  },
  {
    title: "বাংলা থিয়েটারের ইতিহাস",
    author: "তনুজা রায়",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format"
  },
  {
    title: "আধুনিক বাংলা সাহিত্য",
    author: "অমিতাভ ঘোষ",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&auto=format"
  }
];

const kidsSection = [
  {
    title: "ছোটদের রূপকথা",
    author: "মৌসুমী দত্ত",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format"
  },
  {
    title: "গল্পের দেশে অভিযান",
    author: "অনন্যা পাল",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop&auto=format"
  },
  {
    title: "শিশুদের বিজ্ঞানের বই",
    author: "রাহুল বন্দ্যোপাধ্যায়",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop&auto=format"
  },
  {
    title: "ছড়া আর কবিতা",
    author: "শিউলি সরকার",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=250&fit=crop&auto=format"
  }
];

export default function CategoryCards() {
  return (
    <div className="space-y-12">
      {/* Essays Section */}
      <section>
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-orange-600 rounded-full mr-4"></div>
          <h2 className="text-3xl font-bold text-amber-800">
            প্রবন্ধ-নিবন্ধ
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {essays.map((essay, index) => (
            <ContentCard
              key={index}
              image={essay.image}
              title={essay.title}
              author={essay.author}
              size="small"
            />
          ))}
        </div>
      </section>

      {/* Food Section */}
      <section>
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-orange-600 rounded-full mr-4"></div>
          <h2 className="text-3xl font-bold text-amber-800">
            আহার
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {foodSection.map((food, index) => (
            <ContentCard
              key={index}
              image={food.image}
              title={food.title}
              author={food.author}
              size="small"
            />
          ))}
        </div>
      </section>

      {/* Travel Section */}
      <section>
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-orange-600 rounded-full mr-4"></div>
          <h2 className="text-3xl font-bold text-amber-800">
            ভ্রমণ
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {travelSection.map((travel, index) => (
            <ContentCard
              key={index}
              image={travel.image}
              title={travel.title}
              author={travel.author}
              size="small"
            />
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section>
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-orange-600 rounded-full mr-4"></div>
          <h2 className="text-3xl font-bold text-amber-800">
            ফিচার
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureSection.map((feature, index) => (
            <ContentCard
              key={index}
              image={feature.image}
              title={feature.title}
              author={feature.author}
              size="small"
            />
          ))}
        </div>
      </section>

      {/* Kids Section */}
      <section>
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-orange-600 rounded-full mr-4"></div>
          <h2 className="text-3xl font-bold text-amber-800">
            শিশু-কিশোর
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {kidsSection.map((kids, index) => (
            <ContentCard
              key={index}
              image={kids.image}
              title={kids.title}
              author={kids.author}
              size="small"
            />
          ))}
        </div>
      </section>
    </div>
  )
}