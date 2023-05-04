//create a special route to handle product reqs

const exp = require("express");
const productApp = exp.Router();

const expressAsyncHandler=require('express-async-handler');
const res = require("express/lib/response");

//to extract body of request object
productApp.use(exp.json());

//get all products
productApp.get("/getproducts", expressAsyncHandler(async(request,response)=>{

  //get productCollectionObject
  let productCollectionObject = request.app.get("productCollectionObject");
  //read all products
  let products=await productCollectionObject.find().toArray()
  //send response
  response.send({message:"All products",payload:products})
}));





//get product by id
productApp.get("/getproduct/:id", expressAsyncHandler(async(request,response)=>{
  //get productCollectionObject
  let productCollectionObject = request.app.get("productCollectionObject");
  //get productId from url param
  let pid=(+request.params.id);
  //get product by id
  let product=await productCollectionObject.findOne({productId:pid});

  
  //if product not existed with given id
  if(product==null){
    response.send({message:'product not existed'})
  }
  //if product existed
  else{
  response.send({message:'product existed',payload:product})
  }

}))






//create product
productApp.post("/create-product", expressAsyncHandler(async (request, response,next) => {
  
  
  //get productCollectionObject
  let productCollectionObject = request.app.get("productCollectionObject");
  //get product obj from req
  let productObj = request.body;
  //insert productObj
  let result = await productCollectionObject.insertOne(productObj);
  //send response
  response.send({ message: "Product created successfully" })

  
 
}));
// productApp.post("/create-product", (request, response,next) => {
  
//     //console.log(request.body)
//     //get productCollectionObject
//     et productCollectionObject = request.app.get("productCollectionObject");
//     //get product obj from req
//     let productObj = request.body;
//     //insert productObj
    
    
   
// });
  


//update product
productApp.put('/update-product',expressAsyncHandler(async(request,response)=>{
  //get productCollectionObject
  let productCollectionObject = request.app.get("productCollectionObject");
  //get modified product obj
  let modifiedProduct=request.body;
  //update
  await productCollectionObject.updateOne({productId:modifiedProduct.productId},{$set:{...modifiedProduct}})
  //send response
  response.send({message:"Product modified"})
}));


//delete product by id
productApp.delete("/remove-product/:id",expressAsyncHandler(async(request,response)=>{

  //get productCollectionObject
  let productCollectionObject = request.app.get("productCollectionObject");
  //write logic to delete product by its id
  //route to delete user by id
    
  let productObj = request.body;
  //insert productObj
  let result = await productCollectionObject.deleteOne(productObj);
  //send response
  if(result==null){
    response.send({message:'product not existed'})
  }
  //if product existed
  else{
  response.send({message:'product successfully deleted'})
  }

}))


//export productApp
module.exports = productApp;