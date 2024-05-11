import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Login from './componets/pages/Login/Login'
import SingUp from './componets/pages/Register/Register'
import Home from './componets/pages/Home/Home'
import Product_all from './componets/pages/Product_all/Product'
import Like from './componets/pages/Like/Like'
import SingPage from './componets/pages/SingPage/SingPage'
import CategotySing from './componets/pages/CategotySing/CategotySing'
import Basket from './componets/pages/Basket/Basket'

function App() {


  return (
    <>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Ebay/SingUp' element={<SingUp/>}/>
          <Route path='/Ebay/Login' element={<Login/>}/>
          <Route path='/Ebay/All/Products'element={<Product_all/>} />
          <Route path='/Ebay/Like'element={<Like/>} />
          <Route path='Ebay/basket' element={<Basket/>} />
          <Route path='/Ebay/product-view/:id' element={<SingPage/>} />
          <Route path='/Ebay/category-product-view/:id' element={<CategotySing/>} />
       </Routes>
    </>
  )
}

export default App
