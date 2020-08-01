import React, { Component } from 'react';

export default class CarRender extends Component{
    
    // mapElement = (object) => {
    //     return <ListElement key={object.id} model={object.model} color={object.color}/>
    // }

    // render(){
    //     console.log('this.props:', this.props)
    //     return(
    //             {this.props.arr.map(car => 
    //                 <ul key={car.id}>
    //                     <li>{car.model}</li>
    //                     <li>{car.color}</li>
    //                 </ul>
    //             )}
    //     )
    // }

    // mapElement = (object) => {
    // }

    render() {
        // console.log(this.props.arr)
        return (
            <div>
                {this.props.arr.map(({ id, model, color}) =>     
                <ul key={id}>
                    <li>{model}</li>
                    <li>{color}</li>
                </ul>)}
            </div>
        )
    }
}