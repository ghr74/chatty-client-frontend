import { useUser } from "@/data/users";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Message } from "@/types/backendTypes";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

const ChatMessage = ({ message }: { message: Message }) => {
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
                <div className={cn("rounded-lg bg-zinc-500 p-2 px-3")}>
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

// <div className="w-full rounded-xl bg-zinc-500">
//     <div className="p-3 text-right">
//         <span>{message.message}</span>
//     </div>
// </div>

// <div
//     className={cn("w-full flex gap-5", {
//         "justify-end": message.sender === user.id,
//         "flex-row-reverse": message.sender !== user.id,
//     })}
// >
//     <div className="w-5/6 rounded-xl bg-zinc-500">
//         <div className="p-3 text-right">
//             <span>{message.message}</span>
//         </div>
//     </div>
//     <div className="flex flex-col">
//         <div className="flex gap-3 items-center flex-row-reverse">
//             <span>
//                 {message.sender === user.id ? "You" : message.sender}
//             </span>
//             <Avatar className="w-7 h-7">
//                 <AvatarImage src="/channel.png"></AvatarImage>
//                 <AvatarFallback>{user.name}</AvatarFallback>
//             </Avatar>
//         </div>
//         <span>
//             {new Date(message.sentAt).toLocaleTimeString("en-US", {
//                 hour: "2-digit",
//                 minute: "2-digit",
//             })}
//         </span>
//     </div>
// </div>
