module.exports = {

    run: (client, message, args) => {
        var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("KICK_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
    if(message.mentions.users.size < 1) return message.reply("Você não mencinou ninguém")
    if(!message.guild.member(usuario).kickable) return message.reply("Eu não posso kickar essa pessoa")
    if(razão.length < 1) return message.reply("Você não colocou uma razão")

    message.guild.member(usuario).kick()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("Usuario kickado do server")
   .addField("Usuario:",usuario.username)
   .addField("Razão:", razão);

   message.channel.send(embed)

    },
conf: {},
  
    get help () {
  return {
    name: 'kick',
    category: 'Moderação',
    description: 'Expulsa um membro do servidor',
    usage: `kick [Usuario] motivo`    
  }
}

}    
