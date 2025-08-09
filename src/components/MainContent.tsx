import ContentCard from './ContentCard';

const MainContent = () => {
  const featuredArticles = [
    {
      title: "মনলট কাহিনী",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      excerpt: "রাজা ডুমুরও চামা পড়ে! তাঁর নজরের বইঠে আমরা কেউই নই। এ কথা সমসাময্ক মনে হয়... অর্থাৎ এ লোখা ১৬২৩-২৪ সালের। রবীন্দ্রনাথ ঠাকুরের রক্তকরবী যে নাটক আজও সমসভাবে প্রাসঙ্গিক...",
      author: "বিভূতিষ সেন"
    },
    {
      title: "আসলেই শোলে",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      excerpt: "ক্যামেরবেদর এটিই যাত্রা, যেহেতনেও যুদ্ধ যেহেতনেও শক্রদশত তা অধিক। আর তাই শকরবে প্রভাত নড়ুভারে আদিবার কর যায় এই নাটক। আধারও তাই নতুন দৃশ্যতে...",
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

  return (
    <div className="space-y-16">
      {/* Featured Articles */}
      <section>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredArticles.map((article, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 group">
              <h2 className="text-3xl font-bold text-amber-800 mb-6 group-hover:text-amber-900 transition-colors">{article.title}</h2>
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 right-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                  #রক্তকরবী #Dristi2020
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed text-base">{article.excerpt}</p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
                <p className="text-amber-700 font-bold text-lg">{article.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mental Stories Section */}
      <section>
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-orange-600 rounded-full mr-4"></div>
          <h2 className="text-3xl font-bold text-amber-800">
            আপের মনাট কাহিনী
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

      {/* Bengali Literature Section */}
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
