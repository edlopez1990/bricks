import React,{Component} from  'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const styles = theme => ({
  layoutRoot: {}
});
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
class Ui extends  Component{
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
           <div>
             <div className={useStyles.root}>
              <Button href="#text-buttons">Page One</Button>
              <Button href="#text-buttons">Page Two</Button>
              <Button href="#text-buttons">Page Three</Button>
              <Button href="#text-buttons">Page Four</Button>

            </div>
           </div>
        }
        content={
            <div className="p-24">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <h4>FUENTE Y TIPOGRAFÍA</h4>
                  <br/>
                  <h1>Aa</h1>
                  <h3>Noto Sans</h3>
                  <br/>
                  <p>
                  Noto Sans es la tipografía (fuente) escogida para el desarrollo completo de los productos de la Bricks. La fuente posee una libre comercialización y una excelente lectura en textos largos en pantalla.
                  <br/> 
                  Al lado derecho se muestran las principales reglas de estilo para el uso dentro de la plataforma. Estas reglas no estan  limitadas en color o su uso en mayúsculas.
                  </p>
                </Grid> 
                <Grid item xs={12} sm={8}>
                  <h1>H1 - Titulos - Bold -  28 px  </h1>
                  <br/>
                  <h2>H2 - Titulos - Bold - 24px</h2>
                  <br/>
                  <h3>H3 - Titulos - Bold - 18 px</h3>
                  <br/>
                  <h4>H4 - Subtitulos - Bold - 16px</h4>
                  <br/>
                  <p>Cuerpo de Texto - Regular - 13 px</p>
                  <br/>
                  <p>Texto Tablas - Regular - 11 px</p>
                  <br/>
                  <p>Pequeñas notas - Regu;ar - 9 px</p>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                 <h3>COLORES DE LA PLATAFORMA</h3>

                 <h3>COLORES PRIMARIOS Y SECUNDARIO</h3>

                 <p>
                 El sistema tendra la variante de presentar dos colores predominantes en la totalidade del sistema según el estado de su uso. 
                 <br/>
                 El verde representando las actividades de compra y el naranja en actividades de venta. El azul cumple la función de color secundario; especialmente en acciones principales que no derivan de las acciónes de compra y venta
                 <br/>
                 Se puede utilizar sus variantes en los resultados de su transparencia en blanco según se detalla. (20%, 50%, 70%)
                 </p>
                </Grid> 
                <Grid item xs={12} sm={8}>
               
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                 <h3>COLORES COMPLEMENTOS</h3>

                 <p>
                 Los siguientes colores son elegidos para que formen parte de la paleta cromática de todos los sistema. No agregar ningún otro color al propuesto.
                 </p>
                </Grid> 
                <Grid item xs={12} sm={8}>
               
                </Grid>
              </Grid>
            </div>
        }
    />
    );
  }
}


export default withStyles(styles, {withTheme: true})(Ui);