
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


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(0),
    padding :20,
    height:'70vh',
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



const SignUp =()=>{
  const [formData, setFromData] = useState(
    {
      ShopName:'',
      ShopEmail:'',
      ShopOwnerName:'',
      ShopTelNumber:'',      
    }
  );

  const { ShopName,
    ShopEmail,
    ShopOwnerName,
    ShopTelNumber } = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })
  const classes = useStyles();

  const onSubmit = async e => {

    e.preventDefault();

    try {
      console.log("Fname", ShopEmail)
      const res = await selleregistor(ShopName,
        ShopEmail,
        ShopOwnerName,
        ShopTelNumber,
        );
        console.log("suc", res)
      } catch (error) {
        console.log(error)
      }
      
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
            Register New Seller
      </Typography>
            <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="ShopName"
                    value={ShopName}
                    onChange={e => onChange(e)}

                    variant="outlined"
                    required
                    fullWidth
                    id="ShopName"
                    label="Seller Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="ShopEmail"
                    label="Email"
                    name="ShopEmail"
                    value={ShopEmail}
                    onChange={e => onChange(e)}
                    autoComplete="ShopEmail"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="ShopOwnerName"
                    label="Shop Area"
                    name="ShopOwnerName"
                    value={ShopOwnerName}
                    onChange={e => onChange(e)}

                    autoComplete="ShopOwnerName"
                  />
                </Grid>

                

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="ShopTelNumber"
                    label="PW"
                    name="ShopTelNumber"
                    value={ShopTelNumber}
                    onChange={e => onChange(e)}
                    autoComplete="ShopTelNumber"
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
                Register Seller
        </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/SellerDetails" variant="body2">
                    Back
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



export default SignUp