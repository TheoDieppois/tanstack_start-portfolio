import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import "lenis/dist/lenis.css";
import appCss from "~/styles/app.css?url";

import { IntroProvider } from "~/context/intro-context";
import { useLenis } from "~/hooks/use-lenis";
import { Footer } from "./-components/footer";
import { IntroLoader } from "./-components/intro-loader";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Théo Dieppois - Développeur Full Stack",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { readonly children: React.ReactNode }) {
  useLenis();

  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-sarcele-800">
        <IntroProvider>
          <IntroLoader />
          {children}
          <Footer />
        </IntroProvider>

        <ReactQueryDevtools buttonPosition="bottom-left" />
        <TanStackRouterDevtools position="bottom-right" />

        <Scripts />
      </body>
    </html>
  );
}
