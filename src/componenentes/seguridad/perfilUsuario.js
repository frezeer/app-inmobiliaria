import React, {  useEffect, useState } from 'react';
import { useStateValue } from '../../sesion/store';
import { Container, Typography, TextField, Grid, Button, Avatar } from '@material-ui/core';
import reactFoto from '../../logo.svg';
import { consumerFirebase } from '../../sesion/store';

    const style ={
        paper:{
            marginTop:8,
            display : "flex",
            flexDirection: "coulumn",
            alignItems:"center"
        },
        form :{
            width : "100%",
            marginTop: "20"
        },
        submit:{
            marginTop: 15,
            marginBottom: 20
        }
    }

    const PerfilUsuario = props =>  {
    const firebase  = props.firebase;  
    const [{sesion}, dispatch] = useStateValue();
    let [estado , cambiarEstado] = useState({
        nombre : "",
        apellido: "",
        email: "",
        telefono : "",
        id: "",
        foto: ""
        });
        
        const cambiarDato = e => {
            const {name , value } = e.target;
            cambiarEstado(prev =>({
                ...prev,
                [name]: value
            }))
        }

        guardarCambios = e =>{
            e.preventDefault()
            firebase.db
            .collection("Users")
            .doc(firebase.auth.currentuser.uid)
            .set(estado, {merge:true})
            .then(success => {
                 dispatch({
                 type: "INICIAR_SESION",
                 sesion: estado,
                  autenticado : true
        })

        openMensajePantalla(dispatch, {
            open: true,
            mensaje: "Se guardaron los cambios"
        })
        
            })
        }
        useEffect(()=>{
            if(estado.id === ""){
                cambiarEstado(sesion.usuario)
            }
        })

    }
    return sesion ?(
            <Container component="main" maxWidth="md" justify="center">
                <div style={style.paper}>
                    <Avatar style={style.paper} src={estado.foto || reactFoto }
                    />
                    <Typography component="h1" variant="h5" >
                        Perfil Cuenta
                    </Typography>
                    <form style={style.form}>
                        <Grid Container spacing={2}>    
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="nombre"
                                    variant="outlined"
                                    fullWidth
                                    label="nombre"
                                    value={estado.nombre}
                                    onChange={cambiarDato}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="apellido"
                                    variant="outlined"
                                    fullWidth
                                    label="Apellido"
                                    value={estado.apellido}
                                    onChange={cambiarDato}
                                />
                            </Grid>
                             <Grid item xs={12} md={6}>
                                <TextField
                                    name="email"
                                    variant="outlined"
                                    fullWidth
                                    label="E-mail"
                                    value={estado.email}
                                    onChange={cambiarDato}
                                />
                            </Grid>
                             <Grid item xs={12} md={6}>
                                <TextField
                                    name="telefono"
                                    variant="outlined"
                                    fullWidth
                                    label="Telefono"
                                    value={estado.telefono}
                                    onChange={cambiarDato}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={12} md={6}>
                                    <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                    style={style.submit}    
                                   >
                                       Guardar CAmbios
                                   </Button>
                                </Grid>
                          </Grid>
                    </form>
                </div>    
            </Container>
            ):null 
    
     

export default consumerFirebase(PerfilUsuario);