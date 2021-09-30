import React from 'react';
import './Car.css'

export default (props) => {
    const inputClasses = ['input'];
    if(props.name !== ''){
        inputClasses.push('green');
    }else{
        inputClasses.push('red');
    }
    

    if(props.name.length > 4){
        inputClasses.push('bold');
    }

    return(
            <div className="Car">
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
