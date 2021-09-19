import React, {Component} from 'react';
import './App.css';
import Car from "./Car/Car";

class App extends Component {
    //Синтаксис jsx
    render(){
        const divStyles = {
            textAlign:'center'
        }
        return (
            <div style = {divStyles}>
                <h1 style = {{color:'blue', fontSize:'60px'}}>Hello, world!</h1>
                <Car name = {'Ford'} year = {2018} />
                <Car name = "Audi" year = {2016}/>
            </div>

        )
    }

}

export default App;
