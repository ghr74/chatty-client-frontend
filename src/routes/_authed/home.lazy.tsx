import Home from '@/components/home/Home'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authed/home')({
  component: () => <div className="p-2 text-white ml-[360px]"><Home /></div>
})