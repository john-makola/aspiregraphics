const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const config = require("./config.js");
const { auth } = require("googleapis/build/src/apis/calendar");
const OAuth2 = google.auth.OAuth2;
const smtpTransport = require("nodemailer-smtp-transport");
const OAuth2_client = new OAuth2(config.clientId, config.clientSecret);
OAuth2_client.setCredentials({ refresh_token: config.refreshToken });

const accessToken = OAuth2_client.getAccessToken();
// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: config.user,
//     clientId: config.clientId,
//     clientSecret: config.clientSecret,
//     refreshToken: config.refreshToken,
//     accessToken: accessToken,
//   },
// });

export const transporter = nodemailer.createTransport({
  host: "aspiregraphics.co.ke",
  secureConnection: false,
  tls: {
    rejectUnauthorized: false,
  },
  port: 587,
  auth: {
    user: config.aspireuser,
    pass: config.pass,
  },
});

export const mailOptions = {
  from: config.user,
  to: "web@aspiregraphics.co.ke",
};

//   const mail_options = {
//     from: `Aspire Graphics <${config.user}>?`,
//     to: recipient,
//     subject: "New Message",
//     html: get_html_message(),
//   };
//   transport.sendMail(mail_options, function (error, result) {
//     if (error) {
//       console.log("Error", error);
//     } else {
//       console.log("Success:", result);
//     }
//     transport.close();
//   });
// }

// function get_html_message(name) {
//     return `
// <h1> ${name}: New Message</h1>

//     `
// }
