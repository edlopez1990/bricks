import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const opciones = [
  {
    value: '1',
    label: 'Project Name',
  },
  {
    value: '2',
    label: 'Project Name',
  },
  {
    value: '3',
    label: 'Project Name',
  },
  {
    value: '4',
    label: 'Project Name',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

 function Searchnavbar() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = event => {
    setCurrency(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
   
      <div className=" input-search-form">
 
        <TextField
          id="outlined-select-currency-native"
          select
          label=""
          value={opciones}
          onChange={handleChange}
       
          helperText=""
          variant="outlined"
        >
          {opciones.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}

export default Searchnavbar;