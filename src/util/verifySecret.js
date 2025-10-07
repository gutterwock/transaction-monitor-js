const { authenticator } = require("otplib");

const SECRET = process.env.SECRET;
const OTP = "633846";

const main = () => {
	const isValid = authenticator.check(OTP, SECRET);
	console.log("Is valid:", isValid);
	return;
};

main();
