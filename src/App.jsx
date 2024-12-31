import './App.css'
import MidHeader from './Components/Headers/MidHeader'
import TopHeader from './Components/Headers/TopHeader'
import BottomHeader from './Components/Headers/BottomHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SiginUp from './Pages/SiginUp/SiginUp';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import EnterCode from './Pages/EnterCode/EnterCode';
import NewPassword from './Pages/NewPassword/NewPassword';
import BestSellingPage from './Pages/BestSellingPage/BestSellingPage';
import MoreFamousPage from './Pages/MoreFamousPage/MoreFamousPage';
import DescountsPage from './Pages/DescountsPage/DescountsPage';
import NewPage from './Pages/NewPage/NewPage';
import Help from './Pages/Help/Help';
import Wishlist from './Pages/Wishlist/Wishlist';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import CheckoutOne from './Pages/checkoutOne/checkoutOne';
import CheckoutTwo from './Pages/CheckoutTwo/CheckoutTwo';
import Footer from './Components/Footer/Footer';
import CategoryPage from './Pages/CategoryPage/CategoryPage';



function App() {


  return (
    <div className='app'>
        <BrowserRouter>
          <TopHeader/>
          <MidHeader/>
          <BottomHeader/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SiginUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
            <Route path='/entercode' element={<EnterCode/>}/>
            <Route path='/newpassword' element={<NewPassword/>}/>
            <Route path='/bestSellingPage' element={<BestSellingPage/>}/>
            <Route path='/moreFamousPage' element={<MoreFamousPage/>}/>
            <Route path='/descountsPage' element={<DescountsPage/>}/>
            <Route path='/newPage' element={<NewPage/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/wishList' element={<Wishlist/>}/>
            <Route path='/shoppingCart' element={<ShoppingCart/>}/>
            <Route path='/checkoutOne' element={<CheckoutOne/>}/>
            <Route path='/checkoutTwo' element={<CheckoutTwo/>}/>
            <Route path='/...' element={<CategoryPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
