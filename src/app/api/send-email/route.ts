import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Verify reCAPTCHA token with Google
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not set');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    // Check if verification was successful and score is acceptable (v3 returns score 0.0-1.0)
    // Typically, scores above 0.5 are considered legitimate
    return data.success === true && (data.score || 0) > 0.5;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, website, recaptchaToken } = body;

    // Honeypot check - if filled, it's a bot
    if (website) {
      console.log('Bot detected via honeypot field');
      // Return success to avoid revealing the honeypot
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA (only if token is provided and secret key is configured)
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
      if (!isRecaptchaValid) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed. Please try again.' },
          { status: 400 }
        );
      }
    }

    // Send email to Child Arise Tennessee
    await resend.emails.send({
      from: 'Contact Form <bethany@childarisetn.org>', // Use verified email address
      to: ['bethany@childarisetn.org'], // Child Arise Tennessee emails
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://childarisetn.org/images/logo.png" alt="Child Arise Tennessee" style="height: 60px;" />
            <h1 style="color: #6C9A74; margin: 20px 0;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #F7F3EF; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #000; margin-top: 0;">Contact Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-radius: 10px; border-left: 4px solid #6C9A74;">
            <h3 style="color: #000; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              This email was sent from the Child Arise Tennessee contact form on ${new Date().toLocaleDateString()}.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the person who submitted the form
    await resend.emails.send({
      from: 'Child Arise Tennessee <bethany@childarisetn.org>',
      to: [email],
      subject: 'Thank you for contacting Child Arise Tennessee',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://childarisetn.org/images/logo.png" alt="Child Arise Tennessee" style="height: 80px;" />
            <h1 style="color: #6C9A74; margin: 20px 0;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="background: linear-gradient(135deg, #F7F3EF 0%, #A3C9A8 100%); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
            <h2 style="color: #000; margin: 0 0 15px 0;">We've received your message</h2>
            <p style="color: #333; font-size: 18px; margin: 0;">Our team will get back to you within 24 hours.</p>
          </div>
          
          <div style="background: #fff; padding: 25px; border-radius: 10px; border: 2px solid #A3C9A8; margin-bottom: 30px;">
            <h3 style="color: #6C9A74; margin-top: 0;">Your Complete Message</h3>
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 0;"><strong>Your Full Message:</strong></p>
            </div>
            <div style="background: #F7F3EF; padding: 20px; border-radius: 8px; border-left: 4px solid #6C9A74; margin-top: 15px;">
              <p style="margin: 0; line-height: 1.8; font-size: 16px; color: #333;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="margin: 15px 0 0 0; font-size: 14px; color: #666; font-style: italic;">
              We have received the complete message above and will respond accordingly.
            </p>
          </div>
          
          <div style="background: #6C9A74; color: white; padding: 25px; border-radius: 10px; text-align: center;">
            <h3 style="margin: 0 0 15px 0;">While you're here...</h3>
            <p style="margin: 0 0 20px 0;">Learn more about our mission to support children and families affected by parental incarceration.</p>
            <div style="margin-top: 20px;">
              <a href="https://childarisetn.org/about" style="background: white; color: #6C9A74; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 0 10px;">About Us</a>
              <a href="https://childarisetn.org/donate" style="background: #E4CDA1; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 0 10px;">Donate</a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              <strong>Child Arise Tennessee</strong><br>
              Nashville, Tennessee<br>
              <a href="mailto:bethany@childarisetn.org" style="color: #6C9A74;">bethany@childarisetn.org</a> | 
              <a href="tel:6154901844" style="color: #6C9A74;">(615) 490-1844</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 