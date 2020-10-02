import React from 'react'
import Cards from './Cards/Cards';
import Search from './Search/Search';
import { connect } from "react-redux";
import './Store.scss';

const Store = (props) => {

    return (
        <div className="store">
            <div className="top">STORE</div>
            <div className="content">This is the Store Page.</div>
            <div className="top">
                <Search />
            </div>
            {props.clothes.map((item) => (
                <Cards key={item.id}
                    id={item.id}
                    new={item.new}
                    name={item.name}
                    price={item.price}
                    img={item.img} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        clothes: state.clothes
    }
}

export default connect(mapStateToProps)(Store);