import React, { useState } from 'react';

function Bid(){
    const [loginstate] = useState(true);
    const [bid,setBid] = useState(false);
    const [BidMessage,SetBidMessage]= useState("welcome to Bidding page");
    const [Items] = useState([
        {key:1,name:'Ball',price:20.00,BidFlag:false,bidprice:0},
        {key:2,name:'Bat',price:20.00,BidFlag:false,bidprice:0},
        {key:3,name:'Stump',price:20.00,BidFlag:false,bidprice:0},
        {key:4,name:'keeper',price:20.00,BidFlag:false,bidprice:0}
    ]);
    const BidButton = ()=>{
        return (
            <button onClick={()=>{
                     
                if(!bid){
                    SetBidMessage("Bid is not done... doing ");
                    setBid(true);
                }else{
                    SetBidMessage("Bid is done");
                    setBid(false);
                }
            }}>Bid now</button>
        );
    }

    const bidpriceHandler = (event)=>{
        //Items.filter(Item => Item.key.indexOf(key)>0).map(Item => Item.bidprice = event.target.value);
        //console.log(Items.filter((Item) => {return Item.key.indexOf(keyval)>0}));
        console.log(event.target.value,event.target.key1,event.target.name);
        //const targetitem = Items.filter((item) => {item.name === 'Ball'});
         
    }
    const button = BidButton();
    const displayItems = Items.map((item) =>
         
            <tr key={item.key}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <input  type="text" name="bidprice" placeholder={item.bidprice} onChange={bidpriceHandler}></input>
                <td>{button}</td>
                <td>{item.bidprice}</td>
            </tr>
            
            
    );

    if(loginstate){
        return (
            <div>
                <h1>You are loggged in</h1>
                <h1>{BidMessage}</h1>
                <table>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>BidPrice</th>
                        <th>bid now</th>

                    </tr>
                    </thead>
                    <tbody>
                        {displayItems}
                    </tbody>
                    
                    
                </table> 
            </div>
            
        );
    }else{
        return (
            <h1>You are not loggged in</h1>
        );
    }
}

export default Bid;