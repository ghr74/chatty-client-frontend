import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Userbar from "@/components/userbar/Userbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: () => (
        <>
            <Sidebar />
            <Navbar />
            <Userbar />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
});
