import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import UploadDesignImageList from './UploadDesignImageList';
import UploadDesignImage from './UploadDesignImage';
import UploadNewDesign from './UploadNewDesign';
import WoodNameColor from './WoodNameColor';
import BranchLocationDuration from './BranchLocationDuration';
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


export class DesignStepper extends Component {
  state = {
    step: 1,
    newDesignCode: '',
    woodName: '',
    woodColour: '',
    branchName: '',
    location: '',
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
    const { newDesignCode, woodName, woodColour, branchName, location, timeDuration, personName, personAddress, contactDetails, personEmail } = this.state;
    const values = { newDesignCode, woodName, woodColour, branchName, location, timeDuration, personName, personAddress, contactDetails, personEmail };

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
            <BranchLocationDuration
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
          return <DoneMessage 
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default DesignStepper;

