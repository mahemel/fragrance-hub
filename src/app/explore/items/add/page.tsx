import AddItems from "@/components/explore/AddItems";
import { getUserSession } from "@/lib/api/session";
import SectionHeader from "@/ui/SectionHeader";
import { redirect } from "next/navigation";

export const metadata = {
    title: "ESSENCIO | Add Fragrance",
};
const AddItem = async () => {
    const user = await getUserSession();
    if (!user) {
        redirect("/login");
    }
    return (
        <div>
            <section className="section-padding bg-coffee text-white">
                <SectionHeader
                    label="Add"
                    title="Add new Fragrance"
                    center
                ></SectionHeader>
            </section>
            <div className="max-w-3xl mx-auto px-4 section-padding">
                <AddItems />
            </div>
        </div>
    );
};

export default AddItem;
