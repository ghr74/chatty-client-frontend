import { createLazyFileRoute } from "@tanstack/react-router";

const About = () => {
    return (
        <div className="p-2 text-white ml-[360px]">
            Hello from an authenticated About!
        </div>
    );
};

export const Route = createLazyFileRoute("/_authed/about")({
    component: About,
});
