require('dotenv').config();

const Discord = require("discord.js")
const client = new Discord.Client({intents: 32767}) //32767 mean all intents

client.on("ready", () => {
  console.log("Our bot is ready to go!!!!")
});

client.on('message', msg => {

    if(msg.content.startsWith("/passcode "))
    {
        var user_answer = msg.content.replace("/passcode ", "");
        var correct_answer = Math.trunc(msg.author.id / 2124679 / 2);

        if(user_answer == correct_answer)
        {
            msg.member.roles.add("967834415503925338");
        }
        else
        {
            msg.reply("Passcode is wrong.");
        }
    }
});

client.login(process.env.BOT_TOKEN)
