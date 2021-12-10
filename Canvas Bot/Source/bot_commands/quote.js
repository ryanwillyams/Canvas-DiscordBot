module.exports = {
    name: 'quote',
    async execute(message, args, Discord){
        const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
        let channel = message.channel.id;
    
        const res1 = await fetch('https://sponge-who.herokuapp.com/api_random', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const apiData = await res1.json();
        console.log(apiData);

        const data = ["quote: " + apiData.quote];
        console.log(data);
        const res2 = await fetch(
            `https://discordapp.com/api/channels/${channel}/messages`, {
                method: "POST",
                headers: {
                    "Authorization": `Bot ${config.TOKEN}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    content: data.toString()
                }),
            });
            console.log(channel);
    }
}
