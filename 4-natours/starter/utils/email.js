const nodemailer = require('nodemailer');

const sendEmail = options => {
    //transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            password: process.env.EMAIL_PASSWORD
        }
        //Activate in gmail "less secure app" option
    })

    //define email options

    //actually send email
}