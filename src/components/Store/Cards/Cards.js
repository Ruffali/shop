import React from 'react'
import { connect } from "react-redux";
import AddIcon from '@material-ui/icons/Add';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Cards.scss';

const Cards = (props) => {

    const onCardHandler = (id) => {
        const clothes = [...props.clothes];
        let product = clothes.find(elem => elem.id === id);

        product.quantity++;
        let product_total = product.price * product.quantity;
        product.total = product_total;

        props.onIncrementRemember(clothes)
    }

    return (
        <div className="cards">
            <div className="top">
                <div className="old_or_new">
                    {props.new ? <FiberNewIcon /> : ''}
                </div>
                <div className="heart">
                    <FavoriteBorderIcon />
                </div>
            </div>
            <div className="img">
                <img src={props.img} />
            </div>
            <div className="name">{props.name}</div>
            <div className="bottom">
                <div className="price">$ {props.price}</div>
                <div onClick={(id) => { onCardHandler(props.id) }} className="add_to_Card"><AddIcon />Add to Cart</div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        clothes: state.clothes,
        rememberRedux: state.remember
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementRemember: (clothes) => dispatch({ type: "INCREMENT", clt: clothes }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);