import { useEffect, useState } from "react";
import "./App.css";
import ContextProvider, { useAppContext } from "./Context/ContextProvider";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Cartside from "./components/Cartside";


export default function App() {
  const { getUserDetails } = useAppContext();
  const [showCart,setShowCart] = useState(false);
  useEffect(() => {
    /**user Details */
    getUserDetails();
  }, []);

  return (
    <>
        <Navbar showCart={showCart} setShowCart={setShowCart}/>
        {showCart && <Cartside setShowCart={setShowCart}/>}
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </>
  );
}
