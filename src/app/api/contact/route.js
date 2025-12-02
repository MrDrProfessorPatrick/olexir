import { NextResponse } from 'next/server'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'

export async function POST(request) {
    try {
        const body = await request.json()
        const { clientPhone, clientName, clientEmail, clientMessage } = body

        if (!clientEmail || !clientName) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            )
        }
        // Initialize MailerSend
        const mailerSend = new MailerSend({
            apiKey: process.env.API_KEY,
        })

        const sentFrom = new Sender('info@olexir.ch', 'OLEXIR CONTACT FORM')

        const recipients = [
            new Recipient('svitlana.mykolenko24@gmail.com', 'Svitlana'),
        ]

        const emailHtml = `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${clientName}</p>
      <p><strong>Phone:</strong> ${clientPhone}</p>
      ${clientEmail ? `<p><strong>Email:</strong> ${clientEmail}</p>` : ''}
      ${
          clientMessage
              ? `<p><strong>Message:</strong> ${clientMessage}</p>`
              : ''
      }
    `

        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setSubject('Olexir Contact Form Submission')
            .setHtml(emailHtml)

        await mailerSend.email.send(emailParams)

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
