import { serverDelete } from "../core/server";
interface DeleteFragranceResponse {
    deletedCount: number;
}

export const serverDeleteFragrance = async (
    fragranceId: string,
): Promise<DeleteFragranceResponse> => {
    return serverDelete<DeleteFragranceResponse>(
        `/api/fragrances/${fragranceId}`,
    );
};
