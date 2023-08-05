import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";





connect()
export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody
        console.log(reqBody);
        //user check
        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "user already exists" }, { status: 400 })


        }

        //password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        //create user
        const newUser = new User({
            username,
            email,
            password: hashedPassword

        })
        const savedUser = await newUser.save()
        console
        return NextResponse.json({
            message: "user created successfully",
            success: true,
            savedUser

        })
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }

}