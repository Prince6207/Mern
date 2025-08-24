import axios from 'axios'
import {useState,useEffect} from 'react'
axios.defaults.baseURL="/";
import Product from './product';

function Productlist(){
    const [products,setProducts]=useState([]);
async function getproducts(){
const res=await axios.get('products');
console.log(res.data);
setProducts(res.data);
}
useEffect(()=>{
    getproducts();
},[]);

    return (
        <>
        {products.map((prod,index)=>
           ( <Product {...prod} key={index}></Product>)
        )}
        </>
    );
}
export default Productlist;