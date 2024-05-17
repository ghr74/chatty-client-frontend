import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ChannelView = () => {
    return (
        <div className="md:pl-[370px] pl-5 px-5 py-5 flex flex-col md:w-[calc(100%-230px)] w-full gap-5 text-zinc-200">
            <div className="w-full rounded-xl md:h-[calc(100vh-90px)] h-auto flex flex-col-reverse items-center gap-5 bg-[#121212] px-5 md:py-5 pb-20 pt-5">
                <div className="w-4/5 flex gap-5">
                    <div className="w-5/6 rounded-xl bg-zinc-500">
                        <div className="p-3">
                            <span>
                                Hey Guys, what's up, just got done doing things.
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span>User5</span>
                        <Avatar className="w-7 h-7">
                            <AvatarImage src="/channel.png"></AvatarImage>
                            <AvatarFallback>User5</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChannelView;
