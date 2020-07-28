import	React from 'react';
import { List, Link, Avatar ,ListItemText, ListItem } from '@material-ui/core';


export const MenuDerecha = ({classes, usuario, textoUsuario, fotoUsuario, salirSesion })=>(

<div className={classes.list}>
    <List>
       <ListItem button componet={Link} to="auth/registrarUsuario">
                <Avatar
                classes = {{ primary: classes.avatarSize }}
                src = {fotoUsuario} 
                />

                <ListItemText classes={{ primary: classes.ListItemText }} primary={textoUsuario} >
                </ListItemText> 
                
                <ListItemText button onclick={salirSesion}></ListItemText> 
                <ListItemText classes={{ primary: classes.ListItemText }} primary="salir" />
            </ListItem>
     </List>
</div>);