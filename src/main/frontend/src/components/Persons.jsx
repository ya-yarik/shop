import React from 'react'
import Slider from './Slider';
import SetPersons from './SetPersons';


const Persons = (props) => {


    return (
        <div>
            <Slider></Slider>
            <SetPersons item={props.item}
            />
        </div>
    )
}

export default Persons