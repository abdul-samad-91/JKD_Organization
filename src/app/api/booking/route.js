import { connectDB } from "@/lib/dbConnect";
import Booking from "@/models/bookModel";
import { uploadImageToCloudinary } from "@/lib/cloudinary";

export async function POST(req) {
  try {
    await connectDB();

    
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());
    const fileFields = ["idImage", "paymentScreenshot"];
console.log("FormData received:", data);

    let idImageUrl = null;
    let paymentScreenshotUrl = null;

    for (const field of fileFields) {
      const file = formData.get(field);
      if (file && typeof file === "object") {
        const buffer = Buffer.from(await file.arrayBuffer());
        const base64 = buffer.toString("base64");
        const filename = `data:${file.type};base64,${base64}`;
        const result = await uploadImageToCloudinary(filename);
        field === "idImage" ? idImageUrl = result.secure_url: paymentScreenshotUrl = result.secure_url;
      }
    }
    const { fullName, email, phoneNumber, province, district, tehsil, organization, prefferedDate, prefferedTime, emergencyContact, medical , signatureName, eventFee, paymentMethod}= data;
    console.log(fullName, email, phoneNumber, province, district, tehsil, organization, prefferedDate, prefferedTime, emergencyContact, medical , signatureName, eventFee, paymentMethod , idImageUrl , paymentScreenshotUrl)
    const booking = new Booking({
      fullName, email, phoneNumber, province, district, tehsil, organization, prefferedDate, prefferedTime, emergencyContact, medical , signatureName, eventFee, paymentMethod , idImageUrl , paymentScreenshotUrl
    });
    await booking.save();
    console.log(booking);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Booking created successfully",
        data: booking,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking creation error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Something went wrong while creating booking",
      }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const bookings = await Booking.find().sort({ createdAt: -1 });

    return new Response(
      JSON.stringify({ success: true, data: bookings }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetching bookings error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
