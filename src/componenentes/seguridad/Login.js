import React, { Component } from 'react';
import {  Container , Avatar } from '@material-ui/core';
import LockoutLineIcon from '@material-ui/icons/LockOutlined';


const style ={

        marginTop: 9,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    
}

class Login extends Component {
    render() {
        return (
            <Container maxWidth="xs" >
                <div style={style.paper}>
                <Avatar style={ style.avatar} >
                   <LockoutLineIcon />
                </Avatar>
                </div>
            </Container>
        );
    }
}

export default Login;