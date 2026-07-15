import { Fragrance } from "@/types/fragrance";
import { serverFetch } from "../core/server";
interface FilteredFragrancesResponse {
    fragrances: Fragrance[];
    total: number;
    currentPage: number;
    perPage: number;
    totalPages: number;
}

interface UsersFragrancesResponse {
    fragrances: Fragrance[];
    total: number;
}
export const getFragrances = async () => {
    return serverFetch<Fragrance[]>("/api/fragrances");
};

export const getFragranceDetail = async (id: string): Promise<Fragrance> => {
    return serverFetch<Fragrance>(`/api/fragrances?id=${id}`);
};

export const getFilteredFragrances = async (
    query: string,
): Promise<FilteredFragrancesResponse> => {
    return serverFetch<FilteredFragrancesResponse>(
        `/api/filter/fragrances?${query}`,
    );
};

export const getFragrancesByUser = async (
    query: string,
): Promise<UsersFragrancesResponse> => {
    return serverFetch<UsersFragrancesResponse>(
        `/api/users/fragrances/${query}`,
    );
};
