import Faqs from "@/components/faq/Faqs";
import SectionHeader from "@/ui/SectionHeader";

export const metadata = {
    title: "ESSENCIO | FAQs",
};
const FaqPage = () => {
    return (
        <div>
            <section className="section-padding bg-coffee text-white">
                <SectionHeader
                    label="Help Center"
                    title="Frequently Asked Questions"
                    center
                ></SectionHeader>
            </section>
            <div className="max-w-3xl mx-auto px-4 section-padding">
                <Faqs />
            </div>
        </div>
    );
};

export default FaqPage;
