import { Link } from "@tanstack/react-router";
import { hexToRgba } from "~/lib/color";
import { Project } from "./projects-section";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="xs:h-[380px] group relative flex h-[280px] items-center justify-center rounded-3xl bg-[#40756c]/50 p-2 shadow-[0_40px_80px_#062c1680] outline outline-[#16a78f]/95 sm:h-[400px] md:h-[450px] lg:h-[600px]">
      <div className="absolute inset-x-0 top-0 z-[10] mb-[-1px] h-[1px] bg-[linear-gradient(to_right,#0000_20%,#f2fff4_50%,#0000_80%)]" />
      <Link
        to={project.link}
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
        <picture>
          <source srcSet={project.image.replace(".png", ".webp")} type="image/webp" />
          <img
            alt="Project"
            loading="lazy"
            className="xs:mt-10 mx-auto mt-2.5 h-[470px] flex-1 translate-y-4 rounded-3xl object-cover shadow-2xl transition-all duration-500 sm:max-w-[80%] lg:mt-6 lg:group-hover:translate-y-0"
            src={project.image}
          />
        </picture>
      </Link>
    </div>
  );
};
