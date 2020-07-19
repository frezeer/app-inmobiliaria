import React, { Component } from 'react';
import { Container, Typography, Avatar, Grid , TextField, Button } from '@material-ui/core';
import LockoutLineIcon from '@material-ui/icons/LockOutlined';
import { consumeFirebase } from '../../server';

const style ={
    paper:{
        marginTop : 8,
        display : "flex",
        flexDirection: "column",
        alignItmes :"center"
    },
    avatar:{
        margin: 8,
        backgroundColor : "#4caf50"
    },
    form:{
        width:"100%",
        marginTop : 10,
        //backgroundColor : '#4fc3f7'
    },
    submit:{
        marginTop:15,
        marginBottom : 20
    }
}
class RegistrarUsuario extends Component {

    state = {
       usuario: {
           nombre: '',
           apellido :'',
           email : '',
           password: ''
       }  
    }

    onChange = e =>
    {
        let usuario = Object.assign({}, this.state.usuario);
        usuario[e.target.name] = e.target.value;
        this.setState({
                usuario : usuario
        })
    }

    registrarUsuario = e => {
        e.preventDefault();
        console.log('imprimir objeto usuario del state ' , this.state.usuario);
    }

    render() {
        return (
            <Container maxWidth="md" >
                <div style={style.paper}>
                    <Avatar style={style.avatar}>
                        <LockoutLineIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registre su Cuenta
                    </Typography>

                    <form style={style.form}>
                        <Grid  container spacing={2}>
                            <Grid item md={6} xs={12} >
                                <TextField name="nombre" onChange={this.onChange} value={this.state.usuario.name} fullWidth label="Ingrese su nombre" />
                            </Grid>
                              <Grid item md={6} xs={12} >
                                <TextField name="apellido" onChange={this.onChange} value={this.state.usuario.apellido} fullWidth label="Ingrese su(s) Apellido" />
                            </Grid>
                              <Grid item md={6} xs={12} >
                                <TextField name="email" onChange={this.onChange} value={this.state.usuario.email} fullWidth label="Ingrese su Correo electronico" />
                            </Grid>
                              <Grid item md={6} xs={12} >
                                <TextField type="password" onChange={this.onChange} value={this.state.usuario.password} name="password" fullWidth label="Ingrese su Contraseña" />
                            </Grid>
                        </Grid>
                        <Grid container jsutify="center" >
                             <Grid item md={6} xs={12} >
                             <Button type="submit" onClick={this.registrarUsuario} variant="contained" fullWidth size="large" color="primary" style={style.submit} >
                                    Registrar
                                </Button>
                            </Grid> 
                       </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

export default (consumeFirebase)(RegistrarUsuario);