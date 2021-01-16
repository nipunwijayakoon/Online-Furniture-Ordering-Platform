import React from 'react';
import { Grid, Paper, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const Signin=()=>{

    const paperStyle={padding :20, height:'80vh',width:350,margin:"20px auto" ,backgroundColor:'white'}
    const avatarStyle={backgroundColor:'#332600'}
    const btnstyle={margin:'8px 0'}
    
    
    return(

    <Grid style={{backgroundImage:"url('https://i.pinimg.com/564x/d4/a0/0e/d4a00ed797b34e916d0d95cdfae332cb.jpg')"}}>
        
        
            <Paper elevation={10} style={paperStyle} >
            
            <Grid align='center' >
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign In</h2> 
            </Grid>

           
         
            <TextField label='Username' placeholder='Enter username' fullWidth required/>
            <TextField label='Email' placeholder='Enter Email' fullWidth required/>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>  
            <FormControlLabel
                    control={<Checkbox name="checkedB" color="black"/> }label="Remember me"/>     
             <Button type='signin' color='#4d2600' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                    <Link href="/resetpassword" >Forgot password ?</Link>
                </Typography>   
                <Typography > Do you have an account?
                    <Link href="/signup" >Sign Up</Link>
                </Typography> 
            </Paper>
             

  </Grid>
 )

    
}

export default Signin

