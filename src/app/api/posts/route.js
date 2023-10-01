import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
    try {
        // Connect to the database
        await connect();

        // Query the database and await the results
        const posts = await Post.find().exec();

        // Return the results
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
        console.error("DB Error:", err);
        return new NextResponse("DB Error", { status: 500 });
    }
};