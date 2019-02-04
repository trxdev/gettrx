const dotenv = require('dotenv')
if (dotenv.error) {
  throw dotenv.error
}
 
console.log(dotenv.parsed)
	dotenv.load();
	const privateKey = process.env.TOKEN_ID;
	
	console.log(privateKey);
