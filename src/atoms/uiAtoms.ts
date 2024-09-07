import { atomWithStorage } from "jotai/utils";

export const showChannelMemberListAtom = atomWithStorage(
    "showChannelMemberList",
    true,
);
