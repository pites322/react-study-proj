import React, { Component } from 'react';

export default class CarList extends Component{

    // constructor(){

    //     handleInputChange = this.handleInputChange.bind(this);
    // }

    state = {
        car_model_to_inp: '',
        filter: '',
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
        ],
        car_list_orig: []
    }



    
    addCar(){
        const { state: { car_list, car_model_to_inp } } = this
        const lastElem = car_list[car_list.length - 1]
        let model_name = car_model_to_inp.length > 0 ? car_model_to_inp : 'Tesla_mod_' +  parseInt(lastElem.id) + 1
        this.setState({
            car_list: [
                ...this.state.car_list, 
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

    filterByColor(){
        const { state: { car_list, car_list_orig, filter } } = this
        let new_car_list = car_list_orig.length > 0 ? car_list_orig : car_list
        if (filter.length > 0){
            new_car_list = new_car_list.filter(car => car.color.startsWith(filter))
        }   
        this.setState({
            car_list_orig: car_list,
            car_list: new_car_list,
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