import React from 'react'
import Button from '../useful/Button/Button';
import './Show.scss';

export default function Show(props) {
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
                        <Button remove={props.onRemoveHandler} class={"default"}>Remove</Button>
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
