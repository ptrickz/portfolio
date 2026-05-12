import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function fadeUp(node: Element) {
  const anim = gsap.fromTo(
    node,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: node,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    }
  );

  return {
    destroy() {
      anim.scrollTrigger?.kill();
      anim.kill();
    },
  };
}
