import { del } from '@vercel/blob';

export async function DELETE(request: Request) {
    console.log("22222222211111 ");
    const { searchParams } = new URL(request.url);
    console.log("22222222222222 " + searchParams);
    const urlToDelete = searchParams.get('url') as string;
    await del(urlToDelete);

    return new Response();
}