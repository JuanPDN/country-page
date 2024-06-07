import { NextResponse } from "next/server";
import { countries } from "@/app/api/data";

export async function GET(req:Request, { params }: { params: { id: string } }) {
    const code = params.id    
    const country = countries.filter((country) => 
         { return country.cca3.toLocaleUpperCase() === code.toLocaleUpperCase()}
    )

    return NextResponse.json(country)
}