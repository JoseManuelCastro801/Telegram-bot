const telegraft = require('telegraf')

const bot = new telegraft('1284270460:AAHXVdqFvlIVBWQkrT5gTg7fx1CuWwRfuhE')

const command1 = '/imp'

bot.start((ctx) => ctx.reply('Hola'))


function calculaImpuesto (valor){

    if(parseFloat(valor)){

        valorint = parseFloat(valor);

        valor8 =  valorint * 0.08;

        valor21 = valorint * 0.21;

        valor = valorint + valor8 + valor21

        return 'Valor original : '+ valorint +'$\n21% IVA : '+ valor21 + '$\n8% de nose : '+ valor8 + '$\nTotal : ' + valor + '$';    
    }
        return 'Se debe ingresar un nuemro'

}



bot.command(command1,(ctx) =>{

    const msj = ctx.message.text.replace(command1,'').trim();
    //let msj = (ctx.message.text).substring(command1.length+1,ctx.message.text.length);
    ctx.reply(calculaImpuesto(msj));

})

bot.launch()