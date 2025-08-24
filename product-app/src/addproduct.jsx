import {useState} from 'react';
import axios from 'axios';
import './addproduct.css';
axios.defaults.baseURL="/";
function Addproduct(){
    const [product,setProduct]=useState({});
    const handlechange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    };
    const addproduct=async (product)=>{
        const res=await axios.post('/products',product);
        console.log(res.data);
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(product);
        addproduct(product);
    }
    
    return (
        <form onSubmit={handlesubmit}>
            <div className='field'>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" onChange={handlechange} placeholder='title'/>
            </div>
            <div className='field'>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" onChange={handlechange} placeholder='description'/>
            </div>
            <div className='field'>
                <label htmlFor="category">Category</label>
                <input type="text" name="category" id="category" onChange={handlechange} placeholder='category'/>
            </div>
            <div className='field'>
                <label htmlFor="brand">Brand</label>
                <input type="text" name="brand" id="brand" onChange={handlechange} placeholder='brand'/>
            </div>
            <div className='field'>
                <label htmlFor="price">Price</label>
                <input type="number" step="0.01" name="price" id="price" onChange={handlechange} placeholder='price'/>
            </div>
            <div className='field'>
                <label htmlFor="discountPercentage">Discount Percentage</label>
                <input type="number" step="0.01" name="discountPercentage" id="discountPercentage" onChange={handlechange} placeholder='discountPercentage'/>
            </div>
            <div className='field'>
                <label htmlFor="rating">Rating</label>
                <input type="number" step="0.01" name="rating" id="rating" onChange={handlechange} placeholder='rating'/>
            </div>
            <div className='field'>
                <label htmlFor="stock">Stock</label>
                <input type="number" step="0.01" name="stock" id="stock" onChange={handlechange} placeholder='stock'/>
            </div>
            <div className='field'>
                <label htmlFor="thumbnail">Thumbnail</label>
                <input type="text" name="thumbnail" id="thumbnail" onChange={handlechange} placeholder='thumbnail'/>
            </div>
            <button>Add</button>
        </form>
    );
}
export default Addproduct;