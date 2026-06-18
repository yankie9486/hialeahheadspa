import { Resend } from 'resend';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // 1) Email to YOU (business)
    const adminEmail = await resend.emails.send({
      from: 'forms@updates.hainescityheadspa.com',
      to: 'hainescityheadspa@gmail.com',
      replyTo: body.reply,
      subject: body.subject,
      html: body.html,
    });

    if (adminEmail.error) {
      return { success: false, error: adminEmail.error };
    }

    // 2) Auto-reply email to USER
    const userHtml = `
		<!DOCTYPE html>
		<html>
		<head>
		<meta charset="UTF-8">
		<title>Message received</title>
		</head>
		<body>
		<p>Hi ${body.name},</p>

		<p>Thank you so much for reaching out! We’d love to have you.</p>

		<p>All appointments can be conveniently booked online through our scheduling system.</p>
    <p>Please use the link below to view availability and book at a time that works best for you:</p>
    <p><a href="https://hainescityheadspa.glossgenius.com">https://hainescityheadspa.glossgenius.com</a></p>
		<p>If you have any questions or need assistance before booking, feel free to reply to this email and we’ll be happy to help.</p>
    <p>We look forward to seeing you!</p>

		<br>
    <p>Warm regards,</p>
		<p>Hialeah Head Spa Team</p>
		</body>
		</html>
		`;

    const userEmail = await resend.emails.send({
      from: 'Hialeah Head Spa <forms@updates.hainescityheadspa.com>',
      to: body.reply, // user's email
      replyTo: 'Hialeah Head Spa <hainescityheadspa@gmail.com>',
      subject: 'Your message to Hialeah Head Spa',
      html: userHtml,
    });

    if (userEmail.error) {
      return { success: false, error: userEmail.error };
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
});
