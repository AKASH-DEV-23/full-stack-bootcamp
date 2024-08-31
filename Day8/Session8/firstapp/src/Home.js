import React from 'react';
import Headerss from './Headerss';

export function Home(props) {
    return(
    <>

    <h1>Hello {props.name}</h1>
    <Headerss></Headerss>
    </>
    );
}