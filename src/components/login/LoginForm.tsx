"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    TextField,
} from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const LoginForm = () => {
    const router = useRouter();

    const [isVisible, setIsVisible] = useState(false);

    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/";

    const handleDemoLogin = async () => {
        const email = "demo@user.com";
        const password = "Aa123456";

        const { error } = await authClient.signIn.email({
            email,
            password,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        router.push("/");
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        if (error?.message) {
            toast.error(error.message);
            return;
        }
        const userRole = (
            data?.user as {
                role?: "user" | "admin";
            }
        )?.role;

        if (userRole === "admin") {
            router.push("/dashboard/admin");
        } else {
            router.push(redirectTo);
        }
    };
    return (
        <Form className="flex flex-col gap-4 -mt-5" onSubmit={onSubmit}>
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
                <Label className="text-base">Email Address</Label>
                <Input placeholder="you@example.com" className="text-field" />
                <FieldError />
            </TextField>

            <TextField
                className="w-full"
                name="password"
                isRequired
                validate={(value) => {
                    if (!value || value.length === 0) {
                        return "Please enter your password";
                    }
                }}
            >
                <Label className="text-base">Password</Label>
                <InputGroup className="text-field">
                    <InputGroup.Input
                        className="shadow-none border-0 text-base px-0  placeholder-muted-foreground"
                        type={isVisible ? "text" : "password"}
                        placeholder="Enter your password"
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

            <div className="text-center">
                <Button
                    type="submit"
                    className="btn-accent rounded-none w-full"
                >
                    Sign In
                </Button>
                <div className="flex items-center gap-4 my-3">
                    <div className="flex-1 h-px bg-primary-gold"></div>
                    <span className="text-[12px] text-dark-gold uppercase font-bold">
                        Or
                    </span>
                    <div className="flex-1 h-px bg-primary-gold"></div>
                </div>
                <button
                    onClick={handleDemoLogin}
                    type="button"
                    className="w-full h-10 text-sm bg-black text-white hover:bg-coffee transition-colors cursor-pointer"
                >
                    Demo Login — No password needed
                </button>
            </div>
        </Form>
    );
};

export default LoginForm;
