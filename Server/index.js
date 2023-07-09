const express = require("express");
const app = express();
const products = require("./products.json");
const cors=require("cors");


app.use(cors());
app.use(express.json());

app.get("/api/products",(req,res)=>{

    return res.status(200).json({ products});

})
app.get("/api/single/:id",(req,res)=>{
    const {id} = req.params;

    const singleProduct = products.find((product) => product.id == id);

    return res.status(200).json({ singleProduct});

})





const PORT=3005;

app.listen(PORT,()=>console.log(`Server started ${PORT}`));