import { Box,Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import  Avatar  from "../assets/imgs/logo.png"





const Navbar = () => {
    return(
        <>
        <Box sx={{position:'fixed',width:"100%", top:"0", zIndex:"999",background:"#black",backdropFilter:'blur(10px)',height:'100px',borderBottom:'1px solid #545050',}}>
            <Box sx={{display:'flex',width:'100%',height:'100px',alignItems:'center',justifyContent:'space-around'}}>
                <Box sx={{display:'flex',alignItems:'center',}}>
                <Typography variant="h4" sx={{color:'black', fontFamily:'cursive'}}> Urinboy Urinov</Typography>
                </Box>
                <Box>
                    <NavLink style={{marginLeft:'30px',textDecoration:'none',color:'black', fontFamily:'cursive'}}>Главная</NavLink>
                    <NavLink style={{marginLeft:'30px',textDecoration:'none',color:'black', fontFamily:'cursive'}}>About me</NavLink>
                    <NavLink style={{marginLeft:'30px',textDecoration:'none',color:'black', fontFamily:'cursive'}}>Contact</NavLink>
                    <NavLink style={{marginLeft:'30px',textDecoration:'none',color:'black', fontFamily:'cursive'}}>Location</NavLink>
                    
                </Box>
                <Box  sx={{display:'flex',alignItems:'center'}}>
                <Box sx={{alignItems:'center'}}>
                    <img  style={{marginRight:"20px"}} src="https://pcar.ru/upload/1logo-instagram-png-sem-fundo16%20copy.png?1633348162379" width={50} alt="" />
                </Box>
                <Box sx={{alignItems:'center'}}>
                    <img style={{marginRight:"20px"}}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png" width={40} alt="" />
                </Box>
                <Box sx={{alignItems:'center'}}>
                    <img  style={{marginRight:"20px"}} src="https://top-valenki.ru/userfiles/96D553ED-A8FF-4BF7-9282-0D24C596683B.png" width={50} alt="" />
                </Box>
                </Box>
            </Box>
        </Box>
        
        </>
    )
}
export default Navbar