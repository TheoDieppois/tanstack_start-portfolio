import { useIntro } from "~/context/intro-context";
import { useIntroAnimation } from "../-hooks/use-intro-animation";

export const IntroLoader = () => {
  const { isIntroDone, endIntro } = useIntro();

  const { textRef, overlayContainer, overlayPath } = useIntroAnimation({
    endIntro,
  });

  if (isIntroDone) return null;

  return (
    <div
      ref={overlayContainer}
      className="bg-sarcele-500 fixed top-0 left-0 z-[1000] grid h-full w-full grid-cols-[100%] grid-rows-[100vh]"
    >
      <p
        ref={textRef}
        className="font-acorn absolute-center w-full text-center text-[clamp(3rem,0.5692rem+5.2vw,8rem)] text-white"
      />

      <svg
        className="pointer-events-none relative z-[1000] col-[1] row-[1/2] h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="#0b5145"
      >
        <path
          ref={overlayPath}
          vectorEffect="non-scaling-stroke"
          d="M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z"
        />
      </svg>
    </div>
  );
};
