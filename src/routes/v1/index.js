const express=require('express');
const routes=express.Router();

const {InfoController} =require('../../controllers');

routes.get('/info',InfoController.info);

module.exports =routes;

