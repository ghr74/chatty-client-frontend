import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authed/channel/home')({
  component: () => <div className="p-2 text-white ml-[360px]">Hello /_authed/channel/home!</div>
})