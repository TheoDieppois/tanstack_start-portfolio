import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";
import { useIntro } from "~/context/intro-context";

type HeroAnimationRefs = {
  heroTextRef: React.RefObject<HTMLHeadingElement | null>;
  heroParagraphRef: React.RefObject<HTMLParagraphElement | null>;
  scrollArrowRef: React.RefObject<HTMLImageElement | null>;
  starLeftRef: React.RefObject<HTMLImageElement | null>;
  imageRef: React.RefObject<HTMLImageElement | null>;
};

export const useHeroAnimation = (): HeroAnimationRefs => {
  const { isIntroDone } = useIntro();
  const heroTextRef = useRef<HTMLHeadingElement | null>(null);
  const heroParagraphRef = useRef<HTMLParagraphElement | null>(null);
  const scrollArrowRef = useRef<HTMLImageElement | null>(null);
  const starLeftRef = useRef<HTMLImageElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    if (!heroTextRef.current) return;

    const text = new SplitType(heroTextRef.current);

    if (!isIntroDone) return;

    const animateText = () => {
      gsap.to(text.chars, {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
    };

    const animateParagraph = () => {
      gsap.to(heroParagraphRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
      });
    };

    const animateScrollArrow = () => {
      gsap.to(scrollArrowRef.current, {
        scale: 1,
        duration: 1,
        delay: 1.5,
      });
    };

    const animateStars = () => {
      gsap.to(starLeftRef.current, {
        scale: 1,
        duration: 1,
        delay: 1.5,
      });
    };

    const animateImage = () => {
      gsap.to(imageRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });
    };

    animateText();
    animateParagraph();
    animateScrollArrow();
    animateStars();
    animateImage();
  }, [isIntroDone]);

  return {
    heroTextRef,
    heroParagraphRef,
    scrollArrowRef,
    starLeftRef,
    imageRef,
  };
};
