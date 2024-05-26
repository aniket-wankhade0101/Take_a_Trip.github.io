import React from 'react';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const AlertDismissible = () => {


    const [show, setShow] = useState(true);

    if (show) {
        return (

            <div className="saleBox text-center">
                <Alert variant="danger"  >
                    <Alert.Heading>Summer Sale is Live !</Alert.Heading>
                    <h2>
                        flat 10% on your first trip
                    </h2>

                    <p>Travel To Your Dream Destination With Your Friends And Family</p>
                   
                    <NavLink className="btn btn-primary mt-4 text-center " to="/tours">Book Now</NavLink>

                </Alert>
            </div>
        );
    }
    //   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertDismissible;