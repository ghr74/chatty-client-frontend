import Settings from '@/components/settings/Settings'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authed/settings')({
  component: () => <div className="p-2 text-white ml-[360px]"><Settings /></div>
})