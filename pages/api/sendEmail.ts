import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('REQ.BODY', process.env.SENDGRID_API_KEY)
    await sendgrid.send({
      to: 'sendgrid@cjunnior.dev', // Your email where you'll receive emails
      from: 'teste@gmail.com', // your website email address here
      subject: `Sending with SendGrid is Fun`,
      html: `<div>You've got a mail</div>`,
    })
  } catch (error: any) {
    console.log(error)
    return res.status(500).send({ error: error.message })
  }

  return res.status(200).send({ error: '' })
}

export default sendEmail
