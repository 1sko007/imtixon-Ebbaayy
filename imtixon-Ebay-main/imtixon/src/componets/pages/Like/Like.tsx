import './like.scss'
import Nav from "../../Nav/Nav"
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { FaXmark } from 'react-icons/fa6';
import { useDispatch } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { SaveProduct } from "../../redux/slice/save";
import { SlBasket } from "react-icons/sl";
import { AppDispatch } from "../../redux/store/store";
// import istance from '../../../API'
import axios from 'axios';

const Like = () => {
  const dispatch = useDispatch<AppDispatch>();
  const likedProducts = useSelector(
    (state: RootState) => state.like.likedProducts
  );

  // const deleteLike = (id:any) => {
  //   axios.delete(`https://dummyjson.comproducts/${id}`)
  //   .then(response => response.data)
  //   location.reload()
  // }

  return (
    <>
      <Nav />
      <header>
        <div className="container like_wrapper ">
          <div className='like_page_style'>
            <Link className='like_back' to='/'><FaArrowLeft/> back to home page / </Link>
            <h2>Like page</h2>
          </div>
          <div className='like_product_style'>
            {
              likedProducts.map(product =>
                <div className="like_list" key={product.id}>
                  <Link to={`/Ebay/product-view/${product.id}`} className="like_link">
                    <li>
                      <img src={product.images[0]} alt="" />
                      <h2>{product.title}</h2>
                      <h2>$ {product.price}</h2>
                    </li>
                  </Link>
                  <li className='icon_style'>
                  <span ><FaXmark/></span>
                  <i onClick={() => dispatch(SaveProduct(product))}><SlBasket /></i>
                  </li>
                </div>
              )
            }
          </div>
        </div>
      </header>
    </>
  )
}

export default Like