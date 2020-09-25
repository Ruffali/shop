import React from 'react'
import './Button.scss';

export default function Button(props) {
    return (<button onClick={props.remove} type="submit" className={props.class} >{props.children}</button>)
}