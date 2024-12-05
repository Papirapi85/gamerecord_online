import { Button } from "@/shared/components/ui/button"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/components/ui/sheet"
import {ArrowBigRightDash} from "lucide-react";
import React from "react";

export function SheetDriverLeft() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <ArrowBigRightDash />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                            111
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                    {/*    <Label htmlFor="name" className="text-right">*/}
                    {/*        Name*/}
                    {/*    </Label>*/}
                    {/*    <Input id="name" value="Pedro Duarte" className="col-span-3" />*/}
                    {/*</div>*/}
                    {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                    {/*    <Label htmlFor="username" className="text-right">*/}
                    {/*        Username*/}
                    {/*    </Label>*/}
                    {/*    <Input id="username" value="@peduarte" className="col-span-3" />*/}
                    {/*</div>*/}
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}