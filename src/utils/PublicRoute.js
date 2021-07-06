import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
 
function PublicRoute({ component: Component, ...rest }) {
    console.log(getToken())
  return (
    <Route
      {...rest}
      render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/search' }} />}
    />
  )
}
 
export default PublicRoute;