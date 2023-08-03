"use server";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.NEXT_EMAIL,
		pass: process.env.NEXT_PASSWORD,
	},
});
export async function handleSubmit(formData) {
	const info = {
		from: `"<${formData.get("email")}>`,
		to: "riturajpaul99@gmail.com",
		subject: "Someone tried to connect via portfolio🥳",
		text: `${formData.get("username")} : ${formData.get(
			"email",
		)}\n\n${formData.get("subject")}`,
	};

	transporter.sendMail(info, (error, result) => {
		if (error) console.log(error);
	});
}
