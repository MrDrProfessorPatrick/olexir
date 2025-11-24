import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const body = await request.json()
        const { clientPhone, clientName, clientEmail, clientMessage } = body

        if (!clientPhone || !clientName) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            )
        }

        await emailSender(
            ['zokof11@gmail.com'],
            'Olexir Contact Form Submission',
            `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${clientName}</p>
        <p><strong>Phone:</strong> ${clientPhone}</p>
        <p><strong>Phone:</strong> ${clientPhone}</p>

        ${clientEmail ? `<p><strong>Email:</strong> ${clientEmail}</p>` : ''}
        ${
            clientMessage
                ? `<p><strong>Email:</strong> ${clientMessage}</p>`
                : ''
        }
      `
        )

        return NextResponse.json({
            message: 'Contact request sent successfully',
        })
    } catch (error) {
        console.error('Error in contact form:', error)
        return NextResponse.json(
            { message: 'Failed to send contact request' },
            { status: 500 }
        )
    }
}
