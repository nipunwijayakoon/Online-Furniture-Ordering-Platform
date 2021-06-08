
import '../App.css';
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

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
import { first } from 'lodash';


import { empregistor } from '../actions/auth';


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
const EMPSignUp = () => {
  const [formData, setFromData] = useState(
    {
        AdminFistName: '',
        AdminLastName: '',
        AdminPW:'',
        RetypeAdminPW: '',
        AdEmail: '',
    }
  );

  const { AdminFistName, AdminLastName, AdminPW, RetypeAdminPW, AdEmail} = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {

    e.preventDefault();
    try {
      console.log("Fname", AdminFistName)
      const res = await empregistor(AdminFistName, AdminLastName,AdminPW, RetypeAdminPW, AdEmail);
      console.log("suc", res)
    } catch (error) {
      console.log(error)
    }

  }

  const classes = useStyles();

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
              Employee Registration
      </Typography>
            <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="AdminFistName"
                    name="AdminFistName"
                    value={AdminFistName}
                    onChange={e => onChange(e)}

                    variant="outlined"
                    required
                    fullWidth
                    id="AdminFistName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="AdminLastName"
                    label="Last Name"
                    name="AdminLastName"
                    value={AdminLastName}
                    onChange={e => onChange(e)}
                    autoComplete="AdminLastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="AdEmail"
                    label="Email Address"
                    name="AdEmail"
                    value={AdEmail}
                    onChange={e => onChange(e)}

                    autoComplete="AdEmail"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="AdminPW"
                    label="AdminPW"
                    name="AdminPW"
                    value={AdminPW}
                    onChange={e => onChange(e)}

                    autoComplete="AdminPW"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="RetypeAdminPW"
                    value={RetypeAdminPW}
                    onChange={e => onChange(e)}
                    label="RetypeAdminPW"
                    type="RetypeAdminPW"
                    id="RetypeAdminPW"
                    autoComplete="RetypeAdminPW"
                  />
                </Grid>


                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Terms and the regulations are applicable"
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
                Registor
        </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to='/Empdetails' variant="body2">
                    Back to details
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

export default EMPSignUp