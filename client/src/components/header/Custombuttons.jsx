import { Button,Box, styled, Typography } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useState,useContext } from "react"

import { LoginContext } from "../../context/contexProviser"
import Profile from "./profile"

import LoginDialog from "./login/login"

const Wrapper=styled(Box)`
     display: flex;
     margin: 0 3% 0 auto;
     & > button,& > p ,& > div: {
        marginLeft:auto
        marginRight: auto;
        font-size: 16px;
        align: center;
     }

`

const Container=styled(Box)`
    display: flex;
`
const LoginButton=styled(Button)`
     color: #2874f0;
     background: #FFFFFF;
     text_transform: none;
     padding: 50px 40 px;
     border-radius: 2px;
     box-shadow: none;
     font-weight: 600;
     height: 32px;

`
const CustomButtons=()=>{
    const [open,setOpen]=useState(false);

    const{account,setAccount}=useContext(LoginContext);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
                
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;