import React,{useState} from 'react';
 
function Home(){
    const [mainMessage] = useState("Welcome to the Auction home page");
    return(
        <div>
            <h1>{mainMessage}</h1>
        </div>
    );
}

export default Home;