import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 p-4">
      <h1 className="font-acorn text-sarcele-300 text-center text-[clamp(5rem,40vw,33rem)] leading-none font-bold">
        404
      </h1>
      <p className="text-sarcele-300 text-xl">Page non trouvée</p>
      <div className="flex flex-wrap items-center gap-6">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="border-sarcele-300 hover:bg-sarcele-300/10 text-sarcele-300 relative mt-3 cursor-pointer rounded-full border px-8 py-3 text-xl font-medium shadow-lg transition-all duration-300"
        >
          Retour
        </button>

        <Link
          to="/"
          className="border-sarcele-300 hover:bg-sarcele-300/10 text-sarcele-300 relative mt-3 rounded-full border px-8 py-3 text-xl font-medium shadow-lg transition-all duration-300"
        >
          Accueil
        </Link>
      </div>
    </div>
  );
}
