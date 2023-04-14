import React from "react";
import { Box, Typography, Grid, Button,} from "@mui/material";
import {GrLocation} from "react-icons/gr";
import {AiOutlineMail, AiOutlineInstagram } from "react-icons/ai"
import {BsWhatsapp, BsFacebook} from "react-icons/bs";
import "./Footer.css" 



const Footer = () => {

    return (
            <Grid container sx={{padding: "5px",marginTop: "-5px", }} className="footercon">
               <Grid item sm={12} lg={12} md={12}>
                <b><Typography variant="h6" sx={{textAlign: "center",}}>Official Studio Name</Typography></b>
                <Box sx={{paddingBottom: "7px" ,}}><Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography></Box>

                    <Grid sx={{display: "flex", }}>
                        <Box sx={{ width: "20%", display: "flex",}}id="boxborder"> <GrLocation size={13} color="white" id="locationicon"/><Typography >Studio Location</Typography></Box>
                        <Box sx={{ width: "20%",}}id="boxborder"><Typography>Privacy Policy</Typography></Box>
                        <Box sx={{ width: "20%",}}id="boxborder"><Typography sx={{textAlign: "center" ,}}>Terms of Use</Typography></Box>
                        <Box sx={{ width: "20%",}}id="boxborder"><Typography>Lincensing Info</Typography></Box> 
                        <Box sx={{textAlign: "center", width: "20%",}}><AiOutlineMail size={15} color = "white" id="socialone"/> <AiOutlineInstagram size={15} color = "white" id="socialicons"/> <BsWhatsapp size={15} color = "white" id="socialicons"/> <BsFacebook size={15} color = "white" id="socialicons"/></Box>

                    </Grid>
                </Grid> 
            </Grid>
    );
};

export default Footer