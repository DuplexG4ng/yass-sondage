const Discord = require("discord.js");
let date = require("date-and-time")
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
const embedRouge = 0x1E90FF
const embedbleu = 0x0064ff
const prefix = 'n.'
 
bot.on('ready', () => {
  console.log("Bot YassBinks prรชt !!!")
  bot.user.setGame("Yass Server", 'https://m.twitch.tv/yassyd')
});

/*

EMBEDS

*/

const nogrosmotsEMBED = new RichEmbed()

.setTitle("`Attention`")

.setDescription("Tu ne dois pas รฉcrire d'insultes sur Namek ici, surveille ton language.")

.setColor(embedRouge)

.setTimestamp()

.setFooter("  ๐")

 

const helpembed = new RichEmbed()

.setTitle("๐  Bot ๐")

.setDescription("**Bot privรฉ de modรฉration  ๐ **\nโโโโโโโโโโโโโโโโโโโโโโโโโ\nใ:pushpin:ใ๐๐ง๐ง๐จ๐ง๐๐\n`n.say + [texte]` je dis ce que vous dites\n`n.annonce + [annonce]` je dis votre annonce\nโโโโโโโโโโโโโโโโโโโโโโโโโ\nใ:globe_with_meridians:ใ๐๐ฎ๐ญ๐ซ๐\n`n.poll + [objet du sondage]` je fais votre sondage\n`n.clear` je supprime 100 messages\n`n.info` pour en savoir plus sur moi\n`n.help` affiche ceci x)\nโโโโโโโโโโโโโโโโโโโโโโโโโ\nโฒ ๐๐๐ฉ๐ฉ๐๐ฅ : \nL๐๐ฌ ๐ฌ๐ข๐ ๐ง๐๐ฌ [ ] et < > ๐ง๐ ๐ฌ๐จ๐ง๐ญ ๐ฉ๐๐ฌ ๐๐๐ง๐ฌรฉ๐ฌ ๐๐ฉ๐ฉ๐๐ซ๐๐ข๐ญ๐ซ๐ ๐๐๐ง๐ฌ ๐ฏ๐จ๐ฌ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐๐ฌ\n")

.setColor(embedRouge)

.setTimestamp()

.setFooter(" ๐")

 

const NoAutorisationsEmbed = new RichEmbed()

.setTitle("`Erreur`")

.setColor(embedRouge)

.setDescription("Tu n'as pas le droit d'utiliser cette commande car c'est une commande rรฉservรฉe aux administrateurs du serveur.")

.setTimestamp()

.setFooter("  ๐")

/*

PAS DE GROS MOTS

*/

 

 

/*

PAS DE GROS MOTS

*/

 


