import { list } from '@vercel/blob';
import Image from "next/image";

export default async function Page() {
    async function allImages() {
        const blobs = await list();
        return blobs;
    }
    const images = await allImages();

    return (
        <section>
            {images.blobs.map((image) => (
                <Image
                    key={image.pathname}
                    src={image.url}
                    alt="Image"
                    width={200}
                    height={200}
                />
            ))}
        </section>
    );
}