import { accessTokenAtom } from "@/atoms/accessToken";
import { BACKEND_URL } from "@/lib/env";
import { OwnUserSchema, PublicUserInfoSchema } from "@/types/backendTypes";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { assert } from "superstruct";

export const useOwnUser = () => {
    const accessToken = useAtomValue(accessTokenAtom);
    return useQuery({
        queryFn: async () => {
            const f = await fetch(`${BACKEND_URL}/users`, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            const j = await f.json();
            assert(j, OwnUserSchema);
            return j;
        },
        queryKey: [`OwnUser${accessToken?.substring(10, 30)}`],
        enabled: Boolean(accessToken),
    });
};

export const usePublicUserById = (id: string) => {
    const accessToken = useAtomValue(accessTokenAtom);
    return useQuery({
        queryFn: async () => {
            const f = await fetch(`${BACKEND_URL}/users/${id}`, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            const j = await f.json();
            assert(j, PublicUserInfoSchema);
            return j;
        },
        queryKey: [`PublicUser${id}`, "PublicUsers"],
        enabled: Boolean(accessToken),
    });
};
