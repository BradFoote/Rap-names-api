const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Avraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'    
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}
app.get('/', (request, response) => {
    //telling the server to start looking in the directory
    //and where to find the inddex.html file
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    //repsonding with json is responding with the object
    const rapperName = request.params.name.toLowerCase()
    if(rappers [rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    //listen is a smurf 
    console.log(`The server is now runnong on port ${PORT}. You better go catch it`)
})