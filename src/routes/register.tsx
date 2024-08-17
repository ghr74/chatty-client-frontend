import { getAuthentication as getValidToken } from "@/lib/auth";
import { createFileRoute, redirect } from "@tanstack/react-router";

type LoginSearch = {
    redirect?: string;
};

export const Route = createFileRoute("/register")({
    beforeLoad: () => {
        if (getValidToken()) {
            throw redirect({
                to: "/home",
            });
        }
    },
    validateSearch: (search): LoginSearch => {
        if ("redirect" in search && typeof search.redirect === "string")
            return { redirect: search.redirect };
        return { redirect: undefined };
    },
});
