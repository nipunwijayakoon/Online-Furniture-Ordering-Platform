
import '../../App.css';
import React, { Fragment, useState } from "react";
import {  Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { first } from 'lodash';


import { selleregistor } from '../../actions/auth';
import { setAlert } from "../../actions/alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(0),
    padding :20,
    height:'95vh',
    width:400,
    margin:"0px auto",
    backgroundColor:'white'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const SignUp = ({setAlert, selleregistor, isAuthenticated}) => {
  const [formData, setFromData] = useState(
    {
        SellerEmail:'',
        SellerFirstName:'',
        SellerLastName:'',
        Name:'',
        TelNumber:'',
        SellerPW:'',
        RetypeSellerPW:'',
        
                
    }
  );

  const { SellerEmail,
    SellerFirstName,
    SellerLastName,
    Area,
    Name,
    TelNumber,
    SellerPW,
    RetypeSellerPW } = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })
  const classes = useStyles();

  const onSubmit = async e => {

    e.preventDefault();
    if (SellerPW !== RetypeSellerPW )setAlert("Passwords do not match", "danger");
    else
      selleregistor(SellerEmail,
        SellerFirstName,
        SellerLastName,
        Area,
        Name,
        TelNumber,
        SellerPW,
        RetypeSellerPW,
        );
      
    } 




  

  return (
    <Grid style={{backgroundImage: "url('https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?cs=srgb&dl=pexels-ken-tomita-389818.jpg&fm=jpg')" ,backgroundSize: "cover"}}>
    <Fragment>
      <section>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              
      </Typography>
            <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="SellerFirstName"
                    value={SellerFirstName}
                    onChange={e => onChange(e)}

                    variant="outlined"
                    required
                    fullWidth
                    id="SellerFirstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="SellerLastName"
                    label="Last Name"
                    name="SellerLastName"
                    value={SellerLastName}
                    onChange={e => onChange(e)}
                    autoComplete="SellerLastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="SellerEmail"
                    label="Email Address"
                    name="SellerEmail"
                    value={SellerEmail}
                    onChange={e => onChange(e)}

                    autoComplete="SellerEmail"
                  />
                </Grid>

                

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Area"
                    label="Branch name"
                    name="Area"
                    value={Area}
                    onChange={e => onChange(e)}
                    autoComplete="Area"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="TelNumber"
                    label="TelNumber"
                    name="TelNumber"
                    value={TelNumber}
                    onChange={e => onChange(e)}

                    autoComplete="TelNumber"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="SellerPW"
                    value={SellerPW}
                    onChange={e => onChange(e)}
                    label="SellerPassword"
                    type="SellerPW"
                    id="SellerPW"
                    autoComplete="current-SellerPW"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="RetypeSellerPW"
                    value={RetypeSellerPW}
                    onChange={e => onChange(e)}
                    label="RetypeSellerPassword"
                    type="RetypeSellerPW"
                    id="RetypeSellerPW"
                    //autoComplete="current-CustomerPW"
                  />
                </Grid>




                
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign Up
        </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/customer-sign-in" variant="body2">
                    Already have an account? Sign in
            </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>

          </Box>
        </Container>
      </section>
    </Fragment>
    </Grid>
  );
}


SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  selleregistor: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, selleregistor })(SignUp);