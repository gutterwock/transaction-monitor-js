const { authenticator } = require("otplib");
const qrcode = require("qrcode");

// edit these
const STEP = 60;
const ACCOUNT_NAME = "Me";
const ISSUER = "MyApp";

const main = () => {
	authenticator.options = { step: STEP };
	const secret = authenticator.generateSecret();
	const otpAuth = authenticator.keyuri(ACCOUNT_NAME, ISSUER, secret);
	qrcode.toString(otpAuth, (err, image) => {
		if (err) {
			console.error("Error generating QR code:", err);
			return;
		}
		console.log("QR Code:");
		console.log(image);
	});
	
	console.log("Secret:", secret);
};

main();
