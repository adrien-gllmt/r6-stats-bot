# R6 STATS
R6 stats is a discord bot built on [Discord.js](https://github.com/discordjs/discord.js) and [R6api](https://github.com/danielwerg/r6api.js). It allows you to display stats from a given username.

## Usage
You can display a player's stats by typing `!stats <player nickname>` in a channel.

Right now, you can't invite this bot to your server. If you want to add it to your server, you should clone this repo.

In order to make the bot work, you'll need to setup a `.env` file providing Ubisoft account credentials and a [bot token](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) :
```env
# set up .env in the root folder
UBI_EMAIL="<account email>"
UBI_PASSWORD="<account password>"
TOKEN="<bot token>"
```

From there, the bot will be functionnal. You can deploy it to Heroku or run the `main.js` file (with [pm2](https://pm2.keymetrics.io) or else) on your own server to make it available 24/7.

## License
This code is not under license. Feel free to use it, edit it, and reuse it.
