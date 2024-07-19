import { createLazyFileRoute } from "@tanstack/react-router";

const Index = () => {
    return (
        <div className="p-2 ml-[360px]">
            <h3 className="text-white">Welcome to Chatty!</h3>
        </div>
    );
};

export const Route = createLazyFileRoute("/")({
    component: Index,
});
