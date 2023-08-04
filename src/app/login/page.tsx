"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";






export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",

    })

    const onLogin = async () => {

    }


    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">

            <h1 className="text-white">Login</h1>
            <hr />


            <label htmlFor="email" className="text-white">email</label>
            <input
                className="p-3"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"

            />

            <label htmlFor="password" className="text-white">password</label>
            <input
                className="p-3"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"

            />
            <button
                onClick={onLogin}
                className="p-2 border white rounded-lg text-white mt-4">Log In</button>

            <Link href="/signup" className="text-white mt-4 text-xs" >Not signed up?</Link>
        </div>
    )

}
