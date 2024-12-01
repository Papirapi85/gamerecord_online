"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";

export function DeleteButton({url} : { url: string}) {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        setIsLoading(true);
        try {
            await fetch('/api/blop/del/' + encodeURIComponent(url), {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            setIsLoading(false);
            router.refresh();
        }catch (e) {
            console.error(e);
        }
    };

    return (
        <button
            onClick={handleClick}
            className="bg-red-500 rounded text-white p-2 w-full hover:bg-red-500 "
            disabled={isLoading}
            >
            {isLoading ? "Deleting" : "Delete"}
        </button>
    )
}