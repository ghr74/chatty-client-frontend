import { Message } from "@/types/backendTypes";
import { HubConnection } from "@microsoft/signalr";
import { atom } from "jotai";
import { splitAtom } from "jotai/utils";

export const mock_messages: Message[] = [
    {
        id: 1,
        userId: "46068249-a2dd-4d54-92d7-750dbd966ae7",
        userName: "Chatter2",
        channelId: 2,
        message: "Hey there, this is a message!",
        sentAt: "2022-10-01T12:30:00.000Z",
    },
    {
        id: 2,
        userId: "5319ae5a-c3e1-4ee2-bed5-8302537d4959",
        userName: "User1",
        channelId: 2,
        message: "Thanks for sending a message, I will not read it.",
        sentAt: "2023-08-01T19:46:00.000Z",
    },
    {
        id: 3,
        userId: "46068249-a2dd-4d54-92d7-750dbd966ae7",
        userName: "Chatter2",
        channelId: 2,
        message: "Erm, okay...",
        sentAt: "2022-10-01T16:00:00.000Z",
    },
    {
        id: 4,
        userId: "5319ae5a-c3e1-4ee2-bed5-8302537d4959",
        userName: "User1",
        channelId: 1,
        message:
            "Hey Guys, what's up, just got done doing things. Happy to be in channel 1.",
        sentAt: "2022-10-09T15:00:00.000Z",
    },
    {
        id: 5,
        userId: "ad641752-a307-4247-8619-dc82bf9fc8f0",
        userName: "3rdUser",
        channelId: 2,
        message:
            "I just read about that. Very crazy things happened there. In fact, it was so crazy I wrote this really long post about it.",
        sentAt: "2022-10-09T15:00:00.000Z",
    },
];

const messagesAtom = atom(mock_messages);
export const messagesSplitAtom = splitAtom(messagesAtom);

export const connectionAtom = atom<HubConnection | null>(null);
