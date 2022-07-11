const quotes = require('./db.json')
let quoteTotal = 6

module.exports = {

    // do not change this code use this code as inspiration
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
        const fortunes = ["You will find glory in Valhalla", "Your shoe lace will come undone at some point today", "You will meet someone who will change your life, they're waiting in the mirror","You will find a way through your struggles today", "You'll change the world some day", "...","You will code today", "You will make someone laugh today"];

        let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomFortuneIndex];

        res.status(200).send(randomFortune)
    },

    getQuotes: (req, res) => {
        // let { quote, by } = req.params
        
        res.status(200).send(quotes)
    },

    deleteQuote: (req, res) => {
        let index = quotes.findIndex(elem => elem.id === +req.params.id)
        quotes.splice(index, 1)

        res.status(200).send(quotes)
    },

    postQuote: (req,res) => {
        let { id, quote, by } = req.params
        let newQuote = {
            id: quoteTotal,
            quote,
            by
        }
        quotes.push(newQuote)
        res.status(200).send(quotes)
        quoteTotal++
    },

    // modify piece
    putQuote: (req,res) => {
        let { id } = req.params
        let { type } = req.body
        let index = quotes.findIndex(elem=> +elem.id === +id)

        if (quotes[index].quote !== changeQuote) {
            quotes[index].quote = changeQuote
            res.status(200).send(quotes)
        } else if (quotes[index].by !== chaneBy) {
            quotes[index].by = changeBy
            res.status(200).send(quotes)
        } else if (quotes[index].quote === changeQuote || quotes[index].by === chaneBy) {
            alert('This is the same, please change only what\'s wrong.')
            res.status(200).send(quotes)
        } else {
            res.status(400).send(alert('Should turn around before you break something. This code isn\'t perfect, friend.'))
        }

        res.status(200).send(quotes)
    }

}

// get, post, put, and delete are required!!!!!!!!

// app.get
