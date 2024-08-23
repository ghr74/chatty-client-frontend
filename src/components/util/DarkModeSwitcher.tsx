import { darkModeAtom, darkModeSettingAtom } from "@/atoms/darkMode";
import { useAtom } from "jotai";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const DarkModeSwitcher = () => {
    const [darkModeSetting, setDarkModeSetting] = useAtom(darkModeSettingAtom);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setDarkModeSetting("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDarkModeSetting("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDarkModeSetting("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DarkModeSwitcher;