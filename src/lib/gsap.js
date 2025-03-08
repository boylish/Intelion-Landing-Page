import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapFadeIn = (element, delay = 0, duration = 1) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = element || ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
      }
    );

    return () => {
      gsap.killTweensOf(el);
    };
  }, [element, delay, duration]);

  return ref;
};

export const useGsapScaleIn = (element, delay = 0, duration = 1) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = element || ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: "back.out(1.7)",
      }
    );

    return () => {
      gsap.killTweensOf(el);
    };
  }, [element, delay, duration]);

  return ref;
};

export const useGsapScrollAnimation = (element, animation, trigger) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = element || ref.current;
    const triggerEl = trigger || el;
    if (!el) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    switch (animation) {
      case "fade-in":
        tl.fromTo(
          el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
        break;
      case "slide-in-left":
        tl.fromTo(
          el,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
        );
        break;
      case "slide-in-right":
        tl.fromTo(
          el,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
        );
        break;
      case "scale-in":
        tl.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
        );
        break;
      default:
        tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.8 });
    }

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [element, animation, trigger]);

  return ref;
};

export const useParallaxEffect = (element, speed = 0.1) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = element || ref.current;
    if (!el) return;

    const handleParallax = () => {
      const scrollPosition = window.pageYOffset;
      const parallaxOffset = scrollPosition * speed;
      gsap.to(el, {
        y: parallaxOffset,
        ease: "none",
        duration: 0.3,
      });
    };

    window.addEventListener("scroll", handleParallax);

    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, [element, speed]);

  return ref;
};

export const animateElement = (element, animation, options = {}) => {
  const defaults = {
    duration: 0.8,
    delay: 0,
    ease: "power2.out",
  };

  const config = { ...defaults, ...options };

  switch (animation) {
    case "fade-in":
      return gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, ...config }
      );
    case "scale-in":
      return gsap.fromTo(
        element,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, ...config, ease: "back.out(1.7)" }
      );
    case "slide-in-left":
      return gsap.fromTo(
        element,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, ...config }
      );
    case "slide-in-right":
      return gsap.fromTo(
        element,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, ...config }
      );
    default:
      return gsap.fromTo(element, { opacity: 0 }, { opacity: 1, ...config });
  }
};
