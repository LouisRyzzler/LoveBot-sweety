const { MessageEmbed, MessageAttachment } = require("discord.js");
const pecheImg = new MessageAttachment('./assets/img/84451.png');
const ceriseImg = new MessageAttachment('./assets/img/7889.png');
const melonImg = new MessageAttachment('./assets/img/5556.png');
const raisinImg = new MessageAttachment('./assets/img/765560.png');
const { PREFIX } = require("../config");

class Rencontre {
    constructor(message, client) {
        this.client = client;
        this.message = message;
        this.args = message.content.slice().split(/ /).filter(element => element !== '');
    }

    
    selector() {
        if(this.message.author.id !== this.client.user.id) {
            switch(this.args[0]) {
                case PREFIX + "rencontre":
                    this.rencontre(); 
                    break; 
            }
        }
    }

    rencontre() {
        if(this.message.author.id !== this.client.user.id) {
            if(this.message.channel.id === "863761344133857330") {

                this.message.delete().then().catch(console.error)
                if(this.args[0] === PREFIX + "rencontre") {
                    
                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .addFields(
                                {
                                    name: "Bonjour à vous, complétez la question suivante avec une courte phrase:",
                                    value: "Nom/Prénom/Âge.",
                                    inline: false
                                }
                            )
                    ).then(async (message) => {
                        const filter = message => message.author.id === this.message.author.id;

                        let reply1 = await message.channel.awaitMessages(filter,  {
                            maxProcessed: 1,
                            time: 3600000,
                            errors: ["time"]
                        });

                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .addFields(
                                {
                                    name: "Complétez la question suivante avec une courte phrase:",
                                    value: "Situation professionnelle.",
                                    inline: false
                                }
                            )
                    ).then(async (message) => {
                        const filter = message => message.author.id === this.message.author.id;

                        let reply2 = await message.channel.awaitMessages(filter,  {
                            maxProcessed: 1,
                            time: 3600000,
                            errors: ["time"]
                        });

                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .addFields(
                                {
                                    name: "Complétez la question suivante avec une courte phrase:",
                                    value: "Vous logez: Chez vous/ Chez vos parents/ En collocation.",
                                    inline: false
                                }
                            )
                    ).then(async (message) => {
                        const filter = message => message.author.id === this.message.author.id;

                        let reply3 = await message.channel.awaitMessages(filter,  {
                            maxProcessed: 1,
                            time: 3600000,
                            errors: ["time"]
                        });      
                        
                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .addFields(
                                {
                                    name: "Complétez la question suivante avec une courte phrase:",
                                    value: "Nom de l'agglomération la plus proche. \n*Ne divulguez jamais votre adresse*",
                                    inline: false
                                }
                            )
                    ).then(async (message) => {
                        const filter = message => message.author.id === this.message.author.id;

                        let reply4 = await message.channel.awaitMessages(filter,  {
                            maxProcessed: 1,
                            time: 3600000,
                            errors: ["time"]
                        });   
                        
                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .addFields(
                                {
                                    name: "Complétez la question suivante avec une courte phrase:",
                                    value: "Votre orientation sexuelle.",
                                    inline: false
                                }
                            )
                    ).then(async (message) => {
                        const filter = message => message.author.id === this.message.author.id;

                        let reply5 = await message.channel.awaitMessages(filter,  {
                            maxProcessed: 1,
                            time: 3600000,
                            errors: ["time"]
                        });    

                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .addFields(
                                {
                                    name: "Complétez la question suivante avec une courte phrase:",
                                    value: "Vôtre rayon de déplacement.",
                                    inline: false
                                }
                            )
                    ).then(async (message) => {
                        const filter = message => message.author.id === this.message.author.id;

                        let reply6 = await message.channel.awaitMessages(filter,  {
                            maxProcessed: 1,
                            time: 3600000,
                            errors: ["time"]
                        });    

                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .addFields(
                                {
                                    name: "Complétez la question suivante avec une courte phrase:",
                                    value: "Décrivez vous brièvement.",
                                    inline: false
                                }
                            )
                    ).then(async (message) => {
                        const filter = message => message.author.id === this.message.author.id;

                        let reply7 = await message.channel.awaitMessages(filter,  {
                            maxProcessed: 1,
                            time: 3600000,
                            errors: ["time"]
                        });    

                    this.message.author.send(
                        new MessageEmbed()
                            .setColor("#2f3136")
                            .setDescription("**Envoyez une photo de vous afin de finaliser la description.**")
                    ).then(async (message) => {
                        const filter = message => message.author.id === this.message.author.id;

                        let reponse = await message.channel.awaitMessages(filter, {
                            maxProcessed: 1,
                            time: 3600000,
                            errors: ["time"]
                        });

                        this.message.author.send(
                            new MessageEmbed()
                                .setColor("#2f3136")
                                .addFields(
                                    {
                                        name: "Cochez ce que vous recherchez.",
                                        value: "Réagissez avec 🍑 pour recherchez un coup d'un soir. \nRéagissez avec 🍒 pour rechercher votre moitié. \nRéagissez avec 🍉 pour rechercher un sexfirend. \nRéagissez avec 🍇 pour rechercher des amitiés.",
                                        inline: false
                                    }
                                )
                        ).then(async (message) => {
                            await message.react('🍑').then().catch(console.error);
                            await message.react('🍒').then().catch(console.error);
                            await message.react('🍉').then().catch(console.error);
                            await message.react('🍇').then().catch(console.error);

                            const filter = (reaction, user) => reaction.emoji.name ===  "🍑" ||
                                reaction.emoji.name === "🍒" ||
                                reaction.emoji.name === "🍉" ||
                                reaction.emoji.name === "🍇" &&
                                user.id === this.message.author.id;

                            await message.awaitReactions(filter, {
                                max: 1,
                                errors: ["max"]
                            }).then(async collected => {
                                switch (collected.first().emoji.name) {
                                    case "🍑":
                                        this.message.author.send(
                                            new MessageEmbed()
                                                .setColor("#2f3136")
                                                .addFields(
                                                    {
                                                        name: "Confirmer ou non la réaction du sondage.",
                                                        value: "Réagis par ✅ pour confirmer ; Réagis par ❌ pour avorter.",
                                                        inline: false
                                                    }
                                                )
                                        ).then(async (message) => {
                                            await message.react('✅').then().catch(console.error);
                                            await message.react('❌').then().catch(console.error);

                                            const filter = (reaction, user) => reaction.emoji.name === "✅" ||
                                                reaction.emoji.name === "❌" &&
                                                user.id === this.message.author.id;

                                            await message.awaitReactions(filter, {
                                                max: 1,
                                                errors: ["max"]
                                            }).then(async collected => {
                                                switch (collected.first().emoji.name) {
                                                    case "✅":
                                                        let guild = this.client.guilds.cache.some(fn => fn.id === "834348938584522782") ? this.client.guilds.cache.get("834348938584522782") : null;
                                                        if(guild !== null) {
                                                            let channel = guild.channels.cache.some(fn => fn.id === "863761452980240384") ? guild.channels.cache.get("863761452980240384") : null;
                                                            if(channel !== null) {
                                                                channel.send(
                                                                    new MessageEmbed()
                                                                    .setColor("#ff9e80")
                                                                    .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                                    .setDescription(`**Nom/Prénom/Âge** \n${(reply1.first().content)} \n─────────────────────── \n${(reply2.first().content)} \n${(reply3.first().content)} \n${(reply4.first().content)} \n${(reply5.first().content)} \n${(reply6.first().content)} \n${(reply7.first().content)}` + `\n\n Auteur: ${this.message.author}`)
                                                                    .attachFiles(pecheImg)
                                                                    .setThumbnail('attachment://84451.png')
                                                                    .setImage(reponse.first().attachments.array()[0].proxyURL)
                                                                    .setFooter(this.message.guild.name, this.message.guild.iconURL()) 
                                                                ).then(async (message) => {
                                                                    await message.react('❌').then().catch(console.error);
                                                                    await message.react('❤️').then().catch(console.error);
                                                                    await message.react('💛').then().catch(console.error);

                                                                    const filter = (reaction, user) => reaction.emoji.name === "❌" ||
                                                                        reaction.emoji.name === "❤️" ||
                                                                        reaction.emoji.name === "💛" &&
                                                                        user.id === this.message.author.id;

                                                                    await message.awaitReactions(filter, {
                                                                        max: 1,
                                                                        errors: ["max"]
                                                                    })
                                                                })
                                                            }
                                                        }
                                                        message.edit(
                                                            `Vous avez ajouté avec succès votre présentation !`
                                                        ).then().catch(console.error);
                                                        break;
                                                    case "❌":
                                                        await this.message.author.send(
                                                            `WARNING: Vous avez décidé d'annuler l'opération.`
                                                        ).then().catch(console.error);
                                                        break;
                                                };
                                            });
                                        }).then().catch(console.error);
                                        break;
                                    case "🍒":
                                        this.message.author.send(
                                            new MessageEmbed()
                                                .setColor("#2f3136")
                                                .addFields(
                                                    {
                                                        name: "Confirmer ou non la réaction du sondage.",
                                                        value: "Réagis par ✅ pour confirmer ; Réagis par ❌ pour avorter.",
                                                        inline: false
                                                    }
                                                )
                                        ).then(async (message) => {
                                            await message.react('✅').then().catch(console.error);
                                            await message.react('❌').then().catch(console.error);

                                            const filter = (reaction, user) => reaction.emoji.name === "✅" ||
                                                reaction.emoji.name === "❌" &&
                                                user.id === this.message.author.id;

                                            await message.awaitReactions(filter, {
                                                max: 1,
                                                errors: ["max"]
                                            }).then(async collected2 => {
                                                switch (collected2.first().emoji.name) {
                                                    case "✅":
                                                        let guild = this.client.guilds.cache.some(fn => fn.id === "834348938584522782") ? this.client.guilds.cache.get("834348938584522782") : null;
                                                        if(guild !== null) {
                                                            let channel = guild.channels.cache.some(fn => fn.id === "863761452980240384") ? guild.channels.cache.get("863761452980240384") : null;
                                                            if(channel !== null) {
                                                                channel.send(
                                                                    new MessageEmbed()
                                                                .setColor("#db4437")
                                                                .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                                .setDescription(`${(reply1.first().content)} \n${(reply2.first().content)} \n${(reply3.first().content)} \n${(reply4.first().content)} \n${(reply5.first().content)} \n${(reply6.first().content)} \n${(reply7.first().content)}` + `\n\n Auteur: ${this.message.author}`)
                                                                .attachFiles(ceriseImg)
                                                                .setThumbnail('attachment://7889.png')
                                                                .setImage(reponse.first().attachments.array()[0].proxyURL)
                                                                .setFooter(this.message.guild.name, this.message.guild.iconURL())
                                                                ).then(async (message) => {
                                                                    await message.react('❌').then().catch(console.error);
                                                                    await message.react('❤️').then().catch(console.error);
                                                                    await message.react('💛').then().catch(console.error);

                                                                    const filter = (reaction, user) => reaction.emoji.name === "❌" ||
                                                                        reaction.emoji.name === "❤️" ||
                                                                        reaction.emoji.name === "💛" &&
                                                                        user.id === this.message.author.id;

                                                                    await message.awaitReactions(filter, {
                                                                        max: 1,
                                                                        errors: ["max"]
                                                                    })
                                                                })
                                                            }
                                                        }
                                                        message.edit(
                                                            `Vous avez ajouté avec succès votre présentation !`
                                                        ).then().catch(console.error);
                                                        break;
                                                    case "❌":
                                                        await this.message.author.send(
                                                            `WARNING: Vous avez décidé d'annuler l'opération.`
                                                        ).then().catch(console.error);
                                                        break;  
                                                };
                                            });
                                        }).then().catch(console.error);
                                        break; 
                                    case "🍉":
                                        this.message.author.send(
                                            new MessageEmbed()
                                                .setColor("#2f3136")
                                                .addFields(
                                                    {
                                                        name: "Confirmer ou non la réaction du sondage.",
                                                        value: "Réagis par ✅ pour confirmer ; Réagis par ❌ pour avorter.",
                                                        inline: false
                                                    }
                                                )
                                        ).then(async (message) => {
                                            await message.react('✅').then().catch(console.error);
                                            await message.react('❌').then().catch(console.error);

                                            const filter = (reaction, user) => reaction.emoji.name === "✅" ||
                                                reaction.emoji.name === "❌" &&
                                                user.id === this.message.author.id;

                                            await message.awaitReactions(filter, {
                                                max: 1,
                                                errors: ["max"]
                                            }).then(async collected3 => {
                                                switch (collected3.first().emoji.name) {
                                                    case "✅":
                                                        let guild = this.client.guilds.cache.some(fn => fn.id === "834348938584522782") ? this.client.guilds.cache.get("834348938584522782") : null;
                                                        if(guild !== null) {
                                                            let channel = guild.channels.cache.some(fn => fn.id === "863761452980240384") ? guild.channels.cache.get("863761452980240384") : null;
                                                            if(channel !== null) {
                                                                channel.send(
                                                                    new MessageEmbed()
                                                                .setColor("#f05b5a")
                                                                .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                                .setDescription(`${(reply1.first().content)} \n${(reply2.first().content)} \n${(reply3.first().content)} \n${(reply4.first().content)} \n${(reply5.first().content)} \n${(reply6.first().content)} \n${(reply7.first().content)}` + `\n\n Auteur: ${this.message.author}`)
                                                                .attachFiles(melonImg)
                                                                .setThumbnail('attachment://5556.png')
                                                                .setImage(reponse.first().attachments.array()[0].proxyURL)
                                                                .setFooter(this.message.guild.name, this.message.guild.iconURL())
                                                                ).then(async (message) => {
                                                                    await message.react('❌').then().catch(console.error);
                                                                    await message.react('❤️').then().catch(console.error);
                                                                    await message.react('💛').then().catch(console.error);

                                                                    const filter = (reaction, user) => reaction.emoji.name === "❌" ||
                                                                        reaction.emoji.name === "❤️" ||
                                                                        reaction.emoji.name === "💛" &&
                                                                        user.id === this.message.author.id;

                                                                    await message.awaitReactions(filter, {
                                                                        max: 1,
                                                                        errors: ["max"]
                                                                    })
                                                                })
                                                            }
                                                        }
                                                        message.edit(
                                                            `Vous avez ajouté avec succès votre présentation !`
                                                        ).then().catch(console.error);
                                                        break;
                                                    case "❌":
                                                        await this.message.author.send(
                                                            `WARNING: Vous avez décidé d'annuler l'opération.`
                                                        ).then().catch(console.error);
                                                        break;
                                                }; 
                                            });
                                        }).then().catch(console.error);
                                        break;    
                                    case "🍇":
                                        this.message.author.send(
                                            new MessageEmbed()
                                                .setColor("#2f3136")
                                                .addFields(
                                                    {
                                                        name: "Confirmer ou non la réaction du sondage.",
                                                        value: "Réagis par ✅ pour confirmer ; Réagis par ❌ pour avorter.",
                                                        inline: false
                                                    }
                                                )
                                        ).then(async (message) => {
                                            await message.react('✅').then().catch(console.error);
                                            await message.react('❌').then().catch(console.error);

                                            const filter = (reaction, user) => reaction.emoji.name === "✅" ||
                                                reaction.emoji.name === "❌" &&
                                                user.id === this.message.author.id;

                                            await message.awaitReactions(filter, {
                                                max: 1,
                                                errors: ["max"]
                                            }).then(async collected4 => {
                                                switch (collected4.first().emoji.name) {
                                                    case "✅":
                                                        let guild = this.client.guilds.cache.some(fn => fn.id === "834348938584522782") ? this.client.guilds.cache.get("834348938584522782") : null;
                                                        if(guild !== null) {
                                                            let channel = guild.channels.cache.some(fn => fn.id === "863761452980240384") ? guild.channels.cache.get("863761452980240384") : null;
                                                            if(channel !== null) {
                                                                channel.send(
                                                                    new MessageEmbed()
                                                                    .setColor("#9266cc")
                                                                    .setAuthor(this.message.author.username, this.message.author.avatarURL())
                                                                    .setDescription(`${(reply1.first().content)} \n${(reply2.first().content)} \n${(reply3.first().content)} \n${(reply4.first().content)} \n${(reply5.first().content)} \n${(reply6.first().content)} \n${(reply7.first().content)}` + `\n\n Auteur: ${this.message.author}`)
                                                                    .attachFiles(raisinImg)
                                                                    .setThumbnail('attachment://765560.png')
                                                                    .setImage(reponse.first().attachments.array()[0].proxyURL)
                                                                    .setFooter(this.message.guild.name, this.message.guild.iconURL())
                                                                ).then(async (message) => {
                                                                    await message.react('❌').then().catch(console.error);
                                                                    await message.react('❤️').then().catch(console.error);
                                                                    await message.react('💛').then().catch(console.error);

                                                                    const filter = (reaction, user) => reaction.emoji.name === "❌" ||
                                                                        reaction.emoji.name === "❤️" ||
                                                                        reaction.emoji.name === "💛" &&
                                                                        user.id === this.message.author.id;

                                                                    await message.awaitReactions(filter, {
                                                                        max: 1,
                                                                        errors: ["max"]
                                                                    })
                                                                })
                                                            }
                                                        }
                                                        message.edit(
                                                            `Vous avez ajouté avec succès votre présentation !`
                                                        ).then().catch(console.error);
                                                        break;
                                                    case "❌":
                                                        await this.message.author.send(
                                                            `WARNING: Vous avez décidé d'annuler l'opération.`
                                                        ).then().catch(console.error);
                                                        break;   
                                                };
                                            });
                                        }).then().catch(console.error);
                                        break;   

                                };  
                            })
                        })  
                    }) 
                    })
                    })
                    })
                    })
                    })
                    })
                    }) 
                }
            }
        }
    }
}  

module.exports ={
    Rencontre
}