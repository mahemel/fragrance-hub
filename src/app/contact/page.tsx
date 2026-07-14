import ContactForm from "@/components/contact/ContactForm";
import SectionHeader from "@/ui/SectionHeader";

export const metadata = {
    title: "ESSENCIO | Contact",
};
const ContactPage = () => {
    return (
        <div>
            <section className="section-padding bg-coffee text-white">
                <SectionHeader
                    label="Contact"
                    title="Get in Touch"
                    subtitle="Questions, suggestions, or partnership ideas — we would love to hear from you."
                    center
                ></SectionHeader>
            </section>
            <div className="max-w-3xl mx-auto px-4 section-padding">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;
