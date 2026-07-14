"use server";

import { headers } from "next/headers";
import { auth } from "../auth";
import { redirect } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined.");
}

export const authHeader = async (): Promise<Record<string, string>> => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    return token
        ? {
              authorization: `Bearer ${token}`,
          }
        : {};
};

export const serverFetch = async <T>(path: string): Promise<T> => {
    const res = await fetch(`${baseUrl}${path}`, {
        cache: "no-store",
    });

    return res.json();
};

export const protectedFetch = async <T>(path: string): Promise<T> => {
    const res = await fetch(`${baseUrl}${path}`, {
        cache: "no-store",
        headers: await authHeader(),
    });

    return handleStatusCode<T>(res);
};

export const serverMutation = async <T>(
    path: string,
    data: unknown,
    method: "POST" | "PUT" | "PATCH" = "POST",
): Promise<T> => {
    const res = await fetch(`${baseUrl}${path}`, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...(await authHeader()),
        },
        body: JSON.stringify(data),
    });

    return handleStatusCode<T>(res);
};

export const serverDelete = async <T>(path: string): Promise<T> => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: "DELETE",
        headers: {
            ...(await authHeader()),
        },
    });

    return handleStatusCode<T>(res);
};

const handleStatusCode = async <T>(res: Response): Promise<T> => {
    if (res.status === 401) {
        redirect("/unauthorized");
    } else if (res.status === 403) {
        redirect("/forbidden");
    }

    // return res.json()
    return (await res.json()) as T;
};
