import React from 'react'
import './Button5.css';
import { Link } from 'react-router-dom';

export default function Button5() {
    return (
        <div  className="Datas">

<Link to='/sign-up'>
<button>AS A BUYER</button>
</Link>


{/*<button>FURNITRUE MAKER SIGNIN</button>*/}


<Link to='/asaseller'>
     <button >
     AS A SELL
     </button>
 </Link>
            
        </div>
    )
}
