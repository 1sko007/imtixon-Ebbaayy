import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Nav/Nav";
import likeIcon from "../../../../img/like_icon.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { likeProduct } from "../../redux/slice/likeSlice";
// import istance from '../../../API'
import { FaArrowLeft } from "react-icons/fa";
import { SaveProduct } from "../../redux/slice/save";
import { SlBasket } from "react-icons/sl";
import './product.scss'
import axios from "axios";

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://dummyjson.com/products")
        .then((response) => setProducts(response.data.products));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Nav />
      <div className="container container--ld">
        <div className='like_page_style'>
          <Link className='like_back' to='/'><FaArrowLeft /> back to home page / </Link>
          <h2>Product All page</h2>
        </div>
        <div className="product_all_wrpper">
          {products.map((product) => (
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
  );
};

export default Product;
