import { useUser } from "@/data/users";

const Home = () => {
    const user = useUser();
    return (
        <div className="h-full w-full md:h-[calc(100vh-64px)] md:w-[calc(100%-230px)] rounded-l p-6">
            <article className="prose prose-zinc prose-invert mb-8">
                <span className="text-3xl">Good Morning, </span>
                <span className="text-3xl">{user.name}</span>
            </article>
            <div className="flex flex-col gap-5">
                <div className="rounded-xl p-3">
                    <span className="text-xl">New Activity</span>
                </div>
                <div className="rounded-xl p-3">
                    <span className="text-xl">Bookmarks</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
