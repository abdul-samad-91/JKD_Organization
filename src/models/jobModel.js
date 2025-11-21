import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    // Basic Information
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },

    // Professional Details
    currentJobTitle: {
        type: String,
        required: true,
    },
    totalExperience: {
        type: Number,
        required: true,
    },
    // skills: {
    //     type: [String],
    //     required: true,
    // },
    resumeUrl: {
        type: String, // URL to the uploaded file
        required: true,
    },

    // // Education
    // highestEducation: {
    //     type: String,
    //     required: true,
    // },
    // university: {
    //     type: String,
    //     required: true,
    // },

    // Job Preferences
    expectedSalary: {
        type: String,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    preferredWorkType: {
        type: String,
        enum: ['Remote', 'Onsite', 'Hybrid'],
        required: true,
    },

    // Optional but Useful
    linkedinProfile: {
        type: String,
    },
    portfolio: {
        type: String,
    },
    coverLetter: {
        type: String,
    },
}, { timestamps: true });

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job; 