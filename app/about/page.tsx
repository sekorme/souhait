import React from 'react'
import About from "@/components/About";
import {getCurrentUser} from "@/lib/actions/users.actions";
import {redirect} from "next/navigation";

export default async function AboutPage(){
    const currentUser = await getCurrentUser();
    if (currentUser) return redirect("/dashboard");
    return (
        <div>
            <About/>
        </div>
    )
}

