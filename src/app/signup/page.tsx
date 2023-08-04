"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";






export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {

    }


    return (

        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">

            <h1 className="text-white">SignUp</h1>
            <hr />
            <label htmlFor="username" className="text-white">username</label>
            <input
                className="p-3"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username"

            />

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
                onClick={onSignup}
                className="p-2 border white rounded-lg text-white mt-4">SignUp</button>

            <Link href="/login" className="text-white mt-4 text-xs" >Already signed up</Link>
        </div>
    )

}
