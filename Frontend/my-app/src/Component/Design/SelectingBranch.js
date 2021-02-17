import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div className="Branch" style={{ backgroundImage: "url('https://images.pexels.com/photos/3555614/pexels-photo-3555614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Select the Branch</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="A">
            <option value={1}>Ampara</option>
            <option value={2}>Anuradhapura</option>
            <option value={3}>Awissawella</option>
          </optgroup>
          <optgroup label="B">
            <option value={4}>Badulla</option>
            <option value={5}>Bandaragama</option>
            <option value={6}>Bandarawela</option>
        </optgroup>
        <optgroup label="D">
            <option value={7}>Dambulla</option>
            <option value={8}>Dehiwala</option>
          </optgroup>
          <optgroup label="G">
            <option value={9}>Galle</option>
            <option value={10}>Gampaha</option>
          </optgroup>
          <optgroup label="H">
            <option value={11}>Homagama</option>
            <option value={12}>Horana</option>
          </optgroup>
          <optgroup label="J">
            <option value={13}>Ja-Ela</option>
          </optgroup>
          <optgroup label="K">
            <option value={14}>Kandy</option>
            <option value={15}>Kandy</option>
            <option value={16}>Katharagama</option>
            <option value={17}>Kegalle</option>
            <option value={18}>Kurunegala</option>
          </optgroup>
          <optgroup label="M">
            <option value={19}>Maharagama</option>
            <option value={20}>Matara</option>
          </optgroup>
          <optgroup label="N">
            <option value={21}>Nugegoda</option>
            <option value={22}>Nuwara-Eliya</option>
          </optgroup>
          <optgroup label="P">
            <option value={23}>Panadura</option>
            <option value={24}>Puttalam</option>
        </optgroup>
        <optgroup label="R">
            <option value={25}>Ragama</option>
            <option value={26}>Rathmalana</option>
            <option value={27}>Rathnapura</option>
          </optgroup>
          <optgroup label="S">
            <option value={28}>Suriyawewa</option>
            <option value={29}>Sevanagala</option>
          </optgroup>
          <optgroup label="W">
            <option value={30}>Waskaduwa</option>
            <option value={31}>Weeravila</option>
         </optgroup>
         <optgroup label="Y">
            <option value={32}>Yakkala</option>
          </optgroup>
          </Select>
          <FormHelperText>Select the branch you gives your order... Please keep in mind to choose the nearest branch as it profits you.</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Distance</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="A">
            <option value={1}>Below 0.2km</option>
            <option value={2}>0.2km-1km</option>
            <option value={3}>1km-2km</option>
            <option value={4}>2km-4km</option>
            <option value={5}>4km-7km</option>
            <option value={6}>7km-15km</option>
            <option value={7}>15km-35km</option>
          </optgroup>
          
        </Select>
        <FormHelperText>Select the distance from your home to the shop... If the distance is longer than 35kms, you should have to agree to transport this product by your own.</FormHelperText>
      </FormControl>
     
    </div>
  );
}