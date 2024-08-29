import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./routes/Home.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { About } from "./routes/About.tsx";
import { App } from "./App.tsx";
import "./globals.css";
import { Projects } from "./routes/Projects.tsx";
import { Articles } from "./routes/Articles.tsx";
import { ArticlePage } from "./routes/ArticlePage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/articles",
                element: <Articles />,
            },
            {
                path: "/articles/:slug",
                element: <ArticlePage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
                <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
