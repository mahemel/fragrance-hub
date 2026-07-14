import SectionHeader from "@/ui/SectionHeader";

export const metadata = {
    title: "ESSENCIO | Privacy Policy",
};
const PrivacyPage = () => {
    const privacyDetail = [
        {
            title: "Information We Collect",
            body: "We collect information you provide when creating an account (name, email, password), content you create (reviews, fragrance submissions, collection data), and usage data to improve our service. We do not sell your personal information to third parties under any circumstances.",
        },
        {
            title: "How We Use Your Data",
            body: "Your data powers your account, personalizes fragrance recommendations, displays community reviews, and improves the FragranceHub platform. We may send transactional emails related to your account and, with your consent, editorial newsletter content.",
        },
        {
            title: "Data Security",
            body: "We implement industry-standard security measures including encryption in transit and at rest, regular security audits, and strict access controls. Your password is stored as a one-way cryptographic hash and is never stored in plain text.",
        },
        {
            title: "Your Rights",
            body: "You have the right to access, correct, or delete your personal data at any time. You may request a copy of your data or withdraw consent for optional processing. Contact privacy@fragrancehub.com to exercise any of these rights.",
        },
        {
            title: "Cookies",
            body: "We use essential cookies for authentication and session management. Optional analytics cookies help us understand how users interact with FragranceHub. You can disable non-essential cookies in your browser settings at any time.",
        },
    ];
    return (
        <div>
            <section className="section-padding bg-coffee text-white">
                <SectionHeader
                    label="Legal"
                    title="Privacy Policy"
                    subtitle="Last updated: June 1, 2024"
                    center
                ></SectionHeader>
            </section>

            <section className="max-w-3xl mx-auto px-4 section-padding">
                <div className="space-y-9">
                    {privacyDetail.map((s) => (
                        <div key={s.title}>
                            <h2 className="text-xl font-bold text-foreground mb-3">
                                {s.title}
                            </h2>
                            <p className="leading-relaxed">{s.body}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;
