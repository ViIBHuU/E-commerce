import { Box, styled } from "@mui/material";
import NavBar from "./Navabar";
import Banner from "./Banner";

const Component=styled(Box)`
     padding: 10x; 
     background: #F2F2F2;
`

const Home=()=>{
    return (
       <>
        <NavBar/>
        <Component>
        <Banner/>
        </Component>
       </>
    )
}
 export default Home;