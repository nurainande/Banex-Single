import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Context/ContextProvider';
import Cookies from "js-cookie";

// const user = 'null';
const navItems = ["Apple",'Android','Windows', 'Product','Support'];
const Navbar = ({setShowCart}) => {
  const navigate = useNavigate()
  const { user,setUser,state} = useAppContext();
  console.log(user)


  const logout = () =>{
    Cookies.remove("token");
    setUser(null);
    navigate('/');
    setShowCart(false);
  }
  
  return (
    <header className="header">
      <nav className="nav container">
        {user?.role==='admin' ? <div className="logo">
          <Link to="/">Banex Admin</Link>
        </div>:<div className="logo">
          <Link to="/">Banex</Link>
        </div>}

        {user?.role !== "admin" && (
          <ul className="nav-items">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a>{item}</a>
              </li>
            ))}
          </ul>
        )}

        {user?.role === "admin" && (
          <ul className="nav-items">
            <li className="nav-item">
              <a>Manage User</a>
            </li>
            <li className="nav-item">
              <a>Manage Products</a>
            </li>

            <li className="nav-item">
              <a>Manage Orders</a>
            </li>
          </ul>
        )}

        <div className="last">
          <a>
            <i className="fas fa-search"></i>
          </a>
          <a
            onClick={() => setShowCart(true)}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <div
              style={{
                background: "green",
                width: "15px",
                height: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                position: "absolute",
                right: "0",
                top: "-20%",
              }}
            >
              <span style={{ fontSize: "0.7rem" }}>{state.cart.length}</span>
            </div>
            <i className="fas fa-shopping-cart"></i>
          </a>

          {user ? (
            <button onClick={logout} style={{ cursor: "pointer",background:'red' }}>
              Logout {user?.name}
            </button>
          ) : (
            <Link to="login-reg">
              <i className="fas fa-user-circle"></i>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar
