import { NextResponse } from "next/server";
import data from "@/data.json";

export async function GET(request: Request, context: any) {
    const {params} = context;
    debugger;
    return NextResponse.json({
        data: data.filter((user) => user.id.toString() === params.userId)
    });
}