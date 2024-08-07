import { Link } from "@tanstack/react-router";
import {  LogOut, PinIcon, Search, UserPlus2, Users2 } from "lucide-react";

const Navbar = () => (
    <div className="bg-[#121212] w-full h-12 px-5 relative top-0 pl-[350px] md:flex hidden items-center justify-between z-20">
        <div className="flex items-center gap-3 w-[350px] h-12 px-3">
            <Search color={"#b3b3b3"} />
            <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-[#121212] w-full placeholder:text-[#b3b3b3] text-[#b3b3b3]" />
        </div>
        <div className="flex items-center gap-3">
            <div className="rounded-full w-[34px] h-[34px] bg-zinc-700 grid place-items-center cursor-pointer hover:bg-zinc-600">
                <PinIcon color={"#b3b3b3"} />
            </div>
            <div className="rounded-full w-[34px] h-[34px] bg-zinc-700 grid place-items-center cursor-pointer hover:bg-zinc-600">
                <Users2 color={"#b3b3b3"} />
            </div>
            <div className="rounded-full w-[34px] h-[34px] bg-zinc-700 grid place-items-center cursor-pointer hover:bg-zinc-600">
                <UserPlus2 color={"#b3b3b3"} />
            </div>
            <div onClick={() => {
                localStorage.removeItem("at");
            } } className="rounded-full w-[34px] h-[34px] bg-zinc-700 grid place-items-center cursor-pointer hover:bg-zinc-600">
                <Link to="/login">
                <LogOut color="#b3b3b3" /></Link>
                </div>
        </div>
    </div>
);

Navbar.displayName = "Navbar";

export default Navbar;
