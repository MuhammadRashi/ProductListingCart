import {styled} from '@mui/system'
import { Key } from '@mui/icons-material'
import SearchIcon from "@mui/icons-material/Search";
import { Box,  InputBase, Typography } from '@mui/material'
import React from 'react'
import { CustomButton } from '../CustomButton/CustomButton';

export const Header = () => {

    const nav_titles=[{path:'/',
            display:'Home'},
            {path:'/',
            display:'Products'},
            {path:'/',
            display:'Category'},
            {path:'/',
            display:'About'},]

    const NavBarLinksBox=styled(Box)(({theme})=>({
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        gap:theme.spacing(3),
        [theme.breakpoints.down('md')]:{display:'none'}


    }))

    const NavBarLinks=styled(Box)((Typography)=>({
        fontSize:'16px',
        color:'#4F5361',
        fontWeight:'bold',
        cursor:'pointer',
        '&:hover':{
            color:'#fff',
        }


    }))

    const NavBarSearchBox=styled(InputBase)(()=>({
        fontSize:'16px',
        color:'#fff',
        fontWeight:'bold',
        cursor:'pointer',
        '&:hover':{
            color:'#fff',
        }


    }))
    const SearchIconWrapper = styled("div")(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        
        color: "inherit",
        backgroundColor:'#FFFFFF',
        height:'35px',
        marginLeft:'60px',
        borderRadius:'6px',
        opacity:'50%',
        padding:'10px',
    }));

  return (
    <>
    <Box sx={{
        display:'flex',
        backgroundColor:'#FED801',
        height:'60px',
        justifyContent:'space-between',
        alignItems:'center',

        }}>
        <Box sx={{
            display:'flex',
            padding:'10px',
            marginLeft:'10px'
    }}>
            <NavBarLinksBox>
                   
                    {nav_titles.map((item,index)=>(
                        <NavBarLinks key={index}>
                        {item.display}
                        </NavBarLinks>
                    ))}
                
            </NavBarLinksBox>
            
            
        
        <StyledInputBase  placeholder="Search…">
        </StyledInputBase>
        </Box>
        <Box sx={{display:'flex',}}>
        
            {/* <button>test</button>
            <button>test2</button> */}
            <CustomButton btntext="Login"/>
            <CustomButton btntext="Register"/>
        </Box>
    </Box>
    </>
  )
}
