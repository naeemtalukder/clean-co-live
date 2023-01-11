import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:5000/service")
        .then((res) => setServices(res.services));
    }, []);
    return (
        <div>
            <h1>This is Services Page</h1>
            <h1>This is Services Page</h1>
            <h1>This is Services Page</h1>
            <h1>This is Services Page</h1>
            <h1>This is Services Page</h1>
            <h1>This is Services Page</h1>
            <h1>This is Services Page</h1>
        </div>
    );
};

export default Services;