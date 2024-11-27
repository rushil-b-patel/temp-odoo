import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const FROMEMAIL = process.env.FROMEMAIL;
const TOEMAIL = process.env.TOEMAIL;
const PASSWORD = process.env.PASSWORD;

async function sendEmail() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: FROMEMAIL,
        pass: PASSWORD,
      },
    });

    const mailOptions = {
      from: FROMEMAIL,
      to: TOEMAIL,
      subject: "Scheduled Email",
      text: "This is an automated email sent using GitHub Actions.",
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendEmail();