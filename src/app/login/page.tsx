import LoginForm from "@/components/login/LoginForm";
import LoginWithGoogle from "@/components/login/LoginWithGoogle";
import { getUserSession } from "@/lib/api/session";
import SectionHeader from "@/ui/SectionHeader";
import { Card, Spinner } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata = {
    title: "ESSENCIO | Login",
};
interface LoginPageProps {
    searchParams: Promise<{
        redirect?: string;
    }>;
}
const LoginPage = async ({ searchParams }: LoginPageProps) => {
    const user = await getUserSession();
    if (user) {
        redirect(`/`);
    }
    const params = await searchParams;
    const redirectTo = params?.redirect
        ? `/register?redirect=${params?.redirect}`
        : `/register`;

    return (
        <div className="flex relative">
            <div className="w-md mx-auto flex justify-center flex-col">
                <div className="px-4 py-10 md:py-20">
                    <Card className="w-full max-w-xl mx-auto rounded-none shadow-none p-0 bg-transparent">
                        <SectionHeader
                            center
                            label="Welcome Back"
                            title="Sign In"
                            subtitle="Continue discovering amazing fragrances."
                        ></SectionHeader>

                        <Suspense
                            fallback={
                                <div className="flex justify-center">
                                    <Spinner></Spinner>
                                </div>
                            }
                        >
                            <LoginForm></LoginForm>
                        </Suspense>

                        <p className="text-center mt-2 flex gap-1 justify-center text-sm md:text-base">
                            Don&apos;t have an account?
                            <Link
                                href={redirectTo}
                                className="text-coffee font-semibold"
                            >
                                Register
                            </Link>
                        </p>

                        <div className="flex items-center gap-4 my-1">
                            <div className="flex-1 h-px bg-coffee"></div>
                            <span className="text-[12px] text-coffee uppercase font-bold">
                                Or
                            </span>
                            <div className="flex-1 h-px bg-coffee"></div>
                        </div>

                        <LoginWithGoogle />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
