import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {getPersonsDataWithLoadingState} from "../store/ActionCreators/actions";
import {
    OPEN_MODAL,
    CLOSE_MODAL,
    SEND_PERSON_DETAIL,
    ADD_VIEW_COUNT
} from "../store/ActionCreators/actionTypes";
import Persons from "../component/Persons";
import Person from "../component/Person";


class HomePage extends Component {
    constructor() {
        super();
        this.openModal = this.openModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    componentDidMount() {
        const url = '/api/people/';
        this.props.getPersonsDataWithLoadingState(url);
    }

    getPage(pageUrl) {
        if (pageUrl !== null) {
            const url = this.props.persons[pageUrl];
            this.props.getPersonsDataWithLoadingState(url);
        }

    }

    openModal(person) {
        const {dispatch} = this.props;

        dispatch({
            type: OPEN_MODAL
        });

        dispatch({
            type: SEND_PERSON_DETAIL,
            person: person

        });

        dispatch({
            type: ADD_VIEW_COUNT,
            name: person.name

        });

    }

    handleClose() {
        const {dispatch} = this.props;
        dispatch({
            type: CLOSE_MODAL
        })

    }


    render() {
        const {isLoading, persons, person, showModal} = this.props;

        return (
            isLoading ? <img src='/spinner.gif' alt='loading'/> :
                <div>
                    <Persons persons={persons} onClick={this.openModal}/>
                    <div className="button-row">
                        <Button variant="secondary" onClick={() => this.getPage('previous')}>
                            Previous
                        </Button>
                        <Button variant="secondary" onClick={() => this.getPage('next')}>
                            Next
                        </Button>
                    </div>
                    <Modal show={showModal} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Person Detail</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Person person={person}/></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

        );
    }
}


const mapStateToProps = state => ({
    isLoading: state.isLoading,
    persons: state.persons,
    person: state.person,
    showModal: state.showModal
});

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch,
    getPersonsDataWithLoadingState: (url) =>
        dispatch(getPersonsDataWithLoadingState(url))
});

Persons.propTypes = {

    isLoading: PropTypes.bool,
    persons: PropTypes.object,
    onClick: PropTypes.func,
    showModal: PropTypes.bool

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);


