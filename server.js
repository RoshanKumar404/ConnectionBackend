const express = require('express')
//const cors = require('cors');


const app = express()
//app.use(cors());
app.get('/', (req, res) => {
    res.send("jai sri Ram")
});

app.get('/api/name', (req, res) => {
    const names = [
        {
            id: 1,
            nmae: "roshan",
            title: "kumar"
        },
        {
            id: 2,
            nmae: "ritit",
            title: "kumar"
        },
        {
            id: 3,
            nmae: "ritika",
            title: "kumar"
        },
        {
            id: 4,
            nmae: "randboe",
            title: "kumar"
        },
        {
            id: 5,
            nmae: "rokdkj",
            title: "kumar"
        },
        {
            id: 6,
            nmae: "roshsfan",
            title: "kumar"
        },
        {
            id: 7,
            nmae: "rohan",
            title: "kumar"
        },


    ]

    res.send(names)
})
const port= process.env.PORT || 3000;
app.listen(port, () => {
    console.log("its working");

})

