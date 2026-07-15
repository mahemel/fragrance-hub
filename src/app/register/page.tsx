import LoginWithGoogle from "@/components/login/LoginWithGoogle";
import SignupForm from "@/components/login/SignUpForm";
import { getUserSession } from "@/lib/api/session";
import SectionHeader from "@/ui/SectionHeader";
import { Card } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
    title: "ESSENCIO | Register",
};
interface LoginPageProps {
    searchParams: Promise<{
        redirect?: string;
    }>;
}
const RegisterPage = async ({ searchParams }: LoginPageProps) => {
    const user = await getUserSession();
    if (user) {
        redirect(`/`);
    }
    const params = await searchParams;

    const redirectTo = params?.redirect
        ? `/login?redirect=${params?.redirect}`
        : `/login`;

    return (
        <div className="flex relative">
            <div className="w-md mx-auto flex justify-center flex-col">
                <div className="px-4 py-10 md:py-20">
                    <Card className="w-full max-w-xl mx-auto rounded-none shadow-none p-0 bg-transparent">
                        <SectionHeader
                            center
                            label="Join Us"
                            title="Create Account"
                            subtitle="Join thousands of fragrance lovers and build your personal collection."
                        ></SectionHeader>

                        <SignupForm />

                        <p className="text-center mt-3 flex gap-1 justify-center text-sm md:text-base">
                            Already have an account?
                            <Link
                                href={redirectTo}
                                className="text-coffee font-semibold"
                            >
                                Sign in
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

export default RegisterPage;
