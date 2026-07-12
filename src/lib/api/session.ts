import { authClient } from "../auth-client";

export const getUserSession = async () => {
    const { data } = await authClient.getSession();

    return data?.user;
};
