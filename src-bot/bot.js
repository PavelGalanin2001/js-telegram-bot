const db = require('dotenv').config()
if (db.error)
    throw db.error
else
    console.log(db.parsed) //вывести все переменные среды

const BOT_TOKEN = db.parsed.BOT_TOKEN

const Telegraf = require('telegraf') //подключили библиотеку

const startBot = () => {
    const bot = new Telegraf(BOT_TOKEN) //создали объект, передав токен

    bot.command("hello", (ctx) => { //по команде /hello
        ctx.reply("Hi") //отправить сообщение
    });

    bot.hears('qq', ctx => { //по сообщению qq
        ctx.reply(`Доброго времени суток, ${ctx.message.from.first_name}`) //отправить сообщение
    })

    bot.launch() //запустили бота
}

module.exports.startBot = startBot //чтобы запустить функцию с другого файла, её экспортируем
