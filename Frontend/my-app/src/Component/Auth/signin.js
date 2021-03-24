


import '../../App.css';



import { Link, Redirect } from "react-router-dom";
import React, { Fragment, useState } from "react";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';




import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';





const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));





  const SignIn=({ login, isAuthenticated, user }) =>{


    const [formData, setFromData] = useState(
        {
          Email: '',
          Password: '',
    
        }
      );


      const classes = useStyles();


      const { Email,Password } = formData;

      const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })
    
      const onSubmit = async e => {
    
        e.preventDefault();
        
        login(Email,Password);
    
      };


    

      if (isAuthenticated) {
        if (user.role === "Customer")
          return <Redirect to="/aftersignin" />;
        else if (user.role == "Employee")
          return <Redirect to="/" />
        else
          console.log(user.role);
      }



  
  
    return (
        <Fragment>
            <section>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="Email"
              value={Email}
              onChange={e => onChange(e)}

              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Password"
              value={Password}
             onChange={e => onChange(e)}

              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              

            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/resetpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          
        </Box>
      </Container>
      </section>
      </Fragment>
    );
  }



  SignIn.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  });


export default connect(mapStateToProps, { login })(SignIn);






































   























































































