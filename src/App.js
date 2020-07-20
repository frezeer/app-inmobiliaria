//import React, { Component } from "react";
import React, { useEffect } from "react";
import "./App.css";
import Grid from '@material-ui/core/Grid';
import ListaInmuebles from "./componenentes/vistas/ListaInmuebles";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import AppNavbar from "./componenentes/layout/AppNavbar";
import RegistrarUsuario from './componenentes/seguridad/RegistrarUsuario';
import Login from './componenentes/seguridad/Login';
import { FirebaseContext } from './server';


function App(props){
let firebase = React.useContext(FirebaseContext);
const [ autenticacionIniciada, setupFirebaseInicial ] = React.useState(false);
 
useEffect(()=>{
  firebase.estadoIniciado().then(val =>{
      setupFirebaseInicial(val);
  })
})

  return autenticacionIniciada !== false ? (
      <Router>
      <ThemeProvider theme={theme}>
        <AppNavbar />
        <Grid container>
          <Switch>
            <Route path='/' exact  component={ListaInmuebles}  />
            <Route path='/auth/registrarUsuario' exact  component={RegistrarUsuario} />
            <Route path='/auth/login' exact  component={Login} /> 
          </Switch>
        </Grid>
      </ThemeProvider>
    </Router>
  )
  :null;
}

export default App;
