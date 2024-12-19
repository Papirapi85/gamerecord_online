import {Button} from "@/shared/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu"
import {Logs} from "lucide-react";
import Link from "next/link";
import {useSession} from "next-auth/react";


export function DropmenuAdmin() {

    const {data: session} = useSession();
    console.log(session)
    console.log(session?.user.role)
    return (
        <div>
            {session && session?.user.role === 'ADMIN' &&
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Logs/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>ADMIN</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            <Link href="/admin/category">
                                <DropdownMenuItem>
                                    CATEGORY
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/admin/product">
                                <DropdownMenuItem>
                                    PRODUCT
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/admin/product-item">
                                <DropdownMenuItem>
                                    PRODUCT ITEM
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/admin/game-record">
                                <DropdownMenuItem>
                                    GAME RECORD
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator/>
                    </DropdownMenuContent>
                </DropdownMenu>
            }
        </div>
    )
}
