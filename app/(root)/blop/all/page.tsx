import { list } from "@vercel/blob"
import Image from "next/image";

export default async function AllFilesPage() {
    const blops = await list();
    if(!blops){
        return <div>No found...</div>;
    }

    return (
        <div>
            <h1>Files</h1>
            <ul>
                {blops.blobs.map((blop) => (
                    <li key={blop.pathname}>
                        <a href={blop.url} target="_blank">
                            {blop.pathname}
                        </a>
                        <Image
                            src={blop.url}
                            alt={blop.pathname}
                            width={200}
                            height={200}
                        />
                    </li>

                ))}
            </ul>
        </div>
    )


}