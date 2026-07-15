"use client";

import { Pagination } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface FragrancePaginationProps {
    total: number;
    perPage: number;
}

const FragrancePagination = ({ total, perPage }: FragrancePaginationProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const pageFromURL = Number(searchParams.get("page") ?? "1");
    const totalPages = Math.ceil(total / perPage);

    const [currentPage, setCurrentPage] = useState<number>(pageFromURL);

    useEffect(() => {
        setCurrentPage(pageFromURL);
    }, [pageFromURL]);

    const handlePageChange = (page: number) => {
        const sp = new URLSearchParams(searchParams.toString());

        if (page > 1) {
            sp.set("page", page.toString());
        } else {
            sp.delete("page");
        }

        router.push(`?${sp.toString()}`);
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            handlePageChange(page);
        }
    };

    const getVisiblePages = (): (number | "...")[] => {
        if (totalPages <= 4) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages: (number | "...")[] = [1];

        if (currentPage > 3) {
            pages.push("...");
        }

        for (
            let i = Math.max(2, currentPage - 1);
            i <= Math.min(totalPages - 1, currentPage + 1);
            i++
        ) {
            pages.push(i);
        }

        if (currentPage < totalPages - 2) {
            pages.push("...");
        }

        pages.push(totalPages);

        return pages;
    };

    return (
        <div className="flex justify-center mt-3">
            <Pagination>
                <Pagination.Summary className="text-coffee">
                    Showing {(currentPage - 1) * perPage + 1}–
                    {Math.min(currentPage * perPage, total)} of {total}
                </Pagination.Summary>

                <Pagination.Content>
                    <Pagination.Item>
                        <Pagination.Previous
                            onClick={() => goToPage(currentPage - 1)}
                        >
                            <Pagination.PreviousIcon />
                            <span>Prev</span>
                        </Pagination.Previous>
                    </Pagination.Item>

                    {getVisiblePages().map((page, index) =>
                        page === "..." ? (
                            <Pagination.Item key={`ellipsis-${index}`}>
                                <Pagination.Ellipsis />
                            </Pagination.Item>
                        ) : (
                            <Pagination.Item key={page}>
                                <Pagination.Link
                                    isActive={currentPage === page}
                                    onClick={() => goToPage(page)}
                                >
                                    {page}
                                </Pagination.Link>
                            </Pagination.Item>
                        ),
                    )}

                    <Pagination.Item>
                        <Pagination.Next
                            onClick={() => goToPage(currentPage + 1)}
                        >
                            <span>Next</span>
                            <Pagination.NextIcon />
                        </Pagination.Next>
                    </Pagination.Item>
                </Pagination.Content>
            </Pagination>
        </div>
    );
};

export default FragrancePagination;
