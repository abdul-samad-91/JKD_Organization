import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { userName, email, subject, message, phoneNumber } = await req.json();
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
      html: `<p><b>Name:</b> ${userName}</p><p><b>Email:</b> ${email}</p><p><b>Number:</b> ${phoneNumber }</p><p>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}


// this can be also done using below code but it need resend library and resend api key 



// // app/api/send-mail/route.js
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   const { name, email, message } = await req.json();

//   await resend.emails.send({
//     from: "Your App <onboarding@resend.dev>",
//     to: "your@gmail.com",
//     subject: `Message from ${name}`,
//     html: `<p>${message}</p>`,
//   });

//   return new Response(JSON.stringify({ success: true }), { status: 200 });
// }
