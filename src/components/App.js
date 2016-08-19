import React from 'react';
import Sidebar from './Sidebar';
import {connect} from 'react-redux';


let mapStateToProps = (props, {params: {deckID}}) => ({
    deckID
});
const App = ({ deckId, children }) => {
    return (<div className="app">
        <Sidebar/>
        <h1>Deck {deckId}</h1>
        {children}
    </div>);
};

export default connect(mapStateToProps)(App);