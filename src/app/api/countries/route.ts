import { NextResponse } from "next/server";
import { countries } from "@/app/api/data";

export async function GET() {
    return NextResponse.json(countries)
}