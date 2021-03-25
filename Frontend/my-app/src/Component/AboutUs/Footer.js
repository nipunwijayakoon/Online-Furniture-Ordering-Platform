import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './Blog.css';
function Copyright() {
  return (
    <div>
    <Typography variant="body2" color="black" align="center">
      {/* {'Copyright © '} */}
      {'Contact Us'}
      <div className="mail">
      <li><i class="fas fa-phone"></i> <a href="">94 777 297597 </a></li>
      <li><i class="far fa-envelope"></i> <a href="mailto:furnitureslanka@gmail.com">furnitureslanka@gmail.com</a></li>
      </div>
      <Link color="inherit" href="https://material-ui.com/">
        LANKA FURNITURE MAKERS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
   
    <Typography>

    </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="black" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};