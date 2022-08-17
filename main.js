const { Client, Intents } = require('discord.js');
const {stats} = require('./commands/get-stats.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', async message => {
    await stats(message);
})

client.login(process.env.TOKEN);
