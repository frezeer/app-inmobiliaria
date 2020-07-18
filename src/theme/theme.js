import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography:{
        useNextVariants: true
    },
    palette:{
        primary:{
            main:'#1075AF'
           // main:'#4caf50'

        },
        common:{
            white: 'white'
        },
        secondary: {
            main: '#e53935'
        }    
    },
    spacing :10
});

export default theme;