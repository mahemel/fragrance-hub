export interface UserSession {
    id: string;
    name: string;
    email: string;
    image?: string | null;
    role: "user" | "admin";
}

export interface Session {
    session: {
        id: string;
        expiresAt: Date;
    };
    user: UserSession;
}
