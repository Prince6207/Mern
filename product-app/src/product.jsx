import axios from 'axios';
import './addproduct.css';
function Product({_id,title,description,category,price,discountPercentage,rating,stock,brand,thumbnail,__v}){
    const handleclick=async (id)=>{
    const doc=await axios.delete(`products/${id}`)
    console.log(doc);
    window.location.reload();
    }
    return (
        
        <div className="card">
            <img src={thumbnail} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <span className="category">{category}</span>
            <span className="brand">{brand}</span>
            <span className="oldprice">{price}</span>
            <span className="newprice">{(price-(price*discountPercentage/100)).toFixed(2)} after {discountPercentage}% off</span>
            <span className="rating">{rating}</span>
            <span className="stock">In stock : {stock}</span>
            <button onClick={()=>{handleclick(_id)}}>Delete</button>
        </div>
    );
}
export default Product;