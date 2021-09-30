import React from 'react';
import Radium from "radium";
import './Car.css'

const Car = (props) => {
    const inputClasses = ['input'];
    if(props.name !== ''){
        inputClasses.push('green');
    }else{
        inputClasses.push('red');
    }


    if(props.name.length > 4){
        inputClasses.push('bold');
    }

    const style = {
        border:'2px solid #ccc',
        boxShadow:'0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover':{
            boxShadow: '0px 8px 10px 0 rgba(0, 0, 0, .25)',
            cursor: 'pointer'
        }
    }

    return(
        <div className="Car" style={style}>
            <h3>Car name:{props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>

            <input
                type="text"
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
            />

            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}

export default Radium(Car)


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
