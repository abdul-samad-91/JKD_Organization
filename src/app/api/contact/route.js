import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { userName, email, subject, message } = await req.json();
    console.log(userName , subject , email , message);
    // Create transporter (use your own SMTP credentials)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${userName}" <${process.env.EMAIL_USER}>`,
      to: "yourrecipient@example.com", // receiver
      subject: subject,
      text: message,
      html: `<p><b>Name:</b> ${userName}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
