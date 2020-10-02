import React from 'react'
import { connect } from "react-redux";
import './Show.scss';

const Show = (props) => {

    const onRemoveHandler = (id) => {
        let clothes = [...props.clothes];
        let product = clothes.find(elem => elem.id === id);

        product.quantity--;
        let product_total = product.total - product.price;
        product.total = product_total;

        props.onDecrementRemember(clothes);
    }

    if (props.quantity != 0) {
        return (
            <div className="show">
                <div className="top">
                    <div className="top_name">Name</div>
                    <div className="top_name">Quantity</div>
                    <div className="top_name">Image</div>
                    <div className="top_name">Price</div>
                    <div className="top_name">Buttons</div>
                </div>
                <div className="bottom">
                    <div className="bottom_name">{props.name}</div>
                    <div className="bottom_name">{props.quantity}</div>
                    <div className="bottom_name"><img src={props.image} /></div>
                    <div className="bottom_name">{props.result}</div>
                    <div className="bottom_name">
                        <button onClick={(id) => { onRemoveHandler(props.id) }} class={"default"}>Remove</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
const mapStateToProps = state => {
    return {
        clothes: state.clothes,
        rememberRedux: state.remember
    }
}
const decrementRedux = dispatch => {
    return {
        onDecrementRemember: (clothes) => dispatch({ type: "DECREMENT", clt: clothes }),
    };
};

export default connect(mapStateToProps, decrementRedux)(Show);