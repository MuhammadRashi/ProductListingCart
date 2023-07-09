import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import { useParams } from 'react-router-dom';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import axios from 'axios';
import {styled} from '@mui/system'

export function ProductBox() {
  const  {id}  = useParams();

  const [prd, setProduct] = useState({});

  const Heading=styled(Typography )(({theme})=>({
    marginTop:"40px",
    fontSize:'35px',
    fontWeight:'bold',
    color:'#111',
    textAlign:'center',

}))

const Description=styled(Typography )(({theme})=>({
  marginTop:"20px",
  fontSize:'18px',
  // fontWeight:'bold',
  color:'#111',
  textAlign:'center',

}))
  // console.log({id},"====id")
  const productDetails = async ()=>{
    const response=await axios.get(`http://localhost:3005/api/single/${id}`)
    console.log(response.data
      ,"result");
    // console.log(response.data.singleProduct.images
    //   ,"result");
     setProduct(response.data.singleProduct);
    //  setProduct(response.data.singleProduct.images);
  }

  useEffect(()=>{
      productDetails();
  },[])

  const ProductLayout=styled(Box)(({theme})=>({
        
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    gap:theme.spacing(3),
    [theme.breakpoints.down('md')]:{display:'none'}


}))
const Product_Box=styled(Box)(({theme})=>({

  display:'flex',
  flexwrap:'wrap',
  alignItems:'center',
  justifyContent:'center',
  marginTop:'25px',
  objectFit: "contain"
}))
const ProductImg=styled(Box)(({theme})=>({

  display:'flex',
  flexwrap:'wrap',
  alignItems:'center',
  justifyContent:'center',
  marginTop:'25px',

}))

const ProductCard=styled(Box)(({theme})=>({

  width: "100%",
  margin:"10px",
  // height:"20%",
  borderRadius: "6px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  flexwrap: "wrap",
  gap: "12px",
  minHeight:"380px",
  // maxHeight: "380px",
  // maxHeight:"160px"
  objectFit: "contain",
  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  cursor: "pointer",

  '&:hover':{
      
      opacity: "0.7"
  }

  }));





  
  return (
      <>
      <Header/>
     

   <Heading>{prd.title}</Heading>
<ProductLayout>

<Product_Box>
   {prd.images?.map((pr,index)=>(
       
       <ProductCard key={index}>
          
        <ProductImg >
            
        <img src={pr} 
         alt="product" sx={{
         width:'187%'}} />

        </ProductImg>
       

    </ProductCard>
     ))} 
    

</Product_Box>
     </ProductLayout>
     <Description>{prd.description}</Description>
      </>
  )
}

