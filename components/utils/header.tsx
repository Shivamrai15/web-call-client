"use client";

import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="w-full flex items-center justify-between px-6 md:px-28 py-6" >
            <span>WebCall</span>
            <div className="flex items-center gap-x-6">
                <Button size="sm" variant="secondary" >Sign in</Button>
                <Button size="sm" >Try WebCall</Button>
            </div>
        </header>
    )
}
