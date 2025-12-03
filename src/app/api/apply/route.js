import { NextResponse } from "next/server";
import { connectDB } from "@/lib/dbConnect";
import Apply from "@/models/applyModel";
import { uploadImageToCloudinary } from "@/lib/cloudinary";
import jwt from 'jsonwebtoken'
export async function POST(request) {
  try {
    await connectDB();
    // const form = await request.json();
      const formData = await request.formData();
      const {
      name,
      fatherName,
      gender,
      email,
      dateOfBirth,
      whatsappNumber,
      phoneNumber,
      CNIC,
      parentsCNIC,
      province,
      district,
      tehsil,
      chooseCourse,
      passport,
      CNICPicture,
      qualification,
      passportSizePic,
      } = Object.fromEntries(formData);
      // const name = formData.get("name");  
      // const fatherName = formData.get("fatherName");
      // const gender = formData.get("gender");
      // const email = formData.get("email");
      // const dateOfBirth = formData.get("dateOfBirth");
      // const whatsappNumber = formData.get("whatsappNumber");
      // const phoneNumber = formData.get("phoneNumber");
      // const CNIC = formData.get("CNIC");
      // const parentsCNIC = formData.get("parentsCNIC");
      // const province = formData.get("province"); 
      // const district = formData.get("district");
      // const tehsil = formData.get("tehsil");
      // const chooseCourse = formData.get("chooseCourse");
      // const passport = formData.get("passport");
      // const CNICPicture = formData.get("CNICPicture");
      // const qualification = formData.get("qualification");
      // const passportSizePic = formData.get("passportSizePic");


    // console.log( name , gender , email , dateOfBirth , whatsappNumber , phoneNumber , CNIC , parentsCNIC , province , district , tehsil , chooseCourse ,CNICPicture , qualification , passportSizePic);

    // const userId = request.headers.get("x-user-id");
    // const userEmail = request.headers.get("x-user-email");
    // const userRole = request.headers.get("x-user-role");

    if (
      !name ||
      !fatherName ||
      !email ||
      !dateOfBirth ||
      !gender ||
      !whatsappNumber ||
      !phoneNumber ||
      !CNIC ||
      !parentsCNIC || 
      !province ||
      !district ||
      !tehsil ||
      !chooseCourse ||
      !CNICPicture ||
      !qualification ||
      !passportSizePic 
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

let CNICPictureUrl = null;
let passportSizePicUrl = null;
let qualificationUrl=null;
let passportUrl=null;


// ✅ Upload CNIC Picture
if (CNICPicture && typeof CNICPicture !== "string") {
  const arrayBuffer = await CNICPicture.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUri = `data:${CNICPicture.type};base64,${base64}`;

  const result = await uploadImageToCloudinary(dataUri);
  CNICPictureUrl = result.secure_url;
}

// ✅ Upload Passport Size Pic
if (passportSizePic && typeof passportSizePic !== "string") {
  const arrayBuffer = await passportSizePic.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUri = `data:${passportSizePic.type};base64,${base64}`;

  const result = await uploadImageToCloudinary(dataUri);
  passportSizePicUrl = result.secure_url;
}

if (qualification && typeof qualification !== "string") {
  const arrayBuffer = await qualification.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUri = `data:${qualification.type};base64,${base64}`;

  const result = await uploadImageToCloudinary(dataUri);
  qualificationUrl = result.secure_url;
}

if (passport && typeof passport !== "string") {
  const arrayBuffer = await passport.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUri = `data:${passport.type};base64,${base64}`;

  const result = await uploadImageToCloudinary(dataUri);
  passportUrl = result.secure_url;
}
console.log(CNICPictureUrl , qualificationUrl , passportSizePicUrl , passportUrl );


    // const existing = await Apply.findOne({
    //   $or: [{ email }, { CNIC }],
    // });
    // if (existing) {
    //   return NextResponse.json(
    //     { error: "User with this email or CNIC already exists" },
    //     { status: 409 }
    //   );
    // }
    console.log(email)

    const newApplication = new Apply({
      name,
      fatherName,
      email,
      dateOfBirth,
      gender,
      whatsappNumber,
      phoneNumber,
      CNIC,
      parentsCNIC, 
      province,
      district,
      tehsil,
      chooseCourse,
      CNICPictureUrl,
      qualificationUrl,
      passportSizePicUrl,
      passportUrl
    });

    await newApplication.save();

    return NextResponse.json(
      {
        message: "Application submitted successfully",
        application: newApplication,
        // requestedBy: { userId, userEmail, userRole },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/apply error:", err);
    // if (err.code === 11000) {
    //   return NextResponse.json(
    //     { error: "This email is already registered. Please use a different email." },
    //     { status: 409 }
    //   );
    // }

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
    // console.log(decoded);
    if (!decoded.sub || !decoded.email) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    const applications = await Apply.find().populate('userId');
    return NextResponse.json(applications, { status: 200 });
  } catch (err) {
    console.error("GET /api/apply error:", err);
    return NextResponse.json(
      {error: "Server error", detail: err.message},
      {status: 500}
    );
  }
  }