module.exports = {
    name: 'Commands List',
    description: "Where I am putting all my commands",
    execute(command, bot, voice, message, args, youtube, queue, current, next, isReady){       

        //Useful Commands
        if(command === 'help') {
            bot.commands.get('Help').execute(message, args);
        } 
        
        //Administrative Tools
        else if(command === 'test') {
            bot.commands.get('Test').execute(message, args);
            message.channel.send(command);
        }
        else if(command === 'ping') {
            message.channel.send(`Current ping: ${bot.ws.ping}ms.`);
        }

        //Fun commands
        else if(command === 'justin') {
            bot.commands.get('Justin').execute(message, args);
        } 
        else if(command === 'milkman') {
            bot.commands.get('Milkman').execute(message, args);
        } 
        else if(command === 'dylan') {
            bot.commands.get('Dylan').execute(message, args);
        }

        //Rhythm Bot commands
        else if(command === 'join') {
            bot.commands.get('Join').execute(message, voice);
        }
        else if(command === 'leave') {
            voice.channel.leave();
        }
        else if(command === 'play') {
            const link = message.content.slice(6);
            bot.commands.get('Play').execute(message, link, voice, args, queue, current, next, isReady, youtube); 
        } 
        else if(command === 'pause') { 
            
        } 
        else if(command === 'skip') {
            
        } 
        else if(command === 'queue') {

        }
        else {
            message.channel.send("Invalid Command. Type !Help to see the list of current commands.");
        }
    }
}
