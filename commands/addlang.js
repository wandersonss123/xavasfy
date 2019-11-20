/**
 * O Comando "addlang" adicionará os cargos aos membros.
 */

module.exports = {

  /** Primeiro o metodo run(client, message, args) será executado pelo nosso arquivo message.js
 * Que passará os argumentos atraves do middleware que programamos.
 */
  run: (client, message, args) => {
    /** Verificamos se o número de argumentos é válido. */
    if (args.length < 1) return message.reply(`?? Talvez isso possa ajudá-lo: \`\`\`${process.env.PREFIX}${module.exports.help.usage}\`\`\``)

    /** Então verificamos os argumentos e instanciamos o cargo que queremos pelo nome. */
    let langs = require('../languages.json')
    let langName = langs.map(l => l.toLowerCase()).find(l => l === args.join(' ').toLowerCase())
    let role = langName && message.guild.roles.find(r => r.name.toLowerCase() === langName)

    if (!role) {
      const emoji = message.guild.emojis.find('name', 'thonk')
      message.react(emoji || '🤔')
      return message.reply(`?? Talvez isso possa ajudá-lo: \`\`\`${process.env.PREFIX}addlang [${langs.join('|')}]\`\`\``)
    }

    /** Logo então atribuimos o cargo ao membro e mandamos uma mensagem como resposta
     * Caso o membro já possua o cargo então é enviada uma mensagem retornando.
     */
    if (!message.member.roles.has(role.id)) {
      message.member.addRole(role)
      return message.reply(`*Beep boop!@* Agora você possui o cargo **${role.name}**`)
    } else {
      return message.reply(`Você já possui esse cargo!`)
    }
  },

  /** Aqui podemos colocar mais algumas configurações do comando. */
  conf: {
    onlyguilds: true
  }
   
  

}
