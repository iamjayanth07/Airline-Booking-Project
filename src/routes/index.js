const express= require('express');

const v1routes=require('./v1');

const routes=express.Router();

routes.use('/v1',v1routes);

module.exports=routes;