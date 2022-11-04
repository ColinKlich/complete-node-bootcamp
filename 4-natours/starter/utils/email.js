const nodemailer = require('nodemailer');

const sendEmail = async options => {
    //transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            password: process.env.EMAIL_PASSWORD
        }
        //Activate in gmail "less secure app" option
    })

    //define email options
    const mailOptions = {
        from: 'Colin Klich <colinklich23@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        //html:
    };

    //actually send email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;