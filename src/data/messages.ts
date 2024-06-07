import { Message } from "@/types/backendTypes";

export const mock_messages: Message[] = [
    {
        id: 1,
        userId: 2,
        userName: "Chatter2",
        channelId: 2,
        message: "Hey there, this is a message!",
        sentAt: "2022-10-01T12:30:00.000Z",
    },
    {
        id: 2,
        userId: 1,
        userName: "User1",
        channelId: 2,
        message: "Thanks for sending a message, I will not read it.",
        sentAt: "2023-08-01T19:46:00.000Z",
    },
    {
        id: 3,
        userId: 2,
        userName: "Chatter2",
        channelId: 2,
        message: "Erm, okay...",
        sentAt: "2022-10-01T16:00:00.000Z",
    },
    {
        id: 4,
        userId: 1,
        userName: "User1",
        channelId: 1,
        message:
            "Hey Guys, what's up, just got done doing things. Happy to be in channel 1.",
        sentAt: "2022-10-09T15:00:00.000Z",
    },
];
