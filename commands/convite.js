
    module.exports = {
   
        run: async (client, message, [ time ]) => {
            const m = await message.channel.send("Convite do bot https://discordapp.com/oauth2/authorize?=&client_id=646053247492161556&scope=bot&permissions=8");
     
             
       },
       
       conf: {},
     
           get help () {
         return {
           name: 'convite',
           category: 'Moderação',
           description: 'Convide o bot para seu servidor',
           usage: `convite`
         }
       }
     }