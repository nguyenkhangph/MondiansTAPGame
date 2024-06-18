const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome! Click the button below to start the game.', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Start Game',
            web_app: { url: process.env.NEXT_PUBLIC_TELEGRAM_WEB_APP_URL },
          },
        ],
      ],
    },
  });
});

bot.launch();
