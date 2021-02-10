//import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import React, { Component} from 'react'

export const DataContext = React.createContext();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Online Ordering to make Furniture
      </Link>{' '}
      
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: '100%',
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album(props) 
{const {products} = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundImage: "url('https://images.pexels.com/photos/301378/pexels-photo-301378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",backgroundSize: "cover"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Choose Your Designs Now...
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}  style={{ backgroundImage: "url('https://images.pexels.com/photos/6032437/pexels-photo-6032437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",backgroundSize: "cover"}}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Available Furniture Designs
            </Typography>
            <Typography variant="h6" align="center" color="error" style={{ backgroundColor: "#f2d0c4" }} paragraph>
              These are the products which are currently available in our store. You can order your products by adding relavent products to the cart. If anything relevant, you can contact our member...
            </Typography>
            <Typography variant="h6" align="center" color="textPrimary" paragraph>
              Tel: 081-2235643 Mobile: (+94) 71 3452908 / 76 9145689
            </Typography>

            <div className={classes.heroButtons}>
            
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Upload a New Design
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" >
                    
                    <Link>Shopping Cart</Link>
                    
                    <ShoppingCartIcon className={classes.icon} cursor=" pointer" position=" relative" position=" absolute" top="-12px" right=" -7px" background=" crimson" font-size=" 10px" color=" white"padding=" 3px 5px" border-radius=" 50%" z-index="-1"/>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* End of hero unit */}

        <Container className={classes.cardGrid} maxWidth="md">
          
          <Grid container spacing={4} justify="flex-start">
           
              <Grid item key={1} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.woodenstreet.de/image/cache/data%2Fwooden-sofa%2Fsereta-wooden-sofa-revised%2Fhoney%2F1st-2%2B1%2B1%2B-880x518.jpg"
                    title="Wall Cupboard AMARZON"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Sereta Wooden Sofa Set | SHEESHAM
                    </Typography>
                    <Typography>
                      LKR 67,900.00
                    </Typography>
                  </CardContent>
                
                  <CardActions>
                    <Button size="small" color="primary">
                     <Link to href="/viewmore">View more</Link>
                    </Button>
                    <Button size="small" color="secondary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            
          
            
            <Grid item key={2} sm={6} md={4}>
                <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2Fcrown_mark%2Fcolor%2Fsheffield%20-%20-829161581_b1100-1%2B11-b0.jpg?width=878&height=600&scale=both&trim.threshold=80"
                  title="Mirror Table MT018"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mirror Table MT018 | TEAK
                  </Typography>
                  <Typography>
                    LKR 63,400.00
                  </Typography>
                </CardContent>
              
                <CardActions>
                <Button size="small" color="primary">
                     <Link to href="/viewmore2" >View More</Link>
                    </Button>
                    <Button size="small" color="secondary">
                      Add To Cart
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          

            <Grid item key={3} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://ii1.pepperfry.com/media/catalog/product/v/e/568x625/vega-coffee-table-with-stools-in-honey-finish-by-trendsbee-vega-coffee-table-with-stools-in-honey-fi-658vmq.jpg"
                    title="Sofa Table ST5002"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Coffee Table ST5002 | HALMILLA
                    </Typography>
                    <Typography>
                      LKR 27,900.00
                    </Typography>
                  </CardContent>
                
                  <CardActions>
                  <Button size="small" color="primary">
                      <Link to href="/viewmore3">View More</Link>
                    </Button>
                    <Button  size="small" color="secondary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

            
              <Grid item key={4} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/236x/f1/eb/43/f1eb431490003d351a34178e38d97b1d.jpg"
                    title="GH079"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      GH079 | TEAK
                    </Typography>
                    <Typography>
                      LKR 23,600.00
                    </Typography>
                  </CardContent>
                
                  <CardActions>
                  <Button size="small" color="primary">
                      View More
                    </Button>
                    <Button size="small" color="secondary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>


              <Grid item key={5} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/236x/90/df/1b/90df1b861b0942b01f68b5ad9139ca69.jpg"
                    title="DINNING SET"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      DINNING SET | TAMARIND
                    </Typography>
                    <Typography>
                      LKR 116,700.00
                    </Typography>
                  </CardContent>
                
                  <CardActions>
                  <Button size="small" color="primary">
                      View More
                    </Button>
                    <Button size="small" color="secondary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>


              <Grid item key={6} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/236x/d5/2a/88/d52a88db30b3eea1a5826dc924ad38b2.jpg"
                    title="Sofa Table ST5120"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Sofa Table ST5120 | HALMILLA
                    </Typography>
                    <Typography>
                      LKR 39,900.00
                    </Typography>
                  </CardContent>
                
                  <CardActions>
                  <Button size="small" color="primary">
                      View More
                    </Button>
                    <Button size="small" color="secondary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>


              <Grid item key={7} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/236x/58/d4/9c/58d49cf5c1eb86600d51406320bc35bc.jpg"
                    title="Table Set YT6790"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Table Set YT6790 | TAMARIND
                    </Typography>
                    <Typography>
                      LKR 128,000.00
                    </Typography>
                  </CardContent>
                
                  <CardActions>
                  <Button size="small" color="primary">
                      View More
                    </Button>
                    <Button size="small" color="secondary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>



              <Grid item key={8} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/236x/79/28/97/7928975e5d5dc7d88a22a49052190289.jpg"
                    title="Chair CR891mage title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Chair CR891 | NEDUN
                    </Typography>
                    <Typography>
                      LKR 4,100.00
                    </Typography>
                  </CardContent>
                
                  <CardActions>
                  <Button size="small" color="primary">
                      View More
                    </Button>
                    <Button size="small" color="secondary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>


              <Grid item key={9} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/236x/d3/d5/5c/d3d55c74f765ec4ce3fb963c62c96dfa.jpg"
                    title="Chair CR550"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Chair CR550 | TEAK
                    </Typography>
                    <Typography>
                      LKR 6,300.00
                    </Typography>
                  </CardContent>
                
                  <CardActions>
                  <Button size="small" color="primary">
                      View More
                    </Button>
                    <Button size="small" color="secondary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>


              <Grid item key={10} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/236x/19/ea/52/19ea52d012b3bd7886d2d81e340ecfcd.jpg"
                    title="Table TB855"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Table TB855 | SURIYA MARA
                    </Typography>
                    <Typography>
                      LKR 47,900.00
                    </Typography>
                  </CardContent>
                
                  <CardActions>
                  <Button size="small" color="primary">
                      View More
                    </Button>
                    <Button size="small" color="secondary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>


              <Grid item key={11} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/236x/21/98/51/219851cabc559fdf98ebbd69a3cdd59c.jpg"
                    title="Bed KENNY"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Bed KENNY 100" x 75" | MAHOGANI
                    </Typography>
                    <Typography>
                      LKR 143,500.00
                    </Typography>
                  </CardContent>
                
                  <CardActions>
                  <Button size="small" color="primary">
                      View More
                    </Button>
                    <Button size="small" color="secondary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item key={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/236x/e3/a5/3c/e3a53cb3bc7ef76c56949a2bfeb1dfbb.jpg"
                    title="Alumirah AH0816"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Alumirah AH0816 | MAHOGANI
                    </Typography>
                    <Typography>
                      LKR 98,700.00
                    </Typography>
                  </CardContent>
                
                  <CardActions>
                  <Button size="small" color="primary">
                      View More
                    </Button>
                    <Button size="small" color="secondary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>


        </Grid>

        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer} style={{ backgroundImage: "url('https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",backgroundSize: "cover"}}>
        <Typography variant="h6" align="center" color="inherit" gutterBottom >
        Purchase Your Furniture Today
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          All Rights Reserved
        </Typography>
        <Copyright />
      </footer>
      {/* End of footer */}

    </React.Fragment>
  );
}

