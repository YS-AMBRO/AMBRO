const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'pranavrajuh@gmail.com'
global.github = 'https://wa.link/0pb5wf'
global.location = 'Sultanpur IN'
global.gurl = 'https://www.instagram.com/pranavyx?igsh=cWhvbHF0Yjk3d2p4' // add your username
global.devs = '919656986105';
global.website = 'https://wa.link/0pb5wf' //wa.me/+919656986105
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5467950801e3848913182.jpg'
module.exports = {
  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',
  botname: process.env.BOT_NAME || '𝚫𝚳𝚩𝚪𝚯-𝚳𝐃',
  dl_limit: process.env.DL_SIZE || '300',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || '919656986105',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/5467950801e3848913182.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY 𝚫𝚳𝚩𝚪𝚯-𝚳𝐃* 🥑',
  ownername:process.env.OWNER_NAME || '𝚫𝚳𝚩𝚪𝚯-𝚳𝐃//🌩️',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'put your herokuapp name',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || 'put your heroku_api_key',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.5.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| '𝚫𝚳𝚩𝚪𝚯-𝚳𝐃',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
