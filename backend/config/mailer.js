const nodemailer = require('nodemailer');

/**
 * Creates and configures the Nodemailer transporter.
 * It uses environment variables for configuration.
 */
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to another provider or SMTP details
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App password if using Gmail
  },
});

/**
 * Sends an email notification to the admin about a new demo request.
 * @param {string} userEmail - The email of the user who requested the demo.
 * @returns {Promise<void>}
 */
const sendAdminNotification = async (userEmail) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("⚠️ Email credentials not set in .env. Skipping email notification.");
    return;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Admin email
    subject: 'New Demo Request - Health Vault Plus',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0b7285; color: #fff; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">New Demo Request</h2>
        </div>
        <div style="padding: 20px; background-color: #f8f9fa;">
          <p style="font-size: 16px;">Hello Admin,</p>
          <p style="font-size: 16px;">A new demo request has been submitted on Health Vault Plus.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #fff;">
            <tr>
              <th style="text-align: left; padding: 12px; border: 1px solid #dee2e6; width: 30%; background-color: #f1f3f5;">User Email</th>
              <td style="padding: 12px; border: 1px solid #dee2e6;"><a href="mailto:${userEmail}" style="color: #0b7285; text-decoration: none;">${userEmail}</a></td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px; border: 1px solid #dee2e6; width: 30%; background-color: #f1f3f5;">Timestamp</th>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          
          <p style="margin-top: 30px; font-size: 14px; color: #777; text-align: center;">
            This is an automated message from your Health Vault Plus system.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✉️ Email notification sent successfully for: ${userEmail}`);
  } catch (error) {
    console.error(`❌ Failed to send email notification:`, error.message);
    // Throwing error here is optional; based on requirements we shouldn't fail API request,
    // so we just log it and handle it gracefully in the controller if needed.
    throw error;
  }
};

module.exports = {
  sendAdminNotification,
};
