import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send to Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY || '',
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: name,
          LASTNAME: '', // Can be split if needed
        },
        listIds: [parseInt(process.env.NEXT_PUBLIC_BREVO_LIST_ID || '50')],
        updateEnabled: true,
      }),
    })

    // Even if contact exists (409), we still want to send the email
    if (brevoResponse.ok || brevoResponse.status === 409) {
      // Send email notification via Brevo SMTP
      const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY || '',
        },
        body: JSON.stringify({
          sender: { name: 'Xperience Wave Website', email: 'noreply@xperiencewave.com' },
          to: [{ email: 'info@xperiencewave.com', name: 'Xperience Wave' }],
          replyTo: { email: email, name: name },
          subject: `New Contact Form Submission from ${name}`,
          htmlContent: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      })

      if (emailResponse.ok) {
        return NextResponse.json({ success: true }, { status: 200 })
      }
    }

    const errorData = await brevoResponse.json()
    console.error('Brevo API Error:', errorData)

    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    )
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
