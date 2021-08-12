const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("BOT READY");
});

client.on('message', async  message => {
  if (message.content === "INI CMD NYA") {
message.channel.send('NANTI DI REPLY BOT');
  }
});

client.login(process.env.BOT)
