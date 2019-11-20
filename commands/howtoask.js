/**
* O Comando "howtoask" vai enviar uma mensagem ao usuário mostrando como o mesmo deve realizar uma pergunta.
*/

module.exports = {
  /**
    * Primeiro o metodo run(client, message, args) será executado pelo nosso arquivo message.js
    * Que passará os argumentos atraves do middleware que programamos.
    */
  run: function (client, message, args) {
    // Criando embed que sera enviado para o usuário
    let embed = {
      title: 'Como Perguntar',
      description: '1. Descreva seu problema de forma simples e objetiva.\n2. Sempre procure mandar um exemplo mínimo e reprodutível do problema.\n3. Sempre que compartilhar código, use as tags de Markdown apropriadas.\n\n**Links:** [How to ask](https://stackoverflow.com/help/how-to-ask) e [Markdown](https://gist.github.com/Almeeida/41a664d8d5f3a8855591c2f1e0e07b19#code-blocks)',
      color: 0xB1103C
    }

    // Aqui será enviado o embed no canal que o usuário executo o comando
    message.channel.send({ embed })
  },
  /**
    * Aqui podemos colocar mais algumas configurações do comando.
    */
  conf: {
    
  }
}
