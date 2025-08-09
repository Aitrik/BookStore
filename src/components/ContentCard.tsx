import React from 'react';

interface ContentCardProps {
  image: string;
  title: string;
  author?: string;
  excerpt?: string;
  category?: string;
  size?: 'small' | 'medium' | 'large';
}

const ContentCard: React.FC<ContentCardProps> = ({ 
  image, 
  title, 
  author, 
  excerpt, 
  category, 
  size = 'medium' 
}) => {
  const cardSizes = {
    small: 'w-full max-w-sm',
    medium: 'w-full max-w-md',
    large: 'w-full max-w-lg'
  };

  return (
    <div className={`${cardSizes[size]} bg-white rounded-xl  shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-300 group`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {category && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {category}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-amber-700 cursor-pointer transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        {author && (
          <p className="text-amber-700 text-sm font-semibold mb-3 flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            {author}
          </p>
        )}
        
        {excerpt && (
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{excerpt}</p>
        )}
      </div>
    </div>
  );
};

export default ContentCard;