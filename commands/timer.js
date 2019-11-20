/**
 * O comando timer deleta a sua ultima mensagem após uma quantia de tempo
 */

module.exports = {
  run: async (client, message, [ time ]) => {
    await message.delete()
    const messages = await message.channel.fetchMessages({ limit: 100 })
    const userMessages = messages.filter((m) => m.author === message.author && m.deletable)
    if (userMessages === 0) return message.reply('Não encontrei nenhuma mensagem recente para apagar.')
    const target = userMessages.first()
    if (!target.deletable) return message.reply('Eu não consigo apagar a sua ultima mensagem.')
    if (!time) return message.reply('Por favor especifique um tempo em segundos.')
    time = parseInt(time)
    if (!Number.isInteger(time)) return message.reply('Por favor especifique um tempo válido.')
    setTimeout(() => {
      if (target.deletable) target.delete()
    }, time * 1000)
    const sent = await message.reply(`Sua ultima mensagem será apagada em ${time} segundos.`)
    setTimeout(() => sent.delete(), 3000)
  },

  conf: {
    onlyguilds: true
  },

  help: {
    name: 'timer',
    category: '',
    description: 'Apaga uma mensagem enviada por você após X segundos.',
    usage: 'timer [segundos]'
  }
}
