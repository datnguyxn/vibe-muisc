import nodemailer from 'nodemailer';
import path from "path";
import {fileURLToPath} from "url";
import {variables} from "../configuration/index.js";
import ejs from 'ejs';
class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            host: variables.SMTP_HOST,
            port: variables.SMTP_PORT,
            secure: true,
            auth: {
                user: variables.SMTP_USER,
                pass: variables.SMTP_PASSWORD
            }
        })
        this.transporter.verify((error, success) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Ready for send emails');
            }
        })
    }

    async sendMail(name, text, template) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename).slice(0, -13)
        ejs.renderFile(__dirname + '/src/views/mail/' + template, { email: name, token: text }, (err, data) => {
            console.log('hello')
            if (err) {
                console.log(err);
            } else {
                const mailOptions = {
                    from: '"' + "Vibe" + '"' + "<" + variables.SMTP_USER + ">",
                    to: name,
                    subject: `Code for reset password: ${text}`,
                    html: data
                }
                this.transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Email sent: ' + info.response);
                        return info
                    }
                })
            }
        })
    }
}

export default new MailService();