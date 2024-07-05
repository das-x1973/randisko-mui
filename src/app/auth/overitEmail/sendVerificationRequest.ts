// app/auth/overitEmail/sendVerificationRequest.ts

import nodemailer from 'nodemailer';
import { SendVerificationRequestParams } from "next-auth/providers/email"


const sendVerificationRequest = async ({
  identifier: email,
  url,
  token,
  provider,
}: SendVerificationRequestParams) => {
  // Use NEXTAUTH_URL environment variable or a hard-coded string
  const host = process.env.NEXTAUTH_URL; 
  // const { host } = new URL(url); // Extracts the host from the sign-in URL provided by NextAuth.js

  const transporter = nodemailer.createTransport(provider.server);

  const mailOptions: nodemailer.SendMailOptions = {
    to: email,
    from: provider.from,
    subject: `Vitajte v Randisku`,
    text: `Vitajte v Randisku!\n\nKliknite na nižšie uvedený odkaz, aby ste dokončili registráciu:\n\n${url}\n\nAk ste tento email nežiadali, môžete ho bezpečne ignorovať.`,
    html: `<p>Vitajte v Randisku!</p>
           <p>Kliknite na nižšie uvedený odkaz, aby ste dokončili registráciu:</p>
           <p><a href="${url}">${url}</a></p>
           <p>Ak ste tento email nežiadali, môžete ho bezpečne ignorovať.</p>`,
  };

  await transporter.sendMail(mailOptions);
};

export default sendVerificationRequest;


// // src/pages/api/sendVerificationEmail.js

// import sgMail from '@sendgrid/mail';
// import theme from 'src/theme/appTheme';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function handler(req, res) {
//   const { email, verificationCode } = req.body;

//   const primaryColor = theme.colors.primary;

//   const emailContent = `
//     <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
//       <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
//         <h2 style="text-align: center; color: ${primaryColor};">Vitajte v Randisko.sk</h2>
//         <p style="font-size: 16px; line-height: 1.5; text-align: center;">Ďakujeme za registráciu na našej stránke. Pre dokončenie registrácie a overenie vášho emailu, prosím, zadajte nasledujúci overovací kód:</p>
//         <div style="font-size: 24px; font-weight: bold; text-align: center; margin: 20px 0; background-color: #f4f4f4; padding: 10px; border-radius: 5px;">
//           ${verificationCode}
//         </div>
//         <p style="font-size: 16px; line-height: 1.5; text-align: center;">Tešíme sa na vás v Randisko.sk!</p>
//       </div>
//     </div>
//   `;

//   try {
//     const response = await sgMail.send({
//       to: email,
//       from: 'info@randisko.sk',
//       subject: 'Vitajte v Randisko.sk',
//       html: emailContent
//     });

//     // Include the SendGrid response in the API response
//     res.status(200).json({
//       message: 'Email sent successfully',
//       sendGridResponse: response
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error sending email');
//   }
// }



// // src/pages/api/sendEngagementEmail.js

// import sgMail from '@sendgrid/mail';
// import theme from 'src/theme/appTheme';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function handler(req, res) {
//   const { email } = req.body;

//   const primaryColor = theme.colors.primary;

//   const emailContent = `
//     <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
//       <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
//         <h2 style="text-align: center; color: ${primaryColor};">Vitajte v Randisko.sk</h2>
//         <p style="font-size: 16px; line-height: 1.5; text-align: center;">Blahoprajeme k dokončeniu vášho profilu!</p>
//         <p style="font-size: 16px; line-height: 1.5; text-align: center;">Tu sú nejaké tipy, ako získať najlepšie zápasy a ako sa efektívne zapojiť do platformy...</p>
//         <ul style="font-size: 16px; line-height: 1.5; text-align: left;">
//           <li>Tip 1: Uistite sa, že Váš profil je kompletný a aktuálny.</li>
//           <li>Tip 2: Pravidelne kontrolujte nové správy.</li>
//           <li>Tip 3: Buďte aktívni.</li>
//           <!-- Add more tips as needed -->
//         </ul>
//         <p style="font-size: 16px; line-height: 1.5; text-align: center;">Tešíme sa na vás v Randisko.sk!</p>
//       </div>
//     </div>
//   `;

//   try {
//     const response = await sgMail.send({
//       to: email,
//       from: 'info@randisko.sk',
//       subject: 'Tipy pre úspešné zoznamovanie v Randisko',
//       html: emailContent
//     });

//     // Include the SendGrid response in the API response
//     res.status(200).json({
//       message: 'Engagement email sent successfully',
//       sendGridResponse: response
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error sending engagement email');
//   }
// }
