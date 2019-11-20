

module.exports = {
   
     run: async (client, message, [ time ]) => {
      const m = await message.channel.send("Ping?");
     
      m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms.
 https://media0.giphy.com/media/11rBFQqIe47Lck/giphy.gif`);
  
          
    },
    
    conf: {},
  
        get help () {
      return {
        name: 'ping',
        category: 'Moderação',
        description: 'Latencia do bot',
        usage: `ping`
      }
    }
  }
  