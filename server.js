const express = require('express');
const bp = require('body-parser');
const path = require('path');

//const api = require('./server/routes/api');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname,'dist/justdial')));

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

//app.use('/api',api);

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/justdial/index.html'));
});

app.listen(port,function(){
    console.log("Server running on localhost:" + port);
});


