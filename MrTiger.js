const Discord = require('discord.js');
const tpoints = {};
const prefix = "2"
const vpoints = {};
const jimp = require("jimp");
const client = new Discord.Client();



client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
   
    `KrG UP`,
    `Snap / akamhewa 👻`,
    `HACKER BY CHIVAS`,
    `باوکی هەژاران`,
    `IRAQ UP 🇮🇶`,
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {      
    type:"Playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.login("mfa.1syfeq3jdngH4Xgn9XKdHsWNH96bYqja4VAJytiT-pXqBGG6TtlKFyaFXPTeSc3gR94m4Ws1_Vdjw9l-fuMf");
