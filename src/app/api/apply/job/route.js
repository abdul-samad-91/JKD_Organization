import { NextResponse } from "next/server";
import { connectDB } from "@/lib/dbConnect";
import Job from "@/models/jobModel";
import { uploadImageToCloudinary } from "@/lib/cloudinary";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await connectDB();
    const formData = await request.formData();
    const {
      fullName,
      email,
      contactNumber,
      location,
      currentJobTitle,
      totalExperience,
      expectedSalary,
      availability,
      preferredWorkType,
      linkedinProfile,
      portfolio,
      coverLetter,
    } = Object.fromEntries(formData);

    const resume = formData.get("resume");

    // Validation
    if (
      !fullName ||
      !email ||
      !contactNumber ||
      !location ||
      !currentJobTitle ||
      !totalExperience ||
      !expectedSalary ||
      !availability ||
      !preferredWorkType ||
      !resume
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Upload resume to Cloudinary
    let resumeUrl = null;
    if (resume && typeof resume !== "string") {
      const arrayBuffer = await resume.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = buffer.toString("base64");
      const dataUri = `data:${resume.type};base64,${base64}`;

      const result = await uploadImageToCloudinary(dataUri);
      resumeUrl = result.secure_url;
    }

    // Save to MongoDB
    const newApplication = new Job({
      fullName,
      email,
      contactNumber,
      location,
      currentJobTitle,
      totalExperience,
      expectedSalary,
      availability,
      preferredWorkType,
      linkedinProfile,
      portfolio,
      coverLetter,
      resumeUrl,
    });

    await newApplication.save();

    return NextResponse.json(
      { message: "Application submitted successfully", application: newApplication },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/apply/job error:", err);
    return NextResponse.json(
      { error: "Server error", detail: err.message },
      { status: 500 }
    );
  }
}


export async function GET(request) {
  try {
    await connectDB(); 
    const token = request.headers.get("x-user-token");
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!decoded.sub || !decoded.email) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    const applications = await Job.find();
    return NextResponse.json(applications, { status: 200 });
  } catch (err) {
    console.error("GET /api/apply/job error:", err);
    return NextResponse.json(
      {error: "Server error", detail: err.message},
      {status: 500}
    );
  }
  }