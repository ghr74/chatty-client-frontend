export type Channel = {
    id: number;
    name: string;
    image?: string;
    lastMessage?: string;
    pings?: number;
};

export const channels: Channel[] = [
    {
        id: 1,
        name: "Test Channel 1",
        image: "/channel.png",
        lastMessage: "User5: Hey guys, what's up, just got done doing things.",
    },
    {
        id: 2,
        name: "Funny Channel",
        image: "/channel.png",
        pings: 1,
        lastMessage:
            "3rdUser: I just read about that. Very crazy things happened there.",
    },
];