import React from 'react';
import Input from '../../useful/Input/Input';
import SVGsearch from '../../../assets/img/search.svg';

import SearchIcon from '@material-ui/icons/Search';
import './Search.scss';

export default function Search(props) {
    return (
        <div className="search">
            <div className="left">
                {props.quantity.length} Products
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
