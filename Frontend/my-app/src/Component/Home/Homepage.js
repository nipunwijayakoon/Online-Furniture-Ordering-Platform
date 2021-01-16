import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        <Link to="/signin" className="btn btn-primary">Sign In</Link>
        <Link to="/Checkout" className="btn btn-primary">Confirmation</Link>
        
    
        
        
        
    </div>)
}
    
    
export default Homepage;