import { getRouteApi } from "@tanstack/react-router";
import { mock_messages } from "@/data/messages";
import { useMemo } from "react";
import ChatMessage from "./chat-message/ChatMessage";

const route = getRouteApi("/channel/$channelId");
const ChannelView = () => {
    const { channelId } = route.useParams();
    const messages = mock_messages
        .filter((m) => m.channelId === channelId)
        .reverse();
    const shownMessages = useMemo(
        () => messages.map((m) => <ChatMessage key={m.id} message={m} />),
        [messages],
    );
    return (
        <div className="md:pl-[370px] pl-5 px-5 py-5 flex flex-col md:w-[calc(100%-230px)] w-full gap-5 text-zinc-200">
            <div className="w-full rounded-xl md:h-[calc(100vh-90px)] h-auto flex flex-col-reverse gap-5 bg-[#121212] px-5 md:py-5 pb-20 pt-5 overflow-y-scroll">
                {shownMessages}
            </div>
        </div>
    );
};

export default ChannelView;
