import nodemailer from "nodemailer"
import { ContextReplacementPlugin } from "webpack"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    }
})
//[1]

export default Contact().then(() => { 

async (req, res) => {
    const { senderMail, name, tel, content, recipientMail } = req.body
//[2]

    // Check if fields are all filled
    if (senderMail === "" || name === "" || content === "" || tel === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }
//[3]

    const mailerRes = await mailer({ senderMail, name, text: content + " ( phone )" + tel, recipientMail })
    res.send(mailerRes)
//[4]
}

const mailer = ({ senderMail, name, text, recipientMail }) => {
    const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
    const message = {
        from,
        to: `${recipientMail}`,
        subject: `New message from ${from}`,
        text,
        replyTo: from
    }
//[5]

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
//[6]
}}
)