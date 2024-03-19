//import  json server

const jsonServer = require('json-server')

//create server using create function  json server libary stored mediaplayerserver
const mediaPlayerserver = jsonServer.create()
//crate path for db.json file
const router=jsonServer.router('db.json')

//create middleware to convert json to js
//middlewear function aboloty to  controll request 
const middleware =jsonServer.defaults()

//connect  to router
mediaPlayerserver.use(middleware)
mediaPlayerserver.use(router)

//setup port for server   env is used for clash of run solved , particular port are in one application 
const port = 4000 ||process.env.PORT


//server run-
mediaPlayerserver.listen(port,()=>{
    console.log('media player server successfull runing');
})
