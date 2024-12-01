import {list} from "@vercel/blob"
import Image from "next/image";
import { DeleteButton } from "@/components/deleteButton"
import {Container, LeftBlockLinkCategory, ProductsGroupList} from "@/shared/components";
import {Suspense} from "react";

export default async function AllFilesPage() {
    const blops = await list();
    if(!blops){
        return <div>No found...</div>;
    }
    return (
        <div>
            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Suspense>
                            {/*<Filters />*/}
                            <LeftBlockLinkCategory/>
                        </Suspense>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {blops.blobs.map((blop, i) => (
                                <div key={blop.pathname + i}>
                                    <a href={blop.url} target="_blank">
                                        <Image
                                            src={blop.url}
                                            alt={blop.pathname}
                                            width={700}
                                            height={500}
                                        />
                                    </a>

                                    <DeleteButton url={blop.url}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}