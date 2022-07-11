const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getCompliment,
    getFortune,
    getQuotes,
    deleteQuote,
    postQuote,
    putQuote
 } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/quotes", getQuotes)
app.delete('/api/quotes/:id', deleteQuote)
app.post('/api/quotes', postQuote)
app.put('/api/quotes/:id', putQuote)



app.listen(4000, () => console.log("Server running on 4000"));

