"use client"; // This is a comment in JavaScript

import React from 'react';
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit/AuthProvider';

const store = createStore({
    authName: "__auth",
    authType: "cookie",
    cookieDomain: '127.0.0.1',
    cookieSecure: false,
});

const Providers = ({
    children
}) => {
    return (
        <AuthProvider store={store}>
            {children}
        </AuthProvider>
    );
};

export default Providers;
