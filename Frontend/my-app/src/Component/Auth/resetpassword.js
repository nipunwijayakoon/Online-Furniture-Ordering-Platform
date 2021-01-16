import React from 'react';
import { Grid, Paper, TextField} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NoEncryptionTwoToneIcon from '@material-ui/icons/NoEncryptionTwoTone';


const Reset=()=>{

    const paperStyle={padding :20, height:'80vh',width:350,margin:"20px auto", backgroundColor:'white'}
    const avatarStyle={backgroundColor:'gray'}
    const btnstyle={margin:'8px 0'}
    
    
    return(
       
        <Grid style={{backgroundImage: "url('https://images.pexels.com/photos/6032283/pexels-photo-6032283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}>
            <Paper elevation={10} style={paperStyle} >
            
            <Grid align='center' >
            <Avatar style={avatarStyle}><NoEncryptionTwoToneIcon/></Avatar>
            <h2>Reset Password</h2> 
            </Grid>      
           
            <TextField label='Email' placeholder='Enter Email' fullWidth required/>
            <Grid></Grid>
            <Button type='submit' color='#4d2600' variant="contained" position="bottom" style={btnstyle} fullWidth>Send Reset Link</Button>
            <span>
            <Typography >
                <Button href="/signin" position="bottom" >Back</Button>
            </Typography> 
            </span>    
            </Paper>
            
        </Grid>
      
    )

    
}
export default Reset

