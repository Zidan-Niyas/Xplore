import React from 'react';

const events = [
  {
    id: 1,
    title: "Hackathon 2024",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800",
    description: "48-hour coding challenge for innovative solutions"
  },
  {
    id: 2,
    title: "AI Summit",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800",
    description: "Exploring the future of artificial intelligence"
  },
  {
    id: 3,
    title: "Robotics Workshop",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800",
    description: "Hands-on experience with cutting-edge robotics"
  },
  {
    id: 4,
    title: "Tech Talks",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
    description: "Industry experts sharing their insights"
  }
];

function TechCarousel() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll">
        {/* Double the items for seamless loop */}
        {[...events, ...events].map((event, index) => (
          <div
            key={`${event.id}-${index}`}
            className="min-w-[300px] h-[400px] mx-4 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl" />
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-200">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechCarousel;