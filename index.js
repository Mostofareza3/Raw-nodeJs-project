
//dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
const environment = require('./helpers/environtments');
const data = require('./lib/data')



//app object - module scaffolding
const app = {};

//testing file system
// data.create('test','newFile',{'name':'bangladesh', 'language':'Bangla'},(err, result)=>{
//     console.log(err,result);
// });

// data.read('test','newFile',(err,data)=> console.log(err,data))

// data.update('test', 'newFile',{'name':'England', 'language':'English'}, (err)=>{
//     console.log(err);
// })

// data.delete('test','newFile',(err)=> console.log(err))

//configuration

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening on port ${environment.port}`)
    })
}


//handle request response
app.handleReqRes = handleReqRes;


//start server
app.createServer();