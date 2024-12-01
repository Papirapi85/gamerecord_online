import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import {createBlogAction} from "@/app/actions";
import toast from "react-hot-toast";

export async function POST(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    // @ts-ignore
    const blob = await put(filename, request.body, {
        access: 'public',
    });

    // console.log(blob.url)

    return NextResponse.json(blob);
}