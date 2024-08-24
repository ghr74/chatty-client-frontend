import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useAtomValue } from "jotai";
import { darkModeAtom } from "./atoms/darkMode";
import { FC, Suspense, useEffect } from "react";

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const AppWrapper: FC = () => {
    const darkMode = useAtomValue(darkModeAtom);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(darkMode);
    }, [darkMode]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </Suspense>
    );
};

export default AppWrapper;
