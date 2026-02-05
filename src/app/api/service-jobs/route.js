import { NextResponse } from "next/server";
import { getJobByPI } from "../../../../lib/data/jobs";

export async function POST(req) {
    const jobPI = await req.json();

console.log('BBBBBBBBBBB', jobPI)

const {pi} = jobPI;

    const data = await getJobByPI(pi);

    console.log('DATA:>>>>>>>>>>>>>>>',data)

    if(!data) {return NextResponse.json({error: 'Not Found'}, {status: 404})
}
    return NextResponse.json(data, {status: 200});
};