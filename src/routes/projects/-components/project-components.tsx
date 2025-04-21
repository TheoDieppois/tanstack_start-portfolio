/* eslint-disable @eslint-react/dom/no-dangerously-set-innerhtml */
/* eslint-disable @eslint-react/no-array-index-key */

import { Link } from "@tanstack/react-router";

export type Project = {
  slug: string;
  title: string;
  images: string[];
  context: { description: string };
  objectives: string[];
  solutions: string[];
  role: string[];
  result: { description: string };
  technologies: {
    frontend: string[];
    backend: string;
    infrastructure: string;
  };
};

export const BackButton = () => (
  <Link
    to="/"
    className="absolute top-10 left-10 z-10 flex size-12 items-center justify-center rounded-full border border-white transition-all duration-300 hover:bg-white/10"
  >
    <img
      alt="arrow-left"
      loading="lazy"
      className="ease-in-out-quad size-8 rotate-90 transition-all duration-700"
      src="/svg/scroll-arrow.svg"
    />
  </Link>
);

export const HeroSection = ({ project }: { project: Project }) => (
  <div className="relative">
    <BackButton />
    <div className="relative h-[500px] w-full">
      <img
        src={project.images[0]}
        alt={project.title}
        className="h-full w-full rounded-b-lg object-cover"
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/80 to-transparent" />
    </div>
    <h1 className="text-sarcele-300 font-acorn relative container mx-auto -translate-y-1/2 px-6 text-[clamp(4.2rem,0.5692rem+7.2vw,12rem)] leading-none">
      {project.title}
    </h1>
  </div>
);

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="container mx-auto px-6 py-12">
    <h2 className="font-acorn text-sarcele-300 text-[clamp(3.2rem,0.5692rem+6.7vw,11rem)]">
      {title}
    </h2>
    {children}
  </section>
);

export const TextContent = ({ content }: { content: string }) => (
  <p
    className="text-sarcele-300 mt-4 text-xl"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export const ListContent = ({ items }: { items: string[] }) => (
  <ul className="text-sarcele-300 mt-4 list-inside list-disc text-xl">
    {items.map((item, index) => (
      <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </ul>
);

export const ImageGallery = ({ images, title }: { images: string[]; title: string }) => (
  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
    {images.map((image, index) => (
      <div key={index} className="aspect-video">
        <img src={image} alt={title} className="h-full w-full rounded-lg object-cover" />
      </div>
    ))}
  </div>
);

export const TechnologiesSection = ({
  technologies,
}: {
  technologies: Project["technologies"];
}) => (
  <>
    {technologies.frontend.map((tech, index) => (
      <TextContent key={index} content={tech} />
    ))}
    <TextContent content={technologies.backend} />
    <TextContent content={technologies.infrastructure} />
  </>
);
