const path = require("path");
const SchwabApiClient = require("schwab-api-client");

const main = async () => {
	const configFile = path.join(__dirname, "config", "config.json");
	const tokenFile = path.join(__dirname, "config", "token.json");
	const schwabClient = new SchwabApiClient({ configFile, tokenFile });

	await schwabClient.authenticate();
	schwabClient.useInstanceToken();

	const { data } = await schwabClient.account.getAccountNumbers();

	console.log(data)
};

main();