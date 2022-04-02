module.exports = {
    name: 'Milkman',
    description: "He is the Milkman, and his milk is delicious",
    execute(message, args){
        message.channel.send("**I am the Milkman, my milk is delicious**", { files: ["./attachments/Fun/malcom.jpg"] });
    }
}