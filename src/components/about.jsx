import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import Urinoff from '../assets/imgs/urinoff.jpg'
import Banner from '../assets/imgs/URINBOY SMM.png'
import Map from '../assets/imgs/map.png'




const About = () =>{
    return(
        <>
        <Box sx={{marginTop:"140px",marginLeft:'8%' }}>
            <img className="img-fluid" src={Banner} width='90%' height={800} alt="" />
        </Box>
        <center>
        <Box sx={{marginTop:"80px"}}>
            <Typography variant="h2" sx={{fontFamily:'cursive', textAlign:'center'}}>About me </Typography>
            <hr style={{width:'350px',marginTop:'20px'}}/>
        </Box>
        </center>
        <center>

        <Box sx={{display:'flex',width:'1300px',marginLeft:'10%', alignItems:'center',marginTop:'100px'}}>

            <Box sx={{width:'600px'}}>
                <center>

                <Typography variant="h5">
            Men Urinov Urinboy 2006-yil 24-fevralda tug’ilganman.
             2023-yil maktabni bitirdim. 2022-yil 
             “DATA TA’LIM STANSIYASI”ning SMM kursini tugalladim.
              SMM kursida men ijtimoi tarmoqlarda ishlashni,
               copywriting, target, SMM strategiya, mobilagrafiya, 
               raqobatchilar tahlilini o’rgandim. B irinchi
                proyektim “SAMSUNG DEHKON BOZOR” do’konida 
                SMM menejiri bo’lib ishladim. u yerda menga 
                “Youtube” platformasi topshirildi. “Youtube”
                 platformisini men boshlab ketdim va biznes 
                 egasi bilan kelishib 15 kun ishlashga va ularning 
                 o’zlari olib ketishiga kelishdik. ko’p o’tmasdan men 
                 “JUST” O’quv markaziga ishga kirdim. Bir oy ushbu 
                 o’quv markazda sharxlovchi sifatida faoliyat yuritdim 
                 va biznes egasi bilan kelisha olmaganligim sababli
                  bu ishni topshirdim.
                </Typography>
                </center>
            </Box>
            <Box sx={{marginLeft:'3%'}}>
                <img className="img-fluid" src={Urinoff} width={400} alt="" />
            </Box>
        </Box><br/><hr/>
        </center>

       <Box sx={{margin:'150px 0'}}>
        <img className="img-fluid" src={Map} width='80%' style={{marginLeft:'8%'}} height={700} alt="" />
       </Box><hr/>
       <center>
       <Box sx={{margin:'100px 0'}}>
        <Typography  variant="h2" sx={{fontFamily:'cursive',textAlign:'center'}}>Contact</Typography>
        <hr style={{width:'350px',marginTop:'20px'}}/>
       </Box>
        <Box sx={{display:'flex',alignItems:'center',width:'800px',justifyContent:'space-between',textAlign:'center'}}>
            <Box>
            <Typography>Khanka, Uzbekistan</Typography>
            <Link>+998885170970 - Urinov Urinboy</Link><br/>
            <Link>urinboyurinov1@gmail.com</Link>
            <Typography>Пн-Пт-08:00-19:00</Typography>
            </Box>
            <Box>
                <TextField variant="outlined" label="Full name"/>
                <TextField variant="outlined" label="phone number"/>
                <Box sx={{margin:'20px 0'}}>
                <TextField sx={{width:'448px'}} variant="outlined" label="Email"/>
                </Box>
                <Box>
                <TextField sx={{width:'448px'}} variant="outlined" label="Message"/>
                </Box>
                <Button variant="contained" sx={{margin:'20px 0',width:'448px'}}>Send</Button>
            </Box>
        </Box>
       </center>
        <Box sx={{alignItems:'center',width:'100%',textAlign:'center',marginTop:'150px',background:'#4884d8',height:'150px',padding:'40px'}}>
            <center>
            <Box sx={{width:'150px',display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
            <img src="https://www.svgrepo.com/show/434439/twitter.svg" width={60} alt="" />
            <img src="https://pcar.ru/upload/1logo-instagram-png-sem-fundo16%20copy.png?1633348162379" width={60} alt="" />
            </Box>
            </center>
        </Box>

        </>
    )
}
export default About