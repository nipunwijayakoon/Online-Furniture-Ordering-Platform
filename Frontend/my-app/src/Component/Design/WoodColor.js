import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import { amber, pink, red, brown, grey } from '@material-ui/core/colors';


import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';




import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
//import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const MahoganiRadio = withStyles({
  root: {
    color: red[900],
    '&$checked': {
      color: red[900],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const CherryRadio = withStyles({
  root: {
    color: pink[900],
    '&$checked': {
      color: pink[900],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


const RedOakRadio = withStyles({
  root: {
    color: red[700],
    '&$checked': {
      color: red[700],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const EbonyRadio = withStyles({
  root: {
    color: grey[900],
    '&$checked': {
      color: grey[900],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const AntiqueRadio = withStyles({
  root: {
    color: brown[600],
    '&$checked': {
      color: brown[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const WalnutRadio = withStyles({
  root: {
    color: brown[900],
    '&$checked': {
      color: brown[900],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const NaturalRadio = withStyles({
  root: {
    color: amber[200],
    '&$checked': {
      color: amber[200],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("7");

  const handleChange = (event) => {
    setValue(event.target.value);

  };

  return (
    <div className="page" style={{ backgroundImage: "url('https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
				

        <div className="container2">
        <Container maxWidth="sm">

    <Typography variant="h1" color="textPrimary"  paragraph>
    </Typography>

    

    <Typography variant="h1" color="textPrimary"  paragraph>
    </Typography>

    <Typography variant="h1" color="textPrimary"  paragraph>
    </Typography>

    <FormControl component="fieldset">
      <FormLabel component="legend" color="secondary" >Please Select the Color...</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="1" control={<NaturalRadio />} label="Natural Oak" />
        <FormControlLabel value="2" control={<AntiqueRadio />} label="Antique Oak" />
        <FormControlLabel value="3" control={<RedOakRadio />} label="Red Oak" />
        <FormControlLabel value="4" control={<WalnutRadio />} label="Dark Walnut" />
        <FormControlLabel value="5" control={<CherryRadio />} label="Dark Cherry" />
        <FormControlLabel value="6" control={<EbonyRadio />} label="Ebony" />
        <FormControlLabel value="7" control={<MahoganiRadio />} label="Mahogani" />
      </RadioGroup>
    </FormControl>
    
    
    </Container> 
        </div>
       <div>
          
				<div className="container4">
  
         <img src="/images/ExampleWoodColors.jpg"  width="576" height="530" alt=""/>

     
     </div>
  
			</div>
       
      
      </div>
 

		);
}