import { ProjectCard } from "./project-card";

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  color: string;
};

type ProjectsSectionProps = {
  projects?: Project[];
};

const defaultProjects: Project[] = [
  {
    title: "Armada 2023",
    description: "Application mobile officielle de l'Armada 2023",
    image: "/images/projects/armada.png",
    link: "/projects/armada-2023",
    color: "#040cbc",
  },
  {
    title: "Assistant IA - Évreux Normandie Attractivité",
    description:
      "Chatbot propulsé par l'IA avec une approche RAG + Dashboard d'alimentation de la base de connaissances",
    image: "/images/projects/epn.png",
    link: "/projects/assistant-ia-evreux-normandie-attractivite",
    color: "#FFE711",
  },
  {
    title: "Application événementielle – Normandie.AI",
    description:
      "Accès et découverte du programme, conférences et ateliers de l'évènement",
    image: "/images/projects/normandie-ai.png",
    link: "/projects/application-evenementielle-normandie-ai",
    color: "#B571FA",
  },
  {
    title: "Guide en magasin - Leclerc",
    description:
      "Application web mobile pour le guidage en magasin + Dashboard de gestion de réclamations",
    image: "/images/projects/leclerc.png",
    link: "/projects/guide-en-magasin-leclerc-saint-etienne-du-rouvray",
    color: "#ff7f50",
  },
];

const ProjectsSection = ({ projects = defaultProjects }: ProjectsSectionProps) => {
  return (
    <section className="container mx-auto min-h-screen px-6 pt-12 pb-20">
      <h2 className="font-acorn text-sarcele-300 mb-12 w-fit text-[clamp(3.5rem,0.5692rem+6.3vw,8rem)]">
        Quelques projets
      </h2>

      <div className="xs:max-w-screen-xs relative z-20 mx-auto flex w-full flex-col gap-y-8 px-5 sm:max-w-screen-sm sm:gap-y-10 sm:px-0 md:max-w-screen-md md:gap-y-12 lg:max-w-screen-lg lg:gap-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:gap-8">
        <h2 className="font-acorn text-sarcele-300 text-center text-[clamp(3.5rem,0.5692rem+6.3vw,8rem)] md:text-left">
          En savoir plus ?
        </h2>
        <a
          href="https://drive.google.com/file/d/1c6Kg974uU0xIYfpInPAUafW7XgiD4JA4/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="border-sarcele-300 hover:bg-sarcele-300/10 relative mt-3 rounded-full border px-8 py-3 shadow-lg transition-all duration-300"
        >
          <span className="text-sarcele-300 relative text-xl font-medium">Mon CV</span>
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
