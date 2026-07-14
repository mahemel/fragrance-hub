import { Fragrance } from "@/types/fragrance";
import { serverFetch } from "../core/server";

export const getFragrances = async () => {
    return serverFetch<Fragrance[]>("/api/fragrances");
};

export const getFragranceDetail = async (id: string): Promise<Fragrance> => {
    return serverFetch<Fragrance>(`/api/fragrances?id=${id}`);
};
