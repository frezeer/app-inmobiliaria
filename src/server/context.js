import React from 'react';

const FirebaseContext = React.createContext();

export default FirebaseContext;

export const consumeFirebase = component => props => (
    <FirebaseContext.Consumer>
        {firebase => <component {...props} firebase={firebase} />}
     </FirebaseContext.Consumer>
);

