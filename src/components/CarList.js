import React, { Component } from 'react';

export default class CarList extends Component{
    state = {
        car_list: [
            {
                id: 0,
                model: 'Mazda',
                color: 'red',
            },
            {
                id: 1,
                model: 'Toyota',
                color: 'red',
            },
            {
                id: 2,
                model: 'WV',
                color: 'blue',
            },
            {
                id: 3,
                model: 'Mercedes',
                color: 'red',
            },
        ]
    }

    
    addCar(){
        const { state: { car_list } } = this
        const lastElem = car_list[car_list.length - 1]
        this.setState({
            car_list: [
                ...this.state.car_list, 
                {
                    id: lastElem.id + 1,
                    model: 'Tesla_mod_' +  parseInt(lastElem.id) + 1,
                    color: 'blue'
                }
            ]
        })
    }

    removeFirstBlueCar(){
        const { state: { car_list } } = this
        for(let i=0; i < car_list.length; i++){
            if (car_list[i].color == 'blue'){
                console.log(i);
                car_list.splice(i, 1)
                this.setState({
                    car_list: car_list
                })
                break
            }

        }
    }

    getOnlyBlueElem(){
        const { state: { car_list } } = this
        let new_car_list = car_list.filter(car => car.color == 'blue')
        this.setState({
            car_list: new_car_list
        })
    }


    render(){
        return(
            <div className='car-list'>
                <button onClick={ this.addCar.bind(this) }>Add Car</button>
                <button onClick={ this.removeFirstBlueCar.bind(this) }>Remove Car</button>
                <button onClick={ this.getOnlyBlueElem.bind(this)}>Filter</button>
                { this.state.car_list.map(car => 
                    <ul key={car.id}>
                        <li>{car.model}</li>
                        <li>{car.color}</li>
                    </ul>
                    )}
            </div>
        );
    }
}