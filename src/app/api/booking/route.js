import dbConnect from "@/lib/dbConnect";
import Booking from "@/models/Booking";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    // Create new booking
    const booking = await Booking.create(body);

    return new Response(
      JSON.stringify({ success: true, data: booking }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking creation error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
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
