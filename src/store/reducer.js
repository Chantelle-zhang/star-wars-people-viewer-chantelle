import {
    LOADING_START,
    LOADING_END,
    SAVE_PERSONS_TO_STORE,
    OPEN_MODAL,
    CLOSE_MODAL,
    SEND_PERSON_DETAIL,
    ADD_VIEW_COUNT
} from './ActionCreators/actionTypes'

export const isLoading = (state = null, action) => {

    const {type} = action;

    switch (type) {

        case LOADING_START:
            return true;

        case  LOADING_END:
            return false;

        default:
            return state;
    }
}

export const persons = (state = {}, action) => {

    const {type} = action;

    switch (type) {

        case SAVE_PERSONS_TO_STORE:
            return action.data;

        case ADD_VIEW_COUNT:
            const index = state.results.findIndex((person) => person.name === action.name);
            const newResultsWithViewCount = [...state.results];
            newResultsWithViewCount[index].viewCount ? newResultsWithViewCount[index].viewCount += 1 :
                newResultsWithViewCount[index].viewCount = 1
            return {...state, results: newResultsWithViewCount}

        default:
            return state;
    }
}

export const person = (state = {}, action) => {
    const {type, person} = action;

    switch (type) {

        case SEND_PERSON_DETAIL:
            return person;

        default:
            return state;
    }
}

export const showModal = (state = false, action) => {
    const {type} = action;

    switch (type) {

        case OPEN_MODAL:
            return true;

        case CLOSE_MODAL:
            return false;

        default:
            return state;
    }
}


