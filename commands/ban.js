module.exports = {

    run: (client, message, args) => {
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
    if(message.mentions.users.size < 1) return message.reply("Você não mencinou ninguém")
    if(!message.guild.member(usuario).bannable) return message.reply("Eu não posso banir essa pessoa")
    if(razão.length < 1) return message.reply("Você não colocou uma razão")

    message.guild.member(usuario).ban()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("Usuario banido do servidor")
   .addField("Usuario:",usuario.username)
   .addField("Razão:", razão);

   message.channel.send(embed)
},
conf: {},
  
        get help () {
      return {
        name: 'ban',
        category: 'Moderação',
        description: 'Banir membro do servidor',
        usage: `ban [Usuario] motivo`
}
        }}  