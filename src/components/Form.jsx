import { useRef } from "react";
import { useGsapScrollAnimation } from "../lib/gsap";

const CTA = () => {
  const sectionRef = useRef(null);
  const headingRef = useGsapScrollAnimation(null, "fade-in");
  const subheadingRef = useGsapScrollAnimation(null, "fade-in");
  const contentRef = useGsapScrollAnimation(null, "slide-in-left");
  const formRef = useGsapScrollAnimation(null, "scale-in");
  const btnRef = useGsapScrollAnimation(null, "slide-in-right");

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br p-10 from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-4 flex gap-8 flex-col md:flex-row items-center justify-between">
        <div ref={contentRef} className="md:w-1/2 mb-8 md:mb-0 text-left">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Partner with Us for Comprehensive IT
          </h2>
          <p ref={subheadingRef} className="text-lg text-gray-600 mb-6">
            We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.
          </p>
          <p className="text-lg font-semibold text-gray-700">
            Call us at: <span className="text-blue-600">0612-2500-****</span>
          </p>
          <div className="mt-6 space-y-2">
            {["Client-oriented", "Independent", "Competent", "Results-driven", "Problem-solving", "Transparent"].map((item, index) => (
              <p key={index} className="text-md text-gray-700 font-medium">✔ {item}</p>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h3>
            <ul className="list-decimal list-inside text-gray-700 space-y-2">
              {["We schedule a call at your convenience.", "We do a discovery and consulting meeting.", "We prepare a proposal tailored for you."].map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div ref={formRef} className="md:w-1/2 bg-white shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Get in Touch</h3>
          <form className="space-y-4">
            {[
              { id: "name", type: "text", placeholder: "Your Name", label: "Full Name" },
              { id: "email", type: "email", placeholder: "you@example.com", label: "Email Address" },
            ].map(({ id, type, placeholder, label }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <input
                  type={type}
                  id={id}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder={placeholder}
                  required
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <button
                ref={btnRef}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
