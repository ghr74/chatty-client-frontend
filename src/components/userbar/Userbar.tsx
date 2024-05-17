import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Userbar = () => {
    return (
        <div className="md:h-screen h-fit md:w-[230px] md:flex hidden md:flex-col w-full bg-[#121212] fixed right-0">
            <div className="p-2 flex justify-center">
                <span className="text-zinc-200">Test Channel 1</span>
            </div>
            <hr className="border-zinc-400 my-2 opacity-30 mx-3" />
            <div className="p-4 pl-8">
                <span className="text-zinc-200 text-sm">Online</span>
                <div className="flex flex-col gap-3 ml-2 mt-3">
                    <div className="flex gap-3 items-center cursor-pointer">
                        <Avatar className="w-7 h-7">
                            <AvatarImage src="/channel.png"></AvatarImage>
                            <AvatarFallback>User5</AvatarFallback>
                        </Avatar>
                        <span className="text-teal-400">User5</span>
                    </div>
                    <div className="flex gap-3 items-center cursor-pointer">
                        <Avatar className="w-7 h-7">
                            <AvatarImage src="/channel.png"></AvatarImage>
                            <AvatarFallback>User8</AvatarFallback>
                        </Avatar>
                        <span className="text-fuchsia-400">User8</span>
                    </div>
                    <div className="flex gap-3 items-center cursor-pointer">
                        <Avatar className="w-7 h-7">
                            <AvatarImage src="/channel.png"></AvatarImage>
                            <AvatarFallback>User2</AvatarFallback>
                        </Avatar>
                        <span className="text-zinc-400">User2</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userbar;
