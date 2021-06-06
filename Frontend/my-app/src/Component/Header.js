import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


//import {Link} from 'react-router-dom'

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Confirmation from './Payment/Confirmation'
import UploadNewDesign from './Design/UploadNewDesign';

import './Header.css';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Online Ordering to make Furniture
      </Link>{' '}
      
    </Typography>
  );
}




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: '100%',
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

}));






export default function Album() {
  const classes = useStyles();
 


  return (

    <React.Fragment>

      
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundImage: "url('https://images.pexels.com/photos/301378/pexels-photo-301378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",backgroundSize: "cover"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Choose Your Designs Now...
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}  style={{ backgroundImage: "url('https://images.pexels.com/photos/6032437/pexels-photo-6032437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",backgroundSize: "cover"}}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Available Furniture Designs
            </Typography>
            <div className="container3">
            <Typography variant="h6" align="center" color="error"  paragraph>
              In Furniture Catalogue you can see the furniture products which are currently available in our store. You can order your products by adding relavent products to the cart. If anything relevant, you can contact our member...
            </Typography>
            <Typography variant="h6" align="center" color="secondary" paragraph>
              Tel: 081-2235643 Mobile: (+94) 71 3452908 / 76 9145689
            </Typography>
            </div>
            <div className={classes.heroButtons}>
            
              <Grid container spacing={2} justify="center">
                <Grid item>

                <div className="UpNewDesign">
                <Button variant="contained" color="primary">
                    <Link underline="none" href= "designstepper">Upload a New Design</Link>    
                  </Button>
                  </div>
                </Grid>
                
              </Grid>
            </div>
          
            
          </Container>
        </div>
        {/* End of hero unit */}



        </main>

    </React.Fragment>
  );
  }

