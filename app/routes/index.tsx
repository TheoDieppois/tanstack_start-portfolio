import { createFileRoute } from "@tanstack/react-router";
import { IntroLoader } from "./-components/intro-loader";
import { HeroSection } from "./-components/hero-section";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <IntroLoader />
      <div className="absolute top-[-350px] left-1/2 -translate-x-1/2 h-[550px] bg-[radial-gradient(circle_at_50%_0,#000,_#99ffe6_80%)] rounded-full opacity-100 blur-[70px] pointer-events-none md:opacity-70 md:blur-[160px] lg:h-[700px] lg:w-[1000px]" />
      <div className="noise-overlay xs:!opacity-0 absolute inset-0 !z-0 h-dvh w-full !opacity-50"></div>
      <main>
        <HeroSection />
      </main>
    </>
  );
}
