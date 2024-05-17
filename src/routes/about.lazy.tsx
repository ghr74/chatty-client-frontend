import { createLazyFileRoute } from "@tanstack/react-router";

const About = () => {
    return <div className="p-2 text-white ml-[360px]">Hello from About!</div>;
};

export const Route = createLazyFileRoute("/about")({
    component: About,
});
