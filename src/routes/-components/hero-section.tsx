import { useHeroAnimation } from "~/routes/-hooks/use-hero-animation";

export const HeroSection = () => {
  const { heroTextRef, heroParagraphRef, scrollArrowRef, starLeftRef, imageRef } =
    useHeroAnimation();

  return (
    <section className="container mx-auto flex min-h-screen items-center justify-between gap-6 px-6">
      <div className="xs:px-0 flex flex-col gap-y-8 sm:gap-y-16">
        <div className="relative">
          <img
            ref={starLeftRef}
            src="/svg/star.svg"
            alt=""
            className="xs:-left-10 xs:-top-12 absolute -top-10 -left-32 hidden scale-0 transition-transform duration-500 sm:-top-14 sm:-left-16 md:-left-24 md:block 2xl:-top-16 2xl:-left-36"
          />

          <h1
            ref={heroTextRef}
            className="hero-text font-acorn text-sarcele-300 text-left leading-[1.4] [&_.char]:translate-y-[100%] [&_.char]:transition-transform [&_.char]:duration-500"
          >
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              Bonjour, moi
            </span>
            <br />
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              c'est Théo.
            </span>
          </h1>
        </div>
        <p
          ref={heroParagraphRef}
          className="text-sarcele-300 hero-paragraph-text max-w-[48rem] translate-y-10 opacity-0 transition-transform duration-500"
        >
          Développeur Full Stack avec plus de 4 ans d’expérience dans la conception et la
          mise en œuvre de solutions web et mobiles.
        </p>
      </div>

      <img
        ref={imageRef}
        src="/images/theo.png"
        alt=""
        className="relative hidden aspect-[2/3] h-[450px] rounded-2xl rounded-tl-[100px] object-cover lg:block"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",

          transition: "clip-path 0.5s ease-in-out",
        }}
      />
      <div className="absolute right-0 bottom-10 left-0 mt-10 flex w-full items-center justify-center">
        <img
          ref={scrollArrowRef}
          alt="scroll-indicator"
          loading="lazy"
          width="45"
          height="45"
          decoding="async"
          data-nimg="1"
          className="xs:h-12 xs:w-12 animate-moveUpAndFade h-8 w-8 scale-0 transition-transform duration-500"
          src="/svg/scroll-arrow.svg"
        />
      </div>
    </section>
  );
};
