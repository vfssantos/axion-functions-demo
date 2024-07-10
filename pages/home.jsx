// pages/home.jsx import React from 'react';

const HomePage = (props) => {
    return <div>Welcome, {props.user || 'Guest'}!</div>;
};

export default HomePage;