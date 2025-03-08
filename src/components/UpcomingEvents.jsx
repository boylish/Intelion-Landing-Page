import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: "March 25, 2025",
    location: "Bangalore, India",
    description: "Join industry leaders discussing AI, Web3, and Cloud Computing.",
    image: "https://media.gettyimages.com/id/646466855/photo/conference-speaker.jpg?s=612x612&w=0&k=20&c=4IFbwvCkMd3JUOYs5FX6D0CELZqWXy-UIqtO4ITAOx8=",
  },
  {
    id: 2,
    title: "Startup Pitch Night",
    date: "April 10, 2025",
    location: "Mumbai, India",
    description: "Watch the next wave of startups pitch to top investors.",
    image: "https://media.gettyimages.com/id/1461605769/photo/female-and-male-entrepreneurs-discussing-in-seminar-during-corporate-event.jpg?s=612x612&w=0&k=20&c=AcvOYeLzP94lt0fjs0JEelawqhrxK1wyABZn33govGs=",
  },
  {
    id: 3,
    title: "React Summit",
    date: "May 5, 2025",
    location: "Online",
    description: "A global virtual event focused on React and front-end trends.",
    image: "https://media.gettyimages.com/id/1153350345/photo/time-to-get-growing.jpg?s=612x612&w=0&k=20&c=NtxRQ_cn-Eo-nTnGWNZXWq77eogf4LZPwXaHpd58qY4=",
  },
];

const UpcomingEvents = () => {
  const sectionRef = useRef(null);
  const eventRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    eventRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.3,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-mesh-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">🚀 Upcoming Events</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => (eventRefs.current[index] = el)}
              className="bg-white/80 backdrop-blur-lg shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
            >
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{event.title}</h3>
                <p className="text-gray-600 mt-2">
                  <strong>📅 Date:</strong> {event.date}
                </p>
                <p className="text-gray-600">
                  <strong>📍 Location:</strong> {event.location}
                </p>
                <p className="text-gray-700 mt-3">{event.description}</p>
                <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:opacity-80 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
