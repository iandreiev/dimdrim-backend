const express = require('express'),
    app = express(),
    server = require('http').createServer(app)
    io = require('socket.io')(server, {cors: {origin: "*"}})

app.get('/socket', (req,res)=>{
    res.status(200).json({socket:'working'})
})