import { NextRequest, NextResponse } from "next/server";
import { memberUrl, postUrl } from "../urls";
import { authHeaders, postHeaders } from "../headers";

export async function GET() {
    const members = await fetch(memberUrl, {
        method: "GET",
        headers: authHeaders,
    });

    const membersJSON = await members.json();

    return NextResponse.json(membersJSON as Member);
}

export async function POST(req: NextRequest) {
    const response = await fetch(postUrl, {
        method: "POST",
        headers: postHeaders,
        body: JSON.stringify({
            type: "click",
            data: {
                place: "new place",
            },
        }),
    });

    const counters: Counters = await response.json();

    return NextResponse.json(counters as Counters);
}
