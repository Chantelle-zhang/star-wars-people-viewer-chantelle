import React from 'react';
import PropTypes from 'prop-types';
import Persons from "./Persons";

const Person = ({person}) => {

    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender
    } = person;

    return (
        <div>
            <p>Name: {name}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair_color: {hair_color}</p>
            <p>Skin_color: {skin_color}</p>
            <p>Birth_year: {birth_year}</p>
            <p>Eye_color: {eye_color}</p>
            <p>Gender: {gender}</p>
        </div>
    )
}

Persons.propTypes = {
    person: PropTypes.object,

};
export default Person;
