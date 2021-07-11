const { MessageEmbed, MessageAttachment } = require("discord.js");
const coeurImg = new MessageAttachment('./assets/img/coeur.png');
const { PREFIX } = require("../config");

class Info_Rencontre {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }

    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "inforencontre":
                    this.Info_Rencontre(); 
                    break; 
            }
        }
    }

    Info_Rencontre() {
        if(this.message.channel.id !== this.client.user.id) {
            if(this.message.channel.id === "863761344133857330") { 

                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "inforencontre") {
                    this.message.channel.send(
                        new MessageEmbed()
                            .setColor("#f16179")
                            .setTitle("Comment ajouter votre profil ?")
                            .setDescription("Tapez `.rencontre` et cochez la réaction `✅` pour accéder à tout le serveur et poster ton profil. \n\nJe vous enverrai des instructions en message privé, suivez les attentivement.")
                            .attachFiles(coeurImg)
                            .setThumbnail('attachment://coeur.png')

                    )
                }
            }    
        }
    }
}

module.exports ={
    Info_Rencontre
}