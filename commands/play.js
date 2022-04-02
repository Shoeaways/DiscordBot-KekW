module.exports = {
    name: 'Play',
    description: "PLAYS MOOSIC BEACHES",
    execute(message, link, voice, args, queue, current, next, isReady, youtube) {
        if(!voice.channelID) {
            message.reply('You must be in a voice channel');
        }

        const ytdl = require('ytdl-core');

        queue.push(link);
        console.log(queue[current]);
        console.log(queue[next]);
        
        console.log("This is the number of current beforehand: " + current);
        console.log("This is the number of next before hand: " + next);
        
        if (current == next) {
            addToQueue(voice, queue, current, next);
        }
        else {
            playMusic(voice, queue, current, next);
        }

        async function searchYouTubeAsync(link) {
            //Replaces all commas in the string to a space
            link = link.toString().replace(/,/g,' ')

            //Calls the discord-youtube-api function which searches videos for you
            var video = await youtube.searchVideos(link);

            return String(video.url);
        }

        function addToQueue(voice, queue, current, next) {
            console.log("Adding to queue: ");
        }

        function playMusic(voice, queue, current, next) {
            if(!queue[current]) {
                console.log('end of queue');
                current = 0;
                next = 0;
            }
            else if (isReady == false) {
                addToQueue(voice, queue, current, next);
            }
            else {
                voice.channel.join().then(async connection => {
                    let url = await searchYouTubeAsync(queue[current]);
                    current = current + 1;
                    isReady = false;
                    let stream = ytdl(url, { filter: 'audioonly' });
                    let dispatcher = connection.play(stream);
                    
                    try {
                        console.log("This is the number of current: " + current);
                        console.log("This is the number of next: " + next);
                        console.log("Status of isReady: " + isReady);

                        //Sends a message saying what song was added to 
                        //the channel that the command was sent in
                        //const current_playing = "Playing: " + video.url;
                        //message.channel.send(current_playing);
                    }
                    finally {
                        dispatcher.on('end', () => isReady = true);
                        dispatcher.on('end', () => console.log("Status of isReady: " + isReady));
                        dispatcher.on('end', () => playMusic(voice, queue, current, next));
                    }
                    
                    //dispatcher.on('end', () => isReady = true);
                    //dispatcher.on('end', () => playMusic(voice, queue, current, next));
                });
            }
        }
    }
}
