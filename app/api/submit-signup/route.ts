import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  console.log("[v0] API route called - starting form submission process")

  try {
    console.log("[v0] Parsing request body...")
    const data = await request.json()
    console.log("[v0] Received data:", data)

    if (!data.email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email address is required",
        },
        { status: 400 },
      )
    }

    console.log("[v0] Checking environment variables...")
    const requiredEnvVars = {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS,
      ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    }

    console.log("[v0] Environment variables status:", {
      SMTP_HOST: !!requiredEnvVars.SMTP_HOST,
      SMTP_PORT: !!requiredEnvVars.SMTP_PORT,
      SMTP_USER: !!requiredEnvVars.SMTP_USER,
      SMTP_PASS: !!requiredEnvVars.SMTP_PASS,
      ADMIN_EMAIL: !!requiredEnvVars.ADMIN_EMAIL,
    })

    if (!requiredEnvVars.SMTP_USER || !requiredEnvVars.SMTP_PASS) {
      console.log("[v0] Missing required SMTP credentials")
      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error: Missing SMTP credentials",
        },
        { status: 500 },
      )
    }

    console.log("[v0] Creating nodemailer transporter...")
    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    console.log("[v0] Verifying transporter connection...")
    await transporter.verify()
    console.log("[v0] SMTP connection verified successfully")

    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: "New DTS Signup",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New DTS Signup
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name || "Not provided"}</p>
            <p><strong>Email:</strong> ${data.email || "Not provided"}</p>
            <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
            <p><strong>Role:</strong> ${data.role || "Not provided"}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from the DTS signup form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    const confirmationMailOptions = {
      from: process.env.SMTP_USER,
      to: data.email,
      subject: "Application Received - September School of Missions Program",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #333333;">
          <!-- Removed purple gradient header, made it minimalistic -->
          <div style="padding: 40px 30px 30px 30px; border-bottom: 1px solid #e5e5e5;">
            <h1 style="color: #000000; margin: 0; font-size: 24px; font-weight: 400; letter-spacing: 0.5px;">
              School of Missions Program
            </h1>
            <p style="color: #666666; margin: 8px 0 0 0; font-size: 14px;">
              Gather to Go
            </p>
          </div>

          <!-- Main Content -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #000000; margin: 0 0 24px 0; font-size: 20px; font-weight: 400;">
              Hello ${data.name || "there"},
            </h2>
            
            <p style="color: #333333; line-height: 1.6; margin: 0 0 24px 0; font-size: 16px;">
              Thank you for your interest in our <strong>September School of Missions Program</strong>. We've successfully received your interest form and are excited about the possibility of having you join us.
            </p>

            <!-- Removed colored background and border, made it clean and minimal -->
            <div style="border: 1px solid #e5e5e5; padding: 24px; margin: 32px 0;">
              <h3 style="color: #000000; margin: 0 0 16px 0; font-size: 18px; font-weight: 500;">
                What happens next?
              </h3>
              <ul style="color: #333333; margin: 0; padding-left: 20px; line-height: 1.7;">
                <li style="margin-bottom: 8px;">One of our staff members will reach out to you shortly with more information.</li>
                <li style="margin-bottom: 8px;">We'll contact you within 5 business days</li>
                <li style="margin-bottom: 8px;">You'll receive information about next steps and program details</li>
              </ul>
            </div>

            <p style="color: #333333; line-height: 1.6; margin: 32px 0 0 0; font-size: 16px;">
              If you have any immediate questions, please don't hesitate to reach out to us. We're here to help and look forward to connecting with you soon.
            </p>

            <p style="color: #333333; line-height: 1.6; margin: 32px 0 0 0; font-size: 16px;">
              Blessings,<br>
              <strong style="color: #000000;">The School of Missions Team</strong>
            </p>
          </div>

          <!-- Simplified footer with minimal styling -->
          <div style="background-color: #f8f8f8; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e5e5;">
            <p style="color: #666666; margin: 0; font-size: 14px; line-height: 1.5;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
            <p style="color: #999999; margin: 12px 0 0 0; font-size: 12px;">
              © ${new Date().getFullYear()} Gather to Go. All rights reserved.
            </p>
          </div>
        </div>
      `,
    }

    console.log("[v0] Sending admin notification email to:", adminMailOptions.to)
    const adminResult = await transporter.sendMail(adminMailOptions)
    console.log("[v0] Admin email sent successfully:", adminResult.messageId)

    console.log("[v0] Sending confirmation email to:", confirmationMailOptions.to)
    const confirmationResult = await transporter.sendMail(confirmationMailOptions)
    console.log("[v0] Confirmation email sent successfully:", confirmationResult.messageId)

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully. Check your email for confirmation.",
    })
  } catch (error) {
    console.error("[v0] Error in API route:", error)
    if (error instanceof Error) {
      console.error("[v0] Error name:", error.name)
      console.error("[v0] Error message:", error.message)
      console.error("[v0] Error stack:", error.stack)
    }
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
