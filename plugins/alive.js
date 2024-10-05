const config = require('../config')
const {cmd , commands} = require('../command')
const os = require('os')
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👧🏻",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*Hi 🍄* ${pushname}

┌────────────────
│❖ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
│❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
│❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
│❖ *ᴏᴡɴᴇʀ :* _STRIKERBOY_
└────────────────

*I'm Alive Now 👸🏻*

┌────────────────
│ *_Nova WhatsApp Group_*
│ https://chat.whatsapp.com/BsM8ZJcqPaIH2gK4OJbJBN
└────────────────
┌────────────────
│ *_Nova Github Repo_*
│ http://github.com/Devenlee350/Alexa 
└────────────────
┌────────────────
│ *_Nova Public Group_*
│ https://whatsapp.com/channel/0029VafbajGDuMRoRlel7k1p
└────────────────

> *© pσwєrєd вч 𝚂𝚃𝚁𝙸𝙺𝙴𝚁𝙱𝙾𝚈 𝚆𝙾𝚁𝙻𝙳  🧑🏻‍💻*
`
return await conn.sendMessage(from,{image: {url: `https://i.imgur.com/q1x3p8U.jpeg`},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})



