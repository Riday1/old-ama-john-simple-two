import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>

        </div>
    );
};

export default ErrorPage;