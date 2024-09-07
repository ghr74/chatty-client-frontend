import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Message } from "@/types/backendTypes";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { Atom, useAtom, useAtomValue } from "jotai";
import { usePublicUserById } from "@/api/user";
import { tokenUserIdAtom } from "@/atoms/accessToken";

const ChatMessage = ({ messageAtom }: { messageAtom: Atom<Message> }) => {
    const [message] = useAtom(messageAtom);
    const tokenUserId = useAtomValue(tokenUserIdAtom);
    const { data: messageUser } = usePublicUserById(message.userId);
    const isSelf = useMemo(
        () => message.userId === tokenUserId,
        [message.userId, tokenUserId],
    );
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
                {messageUser?.username ?? message.userName}
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
                <div className="flex flex-row-reverse items-center gap-3">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="/channel.png"></AvatarImage>
                        <AvatarFallback>
                            {messageUser?.username ?? message.userName}
                        </AvatarFallback>
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
