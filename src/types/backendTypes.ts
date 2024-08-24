import { nonempty, object, size, string } from "superstruct";

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

export const UserRegistrationDataSchema = object({
    email: string(),
    password: size(string(), 8, 64),
    userName: size(string(), 1, 16),
    secret: nonempty(string()),
});

export const UserLoginDataSchema = object({
    email: string(),
    password: size(string(), 8, 64),
});
