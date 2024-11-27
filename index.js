import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const FROMEMAIL = process.env.FROMEMAIL;
const TOEMAIL = process.env.TOEMAIL;
const PASSWORD = process.env.PASSWORD;
const NAME = process.env.NAME;

const emailText = `
Respected Ma'am,

I am writing to follow up on my Coderbyte test for the Software Developer Intern position(applied on 22nd Oct). I successfully completed the test on Oct 24, 2024.

I would appreciate it if you could provide an update on the status of my application. Any feedback or information regarding the next steps in the hiring process would be greatly helpful.

Thank you for your time and consideration.

Sincerely,  
${NAME}
`;

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
      subject: "Follow-Up on Coderbyte Test for Software Developer Intern Position",
      text: emailText,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendEmail();