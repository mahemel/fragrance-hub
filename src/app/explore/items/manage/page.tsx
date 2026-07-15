import DeleteFragrance from "@/components/explore/DeleteFragrance";
import { getFragrancesByUser } from "@/lib/actions/getFragrances";
import { getUserSession } from "@/lib/api/session";
import SectionHeader from "@/ui/SectionHeader";
import { Button, Table } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaEye, FaPlus } from "react-icons/fa6";

export const metadata = {
    title: "ESSENCIO | Manage Fragrance",
};
const ManageItems = async () => {
    const user = await getUserSession();
    if (!user) {
        redirect("/login");
    }

    const { fragrances = [], total = 0 } = await getFragrancesByUser(user?.id);

    return (
        <div>
            <div className="section-padding max-w-7xl mx-auto px-4 ">
                <SectionHeader
                    label="My Contributions"
                    title="Manage Fragrances"
                    center
                ></SectionHeader>

                {total === 0 ? (
                    <p className="text-base text-coffe text-center pb-5">
                        You have not added any artwork yet!
                    </p>
                ) : (
                    <>
                        <p className="mb-2">
                            You have added <strong>{total}</strong> Fragrances
                            so far.
                        </p>
                        <Table className="mb-4">
                            <Table.ScrollContainer>
                                <Table.Content className="w-full">
                                    <Table.Header>
                                        <Table.Column isRowHeader>
                                            Name
                                        </Table.Column>
                                        <Table.Column>Brand</Table.Column>
                                        <Table.Column>Price</Table.Column>
                                        <Table.Column>Actions</Table.Column>
                                    </Table.Header>
                                    <Table.Body>
                                        {fragrances.map((frag) => (
                                            <Table.Row key={frag._id}>
                                                <Table.Cell>
                                                    <div className="flex gap-3 items-center">
                                                        <p className="text-sm">
                                                            {frag.name}
                                                        </p>
                                                    </div>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {frag.brand}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    ${frag.price}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <div className="flex gap-3">
                                                        <Link
                                                            href={`/explore/${frag._id}`}
                                                        >
                                                            <Button className="text-black bg-transparent py-0 px-2 border border-black h-6 text-[10px] uppercase font-bold tracking-wider">
                                                                <FaEye className="w-3" />
                                                                View
                                                            </Button>
                                                        </Link>

                                                        <DeleteFragrance
                                                            id={frag._id}
                                                        />
                                                    </div>
                                                </Table.Cell>
                                            </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table.Content>
                            </Table.ScrollContainer>
                        </Table>
                    </>
                )}

                <div className="flex justify-center">
                    <Link
                        href="/explore/items/add"
                        className="btn-accent flex items-center gap-2"
                    >
                        <FaPlus /> Add New
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
