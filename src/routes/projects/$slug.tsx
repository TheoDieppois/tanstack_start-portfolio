import { createFileRoute, notFound } from "@tanstack/react-router";
import { NotFound } from "~/components/not-found";
import projectsData from "~/data/projects.json";
import {
  HeroSection,
  ImageGallery,
  ListContent,
  Section,
  TechnologiesSection,
  TextContent,
} from "./-components/project-components";

const getProjects = (slug: string) => {
  return projectsData.projects.find((p) => p.slug === slug);
};

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectPage,
  loader: ({ params: { slug } }) => {
    const project = getProjects(slug);
    if (!project) throw notFound();
    return { project };
  },
  errorComponent: () => <NotFound />,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <main>
      <HeroSection project={project} />

      <Section title="Contexte">
        <TextContent content={project.context.description} />
      </Section>

      <Section title="Objectifs">
        <ListContent items={project.objectives} />
      </Section>

      <Section title="Solutions apportées">
        <ListContent items={project.solutions} />
      </Section>

      <Section title="Mon rôle">
        <ListContent items={project.role} />
      </Section>

      <Section title="Résultat">
        <TextContent content={project.result.description} />
        <ImageGallery images={project.images} title={project.title} />
      </Section>

      <Section title="Technologies utilisées">
        <TechnologiesSection technologies={project.technologies} />
      </Section>
    </main>
  );
}
