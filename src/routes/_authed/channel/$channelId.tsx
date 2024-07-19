import ChannelView from "@/components/channelview/ChannelView";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/channel/$channelId")({
    component: ChannelView,
    parseParams: ({ channelId }) => ({
        channelId: Number(channelId),
    }),
});