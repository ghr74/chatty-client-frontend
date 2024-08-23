import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";
export type DarkModeSetting = "system" | "dark" | "light";

export const darkModeSettingAtom = atomWithStorage<DarkModeSetting>(
    "darkMode",
    "system",
);

export const darkModeAtom = atom<"dark" | "light">((get) => {
    const setting = get(darkModeSettingAtom);
    switch (setting) {
        case "system":
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        case "dark":
            return "dark";
        case "light":
            return "light";
        default:
            return "dark";
    }
});
