import React from 'react';
import Input from '../../useful/Input/Input';
import SVGsearch from '../../../assets/img/search.svg';
import { connect } from "react-redux";
import './Search.scss';

const Search = (props) => {
    return (
        <div className="search">
            <div className="left">
                {props.clothes.length} Products
            </div>
            <div className="right">
                <Input
                    title={"Search Product"}
                    svg={SVGsearch}
                    class={"form_input"}
                    type={"text"}
                    name={"search"}
                    placeholder={"Search Product"} />
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        clothes: state.clothes
    }
}

export default connect(mapStateToProps)(Search);