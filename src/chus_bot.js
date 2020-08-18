const telBot = require('node-telegram-bot-api')
const token = '1382827842:AAHt1gK1HwYrpIXgIpzvdGFGCco5EtI-nmE'
const api = new telBot(token,{polling:true})

console.log("It's running.")

//Const
var chatId


// Receive messages via event callback
api.on('message', (msg) => {
    chatId = msg.chat.id
    if(msg.text.toLocaleLowerCase()=="hola"){
        api.sendMessage(chatId, "Hola");
    }
})
var gameStart = false
msg = "Inicia el juego:" + "\n"
course = "El juego en curso debe terminar."
api.onText(/\/startTric/,(game)=>{
    chatId = game.chat.id
    if(gameStart==true){
    console.log(gameStart)
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            msg += "0"
        }
        msg+="\n"
        gameStart = true
    }
    api.sendMessage(chatId,msg)
    }else{
    api.sendMessage(chatId,course)}
})

api.onText(/\/next (.+)/,(game)=>{
    chatId = game.chat.id
    if(gameStart==true){
        
    }
})


api.on('polling_error', (error) => {
    console.log(error);  // => 'EFATAL'
  });