
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
        employeeFirstName: '',
        employeeLastName: '',
        employeeTellnumber:'',
        employeeEmail: '',
        employeeTown: '',
    }
  );

  const { employeeFirstName, employeeLastName, employeeEmail, employeeTellnumber, employeeTown} = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {

    e.preventDefault();
    try {
      console.log("Fname", employeeFirstName)
      const res = await empregistor(employeeEmail, employeeFirstName,employeeLastName, employeeTown, employeeTellnumber);
      console.log("suc", res)
    } catch (error) {
      console.log(error)
    }

  }

  const classes = useStyles();

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
              Employee Registration
      </Typography>
            <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="employeeFirstName"
                    name="employeeFirstName"
                    value={employeeFirstName}
                    onChange={e => onChange(e)}

                    variant="outlined"
                    required
                    fullWidth
                    id="employeeFirstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="employeeLastName"
                    label="Last Name"
                    name="employeeLastName"
                    value={employeeLastName}
                    onChange={e => onChange(e)}
                    autoComplete="employeeLastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="employeeEmail"
                    label="Email Address"
                    name="employeeEmail"
                    value={employeeEmail}
                    onChange={e => onChange(e)}

                    autoComplete="employeeEmail"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="employeeTellnumber"
                    label="employeeTellnumber"
                    name="employeeTellnumber"
                    value={employeeTellnumber}
                    onChange={e => onChange(e)}

                    autoComplete="employeeTellnumber"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="employeeTown"
                    value={employeeTown}
                    onChange={e => onChange(e)}
                    label="employeeTown"
                    type="employeeTown"
                    id="employeeTown"
                    autoComplete="employeeTown"
                  />
                </Grid>


                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="**********************************************************"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
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
  );
}

export default EMPSignUp