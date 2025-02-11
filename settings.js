/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0grbm5EOEhkS0wvWTlqaWFqdTFOM1VXVG5tN2t6Z0RZdVRzdW51VVluTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlFnVkpRR05YWGoxUFVIR1NLMzBxNi9KRGFjd1IreDNXRDFDUDNrOElIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSHFvNjRNSncvdzRsc096T1ZXdjB1b1JqbFFKWTFhSzNiTzVsK2VIYjIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZjFBYWxKbVRoUVN1OTh2QUIzMnVYY1lMZG56b0RYVHlGS1puVEE3MGlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKdkQyc2tWbUVyUHZwUE1WcGNoTGNlRzV3MGxRK3dxV2VXVUp2U0FjWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik56VFdMSGhReDZ0MGhJM2x6eExEMVkzcEJNNjluZTNQalUwa1gvajFuWFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdVbmxMY2tSUUZOYUsyUVpXY1lPdEVNSEIwcVdnVjlyT01vN2kxWTduYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiai9DRzJjNjVCQ2RlSVU4aHpTOE5PMDhLMHlIWi9CRzBDVWFlUG5LbkJoWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZZTW50Sm5xTTloMWFLUnhjcXRXd2xMT2hHU0J2cUNkbWgwWDU1eFNQanNHeXpwRXNORWlaL3BYVytaY0dDQjRwaitKV1ErdGJtRXZWakx1NW43YUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJZL3ZiSXJ1L2Y1a3Y3UmR2VEp2MllheGp5dnBsY2FKZS9iMmh4dFZ5UWlrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE0MjgxNzc2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCOTdFOTAxRkMwNjY3NUFGNUE0MUFFOTQ4NzBGRDQzQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5Mjg3NTMyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNDI4MTc3NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkVGOEFDMTBGRTNFMTBCQjc2MzQ5MUEzRkNBOTlGODUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczOTI4NzUzM30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTQyODE3NzYzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkxN0IwNUNFNEUyMEQwODlBMzJFNUVGMDY1Qzk0ODEwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzkyODc1MzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE0MjgxNzc2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzMUE1RTk2REE4NDg0MjFCQzI0MUU3RDAwRjdFQTRENyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5Mjg3NTM2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLbWtMeUEtdVNhLU01c1hNV1NFQ29nIiwicGhvbmVJZCI6IjhjMWY5ZjU0LTQ1YWEtNDQ1NC04N2NiLTdmMmNkZTc4NWZmMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoLzF1MWVXNmdDMmQ2OVpvcnpNQVFzeEJ2aE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRks1VG1yTTJReStibksrTG92Q3VXN2wxTmw0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQ1QU1NRzVLIiwibWUiOnsiaWQiOiI5MjMxNDI4MTc3NjM6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2FtaXVsbGFoIERldGhvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZjc1L3dCRU43WHJiMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKdjBZd1ZYei9waWhGVUw5Y0JMZ29DdlRQVmJkR1ZJNjVtRHJ2aVVHR0V3PSIsImFjY291bnRTaWduYXR1cmUiOiJBTVpSdDNUYnhYL2o3MlFrMVEyYjZoVHpkNmhOdmJ6aFlXaTVLOWNJK015MjQ5YUFIZEQ4MEQrdmZ1ajdIN203eEZWQnF1MXIrTXpGUm9wTDZkZHdCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNmNtTGhzVGYyYjM5SVdBYzBXUTMyWk5kaGFnOW81M0M3OFVnR3RJWjNJZEtHRnA1US85cFRacCtiU1BWVTVaaEE3OUgrRUJaTnFURkdYVml3dDZUQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNDI4MTc3NjM6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2I5R01GVjgvNllvUlZDL1hBUzRLQXIwejFXM1JsU091Wmc2NzRsQmhoTSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczOTI4NzUzMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPcDYifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '923142817763';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
