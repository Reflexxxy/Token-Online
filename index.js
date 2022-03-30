require('fs').readFileSync('tokens.txt', 'utf-8').split(/\r?\n/).forEach(token => {

const Discord = require('discord.js-selfbot');
const client = new Discord.Client();

client.on("ready", () => {
})

client.login(token)
    console.log(token + " Login successful!")
})
