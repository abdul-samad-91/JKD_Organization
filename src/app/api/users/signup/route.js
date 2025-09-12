import User from "@/models/userModel";
import { NextResponse } from "next/server";
// import { sendEmail } from "@/helpers/mailer";
import bcryptjs from 'bcryptjs'
import { connectDB } from "@/lib/dbConnect";


export async function POST(request) {
    try {
        await connectDB();
        const reqBody = await request.json();
        const { userName , email , password , confirmPassword  , role} = reqBody;
        // Validation
        console.log(reqBody);
        let defaultRole = "student";

        if(!userName || !email || !password || !confirmPassword){
          return NextResponse.json({message:"All fields are required"},{status:400})
        }

        if(password !== confirmPassword){
          return NextResponse.json({message:"Passwords did not match"},{status:400})
        }

        const existingUser = await User.findOne({ email });
        
        if(!User){
            return NextResponse.json({message:"User already exists"},{status:400})
        }

        if(role != undefined){
          defaultRole = role
        }
        
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password , salt);
        
        const newUser= new User({
            userName,
            email,
            password: hashedPassword,
            role : defaultRole
        })

        const savedUser = await newUser.save();

        // await sendEmail({email , emailType:"VERIFY" , userId: savedUser._id})

        return NextResponse.json({message : "User regester successfully" , success: true , savedUser},{status:201})

    } catch (error) {
        return NextResponse.json({message : error.message || "Something went wrong"},{status:500})
    }
}