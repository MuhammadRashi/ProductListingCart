import React, { useEffect, useState } from 'react'
import {styled} from '@mui/system'
import { Box,Typography  } from '@mui/material'
import axios from "axios"
import { Header } from '../Header/Header'

import { Link } from 'react-router-dom'
// import { Key } from '@mui/icons-material'
export default function ProductLayout() {

    const API_URL="http://localhost:3005/api/products"

    const [prod,setProd]= useState([]);

    const ProductLayout=styled(Box)(({theme})=>({
        
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        gap:theme.spacing(3),
        [theme.breakpoints.down('md')]:{display:'none'}


    }))
    const Heading=styled(Typography )(({theme})=>({
        marginTop:"40px",
        fontSize:'35px',
        fontWeight:'bold',
        color:'#111',
        textAlign:'center',

    }))

    const Product_Box=styled(Box)(({theme})=>({

        display:'flex',
        flexwrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'25px'
    }))

    const ProductImg=styled(Box)(({theme})=>({

        display:'flex',
        flexwrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'25px',
      

    }))

    const Title=styled(Typography)(({theme})=>({

        fontSize:'16px',
        fontWeight:'bold',
        color:'#111',
        textAlign:'center',
    }))
    const Price=styled(Typography)(({theme})=>({

        fontSize:'22px',
        fontWeight:'bold',
        color:'#111',
        textAlign:'center',
    }))

   


    const ProductCard=styled(Link)(({theme})=>({

    width: "15%",
    margin:"10px",
    // height:"20%",
    borderRadius: "6px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    flexwrap: "wrap",
    gap: "12px",
    minHeight:"420px",
    maxHeight: "450px",
    // maxHeight:"160px"
    objectFit: "contain",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    cursor: "pointer",
  
    '&:hover':{
        
        opacity: "0.7"
    }

    }));

    const fetchProducts=async()=>{

        const response = await axios(API_URL); 
        console.log(response);
        setProd(response.data.products);

        // console.log(prod,"====adf");
    

    }

    
    useEffect(()=>{
        
        fetchProducts();

    },[])

    

  return (
    <>

    <Header/>
    <Heading>All Products</Heading>
    

    <ProductLayout>

    <Product_Box>
       
       {prod?.map((pr)=>(
           
           <ProductCard 
           key={pr.id}
           to = {`/product/${pr?.id}`} >
               

            <ProductImg>
                
            <img src={pr.thumbnail}
             alt="product" />

            </ProductImg>
            <Title>{pr.title}</Title>
            <Price>${pr.price}</Price>

        </ProductCard>
         ))} 
        

    </Product_Box>
         </ProductLayout>
    
    </>
  )
}
