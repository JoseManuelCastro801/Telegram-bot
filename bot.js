const telegraft = require('telegraf')

const bot = new telegraft('1284270460:AAHXVdqFvlIVBWQkrT5gTg7fx1CuWwRfuhE')

bot.start((ctx) => ctx.reply('Hola'))

bot.on('text',(ctx) => {
    ctx.reply(ctx.update.message.text)
})

bot.launch()