import React from 'react';
import './Title.css'

function Title(props) {
    return (
        <div className='title-container'>
            <h1>{props.title}</h1>
            <h2>{props.caption}</h2>
        </div>
    )
}

export default Title;