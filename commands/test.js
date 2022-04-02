module.exports = {
    name: 'Test',
    description: "This is a test file.",
    execute(message, args){
        message.channel.send("**This is a test 123 Justin likes PP**", { files: ["./attachments/Test/test.jpg"] });
    }
}