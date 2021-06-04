import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

// interface RouterWrapper {
//     redirectTo: string;
//     isPrivate: boolean;
// }


function RouteWrapper({ ...props }: any) {

    const { isPrivate, redirectTo } = props


    const authenticated = localStorage.getItem("@managerUser-Token");

    if (!authenticated && isPrivate) {
        return <Redirect to={redirectTo} />
    }

    return <Route {...props} render={<Component />} />;
}


RouteWrapper.defaultProps = {
    redirectTo: '/',
    isPrivate: false,
};

export default RouteWrapper;
