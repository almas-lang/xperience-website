import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Save to separate Newsletter Google Sheet
    const newsletterWebhookUrl = process.env.NEWSLETTER_SHEETS_WEBHOOK_URL

    if (!newsletterWebhookUrl) {
      console.error('Newsletter Google Sheets webhook URL not configured')
      return NextResponse.json(
        { error: 'Newsletter service not configured. Please try again later.' },
        { status: 500 }
      )
    }

    try {
      const sheetsResponse = await fetch(newsletterWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
        }),
      })

      if (sheetsResponse.ok) {
        console.log('✅ Newsletter subscriber saved to Google Sheets')
        return NextResponse.json({ success: true }, { status: 200 })
      }

      const errorData = await sheetsResponse.text()
      console.error('Newsletter Google Sheets Error:', errorData)

      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    } catch (sheetsError) {
      console.error('Newsletter Google Sheets Error:', sheetsError)
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
