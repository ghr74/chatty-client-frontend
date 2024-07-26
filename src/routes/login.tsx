import { getAuthentication } from '@/lib/auth'
import { createFileRoute, redirect } from '@tanstack/react-router'

type LoginSearch = {
    redirect?: string;
};

export const Route = createFileRoute('/login')({
    beforeLoad: () => {
        if (getAuthentication()) {
            throw redirect({
                to: '/channel/home',
            })
        }
    },
    validateSearch: (search): LoginSearch => {
        if ("redirect" in search && typeof search.redirect === "string")
            return { redirect: search.redirect };
        return { redirect: undefined };
    },
})