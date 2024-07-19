import { getAuthentication } from '@/lib/auth'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
    beforeLoad: () => {
        if (getAuthentication()) {
            throw redirect({
                to: '/channel/home',
            })
        }
    }
})