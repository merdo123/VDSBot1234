const Discord = require("discord.js");
exports.run = (client, message, args) => {
  
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("BLUE")
      .setTimestamp()
      .addField("⚠ **Uyarı** ⚠", "`rol-ver` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**")
    return message.author.send(ozelmesajuyari);
  }
  
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("❌ Bu Komutu Kullana Bilmek için `Rolleri Yönet` Yetkisine Sahip Olmalısın!")

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!user)return message.channel.send("**⚠ Kime Rol Vereceğini Yazmalısın!**")
  
  let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1])
  if (!rol) return message.channel.send("**⚠ Verilecek Rolü Yazmalısın!**")
  user.roles.add(rol)

  const embed = new Discord.MessageEmbed()
    .setDescription(`✅ | Başarıyla ${user} İsimli Kullanıcıya ${rol} İsimli Rol Verildi!`)
    .setFooter(client.user.username, client.user.avatarURL())
    .setColor("BLUE")
    .setTimestamp();
  message.channel.send(embed)
}

exports.conf = {
  aliases: ["rolver", "ra"]
}

exports.help = {
  name: "rol-ver"
}