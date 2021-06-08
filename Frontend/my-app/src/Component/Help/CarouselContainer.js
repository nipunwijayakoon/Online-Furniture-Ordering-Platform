import {React, useState, useRef} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import './Help.css';

import instruction1 from './Guidelines_for_Customers.mp3'
import Slider from '../Help/slider/Slider'
import ControlPanel from '../Help/controls/ControlPanel'


const tutorialSteps = [
 
    {
        
        label: 'Sign Up',
        imgPath: '/images/signup.jpg',
        content1: 'Register on us, if you are new to our page and if you still do not have an account.',
        content2: 'Click "Sign Up" and create an account to register on us to feel our features.',
        content3: 'If you are a new customer choose "BECOME A BUYER" section. ',
        
        
    },
    {
        label: 'Sign In',
        imgPath: '/images/signin.jpg',
        content1: 'Click "Sign Up", if you do not have an account.',
        content2: 'If you already have an account, click "Sign In" and log into your account.',
        content3: 'If you are a customer, you will be able to buy our products and request for your own designs & if you are a seller or an admin, you can manage products and designs and will have all the privileges which seller or admin has after loggin to your account. ',
        
    },
  {
    label: 'VIEW DESIGNS (CUSTOMERS ONLY)',
    imgPath: '/images/viewdesign-cus.jpg',
    content1: 'Click "VIEW DESIGN" button on the header.',
    content2: 'Click "Furniture Catogories" button.',
    content3: 'See the furniture products which are already available in our store.',
    content4: 'See more details about the products by clicking on the name of that product.',
  },
  {
    label: 'MANAGE DESIGNS (SELLERS ONLY)',
    imgPath: '/images/managedesign-sel.jpg',
    content1: 'Click "MANAGE PRODUCTS" button on your homepage.',
    content2: 'Upload new furniture designs to the platform from your branch, then customers will be able to see them and order them.',
    content3: 'See the furniture designs which you are already entered and all on the store.',
  },
  {
    label: 'UPLOAD NEW DESIGN (CUSTOMERS ONLY)',
    imgPath: '/images/newdesign-cus.jpg',
    content1: 'Click "VIEW DESIGN" button on the header.',
    content2: 'Click "UPLOAD NEW DESIGN" button.',
    content3: 'First submit your new design image with clear sketchings and all the measurements with "New Design Code".',
    content4: 'Copy and save this "New Design Code" carefully.',
    content5: 'Submit all other details with the correct "New Design Code".',
  },
  {
    label: 'NEW DESIGN ORDER STATUS (CUSTOMERS ONLY)',
    imgPath: '/images/newdesignstatus-cus.jpg',
    content1: 'Click "VIEW DESIGN" button on the header.',
    content2: 'Click "Order Status" button.',
    content3: 'You have to use "New Design Code" of the uploaded order.',
    content4: 'Search for the order status by using "New Design Code".',
    content5: 'See whether your order is already removed due to any reason or still on the process.',
  },
  {
    label: 'MANAGE NEW DESIGNS (SELLERS ONLY)',
    imgPath: '/images/managenewdesign-sel.jpg',
    content1: 'Click "VIEW DESIGN" button on the header.',
    content2: 'Click "UPLOAD NEW DESIGN" button.',
    content3: 'First submit your new design image with clear sketchings and all the measurements.',
    content4: 'Copy and save the "New Design Code" carefully.',
    content5: 'Submit all other details with the correct "New Design Code".',
  },
  {
    label: 'SHOPPING CART',
    imgPath: '/images/shopping cart.jpg',
    content1: 'Add a furniture, which is already in our store to shopping cart by clicking "ADD CART" button on designs page.',
    content2: 'Watch your shopping cart by clicking the CartIcon on designs page.',
    content3: 'Increase and decrease the amounts of selected products in the cart by clicking "+" & "-" buttons.',
    content4: 'Remove the unwanted products from your cart by clicking "X" button.',
    content5: 'When you are ready to do payments, confirm the items to buy by clicking "Confirm to Buy" button on each item."',
  },
  {
    label: 'PAYMENT',
    imgPath: '/images/payment.jpg',
    content1: 'When doing Payment, you have to buy all items which are confirmed to buy in your cart.',
    content2: 'Remove unwanted products and keep the products in cart which only you are confirmed to buy.',
    content3: 'Click "Checkout" button in the Shopping Cart.',
    content4: 'Fill your addresses and do card payments and complete the payment process to get the products to your home.',
    
  },
  {
    label: 'About Us',
    imgPath: '/images/aboutus.jpg',
    content1: 'Goto the footer of the Homepage.',
    content2: 'Click "About Us" to get more details about us.',
    content3: 'You can See more details about our shops, products, contact details etc.',
    
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    flexGrow: 10,
    
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
  },
  cont: {
    alignItems: 'center',
  },
  img: {
    height: 300,
    maxWidth: 600,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;



  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef()




  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };







  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }






  return (

    <div className="page" style={{ backgroundImage: "url('https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
				
    <div>
    
    <Container maxWidth="sm">
    <div className="UpNewDesign">

    <Button variant="contained" color="primary">

        <Link underline="none" href= "about_us">More About Us</Link>  

    </Button>
  </div>
    
    <Typography component="h1" variant="h6" align="center" color="textPrimary"  paragraph>
        `
    </Typography>



    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography component="h5" variant="h5" align="center" color="secondary"  paragraph>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      
      <Paper square elevation={0} className={classes.cont}>
        <Typography component="h8" variant="h8" align="center" color="error"  paragraph>{tutorialSteps[activeStep].content1}</Typography>
      </Paper>
      <Paper square elevation={0} className={classes.cont}>
        <Typography component="h8" variant="h8" align="center" color="primary"  paragraph>{tutorialSteps[activeStep].content2}</Typography>
      </Paper>
      <Paper square elevation={0} className={classes.cont}>
        <Typography component="h8" variant="h8" align="center" color="error"  paragraph>{tutorialSteps[activeStep].content3}</Typography>
      </Paper>
      <Paper square elevation={0} className={classes.cont}>
        <Typography component="h8" variant="h8" align="center" color="primary"  paragraph>{tutorialSteps[activeStep].content4}</Typography>
      </Paper>
      <Paper square elevation={0} className={classes.cont}>
        <Typography component="h8" variant="h8" align="center" color="error"  paragraph>{tutorialSteps[activeStep].content5}</Typography>
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>

</Container>
</div>
<div className="help_audio">
<div className="container_help_audio" alignItems="center">
<Container>

<h2><p>Instructions for Customers in Audio</p></h2>
<div className='app-container'>
      
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        src={instruction1}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
    </div>
    <Typography component="h6" variant="h6" align="left" color="textPrimary"  paragraph>
        [00m 00s - 00m 26s] - Sign Up & Sign In Instructions 
    </Typography>
    <Typography component="h6" variant="h6" align="left" color="textPrimary"  paragraph>
        [00m 26s - 01m 22s] - Selecting Furniture Items & Add them to Cart Instructions 
    </Typography>
    <Typography component="h6" variant="h6" align="left" color="textPrimary"  paragraph>
        [01m 22s - 02m 07s] - Operate Items in the Cart & Lead to Payment Instructions 
    </Typography>
    <Typography component="h6" variant="h6" align="left" color="textPrimary"  paragraph>
        [02m 07s - 02m 42s] - Do Payments & Complete the Order Instructions 
    </Typography>
    <Typography component="h6" variant="h6" align="left" color="textPrimary"  paragraph>
        [02m 42s - 03m 22s] - Upload New Design Order & Complete the Order Instructions 
    </Typography>
    <Typography component="h6" variant="h6" align="left" color="textPrimary"  paragraph>
        [03m 22s - 04m 54s] - See the Status of New Design Order & Payments Instructions 
    </Typography>
</Container>
</div>
</div>
</div>




  );
}