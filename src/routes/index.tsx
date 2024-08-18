import { getAuthentication } from "@/lib/auth";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    beforeLoad: () => {
        if (getAuthentication()) {
            throw redirect({
                to: "/home",
            });
        } else {
            throw redirect({
                to: "/login",
            });
        }
    },
});
