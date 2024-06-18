const { Telegraf } = require('telegraf');
const bot = new Telegraf('7468598166:AAHNqi11GPoQw6rtZg2LH-WqzIFYNDirA6c');

bot.start((ctx) => {
  ctx.reply('Welcome! Click the button below to start the game.', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Start Game',
            web_app: { url: 'https://nguyenkhangph.github.io/MondiansTAPGame' },
          },
        ],
      ],
    },
  });
});

bot.launch();
