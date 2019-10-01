import React, { Component } from 'react';

import './tour-list.style.scss';
import Tour from '../Tour';
import { tourData } from '../../tourData';


export default class TourList extends Component {
    state = {
        tours: tourData
    }

    removeTour = id => {
        const {tours} = this.state;
        const sortedTour = tours.filter(tour=> tour.id !== id);
        this.setState({
            tours:sortedTour
        })
    }

    render() {
        const {tours} = this.state
        return (
            <section className='tour-list'>
               {tours.map(tour =>(<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />))}
                
            </section>
        )
    }
}
