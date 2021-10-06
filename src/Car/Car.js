import React from 'react';
//import Radium from "radium";
import classes from './Car.module.scss'

class Car extends React.Component{

    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps, nextState);
        return nextProps.name.trim() !== this.props.name.trim();
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Car componentWillUpdate', nextProps, nextState)
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     console.log('Car getDerivedStateFromProps', nextProps, prevState);
    //     return prevState;
    // }

    componentDidUpdate() {
        console.log('Car componentDidUpdate')
    }

    //получение доступа к DOM-дереву до обновления state
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('Car getSnapshotBeforeUpdate', prevProps, prevState);
    // }

    //Жизненный цикл удаления компонента
    componentWillUnmount() {
        console.log('Car componentWillUnmount');
    }

    render() {
        console.log('Car render');
        //Генерация ошибки для проверки работы ErrorBoundary
        if(Math.random() > 0.7){
            throw new Error('Car random failed!')
        }
        const inputClasses = [classes.input];
        if(this.props.name !== ''){
            inputClasses.push(classes.green);
        }else{
            inputClasses.push(classes.red);
        }


        if(this.props.name.length > 4){
            inputClasses.push(classes.bold);
        }

        const style = {
            border:'2px solid #ccc',
            boxShadow:'0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover':{
                boxShadow: '0px 8px 10px 0 rgba(0, 0, 0, .25)',
                cursor: 'pointer',
                background:'yellow'
            }

        }

        return(
            <div className={classes.Car} style={style}>
                <h3>Car name:{this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>

                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />

                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}


export default Car


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
