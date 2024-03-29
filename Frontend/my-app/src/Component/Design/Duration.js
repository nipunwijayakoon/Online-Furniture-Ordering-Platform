import React from 'react';

import FormHelperText from '@material-ui/core/FormHelperText';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '700px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '300px',
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();

  return (
    <div className="Duration" style={{ backgroundColor: "blanchedalmond" }}>
    <Container>
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    
      <FormHelperText>Please enter the due date which you will expect to get this product in..</FormHelperText>
     
    </form>
    </Container>



    </div>
  );
}