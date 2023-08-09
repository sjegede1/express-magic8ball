const express = require("express");

const app = express();

const PORT = 3000;


app.get('/greeting', (req,res) => {
    res.send(`<h1>Hello Stranger</h1>`)
})

app.get('/greeting/:name',(req,res) => {
    res.send(`<h1>Hello there ${req.params.name}</h1>`)
})

app.get('/tip/:total/:tipPercentage',(req,res) => {
    let {total, tipPercentage} = req.params
    res.send(`<h1>Your tip is $${total*tipPercentage/100}</h1>`)
})

app.get('/magic/:question',(req,res) => {
    let phrases = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    const randomNumberGenerator = (min,max) => {return min + Math.floor(Math.random()*(max-min))}
    res.send(`<h1>${req.params.question} <br /> ${phrases[randomNumberGenerator(0,phrases.length)]}</h1>`)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
   });