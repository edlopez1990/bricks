import React,{Component} from  'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const styles = theme => ({
  layoutRoot: {}
});

class Pageone extends  Component{
  render(){
    const {classes} = this.props;
    return(
        <FusePageSimple
        classes={{
            root: classes.layoutRoot
        }}
        header={
        <div className="ui-header">
          <div>
            <h1>Elementos Base</h1>
            <p>Los siguientes elementos son la base de una buena estructura visual dentro de la plataforma Bricks Favor consultar cualqier cambio o integración al UI KIT con el responsable en turno.</p>
          </div>
        </div>
        }
        contentToolbar={
           <div></div>
        }
        content={
            <div className="p-24">

              <Container fixed> 

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                  Boton (Progress Button )
                  </Grid> 
                </Grid>
          
                <Grid container spacing={3}>
                  <Grid item xs={3} sm={3}>
                  </Grid> 
                  <Grid item xs={3} sm={3} className="text-center ">
                  Initial state , Hover and Onfocus
                  </Grid> 
                  <Grid item xs={3} sm={3} className="text-center ">
                  Disabled
                  </Grid> 
                  <Grid item xs={3} sm={3} className="text-center ">
                  </Grid> 
                </Grid>
              
                <Grid container spacing={3}>
                  <Grid item xs={3} sm={3}>
                    <label htmlFor="">Primario</label>
                  </Grid> 
                  <Grid item xs={3} sm={3} className="text-center ">
                  <Button className="btn btn-primario" variant="contained">Label</Button>
                  </Grid> 
                  <Grid item xs={3} sm={3} className="text-center ">
                  <Button className="btn btn-disabled" variant="contained" disabled>Label</Button>
                  </Grid> 
                  <Grid item xs={3} sm={3} className="text-center ">
                  </Grid> 
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={3} sm={3}>
                    <label htmlFor="">Secundario</label>
                  </Grid> 
                  <Grid item xs={3} sm={3} className="text-center ">
                  <Button className="btn btn-secundario" variant="contained">Label</Button>
                  </Grid> 
                  <Grid item xs={3} sm={3} className="text-center ">
                  <Button className="btn btn-disabled" variant="contained" disabled>Label</Button>
                  </Grid> 
                  <Grid item xs={3} sm={3} className="text-center ">
                  </Grid> 
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                  <label htmlFor="">Grupo de Botones</label>
                    <br/>
                  <ButtonGroup size="large" color="primary" aria-label="outlined primary button group" className="btn-group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                  </ButtonGroup>
                  </Grid> 
                  <Grid item xs={12} sm={4} className="text-center ">
                    <label htmlFor="">Toggle Switch</label>
                    <br/>
                  </Grid> 
                </Grid>


                
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                  <br/>
                  <label htmlFor="">Normal Textbox (Autocomplete)</label>
                    <br/>
                    <br/>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <br/>
                    <br/>
                    <div>
                      <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="outlined"
                      />
                      <br/>
                      <br/>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="outlined"
                      />
                      <br/>
                      <br/>
                      <TextField
                        error
                        id="outlined-error"
                        label="Error"
                        defaultValue="Hello World"
                        variant="outlined"
                      />
                      <br/>
                      <br/>
                      <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                        variant="outlined"
                      />
                  
                    </div>
                  </Grid> 
                  <Grid item xs={12} sm={4} className="text-center ">
                    <label htmlFor="">DropDown</label>
                    <br/>
                    <FormControl variant="outlined">
                      <Select
                        native
                        inputProps={{
                          name: 'age',
                          id: 'outlined-age-native-simple',
                        }}
                      >
                        <option value="">Valor</option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </Select>
                    </FormControl>
                  </Grid> 



                


                </Grid>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={4} >
                    <br/>
                    <br/>
                    <label htmlFor="">Date</label>
                   
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </Grid> 
                </Grid>
              </Container>
 
            </div>
        }
    />
    );
  }
}


export default withStyles(styles, {withTheme: true})(Pageone);