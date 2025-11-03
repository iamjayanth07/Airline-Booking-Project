const express= require('express');

const v1routes=require('./v1');
// const v2routes=require('./v2');

const routes=express.Router();

routes.use('/v1',v1routes);
// routes.use('/v2',v2routes);

module.exports=routes;