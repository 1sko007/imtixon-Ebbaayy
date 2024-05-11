import { Link } from "react-router-dom"
import './nav.scss'
import { IoIosSearch } from "react-icons/io";
import ebayLogo from '../../../img/ebayLogo.png'
// import ebayU from '../../../img/ebayU.png'
import ebayK from '../../../img/ebayK.png'
import likeIcon from "../../../img/like_icon.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import istance from '../../API'

function Nav() {

    // const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        try {
            axios.get("https://dummyjson.com/products/categories")
                .then(response => setCategories(response.data)   
                )
            // setCategories(response.data);
        }
        catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <>
            <header>
                <div className="container">
                    <div className="navmini__wrapper">
                        <ul className="navmini_left__list">
                            <li className="navmini_left__iytem">
                                <h2> HI! <Link to='/Ebay/SingUp'>Sing up</Link> or <Link to='/Ebay/Login'>register</Link></h2>
                            </li>
                            <li className="navmini_left__iytem">
                                <h2>Daily Deals</h2>
                            </li>
                            <li className="navmini_left__iytem">
                                <h2>Brand Outlet</h2>
                            </li>
                            <li className="navmini_left__iytem">
                                <h2>Help & Contact</h2>
                            </li>
                        </ul>
                        <ul className="navmini_right__list">
                            <li className="navmini_right__iytem">
                                <h2>Sell</h2>
                            </li>
                            <li className="navmini_right__iytem">
                                <h2>Watchlist</h2>
                            </li>
                            <li className="navmini_right__iytem">
                                <h2>My eBay</h2>
                            </li>
                            <li className="navmini_right__iytem">
                                <Link to='/Ebay/Like'><img src={likeIcon} alt="" /></Link>
                            </li>
                            <li className="navmini_right__iytem">
                                <Link to='/Ebay/Basket'><img src={ebayK} alt="" /></Link>
                            </li>
                        </ul>
                    </div>
                    <span className="rax"></span>
                    <ul className="nav__list">
                        <li className="nav__uytem">
                            <img src={ebayLogo} alt="" />
                        </li>
                        <li className="nav__uytem">
                            <h2>Shop by category</h2>
                        </li>
                        <li className="nav__uytem">
                            <form id="search">
                                <i><IoIosSearch /></i>
                                <input type="text" placeholder="Search for anything" id="search_inp" />
                            </form>
                        </li>
                        <li className="nav__uytem">
                            <button type="submit" id="btn-click">Search</button>
                        </li>
                        <li className="nav__uytem">
                            <h2>Advanced</h2>
                        </li>
                    </ul>
                    <span className="rax"></span>
                    <ul className="nav_link__list">
                        <Swiper
                            slidesPerView={8}
                            spaceBetween={0}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                categories.map(category =>
                                    <SwiperSlide>
                                        <Link to={`/Ebay/category-product-view/${category}`} className="category_link">
                                            <div className="nav__link">
                                                <ul>
                                                   {category}
                                                </ul>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </ul>
                </div>
            </header>

        </>
    )
}

export default Nav