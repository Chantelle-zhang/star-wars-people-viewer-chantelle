import React, { Component } from 'react';
import { connect } from "react-redux";
import HomePage from "./HomePage";
import {getPersonsDataWithLoadingState} from "../store/ActionCreators/actions";

export const LoadingWrapper=(ComponentA,url,getData)=> {

    class LoadingComponent extends Component {
        componentDidMount() {
            this.props.getData(url);
        }
        render() {
            return (
                this.props.isLoading? <img src='/spinner.gif' alt='loading'/> :
                    <ComponentA/>
            );
        }
    }


    const mapStateToProps = state => ({
     isLoading: state.isLoading,
});
    const mapDispatchToProps = dispatch => ({
        getData: (url) =>
            dispatch(getData(url))
    });

return connect(
mapStateToProps,mapDispatchToProps
)(LoadingComponent);

};









