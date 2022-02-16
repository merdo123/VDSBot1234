const Discord = require('discord.js')
exports.run = (client, message, args) => {

if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Yetersiz Yetki!")

let csd = args.slice(0).join(" ")
if(!csd) return message.reply("Lütfen Bir Duyuru Metni Yaz!")
message.delete({timeout:1000})
  message.channel.send(new Discord.MessageEmbed()
.setTitle("Duyuru Sistemi")
.setColor("BLUE")
.setThumbnail(message.guild.iconURL() || client.user.avatarURL())
.setDescription(csd)
.setImage(message.guild.iconURL() || client.user.avatarURL())
.setFooter(message.author.username+" Duyurdu!")
.setTimestamp())
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
}

exports.help = {
  name: 'duyuru'
}