import React from 'react';
import '../../App.css';
import JSONDATA from './MOCK_DATA.json'
import {useState} from 'react'
import './Shops.css';

 function Shops() {
    const[SearchTerm,setSearchTerm]=useState('')
  return ( 
    
      <div className="Shops">
          <input type="text" placeholder= "Search a shop..." onChange={event => {setSearchTerm(event.target.value)}}/>
          {JSONDATA.filter((val)=>{
              if(SearchTerm ==""){
                  return val
              }else if(val.Shop_name.toLowerCase().includes(SearchTerm.toLowerCase())){
                  return val
              }

          }

          ). map((val,key) => {
          return (
          <div className="user" key={key}>
              <br></br>
              <p>Shop name:{val.Shop_name}</p> 
              <p>Owner name :{val.Owner_name}</p>
              <p>Email      :{val.Email}</p>
               </div>
          );
          })}

        
      </div>

   );
}



export default Shops;