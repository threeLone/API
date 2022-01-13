const bodyParser = require('body-parser');
const cros = require('cors')
const express = require('express');
const mysql =  require('mysql')


const db = mysql.createPool({
    host : 'localhost',
    database: 'asks',
    user: 'root',
    password: '$127.0.0.11#'

})

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cros())


app.post('/api/application/',(req)=>{

    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    

    const data = "INSERT INTO emails(fname,lname,email) VALUES (?,?,?)"
    db.query(data,[fname,lname,email] ,(error,results,res)=>{
        res.json(results)
        if (error) throw error
        
    })
})





app.listen(8081, ()=> console.log('alive on http://127.0.0.1:8081'))