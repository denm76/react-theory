import React, {Component} from 'react';
import './App.css';

class App extends Component {
    //Синтаксис jsx
    render(){
        const divStyles = {
            textAlign:'center'
        }
        return (
            <div style = {divStyles}>
                <h1 style = {{color:'blue', fontSize:'60px'}}>Hello, world!</h1>
            </div>
        )
    }

}

export default App;
