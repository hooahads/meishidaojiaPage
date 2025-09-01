import React from 'react';
import Search from './components/Home/Search/Search';
import MenuBar from './components/Home/MenuBar/MenuBar';
import './App.css';
// import Carousel from './components/Home/Carousel/Carousel';
import SwiperCarousel from './components/Home/Swiper/SwiperCarousel';
import HomeFilter from './components/Home/HomeFilter/HomeFilter';
import Shows from './components/Home/Shows/Shows';
import Footer from './components/Home/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { useLocation } from "react-router-dom";




function App() {
    const location = useLocation(); // 获取当前路径
    const isHomePage = location.pathname === '/'; // 判断是否是首页
  return (
    <div className="App">
       {isHomePage && (
        <>
        <Search/>
        <SwiperCarousel/>
        <MenuBar/>
        <HomeFilter/>
        <Shows/>
        </>
       )} 
        
        {/* 二级路由出口 */}
        <Outlet/> 
        <Footer/>
    </div>
  );
}

export default App;