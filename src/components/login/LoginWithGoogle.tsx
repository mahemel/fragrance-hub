"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const LoginWithGoogle = () => {
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <Button
            className="w-full rounded-none bg-light-cream border h-11 border-black/35 hover:bg-light-gray"
            variant="tertiary"
            onClick={handleGoogleLogin}
        >
            <FcGoogle />
            Continue With Google
        </Button>
    );
};

export default LoginWithGoogle;
