import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useRouter, useSearch } from "@tanstack/react-router";
import DarkModeSwitcher from "../util/DarkModeSwitcher";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { assert, Infer } from "superstruct";
import {
    LoginResponse,
    LoginResposeSchema,
    UserLoginDataSchema,
} from "@/types/backendTypes";
import { superstructResolver } from "@hookform/resolvers/superstruct";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Loader2 } from "lucide-react";
import { BACKEND_URL, IS_DEV_ENV } from "@/lib/env";
import { useSetAtom } from "jotai";
import { accessTokenAtom } from "@/atoms/accessToken";
import { fetch_post } from "@/api/fetchWrappers";

const LoginForm = () => {
    const router = useRouter();
    const redirect = useSearch({ from: "/login", select: (s) => s.redirect });
    const setAccessToken = useSetAtom(accessTokenAtom);

    const login = useMutation({
        mutationFn: async (data: Infer<typeof UserLoginDataSchema>) => {
            const r = await fetch_post(`${BACKEND_URL}/login`, data);
            const j = await r.json();
            assert(j, LoginResposeSchema);
            return j;
        },
    });

    const form = useForm<Infer<typeof UserLoginDataSchema>>({
        resolver: superstructResolver(UserLoginDataSchema),
        defaultValues: {
            email: import.meta.env.VITE_TEST_USER ?? "",
            password: import.meta.env.VITE_TEST_PASSWORD ?? "",
        },
    });

    const onSubmit = (values: Infer<typeof UserLoginDataSchema>) => {
        login.mutate(values, {
            onSuccess: (r: LoginResponse) => {
                setAccessToken(r.token);
                // localStorage.setItem("at", r.token);
                router.history.push(redirect || "/channel/home");
            },
            onError: (error) => {
                console.log(error);
                // if (IS_DEV_ENV) {
                //     localStorage.setItem("at", "token");
                //     router.history.push(redirect || "/channel/home");
                // }
            },
        });
    };

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email and password below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="user@example.com"
                                            type="email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <div className="flex items-center justify-between">
                                            Password
                                            <Link
                                                href="#"
                                                className="ml-auto inline-block text-sm underline"
                                            >
                                                Forgot your password?
                                            </Link>
                                        </div>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="hunter2"
                                            type="password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={login.isPending}
                        >
                            {login.isPending && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Login
                        </Button>
                    </form>
                </Form>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

const Login = () => {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center">
            <div className="mr-1 mt-1 flex w-full flex-row-reverse">
                <DarkModeSwitcher />
            </div>
            <div className="flex h-full items-center gap-4">
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
