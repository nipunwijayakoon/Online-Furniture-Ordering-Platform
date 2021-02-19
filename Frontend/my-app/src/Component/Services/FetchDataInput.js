import React from 'react';
import './FetchDataInput.css';


const Dataform =(props) =>{
    return(

        <form onSubmit ={props.getUser} className="Data">

            <input style={{margin:"20px auto", dispaly:"block"}} type="text" name="ID"/>
            <button>Search</button>

        </form>
    );
}   




export default Dataform;