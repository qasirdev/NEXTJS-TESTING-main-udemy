import { NextResponse } from "next/server"
import { v4 as uuidv4 } from 'uuid';

const posts:any= [
    {
			id: 12,
			title: "Hello",
			description: "Amazing post"
    }
];
export async function GET(requst:Request, context:any) {
    const { params } = context
    return NextResponse.json({
        post: posts.find((post:any) => post.id.toString() === params.id)
    });
}
export async function POST(requst:Request) {
    const requestBody = await requst.json();
		if (!requestBody.title || !requestBody.description) {
			return NextResponse.error();
		}
    posts.push({
			id: uuidv4(),
			title: requestBody.title,
			description: requestBody.description
    });
    return NextResponse.json({
			posts
    });
}