import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Userbar = () => {
    return (
        <div className="fixed right-0 hidden h-fit w-full md:flex md:h-screen md:w-[230px] md:flex-col">
            <div className="flex justify-center p-2">
                <span className="text-foreground">Test Channel 1</span>
            </div>
            <hr className="mx-3 my-2 border-muted-foreground opacity-30" />
            <div className="p-4 pl-8">
                <span className="text-sm text-foreground">Online</span>
                <div className="ml-2 mt-3 flex flex-col gap-3">
                    <div className="flex cursor-pointer items-center gap-3">
                        <Avatar className="h-7 w-7">
                            <AvatarImage src="/channel.png"></AvatarImage>
                            <AvatarFallback>User5</AvatarFallback>
                        </Avatar>
                        <span className="text-teal-400">User5</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3">
                        <Avatar className="h-7 w-7">
                            <AvatarImage src="/channel.png"></AvatarImage>
                            <AvatarFallback>User8</AvatarFallback>
                        </Avatar>
                        <span className="text-fuchsia-400">User8</span>
                    </div>
                    <div className="flex cursor-pointer items-center gap-3">
                        <Avatar className="h-7 w-7">
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
