import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getTestPasswort, getTestUser } from "@/lib/env";
import { Link, useRouter, useSearch } from "@tanstack/react-router";
import { useCallback, useState } from "react";

const LoginForm = () => {
    const router = useRouter();
    const redirect = useSearch({ from: "/login", select: (s) => s.redirect });
    const [emailValue, setEmailValue] = useState(getTestUser() ?? "");
    const [passwordValue, setPasswordValue] = useState(getTestPasswort() ?? "");

    const handleLoginButtonClick = useCallback(() => {
        localStorage.setItem("at", "token");
        router.history.push(redirect || "/channel/home");
    }, [redirect, router.history]);

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link
                                href="#"
                                className="ml-auto inline-block text-sm underline"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        onClick={handleLoginButtonClick}
                    >
                        Login
                    </Button>
                </div>
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
        <div className="bg-zinc-900 w-full h-full">
            <div className="flex items-center h-full">
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
