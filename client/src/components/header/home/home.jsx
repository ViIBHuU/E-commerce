import { Box, styled } from "@mui/material";
import NavBar from "./Navabar";
import Banner from "./Banner";
import { useEffect } from "react";

import { useDispatch,useSelector } from "react-redux";

import { getProducts } from "../../../redux/action/productAction";
import Slide from "./slide";
import MidSlide from "./midslide";
import MidSection from "./midseciton";

const Component=styled(Box)`
     padding: 10x; 
     background: #F2F2F2;
`

const Home=()=>{

    const getProduct = useSelector(state => state.getProducts);
    const { products } = getProduct;
    console.log("Home");
    console.log(products);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]  
    )
    return (
       <>
        <NavBar/>
        <Component>
        <Banner/>
        </Component>
        <MidSlide products={products}/>
        <Slide products={products} tittle="Clothing" timer={false}/>
        <MidSection/>
        <Slide products={products} tittle="Electronics" timer={false}/>
        <Slide products={products} tittle="Groceries" timer={false}/>
       </>
    )
}
 export default Home;