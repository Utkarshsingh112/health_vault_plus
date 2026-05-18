const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Sends an email notification to the admin about a new demo/contact request.
 * @param {{ name?: string, email: string, phone?: string, query?: string, submissionType?: string }} data
 */
const sendAdminNotification = async ({
  name = '',
  email,
  phone = '',
  query = '',
  submissionType = 'demo',
}) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('Email credentials not set in .env. Skipping email notification.');
    return;
  }

  const isContactRequest = submissionType === 'contact';
  const introText = isContactRequest
    ? 'A new contact request has been submitted via the Help Widget on Health Vault Plus.'
    : 'A new demo request has been submitted via the landing page contact section on Health Vault Plus.';
  const detailsRows = isContactRequest
    ? `
            <tr>
              <th style="text-align: left; padding: 12px; border: 1px solid #dee2e6; width: 30%; background-color: #f1f3f5;">Name</th>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${name}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px; border: 1px solid #dee2e6; width: 30%; background-color: #f1f3f5;">Phone</th>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 12px; border: 1px solid #dee2e6; width: 30%; background-color: #f1f3f5;">Query</th>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${query}</td>
            </tr>`
    : '';

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: isContactRequest
      ? 'New Contact Request - Health Vault Plus'
      : 'New Demo Request - Health Vault Plus',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0b7285; color: #fff; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">${isContactRequest ? 'New Contact Request' : 'New Demo Request'}</h2>
        </div>
        <div style="padding: 20px; background-color: #f8f9fa;">
          <p style="font-size: 16px;">Hello Admin,</p>
          <p style="font-size: 16px;">${introText}</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; background-color: #fff;">
            <tr>
              <th style="text-align: left; padding: 12px; border: 1px solid #dee2e6; width: 30%; background-color: #f1f3f5;">Email</th>
              <td style="padding: 12px; border: 1px solid #dee2e6;"><a href="mailto:${email}" style="color: #0b7285; text-decoration: none;">${email}</a></td>
            </tr>
            ${detailsRows}
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
    console.log(`Email notification sent for: ${email}`);
  } catch (error) {
    console.error('Failed to send email notification:', error.message);
    throw error;
  }
};

/**
 * Sends a confirmation email to the user who requested the demo/contact.
 * @param {string} userEmail
 * @param {string} userName
 * @param {string} submissionType
 */
const sendUserConfirmation = async (userEmail, userName, submissionType = 'demo') => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return;
  }

  const isContactRequest = submissionType === 'contact';
  const subject = isContactRequest 
    ? 'We received your contact request - Health Vault Plus'
    : 'We received your demo request - Health Vault Plus';

  const greetingName = userName ? userName.split(' ')[0] : 'there';
  const intro = isContactRequest
    ? 'Thank you for reaching out to Health Vault Plus. We have received your message and our support team will get back to you shortly.'
    : 'Thank you for requesting a demo of Health Vault Plus. We have received your details and our team will reach out shortly to schedule a time.';

  const mailOptions = {
    from: `"Health Vault Plus" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0b7285; color: #fff; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">Health Vault Plus</h2>
        </div>
        <div style="padding: 20px; background-color: #f8f9fa;">
          <p style="font-size: 16px;">Hi ${greetingName},</p>
          <p style="font-size: 16px;">${intro}</p>
          <p style="font-size: 16px;">In the meantime, feel free to explore our <a href="${process.env.CLIENT_URL || 'https://healthvaultplus.com'}" style="color: #0b7285;">website</a> to learn more about our features.</p>
          <p style="margin-top: 30px; font-size: 16px;">Best regards,<br>The Health Vault Plus Team</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`User confirmation email sent to: ${userEmail}`);
  } catch (error) {
    console.error('Failed to send user confirmation email:', error.message);
    // Don't throw here to avoid blocking admin notification
  }
};

module.exports = { sendAdminNotification, sendUserConfirmation };
