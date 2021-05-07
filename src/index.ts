import tmi from 'tmi.js'
import dotenv from 'dotenv'
import { red, blue, green, roxo, orange, pisca, off } from './led'

dotenv.config()
const { PASSWORD } = process.env
const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: `tallyscript`,
    password: PASSWORD
  },
  channels: [
    'otallyto'
  ]
})

client.connect();

client.on('message', async (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self
  ) return;
  const args = message.split(' ');
  const commands = args[0].toLocaleLowerCase()
  switch (commands) {
    case '!pisca':
      const num = Number(args[1])
      if (num !== NaN) {
        pisca(num)
      }else{
       client.say(channel, `@${tags.username}, parece que você digitou um argumento invalido`);        
      }
      break;
    case '!hello':
      client.say(channel, `@${tags.username}, world!`);
      break;
    case '!ping':
      client.say(channel, `pong`);
      break;
    case '!amor':
      client.say(channel, `@${tags.username}, você também é um amor!`);
      break;
    case '!twitter':
      client.say(channel, `Me siga no twitter em https://twitter.com/TallyScriptt`);
      break;
    case '!lindo':
      client.say(channel, `@${tags.username}, lindo é você!`);
      break;
    case '!instagram':
      client.say(channel, `Me siga no instagram https://www.instagram.com/otallyto/`);
      break;
    case '!insta':
      client.say(channel, `Me siga no instagram https://www.instagram.com/otallyto/`);
      break;
    case '!git':
      client.say(channel, `Me siga no github https://github.com/otallyto`);
      break;
    case '!red':
      red()
      break;
    case '!blue':
      blue()
      break;
    case '!green':
      green()
      break;
    case '!roxo':
      roxo()
      break;
    case '!orange':
      orange()
      break;
      case '!off':
        off()
        break;
    default:
      return;
  }

});


