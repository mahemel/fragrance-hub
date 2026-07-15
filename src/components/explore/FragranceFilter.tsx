"use client";

import { Input, Label, ListBox, Select, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Key, useEffect, useState } from "react";

interface FragranceFilterProps {
    filters: Record<string, string | string[] | undefined>;
}

export default function FragranceFilters({ filters }: FragranceFilterProps) {
    const router = useRouter();

    const getParam = (val: string | string[] | undefined) =>
        (Array.isArray(val) ? val[0] : val) || "";

    const [searchQuery, setSearchQuery] = useState(getParam(filters.search));
    const [selectedGender, setSelectedGender] = useState(
        getParam(filters.gender) || "all",
    );
    const [selectedSortBy, setSelectedSortBy] = useState(
        getParam(filters.sortBy) || "all",
    );

    useEffect(() => {
        const timeout = setTimeout(() => {
            const sp = new URLSearchParams();

            if (searchQuery) {
                sp.set("search", searchQuery);
            }

            if (selectedGender !== "all") {
                sp.set("gender", selectedGender);
            }

            if (selectedSortBy !== "all") {
                sp.set("sortBy", selectedSortBy);
            }

            sp.delete("page");
            router.push(`?${sp.toString()}`);
        }, 500);

        return () => clearTimeout(timeout);
    }, [searchQuery, selectedGender, selectedSortBy, router]);

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedGender("all");
        setSelectedSortBy("all");
        router.push("/explore");
    };

    return (
        <div className="p-3 md:p-5 bg-white mb-5 ">
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-2 xl:gap-4 items-end">
                <TextField
                    className="w-full"
                    type="text"
                    defaultValue={searchQuery}
                >
                    <Label>Search</Label>
                    <Input
                        placeholder="Search..."
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="text-field"
                    />
                </TextField>

                <Select
                    placeholder="Select a Category"
                    defaultValue={selectedGender}
                    onChange={(value: Key | null) =>
                        setSelectedGender((value as string) ?? "")
                    }
                >
                    <Label>Gender</Label>
                    <Select.Trigger className="text-field">
                        <Select.Value className="text-base leading-10 text-foreground overflow-hidden block whitespace-nowrap text-ellipsis pr-2.5">
                            {selectedGender === "all"
                                ? "All Gender"
                                : selectedGender.replace("-", " ")}
                        </Select.Value>
                        <Select.Indicator className="text-muted-foreground" />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="all" textValue="All Gender">
                                All Gender
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Unisex" textValue="Unisex">
                                Unisex
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Masculine" textValue="Masculine">
                                Masculine
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Feminine" textValue="Feminine">
                                Feminine
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <Select
                    placeholder="Sort By"
                    defaultValue={selectedSortBy}
                    onChange={(value: Key | null) =>
                        setSelectedSortBy((value as string) ?? "")
                    }
                >
                    <Label>Sort By</Label>
                    <Select.Trigger className="text-field">
                        <Select.Value className="text-base leading-10 text-foreground overflow-hidden block whitespace-nowrap text-ellipsis pr-2.5">
                            {selectedSortBy === "all"
                                ? "Sort By"
                                : selectedSortBy.replace("-", " ")}
                        </Select.Value>
                        <Select.Indicator className="text-muted-foreground" />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="all" textValue="Sort By">
                                Sort By
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="latest" textValue="Latest">
                                Latest
                                <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="oldest" textValue="Oldest">
                                Oldest
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item
                                id="price-low-high"
                                textValue="Price: Low → High"
                            >
                                Price: Low → High
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item
                                id="price-high-low"
                                textValue="Price: High → Low"
                            >
                                Price: High → Low
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <button
                    onClick={clearFilters}
                    className="btn-accent justify-center cursor-pointer"
                >
                    Clear
                </button>
            </div>
        </div>
    );
}
