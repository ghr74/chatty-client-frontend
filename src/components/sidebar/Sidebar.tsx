import {
    BellDot,
    HomeIcon,
    MessageSquareMore,
    PlusCircle,
    ShoppingCart,
} from "lucide-react";
import { channels } from "@/data/channels";
import PingBadge from "../util/PingBadge";
import SidebarChannel from "./channel/SidebarChannel";

const mappedChannels = channels
    .toSorted((channel) => -(channel.pings ?? 0))
    .map((channel) => <SidebarChannel key={channel.id} channel={channel} />);

const Sidebar = () => {
    // TODO: use Separator instead of the hr
    return (
        <div className="md:h-screen h-fit md:w-[350px] w-full bg-[#121212] md:absolute block md:left-0 top-0 p-4 z-30">
            <div className="w-full flex flex-col gap-5 md:px-0 px-3 pt-1">
                <div className="flex items-center gap-3 cursor-pointer group px-1">
                    <HomeIcon className="stroke-zinc-400 group-hover:stroke-zinc-100" />
                    <span className="font-medium text-zinc-400 text-[14.5px] group-hover:text-zinc-100">
                        Home
                    </span>
                </div>
                <div className="w-full flex items-center justify-between cursor-pointer group px-1">
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <BellDot className="stroke-zinc-400 group-hover:stroke-zinc-100" />
                        <span className="font-medium text-zinc-400 text-[14.5px] group-hover:text-zinc-100">
                            Notifications
                        </span>
                    </div>
                    <PingBadge pingCount={4} />
                </div>
                <div className="flex items-center gap-3 cursor-pointer group px-1">
                    <ShoppingCart className="stroke-zinc-400 group-hover:stroke-zinc-100" />
                    <span className="font-medium text-zinc-400 text-[14.5px] group-hover:text-zinc-100">
                        Shop
                    </span>
                </div>
            </div>
            <hr className="border-zinc-400 my-7 opacity-30 mx-1" />
            <div className="w-full flex flex-col gap-5 md:px-0 px-3">
                <div className="w-full flex items-center justify-between cursor-pointer group px-1">
                    <div className="flex items-center gap-3">
                        <MessageSquareMore className="stroke-zinc-400 group-hover:stroke-zinc-100" />
                        <span className="font-medium text-zinc-400 text-[14.5px] group-hover:text-zinc-100">
                            DMs
                        </span>
                    </div>
                    <PingBadge pingCount={3} />
                </div>
                {mappedChannels}
                <div className="w-full flex items-center justify-center p-1 group">
                    <PlusCircle className="w-10 h-10 stroke-zinc-400 group-hover:stroke-zinc-100" />
                </div>
            </div>
        </div>
    );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
