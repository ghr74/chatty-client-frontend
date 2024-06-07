export type Channel = {
    id: number;
    name: string;
    image?: string;
    lastMessage?: string;
    pings?: number;
};

export type Message = {
    id: number;
    userName: string;
    userId: number;
    channelId: number;
    message: string;
    sentAt: string;
};

export type User = {
    id: number;
    name: string;
    image?: string;
};
