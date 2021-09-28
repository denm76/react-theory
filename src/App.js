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
        pageTitle:'React components',
        showCars:false
    }
    toggleCarsHandler = () =>{
        this.setState({
            showCars: !this.state.showCars
        });
    }
    handlerChangeTitle = (newTitle) =>{
        this.setState({pageTitle:newTitle});
    }
    // handlerInput = (event) =>{
    //     this.setState({
    //         pageTitle: event.target.value
    //     });
    // }
    //Синтаксис jsx
    render(){
        const divStyles = {
            textAlign:'center'
        }
        return (
            <div style = {divStyles}>
                <h1 style = {{color:'blue', fontSize:'60px'}}>{this.state.pageTitle}</h1>
                {/*<input type="text" onChange={this.handlerInput}/>*/}
                {/*<button onClick={this.handlerChangeTitle.bind(this, 'Changed!')}>Change Title</button>*/}
                <button onClick={this.toggleCarsHandler}>Toggle Cars</button>
                {/*передача параметров компонента при помощи map*/}
                {/*применение тернарного оператора при проверке свойства showCars,
                тк блочная структура if-else в JSX-синтаксисе не работает*/}

                { this.state.showCars
                    ? this.state.cars.map((car, index)=>{

                    return (
                    <Car
                            key = {index}
                            name = {car.name}
                            year = {car.year}
                            onChangeTitle = {() => {
                            this.handlerChangeTitle(car.name)
                        }}
                    />
                    )

                })
                    : null
                }


                {/*<Car*/}
                {/*    name = {cars[0].name}*/}
                {/*    year = {cars[0].year}*/}
                {/*    //1-й способ передачи параметра в функцию-хэндлер, занимает меньше ресурсов*/}
                {/*    onChangeTitle = {this.handlerChangeTitle.bind(this, cars[0].name)}*/}
                {/*/>*/}
                {/*<Car*/}
                {/*    name = {cars[1].name}*/}
                {/*    year = {cars[1].year}*/}
                {/*    //2-й способ передачи параметра в функцию-хэндлер, берет больше ресурсов*/}
                {/*    onChangeTitle = {() => this.handlerChangeTitle(cars[1].name)}*/}
                {/*/>*/}
                {/*<Car*/}
                {/*    name = {cars[2].name}*/}
                {/*    year = {cars[2].year}*/}
                {/*    onChangeTitle = {() => this.handlerChangeTitle(cars[2].name)}*/}
                {/*/>*/}
            </div>

        )
    }

}

export default App;
