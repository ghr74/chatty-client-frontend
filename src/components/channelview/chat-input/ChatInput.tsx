import { Input } from "@/components/ui/input";
import { channels } from "@/data/channels";
import { mock_messages } from "@/data/messages";
import { useUser } from "@/data/users";
import { useParams } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import SendButton from "./SendButton";
import { HubConnection } from "@microsoft/signalr";

const ChatInput = ({ conn }: { conn: HubConnection | null }) => {
    const { channelId } = useParams({ from: "/channel/$channelId" });
    const channel = channels.find((c) => c.id === channelId);
    const user = useUser();
    const [input, setInput] = useState("");
    const handleInputEnter = useCallback(() => {
        if (input.length <= 0) return;
        mock_messages.push({
            userName: user.name,
            id: mock_messages.length,
            channelId,
            sentAt: new Date().toISOString(),
            userId: user.id,
            message: input,
        });
        if (conn) {
            console.log("Sending Message...");
            void conn.send("SendMessage", user.id.toString(), input);
        }
        setInput("");
    }, [channelId, conn, input, user.id, user.name]);
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
            <SendButton
                handler={handleInputEnter}
                disabled={input.length <= 0}
            />
        </>
    );
};

export default ChatInput;
