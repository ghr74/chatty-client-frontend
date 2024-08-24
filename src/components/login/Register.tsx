import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useRouter } from "@tanstack/react-router";
import DarkModeSwitcher from "../util/DarkModeSwitcher";
import { useMutation } from "@tanstack/react-query";
import { superstructResolver } from "@hookform/resolvers/superstruct";
import { UserRegistrationDataSchema } from "@/types/backendTypes";
import { Infer } from "superstruct";
import { getUrl } from "@/lib/url";
import { useForm } from "react-hook-form";
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

const RegisterForm = () => {
    const router = useRouter();

    const register = useMutation({
        mutationFn: (
            registerData: Infer<typeof UserRegistrationDataSchema>,
        ) => {
            return fetch(getUrl("register"), {
                method: "POST",
                body: JSON.stringify(registerData),
            });
        },
    });

    const form = useForm<Infer<typeof UserRegistrationDataSchema>>({
        resolver: superstructResolver(UserRegistrationDataSchema),
        defaultValues: {
            userName: "",
            email: "",
            password: "",
            secret: "",
        },
    });

    const onSubmit = (values: Infer<typeof UserRegistrationDataSchema>) => {
        console.log(values);
        register
            .mutateAsync(values)
            .then(() => {
                router.navigate({ to: "/login" });
            })
            .catch((e) => alert(`Woopsies! ${e}`));
    };

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Register</CardTitle>
                <CardDescription>
                    Pick a display name and register with email and password.
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
                            name="userName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="MyFunnyUsername"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name. It can
                                        be changed later. Maximum of 16
                                        characters.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="user@example.com"
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
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="hunter2"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please choose a secure password. Must
                                        have at least 8 characters.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="secret"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Secret</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter token"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Signing up requires a secret token.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={register.isPending}
                        >
                            {register.isPending && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Register
                        </Button>
                    </form>
                </Form>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="underline">
                        Log in
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

const Register = () => {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center">
            <div className="mr-1 mt-1 flex w-full flex-row-reverse">
                <DarkModeSwitcher />
            </div>
            <div className="flex h-full items-center gap-4">
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
