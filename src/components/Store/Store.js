import React from 'react'
import Cards from './Cards/Cards';
import Search from './Search/Search';
import './Store.scss';

export default function Store(props) {
    return (
        <div className="store">
            <div className="top">STORE</div>
            <div className="content">This is the Store Page.</div>
            <div className="top">
                <Search quantity={props.clothes}/>
            </div>
            {props.clothes.map((item) => (
                <Cards key={item.id}
                    onCardHandler={() => { props.onCardHandler(item.quantity, item.id) }}
                    new={item.new}
                    name={item.name}
                    price={item.price}
                    img={item.img} />
            ))}
        </div>
    )
}
