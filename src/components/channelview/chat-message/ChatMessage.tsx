import { useUser } from "@/data/users";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Message } from "@/types/backendTypes";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { Atom, useAtom } from "jotai";

const ChatMessage = ({ messageAtom }: { messageAtom: Atom<Message> }) => {
    const [message] = useAtom(messageAtom);
    const user = useUser();
    const isSelf = useMemo(() => message.userId === user.id, [message, user]);
    return (
        <div
            className={cn("flex flex-col gap-1", {
                "self-start": !isSelf,
                "self-end": isSelf,
            })}
        >
            <span
                className={cn("text-sm", {
                    "self-start": !isSelf,
                    "self-end": isSelf,
                })}
            >
                {message.userName}
            </span>
            <div
                className={cn("flex gap-2", {
                    "flex-row-reverse": !isSelf,
                })}
            >
                <div
                    className={cn("rounded-lg p-2 px-3", {
                        "bg-slate-700": isSelf,
                    })}
                >
                    <span>{message.message}</span>
                </div>
                <div className="flex gap-3 items-center flex-row-reverse">
                    <Avatar className="w-9 h-9">
                        <AvatarImage src="/channel.png"></AvatarImage>
                        <AvatarFallback>{user.name}</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <span
                className={cn("text-sm", {
                    "self-start": isSelf,
                    "self-end": !isSelf,
                })}
            >
                {new Date(message.sentAt).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </span>
        </div>
    );
};

export default ChatMessage;
