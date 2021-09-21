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
                <Car name = {'Ford'} year = {2018} ><h3 style={{color:'red'}}>Color</h3> </Car>
                <Car name = "Audi" year = {2016}><p style={{color:'blue'}}>Color</p> </Car>
                <Car name = {'Mazda 3'} year = {2019}><p style={{color:'yellow'}}>Color</p> </Car>
            </div>

        )
    }

}

export default App;
