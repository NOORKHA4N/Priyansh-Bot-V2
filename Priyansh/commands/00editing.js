//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "editing",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ////////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("editing") ||
     react.includes("edit") || react.includes("ediTing") || react.includes("EdITing") ||
react.includes("EDITING") ||
react.includes("Editing")) {
		var msg = {
				body: `🌹𝐌𝐞𝐫𝐞 𝐛𝐨𝐬𝐬 𝐧𝐞 𝐄𝐝𝐢𝐭 𝐤𝐢𝐲𝐚 🌹🥰`,attachment: fs.createReadStream(__dirname + `/noprefix/edit.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
