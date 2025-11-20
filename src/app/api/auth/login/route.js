import { NextResponse } from "next/server";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/dbConnect";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password  } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and Password are required" }, { status: 400 });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json({ error: "Invalid email" }, { status: 401 });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = jwt.sign(
      {
        sub: user._id.toString(),
        email: user.email,
        role: user.role || "user",
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    const res = NextResponse.json(
      {
        success: true,
        message: "Login Successful!",
        user: {
          id: user._id.toString(),
          name: user.userName ||  "",
          email: user.email,
        },
      },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );

    // ✅ Store JWT securely in cookie
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error", detail: err }, { status: 500 });
  }
}
