import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import UploadNewDesign from './UploadNewDesign';
import WoodColor from './WoodColor';
import WoodName from './WoodName';
import SelectingBranch from './SelectingBranch';
import Duration from './Duration';
import PersonDetails from './PersonDetails';


const useStyles = makeStyles((theme) => ({
  AppBar: {
    position: 'relative'
  
  },
  layout: {
    
    width: '200px',
    height: '650px',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 2000,
      hight: 650,
      marginLeft: '0px',
      marginRight: '0px',
      marginTop: '0px',
      marginBottom: '100px',
    },
  },
  paper: {
    
    position: 'default',
    width: '1349px',
    height: '712px',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(0),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    height:'20px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['New Design', 'Wood Name', 'Wood Color', 'Branch Name', 'Time Duration', 'Contact Details'];

function getStepContent(step) {
  document.body.style.color = "beige";
  switch (step) {
    case 0:
      return <UploadNewDesign />;
    case 1:
        return <WoodName />;
    case 2:
      return <WoodColor />;
    case 3:
      return <SelectingBranch />;
    case 4:
      return <Duration />;
    case 5:
        return <PersonDetails />;
    default:
      throw new Error('Unknown step');
  }
}

export default function PaymentCheckout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Typography variant="h1" color="textPrimary"  paragraph>
     
      </Typography>
      <CssBaseline />
      <div className="page" >
      
      <main className={classes.layout}>
        
        <Paper className={classes.paper}style={{ backgroundColor: "beige"}} >
          <Typography component="h1" variant="h4" align="center">
            Make Your Spaces Extra Comfortable with Your Own Design... Own Fashion... Own Style... 
          </Typography>
          <Typography variant="h1" color="textPrimary"  paragraph>
     
          </Typography>

          <Stepper activeStep={activeStep} className={classes.stepper} style={{ backgroundColor: "ivory" }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Typography variant="h1" color="textPrimary"  paragraph>
              
          </Typography>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order is successfully sent to the shop owner of the particular shop. Shop owner will be contacted you for the better awareness.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Send this Order to the Manufacturer' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        
      </main>
      
      </div>
    </React.Fragment>
  );
}

