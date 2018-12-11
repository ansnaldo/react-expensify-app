//Higher order component (HOC) - A component tha renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is:{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin &&  <p>This is private info please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Not authenticated!</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const UserInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are details"/>,document.getElementById('app'));
ReactDOM.render(<UserInfo isAuthenticated={false} info="These are details"/>,document.getElementById('app'));