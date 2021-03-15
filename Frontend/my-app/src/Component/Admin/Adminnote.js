import {Card,Button, CardActions,CardMedia,makeStyles,Typography,CardContent, CardActionArea,Container,Grid } from "@material-ui/core";



const useStyles =makeStyles({
    root:{
        marginTop:30,
    },
    img:{
        height:150
    },
});

const CutomerCard =({item,onDelete})=>{
    const classes = useStyles();

    return(
       

            <div className ={classes.root}>
        <Card>
            <CardActionArea>
              {/*  <CardMedia

                className={classes.img}
                image="https://images.pexels.com/photos/6032283/pexels-photo-6032283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />*/}
                <CardContent>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body">{item.details}</Typography>
                </CardContent>
                
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">Send to</Button>
                <Button size="small" color="primary" onClick={()=>onDelete(item.id)}>Delete</Button>
            </CardActions>
        </Card>

        </div>
     
    );
}


export default CutomerCard;