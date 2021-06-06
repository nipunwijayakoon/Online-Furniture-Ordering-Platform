import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './AboutUs.css';
import './Footer.css';


function Copyright() {
  return (
    <div className="footer">
    <Typography variant="h8" allign="center" component="h3">
      {/* {'Copyright © '} */}
      {/* {'Contact Us'} */}
      <br/>
      <div className="mail" align="center">
      <li><i class="fas fa-phone"></i> <a> Call Now: 94 777 297597 </a></li>
      <li><i class="far fa-envelope"></i> <a href="mailto:furnitureslanka@gmail.com">furnitureslanka@gmail.com</a></li>
      </div>
     <Typography> <Link color="inherit" href="http://localhost:3000/">
        LANKA FURNITURE MAKERS
      </Link></Typography>
    </Typography>
   
    
   <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      All Rights Reserved
    </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
   
    <footer className={classes.footer} style={{ backgroundImage: "url('https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",backgroundSize: "cover"}}>
  
    <Typography variant="h6" align="center" color="inherit" gutterBottom >
   CONTACT US
    </Typography>
    
    <Copyright />
  </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};