let Emailer = require("../model/emailerSchema");
let urls = require('../urls');

let nodemailer = require('nodemailer');

const listEmailer = (req, res) => {
    Emailer.find().sort({ createdAt: -1 })
        .then((data) => {
            res.status(200).json({
                usersList: data
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

const addEmailer = (req, res) => {

    let emailer = new Emailer({
        email: req.body.email,
    })
    emailer.save()
        .then(() => {
            res.status(200).json({
                message: "user added"
            })
        }).catch((err) => {
            if (err.keyValue.email) {
                res.status(200).json({
                    message: "user already exists"
                })
            }
            console.log(err)
        });
}

const sendEmail = (req, res) => {

    // let { userName, mobile, email, lookingFor, query } = req.body;

    let transporter = nodemailer.createTransport({
        host: urls.smtpHost,
        port: urls.smtpPort,
        auth: {
            user: urls.smtpUsername,
            pass: urls.smtpAPIKey
        }
    });

    let mailOptions = {
        from: urls.smtpUsername,
        // to: 'hiteshm@techved.com, karand@techved.com, aaswadj@techved.com',
        to: 'counsellor@tadcourses.com',
        subject: 'New message from your website',
        text: JSON.stringify(req.body, null, " ").replace("{", '').replace("}", '').replace(/"/g, '')
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
}

const sendThankYouEmail = (req, res) => {

    // let { userName, mobile, email, lookingFor, query } = req.body;

    let transporter = nodemailer.createTransport({
        host: urls.smtpHost,
        port: urls.smtpPort,
        auth: {
            user: urls.smtpUsername,
            pass: urls.smtpAPIKey
        }
    });

    let mailOptions = {
        from: urls.smtpUsername,
        to: req.body.email,
        subject: 'ThankYou for connecting with us | TAD Courses',
        html: '<h1>Thank You</h1>'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
}

module.exports.addEmailer = addEmailer;
module.exports.sendEmail = sendEmail;
module.exports.sendThankYouEmail = sendThankYouEmail;
module.exports.listEmailer = listEmailer;
