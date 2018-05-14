import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is some private info</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthentificated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please log in to view the info</p>
                )};
        </div>
    );
};

const AdmingInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);



ReactDOM.render(<AuthInfo isAuthentificated={false} info="These are some secrets" />, document.getElementById('app'));
