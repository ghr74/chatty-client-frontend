import { Input } from "@/components/ui/input";
import { channels } from "@/data/channels";
import {
    connectionAtom as chatConnectionAtom,
    messagesSplitAtom,
    mock_messages,
} from "@/data/messages";
import { useUser } from "@/data/users";
import { useParams } from "@tanstack/react-router";
import { useCallback, useMemo, useState } from "react";
import SendButton from "./SendButton";
import { useAtomValue, useSetAtom } from "jotai";
import { HubConnectionState } from "@microsoft/signalr";

const ChatInput = () => {
    const conn = useAtomValue(chatConnectionAtom);
    const setMessagesSplitAtom = useSetAtom(messagesSplitAtom);
    const { channelId } = useParams({ from: "/channel/$channelId" });
    const channel = channels.find((c) => c.id === channelId);
    const user = useUser();
    const [input, setInput] = useState("");
    const handleInputEnter = useCallback(() => {
        if (input.length <= 0) return;
        const mock_message = {
            userName: user.name, // backend gets this from session API token, the returned message object will have the default username, which we will then make a WS request from the frontend to resolve to the current one. the async response to this request will invoke the same function to set value in a name map that the event for user changing display name would
            id: mock_messages.length, // what the hek is a message ID? backend gets this from GUID call probably
            channelId, // we'll have to pass this in
            sentAt: new Date().toISOString(), // we can pass this in, but also save the time from the backend so we can do statistics later on sent/received
            userId: user.id, // ?? also get this from Session API token
            message: input, // yeah we'll need to pass this in
        };
        if (conn?.state === HubConnectionState.Connected) {
            console.log("Sending Message...");
            void conn.send("SendMessage", user.id.toString(), input);
        } else {
            console.log("Disconnected, updating local message...");
            setMessagesSplitAtom({ type: "insert", value: mock_message });
        }
        setInput("");
    }, [channelId, conn, input, setMessagesSplitAtom, user.id, user.name]);
    const hasInput = useMemo(() => input.length <= 0, [input.length]);
    return (
        <>
            <Input
                className="border-zinc-800 bg-[#121212]"
                placeholder={`Message ${channel?.name ?? ""} ...`}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key !== "Enter") return;
                    handleInputEnter();
                }}
                value={input}
            />
            <SendButton handler={handleInputEnter} disabled={hasInput} />
        </>
    );
};

export default ChatInput;
