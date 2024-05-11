import './style.scss'
import Nav from "../../Nav/Nav"
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { likeProduct } from "../../redux/slice/likeSlice";
import { SaveProduct } from "../../redux/slice/save";
import { SlBasket } from "react-icons/sl";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
// import istance from '../../../API'

const SingPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams()
    const [SingProduct, setSingtProduct] = useState(null)

    useEffect(() => {
        try {
            axios.get(`https://dummyjson.com/products/${id}`)
                .then(response => setSingtProduct(response.data)
                )
        } catch (err) {
            console.log(err);
        }
    }, [])

    console.log(SingProduct);


    return (
        <>
            <Nav />
            <div className="container like_wrapper ">
                <div className='like_page_style'>
                    <Link className='like_back' to='/'><FaArrowLeft /> back to home page</Link>
                    <h2>/ Product / Sing page</h2>
                </div>
                <div>
                    <ul>
                        {
                            SingProduct &&
                            <div className='singil_product_wrapper'>
                                <Swiper navigation={true} modules={[Navigation]} className="swiperMyStyle">
                                    <SwiperSlide><img src={SingProduct.images[0]} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={SingProduct.images[1]} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={SingProduct.images[2]} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={SingProduct.images[3]} alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={SingProduct.images[4]} alt="" /></SwiperSlide>
                                </Swiper>
                                <li className='singil_list'>
                                    <h3>{SingProduct.description}</h3>
                                    <span className='singil_line'></span>
                                    <li className='singil_iytem'>
                                        <h2>Brand: {SingProduct.brand}</h2>
                                        <h2>Title: {SingProduct.title}</h2>
                                        <h2>Category: {SingProduct.category}</h2>
                                        <h2>Rating: {SingProduct.rating}</h2>
                                    </li>
                                    <span className='singil_line'></span>
                                    <li className='singil_foter_iytem'>
                                        <h2>Price: <span>${SingProduct.price}</span></h2>
                                        <li>
                                            <button className='BuyIt'>Buy It Now</button>
                                            <button className='AddTo'onClick={() => dispatch(SaveProduct(SingProduct))}><SlBasket/>Add to cart</button>
                                            <button className='like' onClick={() => dispatch(likeProduct(SingProduct))} >Add to Watchlist</button>
                                        </li>
                                    </li>
                                </li>
                            </div>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SingPage