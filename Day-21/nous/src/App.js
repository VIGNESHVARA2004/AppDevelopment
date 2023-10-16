
import './App.css';
import { useEffect} from 'react';
import { Routes, useLocation, BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Logobar from './Components/LogoBar/Logobar';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/Mainpage/MainPage';
import Dashboard from './Components/DashBoard/DashBoard';
import MyAccount from './Components/DashBoard/Pages/MyAccount/MyAccount';
import Projects from './Components/DashBoard/Pages/Projects/Projects';
import Shop from './Components/Shop/Shop';
import ProductDetails from './Components/Product/ProductDetails';
import CartMenu from './Components/CartMenu/Cartmenu';
import About from './Components/Footer/About/About';
import Privacy from './Components/Footer/Privacy/Privacy';
import Terms from './Components/Footer/Terms/Terms';
import Community from './Components/Community/Community';
import FAQ from './Components/Footer/FAQ/FAQ';

const ScrolltoTop = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname])
  return null;
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrolltoTop/>
        <Logobar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}>
              <Route path='myaccount' element={<MyAccount/>}/>
              <Route path='projects' element={<Projects/>}/>
          </Route>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/product/:productId' element={<ProductDetails/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/faq' element={<FAQ/>}/>
        </Routes>
        <CartMenu/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
