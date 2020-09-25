import React, { useState } from 'react';

function Auction(){
    const [loginstate] = useState(true);
    
    if(loginstate){
        return (
            <h1>You are loggged in</h1>
        );
    }else{
        return (
            <h1>You are not loggged in</h1>
        );
    }
}

export default Auction;