import ChannelView from "@/components/channelview/ChannelView";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/channel2")({
    component: () => <ChannelView />,
});

