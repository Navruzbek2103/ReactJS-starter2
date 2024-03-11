// by Navruzbek Akhmadaliyev, connect - @navrozbek01, navrozbek2306@gmail.com
import React from 'react';
import "./style.scss";
import SiteLogo from "./../../assets/images/site-logo.svg"
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";




const index = () => {
   return (
      <header className='header'>
         <div className="container-big">
            <div className="container-one">
               <nav className="nav">
                  <Link to="" className='nav__link'>
                     <img src={SiteLogo} alt="site logo image" className="nav__link__img" />
                  </Link>

                  <div className="nav__menuBox">
                     <Link className='nav__menuBox__dropdownMenu'>
                        Use cases


                     </Link>
                     <ul className="nav__menuBox__list">
                        <li className="nav__menuBox__item">
                           <NavLink className="nav__menuBox__item__link">
                              About
                           </NavLink>
                        </li>
                        <li className="nav__menuBox__item">
                           <NavLink className="nav__menuBox__item__link">
                              Pricing
                           </NavLink>
                        </li>
                        <li className="nav__menuBox__item">
                           <NavLink className="nav__menuBox__item__link">
                              Blog
                           </NavLink>
                        </li>
                     </ul>
                  </div>

                  <div className="nav__register">
                     <button className="nav__register__login">Login</button>
                     <button className="nav__register__signUp">Sign up</button>
                  </div>
               </nav>
            </div>

         </div>
      </header>
   );
};

export default index;