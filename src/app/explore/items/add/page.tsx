import AddItems from "@/components/explore/AddItems";
import SectionHeader from "@/ui/SectionHeader";

const AddItem = () => {
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
