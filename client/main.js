
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById('fortuneButton')

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
}

fortuneBtn.addEventListener('click', getFortune)






const getAllQuotes = () => {
    axios.get(`http://localhost:4000/api/quotes`)
    .then(quoteCallBack)
}

const quoteDisplay = document.querySelector('.displayQuotesHere')


const createDisplay = (body) => {
    console.log('what up doc')
    // axios.post("http://localhost:4000/api/quotes")
    const quotePiece = docuemnt.createElement('div')
    quotePiece.classList.add('display')

    quotePiece.innerHTML = `
        <h4>${quotes.quote}</h4>
        <h3>Quote by: ${quotes.by}</h3>
        <input placeholder="Quote wrong? Type in here the correction" id="quoteCorrectionInput">
        <button id="quoteCorrectionButton">Correct quote</button>
        <input placeholder="Correct the author's name here" id="byCorrectionInput">
        <button id="byCorrectionButton">Correct author name</button>
        <button id="deleteQuote">Be gone quote!</button>
    `
    
    quoteDisplay.appendChild(quotePiece)
}



const getQuotesDisplay = (arr) => {
    // quoteDisplay.innerHTML = ''
    for(let i = 0; i<arr.length; i++) {
        createDisplay(arr[i])
    }
}












const deleteBtn = document.getElementById('deleteQuote')

const deleteQuote = (id) => {
    axios.delete("http://localhost:4000/api/quotes/:id")
    .then((res) => {
        console.log(res.data)
    })
}

deleteBtn.addEventListener('click', deleteQuote)









const submitQuoteBtn = document.getElementById('submit')
//post means to post a new quote to those already there
const postQuote = () => {
    let quoteSub = document.querySelector('#quoteInput')
    let byInput = document.querySelector('#byinput')

    let quoteObj = {
        quote: quoteSub.value,
        by: byInput.value
    }

    axios.post("http://localhost:4000/api/quotes", quoteObj)
    .then((res) => {
        console.log(res.data)
    })

    quoteSub.value = ''
    byInput.value = ''
}







//put means to modify what's already there! Stopping mixing it up, please.
const putQuote = () => {
    axios.put("http://localhost:4000/api/quotes", quoteUpdate)
    .then((res) => {
        console.log(res.data)
    })

}

submitQuoteBtn.addEventListener('click', postQuote)






