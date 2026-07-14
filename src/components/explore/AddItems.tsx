"use client";

import { addFragrance } from "@/lib/actions/addFragrance";
import { authClient } from "@/lib/auth-client";
import CustomSelect from "@/ui/CustomSelect";
import {
    Button,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
    TextArea,
} from "@heroui/react";
import React from "react";

const AddItems = () => {
    const concentrationOptions = ["EDP", "EDT", "EDC", "Parfum"];
    const familyOptions = [
        "Floral",
        "Citrus",
        "Woody",
        "Gourmand",
        "Fresh",
        "Oriental",
        "Fruity",
        "Aromatic",
    ];
    const genderOptions = ["Unisex", "Masculine", "Feminine"];
    const seasonsOptions = ["Summer", "Winter", "Spring", "Autumn"];
    const occasionsOptions = [
        "Daily Wear",
        "Office",
        "Business Meeting",
        "Casual Outing",
        "Romantic Evening",
        "Dinner",
        "Party",
        "Night Out",
        "Clubbing",
        "Wedding",
        "Travel",
        "Gym",
    ];
    const topNotesOptions = [
        "Lemon",
        "Grapefruit",
        "Mandarin Orange",
        "Pink Pepper",
        "Cardamom",
        "Ginger",
        "Mint",
        "Apple",
    ];
    const heartNotesOptions = [
        "Rose",
        "Jasmine",
        "Lavender",
        "Orange Blossom",
        "Violet",
        "Ylang-Ylang",
        "Tuberose",
        "Patchouli",
    ];
    const baseNotesOptions = [
        "Amber",
        "Musk",
        "Sandalwood",
        "Oud",
        "Tonka Bean",
        "Oakmoss",
        "Leather",
    ];

    const { data: session } = authClient.useSession();
    const userId = session?.user?.id;

    const handleAddFragrance = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name") as string;
        const brand = formData.get("brand") as string;
        const releaseYear = Number(formData.get("releaseYear"));
        const concentration = formData.get("concentration") as string;

        const family = formData.get("family") as string;

        const gender = formData.get("gender") as string;

        const description = formData.get("description") as string;

        const topNotes = formData.getAll("top_notes") as string[];

        const heartNotes = formData.getAll("heart_notes") as string[];

        const baseNotes = formData.getAll("base_notes") as string[];

        const seasons = formData.getAll("seasons") as string[];
        const occasions = formData.getAll("occasions") as string[];

        const price = Number(formData.get("price"));
        const image = formData.get("image") as string;

        const fragranceData = {
            name,
            brand,
            releaseYear,
            concentration,
            family,
            gender,
            description,
            topNotes,
            heartNotes,
            baseNotes,
            seasons,
            occasions,
            image,
            price,
            userId,
        };

        const result = await addFragrance(fragranceData);

        console.log(result);
    };

    return (
        <Form
            className="w-full max-w-2xl mx-auto"
            onSubmit={handleAddFragrance}
        >
            <Fieldset className="mb-5">
                <Fieldset.Legend className="font-title font-bold text-2xl mb-5">
                    Basic Information
                </Fieldset.Legend>
                <FieldGroup>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Perfume Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Perfume Name</Label>
                            <Input
                                placeholder="e.g. Bleu de Chanel"
                                className="text-field"
                            />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="brand">
                            <Label>Brand</Label>
                            <Input
                                placeholder="e.g. Chanel"
                                className="text-field"
                            />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="releaseYear">
                            <Label>Release Year</Label>
                            <Input
                                placeholder="e.g. 2026"
                                className="text-field"
                                type="number"
                            />
                            <FieldError />
                        </TextField>

                        <CustomSelect
                            name="concentration"
                            label="Concentration"
                            items={concentrationOptions}
                            isRequired
                            placeholder="Select Concentration"
                            selectionMode="single"
                        />
                        <CustomSelect
                            name="family"
                            label="Fragrance Family"
                            items={familyOptions}
                            isRequired
                            placeholder="Select Families"
                            selectionMode="single"
                        />
                        <CustomSelect
                            name="gender"
                            label="Gender"
                            items={genderOptions}
                            isRequired
                            placeholder="Select Gender"
                            selectionMode="single"
                        />
                    </div>
                </FieldGroup>
            </Fieldset>

            <Fieldset className="mb-5">
                <Fieldset.Legend className="font-title font-bold text-2xl mb-5">
                    Description
                </Fieldset.Legend>
                <FieldGroup>
                    <TextField isRequired name="description">
                        <Label>Full Description</Label>
                        <TextArea
                            rows={4}
                            placeholder="Tell the full story of this fragrance"
                            className="w-full px-4  border border-black/12 bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground/35 text-base shadow-none rounded-none"
                        />
                        <FieldError />
                    </TextField>
                </FieldGroup>
            </Fieldset>

            <Fieldset className="mb-5">
                <Fieldset.Legend className="font-title font-bold text-2xl mb-5">
                    Fragrance Notes
                </Fieldset.Legend>
                <FieldGroup>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CustomSelect
                            name="top_notes"
                            label="Top Notes"
                            items={topNotesOptions}
                            isRequired
                            placeholder="Select Top Notes"
                            selectionMode="multiple"
                        />
                        <CustomSelect
                            name="heart_notes"
                            label="Heart Notes"
                            items={heartNotesOptions}
                            isRequired
                            placeholder="Select Heart Notes"
                            selectionMode="multiple"
                        />

                        <CustomSelect
                            name="base_notes"
                            label="Base Notes"
                            items={baseNotesOptions}
                            isRequired
                            placeholder="Select Base Notes"
                            selectionMode="multiple"
                        />
                    </div>
                </FieldGroup>
            </Fieldset>

            <Fieldset className="mb-5">
                <Fieldset.Legend className="font-title font-bold text-2xl mb-5">
                    Usage & Media
                </Fieldset.Legend>
                <FieldGroup>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CustomSelect
                            name="seasons"
                            label="Seasons"
                            items={seasonsOptions}
                            isRequired
                            placeholder="Select Seasons"
                            selectionMode="multiple"
                        />

                        <CustomSelect
                            name="occasions"
                            label="Occasions"
                            items={occasionsOptions}
                            isRequired
                            placeholder="Select Occasions"
                            selectionMode="multiple"
                        />

                        <TextField
                            className="col-span-1"
                            name="price"
                            isRequired
                            type="number"
                        >
                            <Label>Price</Label>
                            <Input
                                placeholder="Approximate Price"
                                className="text-field"
                            />
                            <FieldError />
                        </TextField>
                        <TextField
                            className="col-span-2"
                            name="image"
                            isRequired
                            type="url"
                        >
                            <Label>Image URL</Label>
                            <Input
                                placeholder="e.g. https://example.com/image.jpg"
                                className="text-field"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                </FieldGroup>
            </Fieldset>

            <div className="flex justify-end gap-4">
                <Button
                    type="reset"
                    className="bg-black h-10 font-bold uppercase tracking-wider rounded-none"
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    className="bg-accent h-10 font-bold uppercase tracking-wider rounded-none"
                >
                    Add Fragrance
                </Button>
            </div>
        </Form>
    );
};

export default AddItems;
