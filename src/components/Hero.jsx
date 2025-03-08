import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const subtitleRefs = useRef([]);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const decorationRef = useRef(null);

  const addToRefs = (el) => {
    if (el && !subtitleRefs.current.includes(el)) {
      subtitleRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      [titleRef1.current, titleRef2.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.4
    );

    subtitleRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.6 + index * 0.2
      );
    });

    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.8
    )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1 },
        0.9
      )
      .fromTo(
        decorationRef.current,
        { opacity: 0 },
        { opacity: 0.7, duration: 1, stagger: 0.2 },
        1
      );

    return () => tl.kill();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-mesh-gradient"
    >
      <div ref={decorationRef} className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 pt-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef1}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6"
            >
              We manage your IT,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              With Smart Technology
              </span>{" "}
              so you can manage your business.
            </h1>
            <p
              ref={titleRef2}
              className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Take charge of your business continuity with innovative IT solutions
            </p>
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                 Schedule a free Consultation
              </button>
              <button className="px-8 py-3 bg-white text-gray-800 font-medium rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                Services
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-8">
              <div
                ref={addToRefs}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-3xl font-bold text-gray-900">98%</span>
                <span className="text-sm text-gray-600">Satisfaction Rate</span>
              </div>
              <div
                ref={addToRefs}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-3xl font-bold text-gray-900">24/7</span>
                <span className="text-sm text-gray-600">Customer Support</span>
              </div>
              <div
                ref={addToRefs}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-3xl font-bold text-gray-900">10M+</span>
                <span className="text-sm text-gray-600">Active Users</span>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-2xl blur opacity-30"></div>
              <div className="glass-card relative rounded-2xl p-6 lg:p-8 overflow-hidden">
                <img 
                  src="https://st4.depositphotos.com/1455259/30643/i/600/depositphotos_306436798-stock-photo-multicultural-team-top-view-of.jpg"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;