import React from 'react';
import '../../App.css';
import JSONDATA from './MOCK_DATA.json'
import {useState} from 'react'
import './Shops.css';

 function Shops() {
    const[SearchTerm,setSearchTerm]=useState('')
  return ( 
      <div className="Shops">
          <input type="text" placeholder= "Search.." onChange={event => {setSearchTerm(event.target.value)}}/>
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
              <p>{val.Shop_name}</p> 
               </div>
          );
          })}

        
      </div>

   );
}



export default Shops;