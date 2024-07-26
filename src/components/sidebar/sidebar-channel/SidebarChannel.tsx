import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PingBadge from "@/components/util/PingBadge";
import { Channel } from "@/data/channels";
import { cn } from "@/lib/utils";
import { Link, useParams } from "@tanstack/react-router";
import { Atom, useAtomValue } from "jotai";
import { FC } from "react";

const SidebarChannel: FC<{ channelAtom: Atom<Channel> }> = ({
    channelAtom,
}) => {
    const channel = useAtomValue(channelAtom);
    const currentChannelId = useParams({
        strict: false,
        select: (x) => ("channelId" in x ? x.channelId : undefined),
    });
    const channelCn = cn(
        "w-full flex justify-between items-center cursor-pointer group rounded-lg p-1",
        { "bg-zinc-700": channel.id === currentChannelId },
    );

    return (
        <Link
            key={channel.id}
            className={channelCn}
            to="/channel/$channelId"
            params={{ channelId: channel.id }}
        >
            <div className="flex gap-3 items-center">
                <Avatar>
                    <AvatarImage src={channel.image}></AvatarImage>
                    <AvatarFallback>{channel.name}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-medium text-zinc-300 text-md group-hover:text-zinc-50">
                        {channel.name}
                    </span>
                    <span className="font-medium text-zinc-400 text-xs group-hover:text-zinc-50 line-clamp-2">
                        {channel.lastMessage ?? "No messages yet."}
                    </span>
                </div>
            </div>
            {channel.pings && <PingBadge pingCount={channel.pings} />}
        </Link>
    );
};

export default SidebarChannel;
