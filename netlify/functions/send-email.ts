import { Handler } from '@netlify/functions';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { formData, service } = JSON.parse(event.body || '');

    const emailContent = `
      New Pre-Treatment Form Submission
      
      Service: ${service}
      
      Client Information:
      ------------------
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      
      Medical Information:
      ------------------
      Medical Conditions: ${formData.medicalConditions || 'None provided'}
      Current Medications: ${formData.medications || 'None provided'}
      
      Consent Given: Yes
      
      Submitted on: ${new Date().toLocaleString()}
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Pre-Treatment Form - ${service}`,
      text: emailContent,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending form' }),
    };
  }
};