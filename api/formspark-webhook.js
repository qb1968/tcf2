// import mailgun from "mailgun-js";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { name, email, message, reason } = req.body;

//   const mg = mailgun({
//     apiKey: process.env.MAILGUN_API_KEY,
//     domain: process.env.MAILGUN_DOMAIN,
//   });

//   const emailData = {
//     from: process.env.ADMIN_EMAIL,
//     to: process.env.ADMIN_EMAIL,
//     subject: `New Contact Form Submission: ${reason || "No reason"}`,
//     text: `
// You have a new form submission:

// Name: ${name || "N/A"}
// Email: ${email || "N/A"}
// Reason: ${reason || "N/A"}

// Message:
// ${message || "No message provided"}
//     `,
//     "h:Reply-To": email,
//   };

//   try {
//     await mg.messages().send(emailData);

//     if (process.env.VERIZON_NUMBER) {
//       const verizonEmail = `${process.env.VERIZON_NUMBER}@vtext.com`;
//       const smsData = {
//         from: process.env.ADMIN_EMAIL,
//         to: verizonEmail,
//         subject: "", // SMS usually ignores subject
//         text: `New message from ${name} (${email}): ${message.substring(
//           0,
//           160
//         )}`,
//       };
//       try {
//         await mg.messages().send(smsData);
//       } catch (smsError) {
//         console.error("Failed to send SMS:", smsError);
//         // Do NOT throw to avoid crashing entire handler
//       }
//     }

//     res.status(200).json({ message: "Email and SMS sent successfully" });
//   } catch (error) {
//     console.error("Mailgun error:", error);
//     res.status(500).json({
//       error: "Failed to send email or SMS",
//       details: error.message || error.toString(),
//     });
//   }

// }
