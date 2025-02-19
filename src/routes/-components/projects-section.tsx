import { hexToRgba } from "~/lib/color";

const projects = [
  {
    title: "Armada 2023",
    description: "Application mobile officielle de l'Armada 2023",
    image: "/images/projects/armada.png",
    link: "/projects/armada",
    color: "#040cbc",
  },
  {
    title: "Lena - Assistant IA",
    description: "Evreux Porte de Normandie",
    image: "/images/projects/epn.png",
    link: "/projects/armada",
    color: "#FFE711",
  },
  {
    title: "PWA - Normandie AI",
    description: "Normandie AI",
    image: "/images/projects/normandie-ai.png",
    link: "/projects/armada",
    color: "#B571FA",
  },
  {
    title: "Hector - Guide en magasin",
    description: "Leclerc Saint-Etienne du Rouvray",
    image: "/images/projects/armada.png",
    link: "/projects/armada",
    color: "#ff7f50",
  },
];

const ProjectsSection = () => {
  return (
    <section className="container mx-auto flex min-h-screen justify-center px-6">
      <div className="xs:max-w-screen-xs relative z-20 flex w-full flex-col gap-y-8 px-5 sm:max-w-screen-sm sm:gap-y-10 sm:px-0 md:max-w-screen-md md:gap-y-12 lg:max-w-screen-lg lg:gap-y-16">
        {projects.map((project) => (
          <div
            key={project.title}
            className="xs:h-[380px] group relative flex h-[280px] items-center justify-center rounded-3xl bg-[#40756c]/50 p-2 shadow-[0_40px_80px_#062c1680] outline outline-[#16a78f]/95 sm:h-[400px] md:h-[450px] lg:h-[600px]"
          >
            <div className="absolute inset-x-0 top-0 z-[10] mb-[-1px] h-[1px] bg-[linear-gradient(to_right,#0000_20%,#f2fff4_50%,#0000_80%)]" />
            <a
              href={project.link}
              target="_blank"
              className="group relative h-full w-full cursor-pointer overflow-hidden rounded-[calc(1.5rem-0.5rem)] bg-[linear-gradient(190deg,#128471,#0b5145_50%)] px-7 pt-8 ring-1 ring-white/20 transition-all duration-500 ease-[cubic-bezier(.165,.84,.44,1)] lg:hover:ring-white/50"
            >
              <div className="absolute inset-x-0 top-0 z-[10] mb-[-1px] h-[1px] bg-[linear-gradient(to_right,#0000_20%,#f2f2ff_50%,#0000_80%)]" />
              <div
                className="absolute inset-0 z-0 opacity-100 transition-all duration-500 lg:opacity-0 lg:group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${hexToRgba(
                    project.color,
                    0.69,
                  )}, #0b5145)`,
                }}
              />
              <div className="relative z-10 flex w-full items-start justify-between">
                <div className="flex flex-col gap-y-2">
                  <h1 className="font-acorn xs:text-3xl text-2xl tracking-wide text-white">
                    {project.title}
                  </h1>
                  <p className="text-sm text-white xl:text-base">{project.description}</p>
                </div>
                <img
                  alt="arrow-right"
                  loading="lazy"
                  className="ease-in-out-quad size-8 -rotate-90 transition-all duration-700 lg:group-hover:translate-x-[10px]"
                  src="/svg/scroll-arrow.svg"
                />
              </div>
              <img
                alt="Hirely"
                loading="lazy"
                width="1380"
                height="884"
                decoding="async"
                data-nimg="1"
                className="xs:mt-10 mx-auto mt-2.5 flex-1 translate-y-4 rounded-3xl object-cover shadow-2xl transition-all duration-500 sm:max-w-[80%] lg:mt-6 lg:group-hover:translate-y-0"
                src={project.image}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
