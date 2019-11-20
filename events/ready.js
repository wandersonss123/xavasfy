/**
 * Evento ready. é disparado assim que o bot é conectado ao discord.
 */

module.exports = async (client) => {
  /** Então exibe uma mensagem avisando que o bot foi inizializado com sucesso. */
  console.log('log', `O Bot foi iniciado completamente com ${client.users.size} usuarios em ${client.guilds.size} servidores`)
  /** Configuramos para que apareça "Jogando ..." ou "Playing ..." */
  client.user.setPresence({ status: 'online', game: { name: process.env.GAME, type: 3 } })
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
}
