import { getRouteApi } from "@tanstack/react-router";
import { mock_messages } from "@/data/messages";
import { useMemo, useState, useEffect } from "react";
import ChatMessage from "./chat-message/ChatMessage";
import ChatInput from "./chat-input/ChatInput";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

const route = getRouteApi("/channel/$channelId");
const ChannelView = () => {
    const { channelId } = route.useParams();
    const [conn, setConn] = useState<HubConnection | null>(null);
    const [chat, setChat] = useState<{ userid: number; message: string }[]>([]);

    useEffect(() => {
        const newConn = new HubConnectionBuilder()
            .withUrl("http://localhost:5080/chat")
            .withAutomaticReconnect()
            .build();
        setConn(newConn);
    }, []);

    useEffect(() => {
        if (!conn) return;
        conn.start()
            .then(() => {
                console.log("Connected!");
                conn.on("receiveMessage", (userid, message) => {
                    console.log("New Message!", userid, message);
                    setChat((prev) => [...prev, { userid, message }]);
                });
            })
            .catch((e) => console.error("Connection failed:", e));
    }, [conn]);

    const shownMessages = useMemo(
        () =>
            mock_messages
                .filter((m) => m.channelId === channelId)
                .reverse()
                .map((m) => <ChatMessage key={m.id} message={m} />),
        [channelId],
    );

    return (
        <div className="md:pl-[370px] pl-5 px-5 pt-5 pb-1 flex flex-col md:w-[calc(100%-230px)] w-full gap-3 text-zinc-200">
            <div className="w-full rounded-xl md:h-[calc(100vh-132px)] h-auto flex flex-col-reverse gap-5 bg-[#121212] px-5 md:pt-5 py-2 pt-5 overflow-y-scroll">
                {shownMessages}
            </div>
            <div className="flex items-center space-x-2 w-full rounded-xl md:h-[40px]">
                <ChatInput conn={conn} />
            </div>
        </div>
    );
};

export default ChannelView;
