import Register from "@/components/login/Register";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/register")({
    component: Register,
});
