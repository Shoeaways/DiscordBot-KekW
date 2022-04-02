module.exports = {
    name: 'Help',
    description: "Creates a text list displaying all the commands available.",
    execute(message, args){
        message.channel.send("```Current Commands: \n!Help    - Opens up this menu \n\nMusic Bot Commands: \n!Play    - Searches the given link/keywords and plays music\n!Join    - Makes the bot join users voice channel \n!Leave   - Makes the bot leave the server (Only if the bot is in \n           your server)\n\nMeme Commands: \n!Justin  - Calls upon the Justin command ;) \n!Milkman - He is the Milkman and his milk is delicious \n!Dylan   - Leave no man's behind \n```");
    }
}