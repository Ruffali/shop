import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Cards.scss';

export default function Cards(props) {
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
                <div onClick={props.onCardHandler} className="add_to_Card"><AddIcon /> Add to Cart</div>
            </div>
        </div>
    )
}