bot.on('message', function (message) {
	let args = message.content.split(" ").slice(1).join(" ")
  if (message.content === prefix + 'fafafafa') {

  message.channel.send(helpembed);

}



 


  if(message.channel.type === "dm") return;


  if (message.content === 'n.asddddddddd') {
    const embed = new RichEmbed()
    .setTitle('INFORMATIONS')
    .setColor(embedRouge)
    .setThumbnail("")
    .setTimestamp()
    .setFooter("Namek Bot")
    .setDescription("**VERSION 1.0**\n**Description :** bot du serveur Namek ๐\n**Langage :** Node.Js\n**Prefixe :** `n.`\n**Crรฉateur :** Moi")
    .addField("Serveur Discord", 'https://discord.gg/wCRG5w2')
  message.channel.send(embed);
}



  if (message.content === 'n.aaaaaaassssssssss') {


      message.channel.bulkDelete(100)

      message.channel.send("`100 messages ont bien รฉtรฉ supprimรฉs.`")

   }


const etewarn = new RichEmbed()

.setTitle("UTILISATEUR AVERTI")

.setColor(embedRouge)

.setTimestamp()

.setFooter("๐๐ข๐ฎ๐ฆ๐ฌ ๐")

 


  if (message.content.startsWith('n.aaaaaaaaaaaaaaaaaaaaa')) {


    message.channel.bulkDelete(1)

    const user = message.mentions.users.first();

    let reason = message.content.split(" ").slice(2).join(" ");

    if (user) {

      const member = message.guild.member(user);

      const warnembed = new RichEmbed()

      .setTitle("`Avertissement`")

      .setDescription("**AVERTI PAR :** " + message.author.username + "\n**RAISON :** " + reason)

      .setColor(embedRouge)

      .setTimestamp()

      .setFooter("๐๐ข๐ฎ๐ฆ๐ฌ ๐")

        member.send(warnembed)

        message.channel.send(etewarn)

    }

  }




    if (message.content.startsWith('n.say')) {



      var sayresult = args

    if(!sayresult) return message.channel.send("Veuillez mettre du texte")

      message.channel.send(`${sayresult}`).catch(console.error)

      message.delete(0).catch(console.error)

    }


 

  
    if (message.content.startsWith('n.<<<<<<<<<<<<<<')) {



      var sayresult = args

      if(!sayresult) return message.channel.send("Veuillez mettre du texte")

      const embed = new RichEmbed()

      .setTitle("ANNONCE PAR " + message.author.username)

      .setDescription(`${sayresult}`)

      .setColor(embedRouge)

      .setTimestamp()

      .setFooter("ANNONCE โข ๐๐ข๐ฎ๐ฆ๐ฌ ๐")

      message.channel.send("@everyone")

      message.channel.send(embed).catch(console.error)

      message.delete(0).catch(console.error)

    }


    if (message.content === prefix + "WWWWWWWWWWWWWWWWWWW"){

        var help_embed = new Discord.RichEmbed()
        .setColor("#00D166")
        .setThumbnail("")
        .setTitle("**Vรฉrification :**")
        .addField("Hello Ladies and Gentlemen. My Name is Duplex , Nous partons en direction de ๐๐ข๐ฎ๐ฆ๐ฌ ๐  !","`Nous espรฉrons que tu vas passer un bon voyage  ! Afin de finir ce magnifique voyage il suffit dโappuyer sur la rรฉaction ci-dessous`")
        .addField("Pourquoi cette vรฉrification ?","`Tout simplement pour รฉviter les attaques robotiques sur notre serveur !`")
        .setImage('https://cdn.discordapp.com/attachments/670749541565464598/672497435787919360/giphy.gif')
        message.channel.sendMessage(help_embed)
        console.log("help")
        message.delete();
    }

  
  
    if (message.content === prefix + "FFFFFFFFFFFFFF"){


        var help_embed = new Discord.RichEmbed()

        .setColor("#FFFFFF")

        .setThumbnail("")

        .setTitle("**Rรดle Menu : Sexe**")

        .setDescription("โโโโโโโโโโโโโโโโโ")

        .addField(":mens: : `Homme`", "-")

        .addField(":womens: : `Femme`", "-")

        .addField("โโโโโโโโโโโโโโโโโ", "-")
        .setImage('https://cdn.discordapp.com/attachments/670749541565464598/672497514225729536/9fcfd0969691480c05653df42ad22662.gif')

        message.channel.sendMessage(help_embed)

        console.log("role numero 1 mon khey")

        message.delete();

    }



  
    if (message.content === prefix + "adadada"){

message.delete();

        var help_embed = new Discord.RichEmbed()

        .setColor("#FFFFFF")

        .setThumbnail("")

        .setTitle("**Rรดle Menu : Situations**")

        .setDescription("โโโโโโโโโโโโโโโโโ")

        .addField(":heart: : `En Couple`", "-")

        .addField(":black_heart: : `Compliquรฉ`", "-")

        .addField(":broken_heart: : `Cรฉlibataire`", "-")

        .addField("โโโโโโโโโโโโโโโโโ", "-")

        .setImage('https://cdn.discordapp.com/attachments/670749541565464598/672497514225729536/9fcfd0969691480c05653df42ad22662.gif')

        message.channel.sendMessage(help_embed)

        console.log("role numero 3 mon khey")

        message.delete();

    }



  
    if (message.content === prefix + "qqqqqqqqqqqqqqqqqqqqq"){

message.delete();
        var help_embed = new Discord.RichEmbed()

        .setColor("#FFFFFF")

        .setThumbnail("")

        .setTitle("**Rรดle Menu : Divers**")

        .setDescription('โโโโโโโโโโโโโโโโโ')

        .addField(":telephone: : `Trafiquant`","-")

        .addField("๐ช : `Criminel`", "-")

        .addField(":chair: : `Gardien`", "-")

        .addField("๐ฆ : `Guetteur`", "-")

        .addField("โโโโโโโโโโโโโโโโโ", "-")

        .setImage('')

        message.channel.sendMessage(help_embed)

        console.log("help")

        message.delete();

    }



    
    if (message.content === prefix + "sssssssssssssss"){

message.delete();
        var help_embed = new Discord.RichEmbed()

        .setColor("#FFFFFF")

        .setThumbnail("")

        .setTitle("**Rรดle Menu : Divers**")

        .setDescription('โโโโโโโโโโโโโโโโโ')

        .addField("โ ๏ธ : `Charbonneur`", "-")

        .addField("โ : `Tireur D'Elite`", "-")

        .addField(":dizzy: : `Mature`", "-")

        .addField(":sparkles: : `Immature`", "-")

        .addField("โโโโโโโโโโโโโโโโโ", "-")

        .setImage('https://cdn.discordapp.com/attachments/670749300854095883/670765970960416778/9fcfd0969691480c05653df42ad22662.gif')

        message.channel.sendMessage(help_embed)

        console.log("help")

        message.delete();

    }




    if (message.content === prefix + "aaaaaaaaaaaaa"){

message.delete();
        var help_embed = new Discord.RichEmbed()

        .setColor("#00D166")

        .setImage('https://media.discordapp.net/attachments/665527418907262996/665535504019750925/checkedbyhazen.gif')

        message.channel.sendMessage(help_embed)

        console.log("help")

        message.delete();

    }



if(message.content.startsWith(prefix + "dddddddddddddddd")){

message.delete();
        var help_embed = new Discord.RichEmbed()

        .setColor("#FFFFFF")

        .setImage('https://cdn.discordapp.com/attachments/670749541565464598/672497316065706024/tenor_4.gif')

        message.channel.sendMessage(help_embed)

        console.log("help")

        message.delete();

    }


       if(message.content.startsWith(prefix + "eeeeeeeeeeeeeeeeeeee")){
       	message.delete();

        var mention = message.mentions.users.first()
        if(!mention) return message.channel.send("Vous devez mentionner un joueur !").then(message => {message.delete(5000)})
        if(mention.id === message.author.id) return message.channel.send("Vous ne pouvez pas vous muter vous mรชme !").then(message => {message.delete(5000)})
        var raison = args.slice(22)
        if(!raison) return message.channel.send("Vous devez entrer une raison !").then(message => {message.delete(5000)})
        message.guild.channels.forEach(m => m.overwritePermissions(mention, {SEND_MESSAGES : false}))
        var embed = new Discord.RichEmbed()
        .setColor("00F919")
        .setTitle("Mute :")
        .addField("Joueur :",`${mention}`, true)
        .addField("Modรฉrateur :",`${message.author}`, true)
        .addField("Raison :",`${raison}`)
        message.channel.send(embed)
    }
    if(message.content.startsWith(prefix + "zzzzzzzzzzzzzzzzzzz")){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !").then(message => {message.delete(5000)})
        var mention = message.mentions.users.first()
        if(!mention) return message.channel.send("Vous devez mentionner un joueur !").then(message => {message.delete(5000)})
        if(mention.id === message.author.id) return message.channel.send("Vous ne pouvez pas vous unmute vous mรชme !").then(message => {message.delete(5000)})
        message.guild.channels.forEach(m => m.overwritePermissions(mention, {SEND_MESSAGES : true}))
        var embed = new Discord.RichEmbed()
        .setColor("00F919")
        .setTitle("Unmute :")
        .addField("Joueur :",`${mention}`, true)
        .addField("Modรฉrateur :",`${message.author}`, true)
        message.channel.send(embed)
    }
    if(message.content.startsWith(prefix + "aaaaaaaaaaaaaaa")){
        message.delete()
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !").then(message => {message.delete(5000)})
        var mention = message.mentions.users.first()
        if(!mention) return message.channel.send("Vous devez mentionner un joueur !").then(message => {message.delete(5000)})
        if(mention.id === message.author.id) return message.channel.send("Vous ne pouvez pas vous bannir vous mรชme !").then(message => {message.delete(5000)})
        var raison = args.slice(22)
        if(!raison) return message.channel.send("Vous devez mettre une raison !").then(message => {message.delete(5000)})
        var embed = new Discord.RichEmbed()
        .setColor("00F919")
        .setTitle("Ban :")
        .addField("Joueur :",`${mention}`, true)
        .addField("ID :",`${mention.id}`)
        .addField("Modรฉrateur :",`${message.author}`)
        .addField("Raison :",`${raison}`)
        message.channel.send(embed)
        mention.ban()
    }
    if(message.content.startsWith(prefix + "aaaaaaaaaaaaaaaaaaaa")){
        message.delete()
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !").then(message => {message.delete(5000)})
        var mention = message.mentions.users.first()
        if(!mention) return message.channel.send("Vous devez mentionner un joueur !").then(message => {message.delete(5000)})
        if(mention.id === message.author.id) return message.channel.send("Vous ne pouvez pas vous kick vous mรชme !").then(message => {message.delete(5000)})
        var raison = args.slice(22)
        if(!raison) return message.channel.send("Vous devez mettre une raison !").then(message => {message.delete(5000)})
        var embed = new Discord.RichEmbed()
        .setColor("00F919")
        .setTitle("Kick :")
        .addField("Joueur :",`${mention}`, true)
        .addField("ID :",`${mention.id}`)
        .addField("Modรฉrateur :",`${message.author}`)
        .addField("Raison :",`${raison}`)
        message.channel.send(embed)
       mention.kick()
    }

    if(message.content.startsWith(prefix + "crรฉation")){
        let mention = message.mentions.users.first() || message.author
        message.channel.send({embed:{
            color:0x00f919,
            description:mention + " a crรฉรฉ son compte ร  " + date.format(mention.createdAt,"hh:mm") + " le " + date.format(mention.createdAt,"DD/MM/YYYY") + " !" 
        }})
    }


 
      
    
      if (message.content.startsWith('n.poll')) {
        

message.delete();
        let cont = message.content.slice(prefix.length).split(" ");

        let arg = cont.slice(1);

        if (!arg) return message.reply(`Usage: ${prefix}poll [objet du sondage]`);

        if (!message.content.includes("?")) return message.reply('Met un "?" dans ton sondage!');

        let pollem = new Discord.RichEmbed()

        .setColor(embedRouge)

        .setTitle(`:ballot_box: ${message.author.username} ร  commencรฉ un sondage :`)

        .setDescription(`${arg.join(" ")}`)

        .setFooter(`Vote avec โ pour "Oui", โ pour "Non" `)

        .setTimestamp()

 

    message.channel.send(pollem).then(async message => {

      await message.react("โ")

     await message.react("โ")

 

   })

    }
})


bot.login(process.env.TOKEN) 