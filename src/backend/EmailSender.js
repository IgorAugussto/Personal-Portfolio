import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

const port = 3000;
const user = "igoraugustowebdev@gamail.com"
const pass = "Stepflish147"
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/send', (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp-relay.gmail.com",
        port: 587,
        auth: { user, pass }
    })

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: "igor-augustofc@hotmail.com",
        subject: "Teste email",
        text: "Essa eu tenho certeza que deu certo hein, parabens!",
    }).then(info => {
        res.send(info)
    }).catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`Running on port ${port}!`))