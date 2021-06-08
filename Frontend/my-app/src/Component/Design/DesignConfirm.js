import React, { Component } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';
import jsPDF from 'jspdf';
import logo from '../../images/company_logo.png'


import { ordersubmit } from '../../actions/newdesignsubmit';
import { values } from 'lodash';


export class DesignConfirm extends Component {

  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  Submit = async e => {
    const {
        values: { woodName, woodColour, branchName, location, personName, personAddress, personEmail, timeDuration, contactDetails, newDesignCode }
       } = this.props;
   
    console.log('sfsfsfs')
    this.props.nextStep();
    e.preventDefault();
    try {
      console.log("Wname", woodName)
      const res = await ordersubmit( woodName, woodColour, branchName, location, personName, personAddress, personEmail, timeDuration, contactDetails, newDesignCode );
      console.log("succ", res)
      
    } catch (error) {
      console.log(error)
    }

    var doc = new jsPDF('landscape','px','a4','false');
    doc.addImage(logo,'PNG',160,60,320,280)
    doc.setFont('Arial','bold')
    doc.text(238,30,'LANKA FURNITURE MAKERS')
    doc.text(270,370,'CONTACT US')

    doc.setFont('Arial','normal')
    doc.text(180,390,'Tel: 081-2235643 Mobile: (+94) 71 3452908 / 76 9145689')
    doc.text(230,407,'lankafurniture123@gmail.com')
    

    doc.addPage()
    doc.setFont('Arial','bold')
    doc.text(232,30,'New Design Order Details')

    doc.setFont('Arial','bold')
    doc.text(150,80,'New Design Code')
    doc.text(150,100,'Wood Name')
    doc.text(150,120,'Wood Color')
    doc.text(150,140,'Branch')
    doc.text(150,160,'Location Coordinates')
    doc.text(150,180,'Duration Time')
    doc.text(150,200,'Customer Name')
    doc.text(150,220,'Customer Address')
    doc.text(150,240,'Customer Email')
    doc.text(150,260,'Customer Telephone')

    doc.text(300,80,':')
    doc.text(300,100,':')
    doc.text(300,120,':')
    doc.text(300,140,':')
    doc.text(300,160,':')
    doc.text(300,180,':')
    doc.text(300,200,':')
    doc.text(300,220,':')
    doc.text(300,240,':')
    doc.text(300,260,':')
   
    doc.setFont('Helvertica','normal')

    doc.text(350,80, newDesignCode.toString())
    doc.text(350,100, woodName.toString())
    doc.text(350,120, woodColour.toString())
    doc.text(350,140, branchName.toString())
    doc.text(350,160, location.toString())
    doc.text(350,180, timeDuration.toString())
    doc.text(350,200, personName.toString())
    doc.text(350,220, personAddress.toString())
    doc.text(350,240, personEmail.toString())
    doc.text(350,260, contactDetails.toString())


    doc.save('New_Design_Order.pdf')

  }

  render() {
    const {
     values: { woodName, woodColour, branchName, location, personName, personAddress, personEmail, timeDuration, contactDetails, newDesignCode }
    } = this.props;


    return (
      <div className="Conf" style={{ backgroundImage: "url('https://images.pexels.com/photos/1080719/pexels-photo-1080719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
          <Container>
                <Typography variant="h5" color="Primary"  paragraph>
                    Confirm Your Order
                </Typography>


            <List>
              <ListItem>
                <ListItemText primary="New Design Code" secondary={newDesignCode} />
                <Typography color="Error"  gutterBottom>
                  *Please make sure to copy this New Design Code safely with you for future transactions.
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Wood Name" secondary={woodName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Wood Color" secondary={woodColour} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Branch Name" secondary={branchName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Location (Latitude,Longitude)" secondary={location} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Due Date" secondary={timeDuration} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact Name" secondary={personName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Postal Address" secondary={personAddress} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact Number" secondary={contactDetails} />
              </ListItem>
              <ListItem>
                <ListItemText primary="E-mail" secondary={personEmail} />
              </ListItem>
            </List>
            <div className="designconfirm">
            <Typography variant="h6" align="center" color="error" wrap paragraph>
              Before confirm your order, please make sure that you have filled all the fields in all the pages and if it's not so, your order will be rejected by the manufacturer...  
            </Typography>
            </div>                                  

            </Container>
        

            <br />

            <Button
              color="secondary"
              variant="contained"
              style={{marginLeft:540,}}
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              style={{marginLeft:12,}}
              onClick={this.Submit}
              type="submit">
              
              Confirm the Order</Button>

          </div> 
    );
  }
}

export default DesignConfirm;