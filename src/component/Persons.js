import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Persons = ({persons, onClick}) =>
    <div>
        <Row>
            {persons.results && persons.results.map((person) =>
                <Col className="persons-grid"
                     sm={6} key={person.name}
                     onClick={() => onClick(person)}
                >
                    <div className="shadow ">
                        <p>Name: {person.name}</p>
                        <p>Birth_year: {person.birth_year}</p>
                        <p>View_count: {person.viewCount > 0 ? person.viewCount : 0}</p>
                    </div>
                </Col>
            )
            }
        </Row>
    </div>;

Persons.propTypes = {
    persons: PropTypes.object,
    onClick: PropTypes.func

};

export default Persons;


