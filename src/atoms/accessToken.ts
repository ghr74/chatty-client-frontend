import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const accessTokenAtom = atomWithStorage<string | undefined>(
    "at",
    undefined,
);

export const tokenUserIdAtom = atom<string | undefined>((get) => {
    const token = get(accessTokenAtom);
    if (!token) return undefined;
    const parts = token.split(".");
    if (parts.length !== 3) return undefined;
    const payload = parts[1];
    try {
        const claims = JSON.parse(
            atob(payload.replace(/-/g, "+").replace(/_/g, "/")),
        );
        if ("id" in claims && typeof claims.id === "string") {
            return claims.id;
        }
        return undefined;
    } catch {
        return undefined;
    }
});
