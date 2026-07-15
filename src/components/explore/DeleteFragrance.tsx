"use client";
import { serverDeleteFragrance } from "@/lib/actions/deleteFragrance";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { LiaTrashAlt } from "react-icons/lia";
import { toast } from "react-toastify";

interface FragranceId {
    id: string;
}

const DeleteFragrance = ({ id }: FragranceId) => {
    const router = useRouter();
    const handleArtworkDelete = async (fragranceId: string) => {
        const result = await serverDeleteFragrance(fragranceId);

        if (result.deletedCount === 1) {
            toast.success(`Fragrance deleted successfully!`);
            router.push("/explore/items/manage");
        }
    };
    return (
        <AlertDialog>
            <Button className="text-red-500 bg-transparent py-0 px-2 border border-red-500 h-6 text-[10px] uppercase font-bold tracking-wider">
                <LiaTrashAlt /> Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger className="text-black" />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete this Fragrance permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-black">
                                This will permanently delete this Fragrance and
                                all of its data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                onClick={() => handleArtworkDelete(id)}
                                slot="close"
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteFragrance;
