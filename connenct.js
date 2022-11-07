const db=require("mogodb");



const { MongoClient, ServerApiVersion } = require('mongodb');
const { connect } = require('mongoose');
const uri = "mongodb+srv://laundry:Sibu1234@cluster1.ldr8yfa.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("productlist").collection("inventory");
  // perform actions on the collection object
  client.close();
});

db.productlist.insertMany([
    { 'Product_id': 1, 'Product_type': 'Electronics', "Product_name":"TV" ,'price': 10, 'quantity': 2,  },
    { 'Product_id': 2, 'Product_type': 'Electronics', "Product_name":"TV", 'price': 22250,'quantity': 1,  },
    { 'Product_id': 3, 'Product_type': 'Electronics',"Product_name":"TV",'price': 22250,'quantity': 10,  },
    { 'Product_id': 4, 'Product_type': 'Electronics',  "Product_name":"TV", 'price': 25550, 'quantity':  20,  },
    { 'Product_id': 5, 'Product_type': 'Electronics',  "Product_name":"TV", 'price': 22250, 'quantity': 10, },
    { 'Product_id': 6, 'Product_type': 'Electronics',  "Product_name":"TV" , 'price': 5520, 'quantity': 5,  },
    { 'Product_id': 7, 'Product_type': 'Electronics', "Product_name":"TV" , 'price': 2220, 'quantity': 10,  },
    { 'Product_id': 8, 'Product_type': 'Electronics', "Product_name":"TV" , 'price': 2550, 'quantity': 5,  },
  ]);
  

console.log("connencted to db ")

connect.get("/") = ()=>{


console.log("connect to db")


}


connect.get("/inventory") = () => {


    console.log("get all inventory")
}





