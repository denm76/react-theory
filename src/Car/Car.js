import React from 'react';
import classes from './Car.module.scss'
import withClass from "../hoc/withClass";
import PropTypes from 'prop-types'

class Car extends React.Component{

    constructor(props) {
        super(props);
        //Создание референции в конструкторе
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if(this.props.index === 0){
            //Использование референции
            this.inputRef.current.focus()
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('Car componentWillReceiveProps', nextProps)
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Car shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.name.trim() !== this.props.name.trim();
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Car componentWillUpdate', nextProps, nextState)
    // }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     console.log('Car getDerivedStateFromProps', nextProps, prevState);
    //     return prevState;
    // }

    // componentDidUpdate() {
    //     console.log('Car componentDidUpdate')
    // }

    //получение доступа к DOM-дереву до обновления state
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('Car getSnapshotBeforeUpdate', prevProps, prevState);
    // }

    //Жизненный цикл удаления компонента
    // componentWillUnmount() {
    //     console.log('Car componentWillUnmount');
    // }

    render() {
        console.log('Car render');
        //Генерация ошибки для проверки работы ErrorBoundary
        // if(Math.random() > 0.7){
        //     throw new Error('Car random failed!')
        // }
        const inputClasses = [classes.input];
        if(this.props.name !== ''){
            inputClasses.push(classes.green);
        }else{
            inputClasses.push(classes.red);
        }


        if(this.props.name.length > 5){
            inputClasses.push(classes.bold);
        }


        return(
            <React.Fragment>
                <h3>Car name:{this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>

                <input
                    //Присвоение референции значения
                    // ref={(inputRef) => this.inputRef = inputRef}
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />

                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

// Валидация ожидаемых параметров с помощью PropTypes
Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, classes.Car)


// function car(){
//     return(
//         <h2>This is car component</h2>
//     )
// }
// const car = () => {
//     return(<h1>This is car component</h1>)
// }

// const car = () => <h1>
//     This is car component
//     <br/>
//     <strong>Test</strong>
// </h1>

// export default () =><h1>This is car component<br/><strong>Test</strong></h1>
/*в фигурных скобках прописывается  JS*/
