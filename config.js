import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['254796032440', '★⏤͟͞ɴᴀʀᴜᴛᴏ⏤͟͟͞͞★', true],
  ['12103196892', '𝛥𝑌𝛥𝛮𝛩𝛫𝛩𝐽𝛪', true], 
  ['254773765188'], 'Jamal', true],
  ['']
] //Number of owners

global.mods = ['254796032440','254711107992', '254773765188'] 
global.prems = ['12103196892', '254769527061', '254710690657', '25479603440', '254773765188']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['SGWN']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'ɴᴀʀᴜᴛᴏ'
global.premium = 'true'
global.packname = '🤖 ❝ 𝐌𝐨𝐡𝐚𝐥𝐢𝐜𝐢𝐨𝐮𝐬' 
global.author = 'Ⓒ𝐍𝐚𝐫𝐮𝐭𝐨❞ 🍃' 
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/donbel_ovibel\n' 
global.dygp = 'https://chat.whatsapp.com/BwNJduDcXijJAWkTVJol9h'
global.fgsc = 'https://github.com/mohalicious/Naruto' 
global.fgyt = 'https://youtube.com/@donbel_ovibel'
global.fgpyp = 'https://youtube.com/@donbel_ovibel'
global.fglog = 'https://raw.githubusercontent.com/mohalicious/api/Naruto/Naruto.jpg' 


global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
