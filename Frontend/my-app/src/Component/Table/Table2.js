import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';



import Button from '@material-ui/core/Button';




const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(furniture, color, wood_type, unit_price, avalibility,date,shopname,number) {
  return {
    furniture,
    color,
    wood_type,
    unit_price,
    avalibility,
    shop: [
      { date, shopname, number },
      
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.furniture}
        </TableCell>
        <TableCell align="right">{row.color}</TableCell>
        <TableCell align="right">{row.wood_type}</TableCell>
        <TableCell align="right">{row.unit_price}</TableCell>
        <TableCell align="right">{row.avalibility}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                SHOP DETAILS
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>MANUFACTURED DATE</TableCell>
                    <TableCell>SHOP NAME</TableCell>
                    <TableCell align="right">CONTACT NUMBER</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.shop.map((shopRow) => (
                    <TableRow key={shopRow.date}>
                      <TableCell component="th" scope="row">
                        {shopRow.date}
                      </TableCell>
                      <TableCell>{shopRow.shopname}</TableCell>
                      <TableCell align="right">{shopRow.number}</TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
                
              </Table>
              <Button variant="outlined" color="primary" href="/products">
        MAKE AN ORDER
      </Button>
            </Box>
            
          </Collapse>
          
        </TableCell>
      </TableRow>
    </React.Fragment>

    
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Chair', 'Light Brown', 'Mango', 5000, 'Yes', '2020-01-23', "Towne and Sons","07043570890"),
  createData('Table','Dark Brown', 'Jack', 10000,'Yes','2020-02-23',"Lind, Stoltenberg and Larson","07145576890"),
  createData('Bed', 'Light Brown', 'Teak', 20000, 'Yes','2020-01-20',"Gorczany-Rempel", "07243436890"),
  createData('Window', 'Dark Brown', 'Mango', 15000,'Yes','2020-03-03',"Emard Inc", "07043500090"),
  createData('Door', 'Light Brown', 'Jack', 7500, 'Yes','2020-03-23',"Dach LLC","07743570890"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>FURNITURE</TableCell>
            <TableCell align="right">COLOR</TableCell>
            <TableCell align="right">WOOD TYPE&nbsp;</TableCell>
            <TableCell align="right">UNIT PRICE&nbsp;</TableCell>
            <TableCell align="right">AVALIBILITY&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}







