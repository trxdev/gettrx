#!/usr/bin/env nodejs
var dotenv = require('dotenv');
const TronWeb = require('tronweb');

dotenv.load();

async function collectCandi() {

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.shasta.trongrid.io);
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
const eventServe = "https://api.shasta.trongrid.io/"
const privateKey = process.env.PRIVATE_KEY;

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);

//const contractInstance = await tronWeb.contract().at("TRTYkQX7aYTVKQ8dLGc3pK8mvdTXef66WM");
//const result  = await contractInstance.collect('iamcool').send();
//writing log entry in the file for future reference
//const logEntry =" Looks Done " + result + "\n";
console.log(privateKey); 
};

//calling pickWinnerCalling function
collectCandi();
