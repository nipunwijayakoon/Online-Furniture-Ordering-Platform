import React from 'react'
import './Button3.css';
import { Link } from 'react-router-dom';

export default function Button3() {
    return (
        <div  className="Datas">

<Link to='/admin-note'>
<button>ADMIN SIGNIN</button>
</Link>


<button>FURNITRUE MAKER SIGNIN</button>


<Link to='/customer-sign-in'>
     <button >
     CUSTOMER SIGNIN
     </button>
 </Link>
            
        </div>
    )
}
