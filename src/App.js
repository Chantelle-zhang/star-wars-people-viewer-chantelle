import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux'
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import {
    isLoading,
    persons,
    person,
    showModal,
} from "./store/reducer";

import { LoadingWrapper } from "./component/LoadingComponent";
import HomePage from "./component/HomePage";
import { getPersonsDataWithLoadingState } from "./store/ActionCreators/actions";


const middleware = [thunk];


let reducer = combineReducers({
    isLoading,
    persons,
    person,
    showModal
});

let store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

const HomePageWithLoading=LoadingWrapper(HomePage,  '/api/people/',getPersonsDataWithLoadingState);

class App extends Component {

    render() {
        return (
            <Provider store={store}>

                    <Container className="text-center">
                        <h1>Star Wars People Viewer</h1>
                     <HomePageWithLoading/>
                    </Container>

            </Provider>
        );
    }
}


export default App;


