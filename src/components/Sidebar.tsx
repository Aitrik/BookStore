import React from 'react';

interface BookItem {
  title: string;
  author?: string;
  coverImage: string;
}

interface ArticleItem {
  title: string;
  description: string;
  author?: string;
  hashtags?: string;
  coverImage: string;
}

export default function Sidebar(): JSX.Element {
  const classicsBooks: BookItem[] = [
    {
      title: "জলকে চন্দ্র প্রথম পর্ব",
      author: "বিভূতি ভূষণ",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&h=200&fit=crop"
    },
    {
      title: "ইউটোগল-দ্বিতীয় পর্ব সত্যজিৎ রায় বন্দন",
      author: "বিভূতি ভূষণ",
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=200&fit=crop",

    },
    {
      title: '"ভালোবাসা দেবতা তার"',
      author: "বিনন দে",
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop"
    },
    {
      title: "চোটসূত্র কালক সূত্রী প্রেমোপন",
      author: "বিনন দে",
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=150&h=200&fit=crop"
    }
  ];

  const contemporaryBooks: BookItem[] = [
    {
      title: "তারুণ্য আমোধার অঞ্জলি",
      author: "তারিক্ত মেয়ে",
      coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=150&h=200&fit=crop"
    },
    {
      title: "চমৎকার সুমসেরা মানশদাই কালমচিহ্ন বনাম রেঝালেকরা",
      author: "রুপালম ভূটটার",
      coverImage: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=150&h=200&fit=crop"
    },
    {
      title: "গান যখন পবের, পথ যখন গানের",
      author: "রুপালম ভূটটার",
      coverImage: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=150&h=200&fit=crop"
    },
    {
      title: "মান হৃদয় অক্ষর সাভে থেকে পালেতুইন কাব্বেল",
      author: "কিরুব্দ বন্দ্যোপাধ্যায়",
      coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=150&h=200&fit=crop"
    }
  ];

  const featuredArticles: ArticleItem[] = [
    {
      title: "মনলটি কাইনী",
      description: "রাজা তুমুল চাঁপা পড়ুন তাঁর নতুনের বইটি আমরা কেউই নই। এ কথা সমাসামায়িক মনে হয়... অর্থিং এ লেখায় ১৯৬৩-২৪ সালের। বরিন্দানাথ ঠাকুরের রক্তকরবী যে নাটক আজও সমসাময়ের প্রাসঙ্গিক...",
      hashtags: "#বইভক্তরী #দৃষ্টি",
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=240&fit=crop"
    },
    {
      title: "আসলেই শোনেল",
      description: "ক্যামেরাবন্দ এটিই যাত্রা, যেহেতুনত যুগ যেহেতুনও শক্তদাদী তা আর্কিক। আরও তাই শক্তরে প্রভাত নত্রুভার আদির কর যায় এই নাটক। আধারেও তাই নতুন দুপাতে...",
      author: "রূপাশ্রী দে",
      coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=240&fit=crop"
    }
  ];

  const BookListItem: React.FC<{ book: BookItem }> = ({ book }) => (
    <div className="flex justify-between items-start py-3 border-b border-gray-100 last:border-b-0 ">
      <div className="flex-1 pr-4 min-w-0">
        <h3 className="text-sm font-medium text-gray-800 leading-tight mb-1 break-words">
          {book.title}
        </h3>
        {book.author && (
          <p className="text-md text-gray-500 break-words ">{book.author}</p>
        )}
      </div>
      <div className="w-12 h-16 bg-gray-200 rounded flex-shrink-0">
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );

  const ArticleCard: React.FC<{ article: ArticleItem }> = ({ article }) => (
    <div className="mb-6 last:mb-0">
      <div className="relative mb-3">
        <img 
          src={article.coverImage} 
          alt={article.title}
          className="w-full h-32 object-cover rounded-lg"
        />
        {article.hashtags && (
          <div className="absolute bottom-2 left-2">
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
              {article.hashtags}
            </span>
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2 break-words">
        {article.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-2 break-words">
        {article.description}
      </p>
      {article.author && (
        <p className="text-sm text-orange-500 font-medium break-words">● {article.author}</p>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-4 overflow-hidden">
      {/* Classics Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-amber-800 mb-4 pb-2 border-b-2 border-gray-200">
          ক্লাসিকস
        </h2>
        <div className="space-y-0">
          {classicsBooks.map((book, index) => (
            <BookListItem key={index} book={book} />
          ))}
        </div>
      </div>

      {/* Contemporary Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-amber-800 mb-4 pb-2 border-b-2 border-gray-200">
          কলমকারী
        </h2>
        <div className="space-y-0">
          {contemporaryBooks.map((book, index) => (
            <BookListItem key={index} book={book} />
          ))}
        </div>
      </div>

      {/* Featured Articles Section */}
      <div>
        <h2 className="text-xl font-bold text-amber-800 mb-4 pb-2 border-b-2 border-gray-200">
          বিশেষ কোডপত্র
        </h2>
        <div>
          {featuredArticles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}