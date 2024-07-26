import { Link } from "@tanstack/react-router";
import { HomeIcon, MessageSquareMore, Settings } from "lucide-react";
import React from "react";
import PingBadge from "../util/PingBadge";

const SidebarMenu = () => {
    return (
        <div className="w-full flex flex-col gap-5 md:px-0 px-3 pt-1">
            <Link
                className="flex items-center gap-3 cursor-pointer group px-1"
                to="/home"
            >
                <HomeIcon className="stroke-zinc-400 group-hover:stroke-zinc-100" />
                <span className="font-medium text-zinc-400 text-[14.5px] group-hover:text-zinc-100">
                    Home
                </span>
            </Link>
            <Link
                className="flex items-center gap-3 cursor-pointer group px-1"
                to="/settings"
            >
                <Settings className="stroke-zinc-400 group-hover:stroke-zinc-100" />
                <span className="font-medium text-zinc-400 text-[14.5px] group-hover:text-zinc-100">
                    Settings
                </span>
            </Link>
            <div className="w-full flex items-center justify-between cursor-pointer group px-1">
                <div className="flex items-center gap-3">
                    <MessageSquareMore className="stroke-zinc-400 group-hover:stroke-zinc-100" />
                    <span className="font-medium text-zinc-400 text-[14.5px] group-hover:text-zinc-100">
                        DMs
                    </span>
                </div>
                <PingBadge pingCount={3} />
            </div>
        </div>
    );
};

export default SidebarMenu;
