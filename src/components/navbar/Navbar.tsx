import { Link } from "@tanstack/react-router";
import { LogOut, PinIcon, Search, UserPlus2, Users2 } from "lucide-react";
import { Input } from "../ui/input";
import DarkModeSwitcher from "../util/DarkModeSwitcher";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useAtom } from "jotai";
import { showChannelMemberListAtom } from "@/atoms/uiAtoms";

const Navbar = () => {
    const [showUserbar, setShowUserbar] = useAtom(showChannelMemberListAtom);
    return (
        <div className="relative top-0 z-20 hidden h-12 w-full items-center justify-between px-5 pl-[350px] md:flex">
            <div className="flex h-12 w-[350px] items-center gap-3 px-3">
                <Search color={"#b3b3b3"} />
                <Input
                    type="text"
                    placeholder="Search..."
                    className="w-full outline-none"
                />
            </div>
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="rounded-full">
                    <PinIcon />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <UserPlus2 />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => setShowUserbar((p) => !p)}
                >
                    <Users2 />
                </Button>
                <Separator orientation="vertical" className="h-8" />
                <DarkModeSwitcher />
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => localStorage.removeItem("at")}
                >
                    <Link to="/login">
                        <LogOut />
                    </Link>
                </Button>
            </div>
        </div>
    );
};

Navbar.displayName = "Navbar";

export default Navbar;
