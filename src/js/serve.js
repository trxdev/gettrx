var dotenv = require('dotenv');
	dotenv.load();
	const privateKey = process.env.TOKEN_ID;
	
	console.log(privateKey);
