import { PlusCircle } from "lucide-react";
import { channelAtomsAtom } from "@/data/channels";
import SidebarChannel from "./sidebar-channel/SidebarChannel";
import SidebarMenu from "./SidebarMenu";
import { atom, useAtomValue } from "jotai";
import { useMemo } from "react";

const sortedChannelsAtom = atom((get) =>
    get(channelAtomsAtom).toSorted(
        (channelAtom) => -(get(channelAtom).pings ?? 0),
    ),
);

const Sidebar = () => {
    const sortedChannels = useAtomValue(sortedChannelsAtom);
    const mappedChannels = useMemo(
        () =>
            sortedChannels.map((channelAtom) => (
                <SidebarChannel
                    key={channelAtom.toString()}
                    channelAtom={channelAtom}
                />
            )),
        [sortedChannels],
    );
    // TODO: use Separator instead of the hr
    return (
        <div className="md:h-screen h-fit md:w-[350px] w-full bg-[#121212] md:absolute block md:left-0 top-0 p-4 z-30">
            <SidebarMenu />
            <hr className="border-zinc-400 my-7 opacity-30 mx-1" />
            <div className="w-full flex flex-col gap-5 md:px-0 px-3">
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
