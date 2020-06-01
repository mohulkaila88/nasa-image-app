if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const axios = require('axios')
const moment = require('moment');

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/', (req,res) => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=TWSAdhYGYpKTcE3jpf88jvygrYFCTKn1m2Tlm5j1`;
    axios({
        url: url,
        responseType: 'json'
    }).then(response => {
        const date = response.data.date
        const temp = res.json(response.data)
        getData(date, temp);
    })
    //.then(response => res.json(response.data))
});

function getData (date, temp){
    let dataObject = [];
    let formattedDate = moment(date).format("MMM Do YY");
    dataObject.push({'date' : formattedDate});
    dataObject.push({'data' : temp});
    return dataObject;
}
 

app.listen(3000, () => {
    console.log('Server Started');
})
