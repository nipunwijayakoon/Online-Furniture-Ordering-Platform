import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import UploadDesignImageList from './UploadDesignImageList';
import UploadDesignImage from './UploadDesignImage';
import UploadNewDesign from './UploadNewDesign';
import WoodNameColor from './WoodNameColor';
import BranchDistanceDuration from './BranchDistanceDuration';
import DesignConfirm from './DesignConfirm';
import PersonDetails from './PersonDetails';
import DoneMessage from './DoneMessage';





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

//const steps = ['New Design', 'Wood Name', 'Wood Color', 'Branch Name', 'Time Duration', 'Contact Details'];

export class DesignStepper extends Component {
  state = {
    step: 1,
    newDesignCode: '',
    woodName: '',
    woodColour: '',
    branchName: '',
    distance: '',
    timeDuration: '',
    personName: '',
    personAddress: '',
    contactDetails: '',
    personEmail: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { newDesignCode, woodName, woodColour, branchName, distance, timeDuration, personName, personAddress, contactDetails, personEmail } = this.state;
    const values = { newDesignCode, woodName, woodColour, branchName, distance, timeDuration, personName, personAddress, contactDetails, personEmail };

    switch (step) {
      case 1:
        return (
          
          <UploadDesignImageList
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <WoodNameColor
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
          return (
            <BranchDistanceDuration
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 4:
          return (
            <PersonDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 5:
          return (
            <DesignConfirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          );
          case 6:
          return <DoneMessage />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default DesignStepper;



{/*

function getStepContent(step) {
  document.body.style.color = "beige";
  switch (step) {
    case 0:
      return (<UploadNewDesign />);
    case 1:
        return (<WoodName />);
    case 2:
      return (<WoodColor />);
    case 3:
      return (<SelectingBranch />);
    case 4:
      return (<Duration />);
    case 5:
        return (<PersonDetails />);
    default:
      (console.log('This is a multi-step form built with React.'));
  }
}

export class DesignStepper extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

  return (
    <
    React.Fragment>
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
}

export default DesignStepper;
*/}
