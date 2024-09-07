import { nonempty, object, size, string, Infer } from "superstruct";

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
    userId: string;
    channelId: number;
    message: string;
    sentAt: string;
};

export const OwnUserSchema = object({
    id: nonempty(string()),
    username: nonempty(string()),
    email: nonempty(string()),
});

export type OwnUser = Infer<typeof OwnUserSchema>;

export const PublicUserInfoSchema = object({
    id: nonempty(string()),
    username: nonempty(string()),
});

export type PublicUserInfo = Infer<typeof PublicUserInfoSchema>;

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

export const LoginResposeSchema = object({
    token: nonempty(string()),
});

export type LoginResponse = Infer<typeof LoginResposeSchema>;
