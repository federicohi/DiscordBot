const { Intents, Client } = require('discord.js');

// wordss i have to replace: **"+ sender +"**, **The Wise**, Matrix, The Hand of **The Wise**

/*
let winner = [
    "**"+ sender +"** : What is happening to me?\n**The Wise** : You are the One, **"+ sender +"**. You see, you may have spent the last few years looking for me, but I have spent my entire life looking for you."
]
*/
//console.log(quotes[4])

const client = new Client({
    intents: [
       Intents.FLAGS.GUILDS,
       Intents.FLAGS.GUILD_MESSAGES,
    ]
});

lastRandomNr = ""

client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    if(msg.content.startsWith("/wisdom", "/Wisdom")) {
        let sender = String(msg.author.username)

        let quotes = [
            "**"+ sender +"** : What are you trying to tell me? That I can dodge bullets? \n**The Wise** : No, **"+ sender +"**. I'm trying to tell you that when you're ready, you won't have to.",
            "**The Wise** : **"+ sender +"**, sooner or later you're going to realize just as I did that there's a difference between knowing the path and walking the path.",
            "**The Wise** : What is real? How do you define 'real'? If you're talking about what you can feel, what you can smell, what you can taste and see, then 'real' is simply electrical signals interpreted by your brain.",
            "**The Wise** : You have to let it all go, **"+ sender +"**. Fear, doubt, and disbelief. Free your mind.",
            "**The Wise** : I imagine that right now, you're feeling a bit like Alice. Hmm? Tumbling down the rabbit hole?\n**"+ sender +"** : You could say that. \n**The Wise** : I see it in your eyes. You have the look of a man who accepts what he sees because he is expecting to wake up. Ironically, that's not far from the truth. Do you believe in fate, **"+ sender +"**?",
            "**"+ sender +"** : The Matrix.\n**The Wise** : Do you want to know what it is?\n**"+ sender +"** : Yes.",
            "**The Wise** : The Matrix is everywhere. It is all around us. Even now, in this very room. You can see it when you look out your window or when you turn on your television. You can feel it when you go to work... when you go to church... when you pay your taxes. It is the world that has been pulled over your eyes to blind you from the truth.",
            "**The Wise** : That you are a slave, **"+ sender +"**. Like everyone else you were born into bondage. Into a prison that you cannot taste or see or touch. A prison for your mind.",
            "**The Wise** : Have you ever had a dream, **"+ sender +"**, that you were so sure was real? What if you were unable to wake from that dream? How would you know the difference between the dream world and the real world?",
            "**"+ sender +"** : Why do my eyes hurt?\n**The Wise** : You've never used them before.",
            "**"+ sender +"** : I thought it wasn't real\n**The Wise** : Your mind makes it real\n**"+ sender +"** : If you're killed in the matrix, you die here?\n**The Wise** : The body cannot live without the mind",
            "**The Wise** : I'm trying to free your mind, **"+ sender +"**. But I can only show you the door. You're the one that has to walk through it.",
            "**"+ sender +"** : This... this isn't the Matrix?\n**The Wise** : No. It is another training program designed to teach you one thing: if you are not one of us, you are one of them.",
            "**The Wise** : Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.",
            "**The Hand of The Wise** : What's he doing?\n**The Wise** : He's beginning to believe.",
            "**The Wise** : [to **"+ sender +"** who is choosing the red pill]  Remember... all I'm offering is the truth. Nothing more.",
            "**The Wise** : Throughout human history, we have been dependent on machines to survive. Fate, it seems, is not without a sense of irony.",
            "**The Wise** : You've been living in a dream world, **"+ sender +"**.",
            "**The Wise** : Don't think you are. Know you are!",
            "**The Wise** : What is 'real'? How do you define 'real'?",
            "**"+ sender +"** : What did she tell you?\n**The Wise** : That I would find the One.",
            "**"+ sender +"** : I can't go back, can I?\n**The Wise** : No. But if you could, would you really want to?"
        
        ]

        randomNumber = Math.floor(Math.random() * quotes.length)
        while (randomNumber == lastRandomNr) {
            randomNumber = Math.floor(Math.random() * quotes.length)
        }
        msg.reply(quotes[randomNumber])
        lastRandomNr = randomNumber
        console.log(msg.author.username)
        
    }
})


client.once('ready', () => {
    console.log('Im here')
})

//token

token = ""

.listen(process.env.PORT || 5000)
client.login(process.env.DISCORDJS_Token);
