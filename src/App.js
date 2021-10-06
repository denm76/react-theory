import React, {Component} from 'react';
import classes from './App.module.scss';
import Car from "./Car/Car";

class App extends Component {
    constructor(props) {
        console.log('App constructor');
        super(props);
        this.state = {
            cars:[
                {name:'Ford', year:2018},
               // {name:'Audi', year:2016},
               // {name:'Mazda 3', year:2019}
            ],
            pageTitle:'React components',
            showCars:false
        }
    }
  
    toggleCarsHandler = () =>{
        this.setState({
            showCars: !this.state.showCars
        })
    }
    onChangeName(name, index){
        const car = this.state.cars[index]
        car.name = name;
        const cars = [...this.state.cars]
        cars[index] = car
        this.setState({
            cars:cars
        })
    }
    deleteHandler(index){
        let cars = [...this.state.cars]
        cars.splice(index, 1)
        this.setState({
            cars:cars
        })
    }
    // handlerChangeTitle = (newTitle) =>{
    //     this.setState({pageTitle:newTitle});
    // }
    // handlerInput = (event) =>{
    //     this.setState({
    //         pageTitle: event.target.value
    //     });
    // }
    componentWillMount() {
        console.log('App componentWillMount')
    }

    componentDidMount(){
        console.log('App componentDidMount')
    }

    render(){
        console.log('App render');
        const divStyles = {
            textAlign:'center'
        }
        // Логика вынесена вне синтаксиса JSX для применения обычных условных операторов JavaScript, после чего
        // переменная cars передаётся в JSX cyntaxis для отрисовки
        let cars = null
        if(this.state.showCars){
            cars = this.state.cars.map((car, index)=>{
                return (
                    <Car
                        key = {index}
                        name = {car.name}
                        year = {car.year}
                        onChangeName = {(event) => {
                            this.onChangeName(event.target.value, index)
                        }}
                        onDelete = {this.deleteHandler.bind(this, index)}
                    />
                )

            })
        }
        //Синтаксис jsx
        return (
            <div style = {divStyles}>
                {/*<h1 style = {{color:'blue', fontSize:'60px'}}>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>{/*передача параметра из index.js*/}
                {/*<input type="text" onChange={this.handlerInput}/>*/}
                {/*<button onClick={this.handlerChangeTitle.bind(this, 'Changed!')}>Change Title</button>*/}
                <button onClick={this.toggleCarsHandler} className={classes.AppButton}>Toggle Cars</button>
                {/*передача параметров компонента при помощи map*/}
                {/*применение тернарного оператора при проверке свойства showCars,
                тк блочная структура if-else в JSX-синтаксисе не работает*/}


                    <div style = {{
                        width:500,
                        margin:'auto',
                        paddingTop:'20px',
                    }}>
                        {cars}
                    </div>




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
