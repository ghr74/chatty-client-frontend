import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { useAtomValue } from "jotai";
import { darkModeAtom } from "./atoms/darkMode";
import { FC, Suspense, useEffect } from "react";

const router = createRouter({ routeTree });

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
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default AppWrapper;
