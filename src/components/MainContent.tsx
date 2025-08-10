import React, { useState } from 'react';
import ContentCard from './ContentCard';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

const MainContent = () => {
  const featuredArticles = [
    {
      title: "মনলট কাহিনী",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      excerpt: "রাজা ডুমুরও চামা পড়ে!...",
      author: "বিভূতিষ সেন"
    },
    {
      title: "আসলেই শোলে",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      excerpt: "ক্যামেরবেদর এটিই যাত্রা...",
      author: "রূপশ্রী দে"
    }
  ];

  const mentalStories = [
    {
      title: "আসলেই শোলে: পাশে খাকা পার্টিটিবর",
      author: "সুমন সরকার",
      image: "https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    },
    {
      title: "সংলগ্নই 'শোলের শক্তি, শান'",
      author: "শরীফিক সেন",
      image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    }
  ];

  const bengaliLiterature = [
    {
      title: "রবীন্দ্রনাথ ঠাকুর",
      author: "বাংলা সাহিত্যের নোবেল বিজয়ী",
      image: "https://cdn.pixabay.com/photo/2015/12/23/05/47/pictures-1105201_1280.png"
    },
    {
      title: "কাজী নজরুল ইসলাম",
      author: "বিদ্রোহী কবি",
      image: "https://i.pinimg.com/736x/07/ed/75/07ed752a4e67304097ec546e0de2d1a2.jpg"
    },
    {
      title: "শরৎচন্দ্র চট্টোপাধ্যায়",
      author: "বাংলা উপন্যাসের মহারথী",
      image: "https://i.pinimg.com/1200x/56/6e/ad/566eadd87e122fd31f5364190f3ea9cb.jpg"
    }
  ];

  // Track likes/dislikes count
  const [likes, setLikes] = useState(Array(featuredArticles.length).fill(0));
  const [dislikes, setDislikes] = useState(Array(featuredArticles.length).fill(0));
  
  // Track user's choice: 'like', 'dislike', or null
  const [userActions, setUserActions] = useState(Array(featuredArticles.length).fill(null));

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    const updatedDislikes = [...dislikes];
    const updatedActions = [...userActions];

    if (updatedActions[index] === 'like') {
      // Remove like
      updatedLikes[index] -= 1;
      updatedActions[index] = null;
    } else {
      // Add like
      updatedLikes[index] += 1;
      if (updatedActions[index] === 'dislike') {
        updatedDislikes[index] -= 1; // Remove dislike if it was set
      }
      updatedActions[index] = 'like';
    }

    setLikes(updatedLikes);
    setDislikes(updatedDislikes);
    setUserActions(updatedActions);
  };

  const handleDislike = (index) => {
    const updatedLikes = [...likes];
    const updatedDislikes = [...dislikes];
    const updatedActions = [...userActions];

    if (updatedActions[index] === 'dislike') {
      // Remove dislike
      updatedDislikes[index] -= 1;
      updatedActions[index] = null;
    } else {
      // Add dislike
      updatedDislikes[index] += 1;
      if (updatedActions[index] === 'like') {
        updatedLikes[index] -= 1; // Remove like if it was set
      }
      updatedActions[index] = 'dislike';
    }

    setLikes(updatedLikes);
    setDislikes(updatedDislikes);
    setUserActions(updatedActions);
  };

  return (
    <div className="space-y-16">
      {/* Featured Articles */}
      <section>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredArticles.map((article, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 group"
            >
              <h2 className="text-3xl font-bold text-amber-800 mb-6 group-hover:text-amber-900 transition-colors">
                {article.title}
              </h2>
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed text-base">{article.excerpt}</p>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
                <p className="text-amber-700 font-bold text-lg">{article.author}</p>
              </div>

              {/* Like / Dislike Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleLike(index)}
                  className="flex items-center gap-1 bg-white/90 hover:bg-white rounded-full px-3 py-1 shadow-md transition"
                >
                  <ThumbsUp
                    size={18}
                    className={userActions[index] === 'like' ? "text-green-500 fill-green-500" : "text-gray-500"}
                  />
                  <span className="text-sm font-medium">{likes[index]}</span>
                </button>

                <button
                  onClick={() => handleDislike(index)}
                  className="flex items-center gap-1 bg-white/90 hover:bg-white rounded-full px-3 py-1 shadow-md transition"
                >
                  <ThumbsDown
                    size={18}
                    className={userActions[index] === 'dislike' ? "text-red-500 fill-red-500" : "text-gray-500"}
                  />
                  <span className="text-sm font-medium">{dislikes[index]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mental Stories */}
      <section>
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-orange-600 rounded-full mr-4"></div>
          <h2 className="text-3xl font-bold text-amber-800">
            আপের মনলট কাহিনী
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {mentalStories.map((story, index) => (
            <ContentCard
              key={index}
              image={story.image}
              title={story.title}
              author={story.author}
              size="medium"
            />
          ))}
        </div>
      </section>

      {/* Bengali Literature */}
      <section>
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-orange-600 rounded-full mr-4"></div>
          <h2 className="text-3xl font-bold text-amber-800">
            বাংলা সাহিত্য
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {bengaliLiterature.map((item, index) => (
            <ContentCard
              key={index}
              image={item.image}
              title={item.title}
              author={item.author}
              size="medium"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;
