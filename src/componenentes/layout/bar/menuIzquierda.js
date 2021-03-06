import React from 'react';
import { List, ListItemText, Divider, ListItem } from "@material-ui/core";
import {Link} from 'react-router-dom';


export const MenuIzquierda =({classes, permisoParaObtenerNotification}) => (
    <div className={classes.list}>
        <List>
            <ListItem component={Link} button to="/auth/perfil">
                <i className="material-icons">account_box</i>
                <ListItemText classes={{primary: classes.listItemText}} primary="Perfil" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem component={Link} button to="/inmueble/nuevo">
                <i className="material-icons">add_box</i>
                <ListItemText classes={{primary: classes.listItemText}} primary="Nuevo Inmueble" />
            </ListItem>
            <ListItem component={Link} button to="">
                <i className="material-icons">business</i>
                <ListItemText classes={{primary: classes.listItemText}} primary="Inmuebles" />
            </ListItem>
            <ListItem component={Link} button to="/listaUsuarios">
                <i className="material-icons">group</i>
                <ListItemText classes={{primary: classes.listItemText}} primary="Usuarios" />
            </ListItem>
            <ListItem button onClick={permisoParaObtenerNotification}>
                <i className="material-icons">notifications_none</i>
                <ListItemText 
                    classes={{primary: classes.listItemText}}
                    primary="Recibir Notificaciones"
                />
            </ListItem>
        </List>
    </div>)