import React from 'react'
import { connect } from "react-redux";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PolymerIcon from '@material-ui/icons/Polymer';
import './Nav.scss';

const Nav = (props) => {
  
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
            <div onClick={props.showBasket} className="basket">
                <ShoppingBasketIcon />
                {props.rememberRedux ? <span>{props.rememberRedux}</span> : ''}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        show: state.show,
        rememberRedux: state.remember
    }
}

const showFromBasket = dispatch => {
    return {
        showBasket: () => dispatch({ type: "SHOW" }),
    };
};

export default connect(mapStateToProps, showFromBasket)(Nav);
