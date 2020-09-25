import React from 'react';


function Shop(){
    return(
        <div>
            <h1>shop page</h1>
            <ForShopOnly name='Arun'/>
        </div>
    );
}

const ForShopOnly = (props) =>{ return (<div><h5>This is session of {props.name}</h5></div>);}

export default Shop;