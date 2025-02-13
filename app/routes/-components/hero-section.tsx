export const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 grid grid-cols-1 gap-6 place-content-center min-h-screen">
      <div className="xs:px-0 flex flex-col items-center justify-center gap-y-8 px-1.5 sm:gap-y-16">
        <div className="relative">
          <img
            src="/svg/star.svg"
            alt=""
            className="xs:-left-10 xs:-top-12 absolute -left-32 -top-10 hidden sm:-left-16 sm:-top-14 md:-left-24 md:block 2xl:-left-36 2xl:-top-16"
          />

          <h1 className="hero-text font-acorn text-sarcele-300 text-center leading-[1.4]">
            Hi. I'm Theo. <br />A Developer.
          </h1>
          <img
            src="/svg/star.svg"
            alt=""
            className="xs:-right-10 xs:-bottom-12 absolute -bottom-10 -right-32 hidden sm:-bottom-14 sm:-right-16 md:-right-24 md:block 2xl:-bottom-16 2xl:-right-36"
          />
        </div>
        <p className="text-sarcele-300 hero-paragraph-text max-w-[48rem]">
          I'm a developer with a passion for building web applications. I'm
          currently working as a developer at a company called Sarcele.
        </p>
      </div>
      <div className="xs:bottom-10 xs:absolute xs:left-0 relative mt-10 flex w-full items-center justify-center">
        <img
          alt="scroll-indicator"
          loading="lazy"
          width="45"
          height="45"
          decoding="async"
          data-nimg="1"
          className="xs:h-12 xs:w-12 animate-moveUpAndFade h-8 w-8"
          src="/svg/scroll-arrow.svg"
        />
      </div>
    </section>
  );
};
