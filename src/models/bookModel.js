// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    contactNumber: {
      type: String,
      trim: true,
    },
    emailAddress: {
      type: String,
      trim: true,
      maxlength: 255,
    },
    bookingDate: {
      type: Date,
    },
    timeSlot: {
      type: String, // e.g. "10:30 AM - 11:30 AM"
      trim: true,
    },
    selectService: {
      type: String,
      trim: true,
    },
    persons: {
      type: Number,
      min: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", bookingSchema);
