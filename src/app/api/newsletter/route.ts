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
        listIds: [parseInt(process.env.NEXT_PUBLIC_BREVO_LIST_ID || '50')],
        updateEnabled: true,
      }),
    })

    // 201 = created, 204 = updated, 409 = already exists
    if (brevoResponse.ok || brevoResponse.status === 409) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    const errorData = await brevoResponse.json()
    console.error('Brevo API Error:', errorData)

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
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
