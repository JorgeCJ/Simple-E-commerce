const MailQueue = require("../queue/MailQueue");

async function sendEmail(request, reply) {
    const {
        email,
        firstName,
        lastName
    } = request.body

    const template = `
        Hello ${firstName} ${lastName}, your subscription has been confirmed!
        To access its exclusive features you need to just click here.
    `

    try {
        await MailQueue.add({
            to: email,
            from: process.env.EMAIL_FROM,
            subject: "Confirmed Signature!",
            text: template
        })
        return reply.code(200).send();
    } catch {
        return reply.code(500).send("Internal Server Error");
    }
}

module.exports = {
    sendEmail
}