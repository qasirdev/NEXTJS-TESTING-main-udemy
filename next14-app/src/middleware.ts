import { NextResponse } from "next/server";
import type { NextRequest } from "next/server"
const isLoggedin: boolean = false;

export function middleware(requst: NextRequest) {
    const cookies = requst.cookies.get('my-cookies');
    const headers = new Headers(requst.headers);
    if (isLoggedin) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", requst.url));
    // return NextResponse.json({
    //     hello: "response from middleware"
    // });

}
export const config = {
    matcher: ["/profile"]
}