import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Userbar from "@/components/userbar/Userbar";
import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authed")({
    component: () => (
        <>
            <Sidebar />
            <Navbar />
            <Userbar />
            <Outlet />
        </>
    ),
});
