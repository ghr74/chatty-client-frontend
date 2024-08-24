import { getRouteApi } from "@tanstack/react-router";
import { connectionAtom, messagesSplitAtom } from "@/data/messages";
import { useMemo, useEffect } from "react";
import ChatInput from "./chat-input/ChatInput";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { atom, useAtom } from "jotai";
import { Message } from "@/types/backendTypes";
import ChatMessage from "./chat-message/ChatMessage";
import { getUrl } from "@/lib/url";

const route = getRouteApi("/_authed/channel/$channelId");
const ChannelView = () => {
    const { channelId } = route.useParams();
    const [conn, setConn] = useAtom(connectionAtom);
    const [, setMessageAtoms] = useAtom(messagesSplitAtom);
    const filteredAtomsAtom = useMemo(
        () =>
            atom((get) => {
                const messageAtoms = get(messagesSplitAtom);
                return messageAtoms
                    .filter(
                        (messageAtom) =>
                            get(messageAtom).channelId === channelId,
                    )
                    .reverse();
            }),
        [channelId],
    );
    const [channelMessages] = useAtom(filteredAtomsAtom);

    useEffect(() => {
        if (conn) return;
        const newConn = new HubConnectionBuilder()
            .withUrl(getUrl("chat"))
            .withAutomaticReconnect()
            .build();
        setConn(newConn);
    }, [conn, setConn]);

    useEffect(() => {
        if (!conn) return;
        conn.start()
            .then(() => {
                console.log("Connected!");
                conn.on("receiveMessage", (userid, message: Message) => {
                    console.log("New Message!", userid, message);
                    setMessageAtoms({ type: "insert", value: message });
                });
            })
            .catch((e) => console.error("Connection failed:", e));
    }, [conn, setMessageAtoms]);

    return (
        <div className="flex w-full flex-col gap-3 px-5 pb-1 pl-5 pt-5 md:w-[calc(100%-230px)] md:pl-[370px]">
            <div className="flex h-auto w-full flex-col-reverse gap-5 overflow-y-scroll rounded-xl px-5 py-2 pt-5 md:h-[calc(100vh-132px)] md:pt-5">
                {channelMessages.map((message) => (
                    <ChatMessage
                        key={message.toString()}
                        messageAtom={message}
                    />
                ))}
            </div>
            <div className="flex w-full items-center space-x-2 rounded-xl md:h-[40px]">
                <ChatInput />
            </div>
        </div>
    );
};

export default ChannelView;
