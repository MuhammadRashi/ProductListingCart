import {styled} from '@mui/system'
import { Button } from '@mui/material'
import React from 'react'

export const CustomButton = ({btntext}) => {

    const CustomBtn=styled(Button)(({theme})=>({
       
        marginRight:'10px',
        backgroundColor:'#001E3C',
        display:'block',
        borderRadius:'7px',
        color:'#fff',
        fontSize:'12px',


    }))


  return (
    <>
    
    <CustomBtn>{btntext}</CustomBtn>
    
    
    </>
  )
}
