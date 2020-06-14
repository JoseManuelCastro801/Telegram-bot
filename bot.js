const telegraft = require('telegraf')

const bot = new telegraft('1284270460:AAHXVdqFvlIVBWQkrT5gTg7fx1CuWwRfuhE')

bot.start((ctx) => ctx.reply('Welcome!'))

bot.launch()