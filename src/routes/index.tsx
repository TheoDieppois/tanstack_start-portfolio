import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "./-components/hero-section";
import ProjectsSection from "./-components/projects-section";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="pointer-events-none absolute top-[-350px] left-1/2 h-[550px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_0,#000,_#99ffe6_80%)] opacity-100 blur-[70px] md:opacity-70 md:blur-[160px] lg:h-[700px] lg:w-[1000px]" />
      <div className="noise-overlay xs:!opacity-0 absolute inset-0 !z-0 h-dvh w-full !opacity-50"></div>
      <main>
        <HeroSection />
        <ProjectsSection />
      </main>
    </>
  );
}
