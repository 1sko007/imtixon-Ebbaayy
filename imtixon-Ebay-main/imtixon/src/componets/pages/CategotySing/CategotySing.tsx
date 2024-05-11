// import istance from '../../../API'
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { likeProduct } from "../../redux/slice/likeSlice";
import likeIcon from "../../../../img/like_icon.png";
import { FaArrowLeft } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import Nav from '../../Nav/Nav';
import { SaveProduct } from "../../redux/slice/save";
import { SlBasket } from "react-icons/sl";
import axios from 'axios';


const CategotySing = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [categoryProduct, setcategoryProduct] = useState([])
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categories}`)
        .then(res => setcategoryProduct(res.data.products)
        )
    }, [categories])

    useEffect(() => {
        try {
            axios.get("https://dummyjson.com/products/categories")
                .then(response => setCategories(response.data[0])   
                )
            // setCategories(response.data);
        }
        catch (error) {
            console.log(error)
        }
    }, [])

  return (
    <>
    <Nav/>
      <div className="container container--ld">
      <div className='like_page_style'>
            <Link className='like_back' to='/'><FaArrowLeft/> back to home page / </Link>
            <h2>Category Product page</h2>
          </div>
        <div className="product_all_wrpper">
          {categoryProduct.map((product) => (
            <div className="product_all_list">
              <Link to={`/Ebay/product-view/${product.id}`} className="product_link">
                <img src={product.images[0]} alt="" />
                <h2>{product.title} <br /> $ {product.price}</h2>
              </Link>
              <li className="icon_style"> 
                <span onClick={() => dispatch(likeProduct(product))}> <img src={likeIcon} alt="" /></span>
                <i onClick={() => dispatch(SaveProduct(product))}><SlBasket /></i>
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategotySing