import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PolymerIcon from '@material-ui/icons/Polymer';
import './Nav.scss';

export default function Nav(props) {
    return (
        <div className="nav">
            <div className="logo">
                < PolymerIcon />
            </div>
            <div className="sides">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About us</a>
            </div>
            <div onClick={props.shohHandler} className="basket">
                <ShoppingBasketIcon />
                {props.quantity ? <span>{props.quantity}</span> : ''}
            </div>
        </div>
    )
}
