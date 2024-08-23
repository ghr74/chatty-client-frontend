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
import { Link, useRouter } from "@tanstack/react-router";
import { useCallback, useState } from "react";

const RegisterForm = () => {
    const router = useRouter();
    const [userValue, setUserValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [secretValue, setSecretValue] = useState("");

    const handleRegisterButtonClick = useCallback(() => {
        router.navigate({ to: "/login" });
    }, [router]);

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Register</CardTitle>
                <CardDescription>
                    Pick a display name and register with email and password.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2 mb-4">
                        <Label htmlFor="email">
                            Displayname (can be changed later)
                        </Label>
                        <Input
                            id="user"
                            type="text"
                            value={userValue}
                            onChange={(e) => setUserValue(e.target.value)}
                            required
                        />
                    </div>
                    <div className="grid gap-2 mb-3">
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
                        </div>
                        <Input
                            id="password"
                            type="password"
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                            required
                        />
                    </div>
                    <div className="grid gap-2 mb-3">
                        <div className="flex items-center">
                            <Label htmlFor="password">Repeat Password</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            value={passwordValue}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Secret</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            value={secretValue}
                            onChange={(e) => setSecretValue(e.target.value)}
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        onClick={handleRegisterButtonClick}
                    >
                        Register
                    </Button>
                </div>
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
        <div className="w-full h-full">
            <div className="flex items-center h-full">
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
