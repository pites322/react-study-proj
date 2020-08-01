import React, { Component } from 'react';
// import ListRender from './ListRender'
import CarRender from './CarRender';

export default class CarList extends Component{

    state = {
        car_model_to_inp: '',
        filter: '',
        cars: [
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
        ],
        car_list_orig: []
    }



    
    addCar(){
        const { state: { cars, car_model_to_inp } } = this
        const lastElem = cars[cars.length - 1]
        let model_name = car_model_to_inp.length > 0 ? car_model_to_inp : 'Tesla_mod_' +  parseInt(lastElem.id) + 1
        this.setState({
            cars: [
                ...this.state.cars, 
                {
                    id: lastElem.id + 1,
                    model: model_name,
                    color: 'blue'
                }
            ],
            car_model_to_inp: ''
        })
    }

    removeFirstBlueCar(){
        const { state: { cars } } = this
        for(let i=0; i < cars.length; i++){
            if (cars[i].color === 'blue'){
                cars.splice(i, 1)
                this.setState({
                    cars: cars
                })
                break
            }

        }
    }

    filterByColor(){
        const { state: { cars, car_list_orig, filter } } = this
        let new_car_list = car_list_orig.length > 0 ? car_list_orig : cars
        if (filter.length > 0){
            new_car_list = new_car_list.filter(car => car.color.startsWith(filter))
        }   
        this.setState({
            car_list_orig: cars,
            cars: new_car_list,
            filter: '',
        })
    }

    inp_car_model(event) {
        this.setState({car_model_to_inp: event.target.value});
    }

    inp_filter(event) {
        this.setState({filter: event.target.value});
    }



    render(){
        return(
            <div className='car-list'>
                <input value={this.state.car_model_to_inp} onChange={this.inp_car_model.bind(this)} type='text' />
                <button onClick={ this.addCar.bind(this) }>Add Car</button>
                <button onClick={ this.removeFirstBlueCar.bind(this) }>Remove Car</button>
                <input  value={this.state.filter} onChange={this.inp_filter.bind(this)}  type='text' />
                <button onClick={ this.filterByColor.bind(this)}>Filter</button>
                <CarRender arr={this.state.cars}/>
            </div>
        );
    }
}