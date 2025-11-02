const express = require('express');

const {ServerConfig,Logger} =require('./config');
const apiroutes=require('./routes')

const app = express();

app.use('/api',apiroutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`successfully started the server on the PORT : ${ServerConfig.PORT}`);
    // Logger.info("successfully started the server" , "root", {})
})