//create express app
const exp=require('express')
const app=exp(); 
const mclient = require('mongodb').MongoClient;

 require('dotenv').config()

//import path module
const path=require('path')

//connect build with nodejs
app.use(exp.static(path.join(__dirname,'./build'))) 


//import userApp and productApp
const userApp=require('./APIs/userApi');
const productApp=require('./APIs/productApi');
//DB  connection url
const DBurl=process.env.DATABASSE_CONNECTION_URL;
mclient.connect(DBurl)
.then((client)=>{

  //get DB object
  let dbObj=client.db("db1");

  //create collection objects
  let userCollectionObject=dbObj.collection("usercollection");
  let productCollectionObject=dbObj.collection("productcollection");

  //sharing collection objects to APIs
  app.set("userCollectionObject",userCollectionObject);
  app.set("productCollectionObject",productCollectionObject)

   

  console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connectio ',err))


app.use('/user-api',userApp);
app.use('/product-api',productApp);

//dealing with page refresh
app.use('*',(request,response)=>{
  response.sendFile(path.join(__dirname,'./build/index.html'))

})

//handling invalid paths using middleware concept
app.use((request,response,next)=>{

    response.send({message:`path ${request.url}  doesnt not exist`})
})

//error handling middleware
app.use((error,request,response)=>{

    response.send({message:`error occured`,reason:`${error.message} `})
})


//assign port number
const port=process.env.PORT;
app.listen(port,()=>console.log(`webserver listening on port number ${port}`));
