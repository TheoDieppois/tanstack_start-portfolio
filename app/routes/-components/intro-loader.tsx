import { useIntroAnimation } from "../-hooks/use-intro-animation";

export const IntroLoader = () => {
  const { textRef, overlayContainer, overlayPath, isLoaded } =
    useIntroAnimation();

  if (isLoaded) return null;

  return (
    <div
      ref={overlayContainer}
      className="fixed top-0 left-0 w-full h-full grid grid-cols-[100%] grid-rows-[100vh] z-[1000] bg-sarcele-500"
    >
      <p
        ref={textRef}
        className="text-[clamp(3rem,0.5692rem+5.2vw,8rem)] text-white font-acorn absolute-center"
      />

      <svg
        className="col-[1] row-[1/2] relative z-[1000] pointer-events-none w-full h-full"
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
