import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_NAME;

if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable.");
}

const client = new MongoClient(uri);

const db = client.db(dbName);

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client,
    }),

    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: ["user", "artist", "admin"],
                required: false,
                defaultValue: "user",
            },
        },
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
});
