import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable.");
}
const client = new MongoClient(uri);

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");

    if (!email) {
        return NextResponse.json(
            { error: "Email is required" },
            { status: 400 },
        );
    }

    try {
        await client.connect();
        const dbName = process.env.MONGODB_NAME;

        if (!dbName) {
            throw new Error(
                "Please define the MONGODB_NAME environment variable.",
            );
        }
        const db = client.db(dbName);

        const userCollection = process.env.MONGO_USER_COLLECTION;

        if (!userCollection) {
            throw new Error(
                "Please define the MONGO_USER_COLLECTION environment variable.",
            );
        }
        const user = await db.collection(userCollection).findOne({ email });

        return NextResponse.json({ exists: !!user });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
