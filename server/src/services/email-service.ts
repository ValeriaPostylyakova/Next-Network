// import nodemailer from 'nodemailer'
export class EmailService {
	// 	constructor() {
	// 		this.transporter = nodemailer.createTransport({
	// 			host: process.env.SMIP_HOST,
	// 			port: process.env.SMIP_PORT || 5000,
	// 			secure: false,
	// 			auth: {
	// 				user: process.env.SMIP_USER,
	// 				pass: process.env.SMIP_PASSWORD,
	// 			},
	// 		})
	// 	}
	async sendActivationEmail(to: string, link: string) {
		// 		await this.transporter.sendEmail({
		// 			from: process.env.SMIP_USER,
		// 			to,
		// 			subject: 'Активация аккаунта',
		// 			text: '',
		// 			html: `
		// 			<div>
		// 					<h1>Для активации аккаунта перейдите по ссылке</h1>
		// 					<a href="${link}">${link}</a>
		// 			</div>
		// 			`,
		// 		})
	}
}
