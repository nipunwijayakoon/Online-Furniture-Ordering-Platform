import React from 'react';
import './fechting.css';


const Dataform =(props) =>{
    return(

        <form onSubmit ={props.getUser} className="Data">

            <input style={{margin:"20px auto", dispaly:"block"}} type="text"  name="customerID"/>
            <button>Search</button>

        </form>
    );
}   




export default Dataform;