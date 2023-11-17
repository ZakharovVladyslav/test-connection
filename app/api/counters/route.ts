import { NextResponse } from "next/server";
import { authHeaders } from "../headers";
import { countersUrl } from "../urls";

export async function GET() {
    const response = await fetch(countersUrl, {
        method: "GET",
        headers: authHeaders,
    });

    const counters = await response.json();

    console.log(counters);

    return NextResponse.json(counters as Counter[]);
}
