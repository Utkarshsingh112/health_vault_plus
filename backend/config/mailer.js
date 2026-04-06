const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Sends an email notification to the admin about a new help/contact request.
 * @param {{ name: string, email: string, phone: string, query: string }} data
 */
const sendAdminNotification = async ({ name, email, phone, query }) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("⚠️ Email credentials not set in .env. Skipping email notification.");
    return;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Request - Health Vault Plus',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0b7285; color: #fff; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">New Contact Request</h2>
        </div>
        <div style="padding: 20px; background-color: #f8f9fa;">
          <p style="font-size: 16px;">Hello Admin,</p>
          <p style="font-size: 16px;">A new contact request has been submitted via the Help Widget on Health Vault Plus.</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #fff;">
            <tr>
              <th style="text-align: left; padding: 12px; border: 1px solid #dee2e6; width: 30%; background-color: #f1f3f5;">Name</th>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${name}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px; border: 1px solid #dee2e6; width: 30%; background-color: #f1f3f5;">Email</th>
              <td style="padding: 12px; border: 1px solid #dee2e6;"><a href="mailto:${email}" style="color: #0b7285; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px; border: 1px solid #dee2e6; width: 30%; background-color: #f1f3f5;">Phone</th>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px; border: 1px solid #dee2e6; width: 30%; background-color: #f1f3f5;">Query</th>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${query}</td>
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
    console.log(`✉️ Email notification sent for: ${email}`);
  } catch (error) {
    console.error(`❌ Failed to send email notification:`, error.message);
    throw error;
  }
};

module.exports = { sendAdminNotification };
