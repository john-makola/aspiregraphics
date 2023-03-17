import nodemailer from "nodemailer";

const email = "web@aspiregraphics.co.ke";
const pass = "*.0xp;iIzkCe";

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: email,
//     pass,
//   },
// });

export const transporter = nodemailer.createTransport({
  host: "aspiregraphics.co.ke",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
