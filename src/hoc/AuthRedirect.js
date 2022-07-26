import React from 'react'
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const AuthRedirect = (Component) => {
 class RedirectComponents extends React.Component{
    render() {
        if (!this.props.isAuth) return <Redirect to = '/login'/>
        return <Component {...this.props}></Component>
    }
 }

 let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponents)

 return ConnectedAuthRedirectComponent;
}
