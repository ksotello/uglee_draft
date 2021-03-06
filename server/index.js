const express = require('express')
const nodemailer = require('nodemailer');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

const sendEmail = async ({ first_name, last_name, email_address, project_of_interest }) => {
    const transporter = nodemailer.createTransport("SMTP", {
        service: 'Gmail',
        auth: {
            user: 'kylesotello@gmail.com',
            pass: 'Sussudio1783!'
        }
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: email_address, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
    })

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

app.post('/send-email', async (req, res) => {
    try {
        await sendEmail(req.body)
        res.status(200)
        res.send({ "success": true })
    } catch (error) {
        res.status(500)
        res.send(error)
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))