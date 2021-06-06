
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


import { register } from '../../actions/auth';
import { setAlert } from "../../actions/alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding :20,
    height:'75vh',
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



const SignUp = ({setAlert, register, isAuthenticated}) => {
  const [formData, setFromData] = useState(
    {
      CustomerFirstName: '',
      CustomerlastName: '',
      CustomerTellnumber:'',
      CustomerEmail: '',
      CustomerPW: '',
      RetypeCustomerPW:'',
    }
  );

  const classes = useStyles();

  const { CustomerFirstName, CustomerlastName, CustomerEmail, CustomerTellnumber, CustomerPW, RetypeCustomerPW } = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {

    e.preventDefault();

    if (CustomerPW !== RetypeCustomerPW)setAlert("Passwords do not match", "danger");
    else
    
    register(CustomerEmail, CustomerFirstName,CustomerlastName, CustomerTellnumber, CustomerPW,RetypeCustomerPW);
    
  }


  if (isAuthenticated) { return <Redirect to="/aftersignincustomer" />; }

  

  return (
    <Grid style={{backgroundImage: "url('https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg')" ,backgroundSize: "cover"}}>
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
                    name="CustomerFirstName"
                    value={CustomerFirstName}
                    onChange={e => onChange(e)}

                    variant="outlined"
                    required
                    fullWidth
                    id="CustomerFirstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="CustomerlastName"
                    label="Last Name"
                    name="CustomerlastName"
                    value={CustomerlastName}
                    onChange={e => onChange(e)}
                    autoComplete="CustomerlastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="CustomerEmail"
                    label="Email Address"
                    name="CustomerEmail"
                    value={CustomerEmail}
                    onChange={e => onChange(e)}

                    autoComplete="CustomerEmail"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="CustomerTellnumber"
                    label="CustomerTellnumber"
                    name="CustomerTellnumber"
                    value={CustomerTellnumber}
                    onChange={e => onChange(e)}

                    autoComplete="CustomerTellnumber"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="CustomerPW"
                    value={CustomerPW}
                    onChange={e => onChange(e)}
                    label="CustomerPassword"
                    type="CustomerPW"
                    id="CustomerPW"
                    autoComplete="current-CustomerPW"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="RetypeCustomerPW"
                    value={RetypeCustomerPW}
                    onChange={e => onChange(e)}
                    label="RetypeCustomerPassword"
                    type="RetypeCustomerPW"
                    id="RetypeCustomerPW"
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
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(SignUp);