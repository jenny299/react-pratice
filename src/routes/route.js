import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
    const signed = false;    
  
    /**    
    * Redirect user to SignIn page if he tries to access a private      route
    * without authentication.    
    */   
    if (isPrivate && !signed) {     
      return <Redirect to="/signIn" />;   
    }    
    /**    
    * Redirect user to Main page if he tries to access a non private route    
    * (SignIn or SignUp) after being authenticated.    
    */   
    if (!isPrivate && signed) {     
      return <Redirect to="/tasks" />;   
    }    
    
    /**    
    * If not included on both previous cases, redirect user to the desired route.    
    */   
    return <Route {...rest} component={Component} />; 
};

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      .isRequired,
};
RouteWrapper.defaultProps = {
    isPrivate: false,
};

export default RouteWrapper;
