import React, {Component} from 'react';
import './App.css';
import Car from "./Car/Car";

class App extends Component {
    state = {
        cars:[
            {name:'Ford', year:2018},
            {name:'Audi', year:2016},
            {name:'Mazda 3', year:2019}
        ],
        pageTitle:'React components'
    }
    //Синтаксис jsx
    render(){
        const divStyles = {
            textAlign:'center'
        }
        const cars = this.state.cars;
        return (
            <div style = {divStyles}>
                <h1 style = {{color:'blue', fontSize:'60px'}}>{this.state.pageTitle}</h1>
                <Car name = {cars[0].name} year = {cars[0].year}/>
                <Car name = {cars[1].name} year = {cars[1].year}/>
                <Car name = {cars[2].name} year = {cars[2].year}/>
            </div>

        )
    }

}

export default App;
