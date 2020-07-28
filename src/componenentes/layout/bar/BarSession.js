import React, { Component } from 'react';
import { Toolbar, Typography, Button, IconButton, Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { consumerFirebase  }  from "../../../server";
import { compose } from 'recompose';
import { StateContex } from '../../../sesion/store';
import { salirSesion } from '../../../sesion/actions/sesionActions';
import { MenuDerecha } from '../bar/MenuDerecha';
import fotoUsuarioTemp from '../../../logo.svg';


const styles = theme =>({
       sectionDesktop:{
            display:"none",
            [theme.breakpoints.up("md")]:{
                display:'flex'
            }
        },
        sectionMobile:{
            display:"flex",
            [theme.breakpoints.up("md")]:{
                display:"none"
            }
        },
        grow: {
            flexGrow: 1
        },
        avatarSize:{
            width: 40,
            height:40
        },
        listItemText:{
         fontSize:"14px",
         fontweight:600,
         paddinLeft:"15px",
         color:"#212121"
        }
    });

class BarSession extends Component {

    static contextType = StateContex;

    state ={
        firebase: null,
        rigth: false
    }

    salirSesionApp = () =>{
        const {firebase} = this.state;
        const [{sesion}, dispatch] = this.context;

     salirSesion(dispatch, firebase).then(success=>{
            this.props.history.push("/auth/login")
     });
    }

    static getDerivedStateFromProps(nextProps, prevState){
        let nuevosObjetos = {}
        if(nextProps.firebase !== prevState){
            nuevosObjetos.firebase = nextProps.firebase;
        } 
        return nuevosObjetos;
    }
    toggleDrawer =(side,open) => () =>{
        this.setState(
            {
                [side] : open
            }
        )
    } 

    render() {

        const { classes } =  this.props;
        const [ {sesion},dispatch] = this.context;
        const   {usuario}  = sesion;
        let textoUsuario   = usuario.nombre;


        return (
            <div>
                <Drawer
                open = { this.state.rigth }
                onclose = { this.toggle.Drawer("right", false)}
                anchor ="rigth"
                >
                    <div
                    role="button"
                    onclick={this.toggle.Drawer("right", false)} 
                    onKeyDown={this.toggle.Drawer("right", false)}
                    >
                      <MenuDerecha classes ={classes} usuario={usuario}  textoUsuario={textoUsuario} fotoUsuario={fotoUsuarioTemp} salirSesion={this.SalirSesion} /> 
                    </div>
                </Drawer>
                <Toolbar>
                    <IconButton color="inherit"><i className="material-icons">menu</i></IconButton>
                    <Typography variant="h6" > Sergio Homes </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.sectionDesktop}><Button  color = "inherit" >Login</Button></div>
                    <div className={classes.sectionMobile} ><IconButton color="inherit"><i className="material-icons">more_vert</i>
                    </IconButton>
                    </div> 
                </Toolbar>
            </div>
        );
    }
}

export default compose(consumerFirebase ,withStyles(styles))(BarSession);