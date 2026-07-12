"use client";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    Spinner,
    TextField,
} from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const SignupForm = () => {
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/";

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const name = formData.get("name") as string;

        const res = await fetch(
            `/api/check-email?email=${encodeURIComponent(email)}`,
        );

        if (!res.ok) {
            throw new Error("Check failed");
        }

        const data: { exists: boolean } = await res.json();

        if (data.exists) {
            toast.error("An account with this email already exists.");
            setIsLoading(false);
            return;
        }

        const { error } = await authClient.signUp.email({
            email,
            password,
            name,
            callbackURL: redirectTo,
        });
        if (error?.message) {
            toast.error(error.message);

            setIsLoading(false);

            return;
        }

        router.push(redirectTo);
        toast.success("Signup Successful!");
        setIsLoading(false);
    };
    return (
        <Form className="flex flex-col gap-4 -mt-5" onSubmit={onSubmit}>
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <Spinner color="accent" /> Signing Up
                </div>
            ) : (
                ""
            )}

            <TextField
                isRequired
                name="name"
                validate={(value) => {
                    if (value.length < 3) {
                        return "Name must be at least 3 characters";
                    }
                    return null;
                }}
            >
                <Label className="text-base">Name</Label>
                <Input
                    placeholder="Enter your full name"
                    className="text-field"
                />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                    if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label className="text-base">Email</Label>
                <Input placeholder="you@example.com" className="text-field" />
                <FieldError />
            </TextField>

            <TextField
                className="w-full"
                name="password"
                isRequired
                validate={(value) => {
                    if (value.length < 6) {
                        return "Password must be at least 6 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                        return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                        return "Password must contain at least one number";
                    }

                    if (!/[a-z]/.test(value)) {
                        return "Password must contain at least one lowercase letter";
                    }
                    return null;
                }}
            >
                <Label className="text-base">Password</Label>
                <InputGroup className="text-field">
                    <InputGroup.Input
                        type={isVisible ? "text" : "password"}
                        className="shadow-none border-0 text-base px-0  placeholder-muted-foreground"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputGroup.Suffix className="pr-0">
                        <Button
                            isIconOnly
                            aria-label={
                                isVisible ? "Hide password" : "Show password"
                            }
                            size="sm"
                            variant="ghost"
                            onPress={() => setIsVisible(!isVisible)}
                        >
                            {isVisible ? (
                                <IoEyeOutline className="size-4" />
                            ) : (
                                <IoIosEyeOff className="size-4" />
                            )}
                        </Button>
                    </InputGroup.Suffix>
                </InputGroup>
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="confirmPassword"
                type="password"
                validate={(value) => {
                    if (value !== password) {
                        return "Passwords do not match";
                    }

                    return null;
                }}
            >
                <Label>Confirm Password</Label>

                <Input
                    placeholder="Confirm your password"
                    className="text-field"
                />

                <FieldError />
            </TextField>

            <div>
                <Button
                    type="submit"
                    className="btn-accent rounded-none w-full"
                >
                    Register Account
                </Button>
            </div>
        </Form>
    );
};

export default SignupForm;
