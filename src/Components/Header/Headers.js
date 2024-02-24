import "../../Styles/Headers.css"
import React, { useState } from 'react';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";

export default function Headers()
{
    const[{basket},dispatch] = useStateValue();
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');

    // const handleSearch = () => {
    //     const filteredResults = dummyData.filter((item) =>
    //       item.name.toLowerCase().includes(query.toLowerCase())
    //     );
    //     setResults(filteredResults);
    // };

    return(
        <div className="header">
            <Link to="/" style={{textDecoration:"none"}}>
                <div className="header__logo">
                    <StorefrontRoundedIcon className='header__logoImage' fontSize='large'/>
                    <h2 className='header__logoTitle'>AmazeClone</h2>
                </div>
            </Link>
            <div className="header__search">
                <input 
                    type='text' 
                    className='header__searchInput'
                    onChange={(e)=> setQuery(e.target.value)}
                />
                <button>
                    <SearchRoundedIcon className='header__searchIcon'/>
                </button>
            </div>

            <div className="header__nav">
                <Link to="/" style={{textDecoration:"none"}}>
                    <div className="nav__item">
                        <span className="nav_itemLineOn">Hello Guest</span>
                        <span className="nav_itemLineTwo">Sign In</span>
                    </div>
                </Link>

                <div className="nav__item">
                    <span className="nav_itemLineOn">Your</span>
                    <span className="nav_itemLineTwo">Shop</span>
                </div>
                <Link to="/checkout" style={{textDecoration:"none"}}>
                    <div className="nav__itemBasket">
                        <ShoppingBasketRoundedIcon />
                        <span className="nav_itemLineTwo nav_basketCount">{basket.length}</span>
                    </div>
                </Link> 
            </div>
        </div>
    )
}