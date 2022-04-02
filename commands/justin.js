module.exports = {
    name: 'Justin',
    description: "Calls upon the Justin command ;)",
    execute(message, args){
        message.channel.send("**His name is Justin and he's cracked at Fortnite my guy**", { files: ["./attachments/Fun/justin.jpeg"] });
    }
}