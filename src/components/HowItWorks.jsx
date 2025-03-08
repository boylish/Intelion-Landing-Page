import { useRef } from 'react';
import { useGsapScrollAnimation } from '../lib/gsap';

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const headingRef = useGsapScrollAnimation(null, 'fade-in');
  const subheadingRef = useGsapScrollAnimation(null, 'fade-in');
  const imageRef = useGsapScrollAnimation(null, 'scale-in');

  const steps = [
    {
      image: 'https://finolity.com/wp-content/uploads/2024/08/finolity-industry-and-manufacuturing.jpg',
      title: 'Industry & Manufacturing',
      description: 'Securely link your bank accounts, credit cards, and investment portfolios to get a comprehensive view of your finances.',
      animation: 'slide-in-left'
    },
    {
      image: 'https://finolity.com/wp-content/uploads/2023/03/gettyimages-1385683178-612x612-1.jpg',
      title: 'Transportation & Logistics',
      description: 'Set your financial goals, preferences, and priorities to receive tailored insights and recommendations.',
      animation: 'fade-in'
    },
    {
      image: 'https://finolity.com/wp-content/uploads/2023/03/gettyimages-1156457427-2048x2048-1.jpg',
      title: 'Healthcare',
      description: 'Our advanced algorithms analyze your financial data to provide actionable insights and optimization opportunities.',
      animation: 'slide-in-right'
    },
    {
      image: 'https://finolity.com/wp-content/uploads/2023/03/gettyimages-173289625-2048x2048-1.jpg',
      title: 'Banks & Insurance',
      description: 'Set up automated savings, bill payments, and investment strategies based on your goals and our AI recommendations.',
      animation: 'scale-in'
    }
  ];

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="section-padding bg-white p-8"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Solving IT challenges in every industry, every day.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-10">
              {steps.map((step, index) => {
                const stepRef = useGsapScrollAnimation(null, step.animation);
                return (
                  <div 
                    key={index}
                    ref={stepRef}
                    className="flex items-center"
                  >
                    <div className="mr-6">
                      <img 
                        src={step.image} 
                        alt={`Step ${index + 1}`} 
                        className="h-16 w-30 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-500 rounded-2xl blur opacity-30"></div>
              <div className="glass-card relative rounded-2xl p-6 overflow-hidden">
                <img 
                  src="https://finolity.com/wp-content/uploads/2024/11/Untitled-design-2-1536x691.jpg" 
                  alt="Finolity Mobile App" 
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

export default HowItWorks;
