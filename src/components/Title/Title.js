import React from 'react';
import './Title.css'

function Title(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <h2>{props.caption}</h2>
        </>
    )
}

export default Title;