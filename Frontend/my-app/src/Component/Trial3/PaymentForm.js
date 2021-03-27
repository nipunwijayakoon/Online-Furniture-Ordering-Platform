
import '../../App.css';
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


import { payment } from './PaymentSubmit';


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
const PaymentForm = () => {
  const [formData, setFromData] = useState(
    {
      CardName: '',
      CardNo: '',
      ExpMonth: '',
      ExpYear: '',
      Cvv: '',
      BillDate:'',
      Email:'',
      TotalPrice: ''
    }
  );

  const { CardName, CardNo, ExpMonth, ExpYear, Cvv, BillDate, Email, TotalPrice } = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {

    e.preventDefault();
    try {
      console.log("Cname", CardName)
      const res = await payment(CardName, CardNo, ExpMonth, ExpYear, Cvv, BillDate, Email, TotalPrice);
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
              Payment Form
      </Typography>
            <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="Cname"
                    name="CardName"
                    value={CardName}
                    onChange={e => onChange(e)}

                    variant="outlined"
                    required
                    fullWidth
                    id="CardName"
                    label="Card Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="CardNo"
                    label="Card Number"
                    name="CardNo"
                    value={CardNo}
                    onChange={e => onChange(e)}
                    autoComplete="CardNo"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="ExpMonth"
                    label="Expiry Month"
                    name="ExpMonth"
                    value={ExpMonth}
                    onChange={e => onChange(e)}

                    autoComplete="ExpMonth"
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="ExpYear"
                    label="Expiry Year"
                    name="ExpYear"
                    value={ExpYear}
                    onChange={e => onChange(e)}

                    autoComplete="ExpYear"
                  />
                </Grid>
                
                <Grid item xs={12} sm={4}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="Cvv"
                    value={Cvv}
                    onChange={e => onChange(e)}
                    label="CVV"
                    type="Cvv"
                    id="Cvv"
                    //autoComplete="Cvv"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="BillDate"
                    value={BillDate}
                    onChange={e => onChange(e)}
                    label="Billing Date"
                    type="BillDate"
                    id="BillDate"
                    //autoComplete="BillDate"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Email"
                    label="E-mail"
                    name="Email"
                    value={Email}
                    onChange={e => onChange(e)}

                    autoComplete="Email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="TotalPrice"
                    label="Total Price"
                    name="TotalPrice"
                    value={TotalPrice}
                    onChange={e => onChange(e)}

                    //autoComplete="Total Price"
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
                Submit
            </Button>

            </form>
          </div>
          <Box mt={5}>

          </Box>
        </Container>
      </section>
    </Fragment>
  );
}

export default PaymentForm