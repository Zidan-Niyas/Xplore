import React from 'react';

const news = [
  "🎉 Registration for Xplore'24 now open!",
  "📢 Special guest speaker from Google confirmed",
  "🏆 Last year's winners showcase their projects tomorrow",
  "💡 New AI track added to the competition",
  "🤖 Robotics demonstration at 2 PM in Hall B",
  "🌟 Early bird tickets closing soon"
];

function NewsTickerBar() {
  return (
    <div className="py-3 bg-gradient-to-r from-orange-900/50 via-red-900/50 to-orange-900/50">
      <div className="relative overflow-hidden h-8">
        <div className="animate-news-ticker whitespace-nowrap">
          {[...news, ...news].map((item, index) => (
            <span
              key={index}
              className="inline-block px-8 text-yellow-300 font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsTickerBar;
