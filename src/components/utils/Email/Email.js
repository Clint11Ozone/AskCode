// import React from "react";
// import fs from "mock-fs";


// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_KEY);

// function Email ({ subject, text, to }) {
//     const mailObject = {
//         to: to,
//         from: process.env.EMAIL_SENDER,
//         subject: subject,
//         text: text,
//         html: text,
//         // attachments: [
//         //     {
//         //         content: invoice.pdf,
//         //         filename: "invoice.pdf",
//         //         type: "application/pdf",
//         //         disposition: "attachment",
//         //     }]
//     };
//     sgMail
//         .send(mailObject)
//         .then((res) => {
//             console.log(res);
//         })
//         .catch((err) => {
//             console.log(
//                 "------------- something went wrong cant send email via sendgrid ---------------------"
//             );
//             console.log(err);
//             console.log(err.response?.body);
//             console.log(
//                 "------------- something went wrong cant send email via sendgrid ---------------------"
//             );
//         });
// }

// export default Email;