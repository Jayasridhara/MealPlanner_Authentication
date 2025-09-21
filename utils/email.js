const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GOOGLE_APP_EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
    },
});

const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.GOOGLE_APP_EMAIL,
        to,
        subject,
        text,
    }

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
}

module.exports = sendEmail;