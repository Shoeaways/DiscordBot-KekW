const Discord = require('discord.js');
const fs = require('fs');
const { send } = require('process');
const YouTube = require("discord-youtube-api");

//This Creates the discord-youtube-api under the name youtube.
const youtube = new YouTube();

//This will create a new Client under the name bot
//Allows us to do things like bot.on or bot.login
const bot = new Discord.Client();

//This will create a new GuildMember under the name member
const member = new Discord.GuildMember();

//Allows us to use "commands." to call upon our command files
bot.commands = new Discord.Collection(); 

//Prefix is what is put before your desired command.
//Ex) To call the Justin command, we would type !Justin
const prefix = '!';

//This makes sure that our file is a .js file and is inside of our
//commands file 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

//let i = 0;

//Starts our bot up and sends a message to the terminal if successfully online
bot.once('ready', () => {
    console.log('We on Bitches!');

    //Sets the bots activity to say "Type !help"
    bot.user.setActivity("Type !help");
});

bot.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //Use this to set "voice" as the message sent by the member
    const { voice } = message.member;
    
    //Slice allows the sent in message to have the prefix removed 
    //For example, !test now will be read as test instead
    const args = message.content.slice(prefix.length).split(" ");
    
    //This converts all inputs to lowercase so that their is no difference between typing
    //Test or test, which makes it easier to code later on
    const command = args.shift().toLowerCase();

    //This accesses the command.js file to make main.js cleaner
    bot.commands.get('Commands List').execute(command, bot, voice, message, args, youtube, queue, current, next, isReady);
});

//This allow us to connect the code with the bot itself. bot.login(token)
//Make sure to hide your token so that other people can't access and mess
//with the bot

//Use node . to start the bot in the terminal

//Current OBJ: Make the music have a que so that when you do !play it doesn't replace the current song
//Next OBJ: Put commands in separate folders/an array and go from there













































const token = 'ODA5MjI5ODQ5MTY4MDUyMjI0.YCSEBg.Lpbm7z8GNSKdoz2mdWIbarlNOjk'
bot.login(token);