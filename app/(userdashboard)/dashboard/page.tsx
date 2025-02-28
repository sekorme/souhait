'use client'
import React from 'react'

import {signOutUser} from "@/lib/actions/users.actions";

const Dashboard = () => {

    const handleSignOut = async () => {
        await signOutUser();
        window.location.reload()
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleSignOut}>SignOut</button>
        </div>
    )
}
export default Dashboard
