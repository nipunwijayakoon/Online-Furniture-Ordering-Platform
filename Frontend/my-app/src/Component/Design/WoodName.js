import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import './WoodName.css';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="WName"style={{ backgroundImage: "url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}} >
    <FormControl component="fieldset">
      <Container>
      <FormLabel component="legend">Select the Wood</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="1" control={<Radio />} label="Tamarind Wood" />
        <FormControlLabel value="2" control={<Radio />} label="Satinwood" />
        <FormControlLabel value="3" control={<Radio />} label="Nadun Wood" />
        <FormControlLabel value="4" control={<Radio />} label="Teakwood" />
        <FormControlLabel value="5" control={<Radio />} label="Ebony Wood" />
        <FormControlLabel value="6" control={<Radio />} label="Jak Wood" />
        <FormControlLabel value="7" control={<Radio />} label="Sooriya-Mara Wood" />
        <FormControlLabel value="8" control={<Radio />} label="Halmilla" />
      </RadioGroup>
      </Container>



    </FormControl>
    <div>
    <Typography variant="h1" color="textSecondary"  paragraph>
      `                        
    </Typography>
    
    </div>
    </div>
  
  
  );
 
}