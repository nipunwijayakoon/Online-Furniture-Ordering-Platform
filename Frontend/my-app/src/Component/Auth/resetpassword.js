import React from 'react';
import { CardContent, Grid, Paper, TextField} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NoEncryptionTwoToneIcon from '@material-ui/icons/NoEncryptionTwoTone';
import '../../App.css';


const Reset=()=>{

    const paperStyle={padding :20, height:'88vh',width:350,margin:"0px auto", backgroundColor:'white'}
    const avatarStyle={backgroundColor:'blue'}
    const btnstyle={margin:'20px 0'}
    
    
    return(
       
        <Grid style={{backgroundImage: "url('https://images.pexels.com/photos/6032283/pexels-photo-6032283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
            <Paper elevation={10} style={paperStyle} >
            
            <Grid align='center' >
            <Avatar style={avatarStyle}><NoEncryptionTwoToneIcon/></Avatar>
            <h2>Reset Password</h2> 
            </Grid> 
            <CardContent >
                <Typography align="center">
                    If you've lost your password or wish to reset it,
                    enter your email below to get started.
                </Typography>
            </CardContent>     
           
            <TextField label='Email' placeholder='Enter Email' fullWidth required/>
            
            <Button type='submit' color='#4d2600' variant="contained" position="center" style={btnstyle} fullWidth>Send Reset Link</Button>
            <CardContent >
                <Typography align="center">
                   If you did not forget your password you can safely ignore the email and click BACK. 
                </Typography>
            </CardContent>
            <Typography >
                <Button href="/signin" >BACK</Button>
            </Typography> 
              
            </Paper>
            
        </Grid>
      
    )

    
}
export default Reset

