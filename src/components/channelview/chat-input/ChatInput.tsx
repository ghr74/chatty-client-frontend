import { Input } from "@/components/ui/input";
import { connectionAtom as chatConnectionAtom } from "@/data/messages";
import { useParams } from "@tanstack/react-router";
import { useCallback, useMemo, useState } from "react";
import SendButton from "./SendButton";
import { atom, useAtomValue } from "jotai";
import { HubConnectionState } from "@microsoft/signalr";
import { channelAtomsAtom } from "@/data/channels";
import { useOwnUser } from "@/api/user";

const ChatInput = () => {
    const conn = useAtomValue(chatConnectionAtom);
    const { channelId } = useParams({ from: "/_authed/channel/$channelId" });
    const channelAtom = useMemo(
        () =>
            atom((get) => {
                const foundChannel = get(channelAtomsAtom).find(
                    (ca) => get(ca).id === channelId,
                );
                if (foundChannel) return get(foundChannel);
                return null;
            }),
        [channelId],
    );
    const channel = useAtomValue(channelAtom);
    const { data: user } = useOwnUser();
    const [input, setInput] = useState("");
    const handleInputEnter = useCallback(() => {
        if (input.length <= 0 || !user) return;
        if (conn?.state === HubConnectionState.Connected) {
            console.log("Sending Message...");
            void conn.send("SendMessage", user.id.toString(), input);
        } else {
            console.log("Disconnected, can't post message...");
        }
        setInput("");
    }, [conn, input, user]);
    const hasInput = useMemo(() => input.length <= 0, [input.length]);

    return (
        <>
            <Input
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
