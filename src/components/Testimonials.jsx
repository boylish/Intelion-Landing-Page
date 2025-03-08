import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGsapScrollAnimation } from '../lib/gsap';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headingRef = useGsapScrollAnimation(null, 'fade-in');
  const subheadingRef = useGsapScrollAnimation(null, 'fade-in');
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  
  const testimonials = [
    {
      quote: "This platform revolutionized how we handle IT infrastructure. Automated monitoring and real-time insights have drastically reduced downtime, keeping our systems running smoothly.",
      name: "Sarah Johnson",
      title: "IT Manager",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      quote: "The AI-powered analytics have streamlined our IT operations. Now, we can predict system failures before they happen and allocate resources efficiently.",
      name: "James Peterson",
      title: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Managing cloud environments has never been easier. The automation tools provided by this platform save us hours every week and improve overall security compliance.",
      name: "Emily Chen",
      title: "Cloud Solutions Architect",
      image: "https://randomuser.me/api/portraits/women/48.jpg"
    },
    {
      quote: "The intuitive dashboard gives us complete visibility into our IT assets. Incident tracking and ticketing automation have significantly improved our response times.",
      name: "Michael Rodriguez",
      title: "IT Support Lead",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  
  useEffect(() => {
    if (sliderRef.current) {
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeIndex]);
  
  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="section-padding bg-mesh-gradient pt-5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            What Our Users Say
          </h2>
          <p 
            ref={subheadingRef}
            className="text-lg text-gray-600"
          >
            Join thousands of satisfied users who have transformed their management with Finolity.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div 
            ref={sliderRef}
            className="glass-card rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 text-blue-200 mx-auto" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              {testimonials[activeIndex].quote}
            </p>
            <div className="flex items-center justify-center mb-6">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name} 
                className="h-16 w-16 rounded-full object-cover mr-4 border-2 border-blue-200"
              />
              <div className="text-left">
                <h4 className="font-semibold text-lg">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600">{testimonials[activeIndex].title}</p>
              </div>
            </div>
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-200 ${
                    index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">1M+</h3>
              <p className="text-gray-600 mt-2">Active Users</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">$2B+</h3>
              <p className="text-gray-600 mt-2">Managed Assets</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">98%</h3>
              <p className="text-gray-600 mt-2">Satisfaction Rate</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">24/7</h3>
              <p className="text-gray-600 mt-2">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
