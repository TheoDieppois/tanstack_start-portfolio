import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export const useIntroAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const textRef = useRef<HTMLParagraphElement>(null);
  const overlayContainer = useRef<HTMLDivElement>(null);
  const overlayPath = useRef<SVGPathElement>(null);

  const path = {
    unfilled: "M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z",
    inBetween: "M 0 0 h 43 c -60 55 140 65 0 100 H 0 V 0 Z",
    filled: "M 0 0 h 100 c 0 50 0 50 0 100 H 0 V 0 Z",
  };

  const textSequence = [
    "Bonjour",
    "Hello",
    "Guten Tag",
    "مرحبا",
    "你好",
    "こんにちは",
  ];

  useGSAP(() => {
    const textSequenceTl = gsap.timeline();

    textSequence.forEach((text) => {
      textSequenceTl
        .to(textRef.current, {
          duration: 0.1,
          opacity: 0,
          onComplete: () => {
            if (textRef.current) textRef.current.textContent = text;
          },
        })
        .to(textRef.current, {
          duration: 0.3,
          opacity: 1,
        })
        .to({}, { duration: 0.3 });
    });

    const overlayTl = gsap.timeline({
      paused: true,
    });

    overlayTl
      .set(overlayPath.current, {
        attr: {
          d: path.unfilled,
        },
      })
      .to(overlayPath.current, {
        duration: 0.8,
        ease: "power3.in",
        attr: {
          d: path.inBetween,
        },
      })
      .to(overlayPath.current, {
        duration: 0.2,
        ease: "power1",
        attr: {
          d: path.filled,
        },
      })
      .to(overlayContainer.current, {
        delay: 0.5,
        duration: 1,
        ease: "power1",
        opacity: 0,
      });

    textSequenceTl.eventCallback("onComplete", () => {
      overlayTl.play();
    });

    overlayTl.eventCallback("onComplete", () => {
      setIsLoaded(true);
    });
  });

  return {
    textRef,
    overlayContainer,
    overlayPath,
    isLoaded,
  };
};
