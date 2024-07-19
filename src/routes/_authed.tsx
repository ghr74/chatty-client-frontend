import { getAuthentication } from '@/lib/auth'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed')({
    beforeLoad: ({location}) => {
        if (!getAuthentication()) {
            throw redirect({
                to: '/login',
                search: {
                    redirect:location.href
                }
            })
        }
    }
})