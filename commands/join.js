module.exports = {
    name: 'Join',
    description: "Makes the bot join the server",
    execute(message, voice){
        if(!voice.channelID) {
            message.reply('You must be in a voice channel');
        }
        else {
            voice.channel.join();
        }
    }
}