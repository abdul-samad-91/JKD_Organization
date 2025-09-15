import { NextResponse } from "next/server";
import { connectDB } from "@/lib/dbConnect";
import Apply from "@/models/applyModel";

export async function POST(request) {
  try {
    await connectDB();

    const form = await request.json();
    const {
      firstName,
      lastName,
      email,
      dateOfBirth,
      phoneNumber,
      address,
      CNIC,
      parentCNIC,
      age,
      gender,
      program,
      subProgram,
    } = form;

    const userId = request.headers.get("x-user-id");
    const userEmail = request.headers.get("x-user-email");
    const userRole = request.headers.get("x-user-role");

    if (
      !firstName ||
      !lastName ||
      !email ||
      !dateOfBirth ||
      !phoneNumber ||
      !address ||
      !CNIC ||
      !parentCNIC ||
      !age ||
      !gender ||
      !program ||
      !subProgram
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existing = await Apply.findOne({
      $or: [{ email }, { CNIC }],
    });
    if (existing) {
      return NextResponse.json(
        { error: "User with this email or CNIC already exists" },
        { status: 409 }
      );
    }

    const newApplication = new Apply({
      firstName,
      lastName,
      email,
      dateOfBirth,
      phoneNumber,
      address,
      CNIC,
      parentCNIC,
      age,
      gender,
      program,
      subProgram,
      createdBy: userId || null,
    });

    await newApplication.save();

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        application: newApplication,
        requestedBy: { userId, userEmail, userRole },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/apply error:", err);

    return NextResponse.json(
      { error: "Server error", detail: err.message },
      { status: 500 }
    );
  }
}
