const fs = require("fs");
module.exports.config = {
  name: "momos",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "LEGEND-ARYAN ", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("fast food") ||
     react.includes("moMo") || react.includes("Momos") || react.includes("MOMOS") ||
react.includes("momos") ||
react.includes("Momo") ||     
react.includes("MOMO")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐀𝐏𝐊𝐀 𝐌𝐎𝐌𝐎 𝐀𝐆𝐀𝐘𝐀💐✿
 •⊰ ☞𓅂 ╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🅂🄰🄼🄴🄴🅁𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/noprefix/4fc7665dfa4e883d9c6af0b14125c390.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
