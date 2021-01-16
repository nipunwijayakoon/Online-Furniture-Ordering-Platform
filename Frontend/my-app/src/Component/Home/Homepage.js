import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Homepage = () => {
    return (
    <div>
        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        <Link to="/ViewDesign" className="btn btn-primary">View Design</Link>
        
    </div>)
   
}
    
    
export default Homepage;