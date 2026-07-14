import { serverMutation } from "../core/server";

export const addFragrance = async (data: unknown) => {
    return serverMutation("/api/add/fragrance", data, "POST");
};
