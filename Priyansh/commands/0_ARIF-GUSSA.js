const fs = require("fs");
module.exports.config = {
  name: "gussa",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ARIF BABU", 
  description: "Just Respond",
  usePrefix: true,
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("gussa") ||
     react.includes("Gussa") || react.includes("😡") || react.includes("😠") ||
react.includes("गुस्सा") ||
react.includes("GUSSA")) {
    var msg = {
        body: `𝐁𝐀𝐁𝐔 𝐆𝐔𝐒𝐒𝐀 𝐍𝐇𝐈𝐈 𝐇O 🥺`,attachment: fs.createReadStream(__dirname + `/noprefix/7235ee3bc4ef6b7eaee56a66753fce64.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
