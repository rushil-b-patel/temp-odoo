import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const FROMEMAIL = process.env.FROMEMAIL;
const TOEMAIL = process.env.TOEMAIL;
const PASSWORD = process.env.PASSWORD;
const NAME = process.env.NAME;

const emailText = `
Dear Hiring Manager,

I am writing to follow up on my Software Developer Intern position(applied on 22nd Oct). I successfully completed the test on Oct 24, 2024.

I would appreciate if you can provide an update on the status of my application. Any feedback or information regarding the next steps in the hiring process would be greatly helpful.

Thank you for your time and consideration.

Sincerely,  
${NAME}
${FROMEMAIL}
`;

async function sendEmail(email) {
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
      to: email,
      subject: "Follow-Up on Software Developer Intern application",
      text: emailText,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
  }
}

const emailList = [process.env.EMAIL1, process.env.EMAIL2];

for(let i=0; i<emailList.length; i++) {
  sendEmail(emailList[i]);
}