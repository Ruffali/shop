import React from 'react'
import Cards from './Cards/Cards';
import './Store.scss';

export default function Store(props) {
    return (
        <div className="store">
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
// onCardHandler={ () => { props.onCardHandler(item.quantity, item.id) }}
