import "./home.scss";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Nav from "../../Nav/Nav";
import calleway from "../../../../img/Calleway.png";
import merrel from "../../../../img/Merrel.png";
import speci from "../../../../img/speci.png";
import eBayMiniLogo from "../../../../img/eBayMiniLogo.png";
import sister from "../../../../img/sister.png";
import image from "../../../../img/3&1.png";
import likeIcon from "../../../../img/like_icon.png";
import likeTrue from "../../../../img/likeTrue.png";
import istance from '../../../API'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { likeProduct } from "../../redux/slice/likeSlice";
import { SaveProduct } from "../../redux/slice/save";
import { SlBasket } from "react-icons/sl";
import axios from "axios";

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [products, setProducts] = useState([]);
  const [Like, setLike] = useState<Boolean>(false);

  useEffect(() => {
    try {
         axios.get("https://dummyjson.com/products")
        .then((response) => setProducts(response.data.products));
    } catch (err) {
      console.log(err);
    }
  }, [])

  console.log(products);

  const hadleLike = () => {
    setLike(true)
  }

  return (
    <>
      <Nav />
      <header>
        <div className="container container--md">
          <ul className="brends__list">
            <li className="brands_iytem_text">
              <h2>Super savings at the Brand Outlet</h2>
              <p>Up to 60% off the brands you love.</p>
              <Link to="">Shop now</Link>
            </li>
            <li className="brends__iytem">
              <img src={calleway} alt="" />
            </li>
            <li className="brends__iytem">
              <img src={merrel} alt="" />
            </li>
            <li className="brends__iytem">
              <img src={speci} alt="" />
            </li>
          </ul>
        </div>
      </header>

      <header>
        <div className="container container--ld">
          <div className="product_wrpper">
            <Swiper
              slidesPerView={7}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {products?.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="product_list">
                    <i onClick={() => dispatch(SaveProduct(product))}><SlBasket/></i>
                    <span onClick={() => dispatch(likeProduct(product)) && (hadleLike)}>
                      {
                        Like ?
                          <img src={likeTrue} alt="" />
                          :
                          <img src={likeIcon} alt="" />
                      }
                    </span>
                    <Link to={`/Ebay/product-view/${product.id}`} className="product_link">
                      <li>
                        <img src={product.images[0]} alt="" />
                        <h2>{product.title}</h2>
                      </li>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <ul className="product_all_list_link">
            <h2>Score these trending kicks</h2>
            <li>
              <Link className='product_all_link' to='/Ebay/All/Products'>See all <i><FaArrowRight /></i></Link>
            </li>
          </ul>
        </div>
      </header>

      <header>
        <div className="container">
          <div className="container_style">
            <ul className="mode__list">
              <li className="mode__iytem_text">
                <h2>Featured</h2>
                <img src={eBayMiniLogo} alt="" />
                <h4>Deals made easy all year long.</h4>
                <p>Free shipping. Best prices.</p>
                <Link to="">Get your thing</Link>
              </li>
              <li className="mode__iytem">
                <img src={image} alt="" />
              </li>
              <li className="mode__iytem">
                <img src={sister} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </header>

      <header>
        <div className="container container--ld">
          <ul className="product_all_list_link">
            <h2>Today's Deals – All With Free Shipping</h2>
            <li>
              <Link className='product_all_link' to='/Ebay/All/Products'>See all <i><FaArrowRight /></i></Link>
            </li>
          </ul>
          <div className="product_wrpper">
            <Swiper
              slidesPerView={7}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {products?.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="product_list">
                  <i onClick={() => dispatch(SaveProduct(product))}><SlBasket/></i>
                    <span onClick={() => dispatch(likeProduct(product))}> <img src={likeIcon} alt="" /></span>
                    <Link to={`/Ebay/product-view/${product.id}`}className="product_link">
                      <li>
                        <img src={product.images[2]} alt="" />
                        <h2>$ {product.price}</h2>
                      </li>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </header>

      <header>
        <span class="footer_line"></span>
        <div class="container container--md footer__wrapp">
          <ul class="foter_list">
            <h3>Buy</h3>
            <li>
              <h2>Registration</h2>
            </li>
            <li>
              <h2>eBay Money Back Guarantee</h2>
            </li>
            <li>
              <h2>Bidding & buying help</h2>
            </li>
            <li>
              <h2>Stores</h2>
            </li>
            <li>
              <h2>eBay for Charity</h2>
            </li>
            <li>
              <h2>Charity Shop</h2>
            </li>
            <li>
              <h2>Seasonal Sales and events</h2>
            </li>
          </ul>
          <ul class="foter_list">
            <h3>Sell</h3>
            <li>
              <h2>Start selling</h2>
            </li>
            <li>
              <h2>How to sell</h2>
            </li>
            <li>
              <h2>Business sellers</h2>
            </li>
            <li>
              <h2>Affiliates</h2>
            </li>
            <h3>Tools & apps</h3>
            <li>
              <h2>Developers</h2>
            </li>
            <li>
              <h2>Security center</h2>
            </li>
            <li>
              <h2>Site map</h2>
            </li>
          </ul>
          <ul class="foter_list">
            <h3>Stay connected</h3>
            <li>
              <h2>
                {" "}
                <i>
                  <FaSquareFacebook />
                </i>{" "}
                Facebook
              </h2>
            </li>
            <li>
              <h2>
                {" "}
                <i>
                  <FaTwitterSquare />
                </i>{" "}
                Twitter
              </h2>
            </li>
          </ul>
          <ul class="foter_list">
            <h3>About eBay</h3>
            <li>
              <h2>Company info</h2>
            </li>
            <li>
              <h2>News</h2>
            </li>
            <li>
              <h2>Investors</h2>
            </li>
            <li>
              <h2>Careers</h2>
            </li>
            <li>
              <h2>Diversity & Inclusion</h2>
            </li>
            <li>
              <h2>Global Impact</h2>
            </li>
            <li>
              <h2>Government relations</h2>
            </li>
            <li>
              <h2>Advertise with us</h2>
            </li>
            <li>
              <h2>Policies</h2>
            </li>
            <li>
              <h2>Verified Rights Owner (VeRO) Program</h2>
            </li>
            <li>
              <h2>eCI Licenses</h2>
            </li>
          </ul>
          <ul class="foter_list">
            <h3>Help & Contact</h3>
            <li>
              <h2>Seller Center</h2>
            </li>
            <li>
              <h2>Contact Us</h2>
            </li>
            <li>
              <h2>eBay Returns</h2>
            </li>
            <h3>Community</h3>
            <li>
              <h2>Announcements</h2>
            </li>
            <li>
              <h2>eBay Community</h2>
            </li>
            <li>
              <h2>eBay for Business Podcast</h2>
            </li>
          </ul>
        </div>
        <div className="container">
          <ul className="foter_info_style">
            <h2>
              Copyright © 1995-2023 eBay Inc. All Rights Reserved.
              <span>
                Accessibility , User Agreement , Privacy , Payments Terms of Use
                , Cookies , Your Privacy Choices and AdChoice
              </span>
            </h2>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Home;
