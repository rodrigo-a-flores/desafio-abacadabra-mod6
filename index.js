const express = require('express');
const routers = require('./routers/router.js');
const app = express();
const puerto = 3000;

app.use(express.static('assets'));
app.use('/', routers);

app.listen(puerto, ()=>{
    console.log(`server started on http://localhost:${puerto}`);
});