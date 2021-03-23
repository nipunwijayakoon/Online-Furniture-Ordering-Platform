import React from 'react'
import './Button4.css';
import { Link } from 'react-router-dom';

export default function Button3() {
    return (
        <div  className="Datas">

<Link to='/admin-note'>
<button>CREATE NOTES</button>
</Link>


{/*<button>FURNITRUE MAKER SIGNIN</button>*/}


<Link to='/CDetails'>
     <button >
     CUSTOMER DETAILS
     </button>
 </Link>


 <Link to='/ManageProduct'>
     <button >
     PRODUCT DETAILS
     </button>
 </Link>

 
            
        </div>
    )
}
