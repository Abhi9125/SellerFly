/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure Nodemailer with your email service
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abhishek.sellerfly@gmail.com",
    pass: "bshx ubfc snqy htvp",
  },
});

// Firebase Function to send email on form submission
exports.sendContactEmail = functions.https.onRequest((req, res) => {
  /* eslint-disable object-curly-spacing */
  const { name, email, number, requirements, language } = req.body;
  /* eslint-enable object-curly-spacing */

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "abhi.singh3132@gmail.com", // Your email to receive notifications
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${number}
      Requirements: ${requirements}
      Preferred Language: ${language}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});
