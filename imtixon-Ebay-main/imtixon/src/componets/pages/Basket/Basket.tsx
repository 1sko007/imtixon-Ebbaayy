import Nav from "../../Nav/Nav"
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { FaXmark } from 'react-icons/fa6';
import { FaArrowLeft } from "react-icons/fa";
import { likeProduct } from "../../redux/slice/likeSlice";
import likeIcon from "../../../../img/like_icon.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
// import istance from '../../../API'
// import axios from "axios";

const Basket = () => {
    const dispatch = useDispatch<AppDispatch>();
    const saveProduct = useSelector(
    (state: RootState) => state.save.saveProduct
  );

  // const deleteLike = (id:any) => {
  //   // axios.delete(`/products/${id}`)
  //   // .then(response => response.data)
  //   // location.reload()
  // }

  return (
    <>
      <Nav />
      <header>
        <div className="container like_wrapper ">
          <div className='like_page_style'>
            <Link className='like_back' to='/'><FaArrowLeft/> back to home page / </Link>
            <h2>Basket page</h2>
          </div>
          <div className='like_product_style'>
            {
              saveProduct.map(product =>
                <div className="like_list" key={product.id}>
                  <Link to={`/Ebay/product-view/${product.id}`} className="like_link">
                    <li>
                      <img src={product.images[0]} alt="" />
                      <h2>{product.title}</h2>
                      <h2>$ {product.price}</h2>
                    </li>
                  </Link>
                  <li className="icon_style">
                  <span ><FaXmark/></span>
                  <span onClick={() => dispatch(likeProduct(product))}> <img src={likeIcon} alt="" /></span>
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

export default Basket