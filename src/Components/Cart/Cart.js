import React from 'react';
import './Cart.css'
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalAmount = 0;
    // let courseId = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalAmount += course.price;
        // courseId.push(course.id);
    }
    
    const [open, setOpen] = useState(false);
    return (
        <div>
            <>
                <div>
                    <h1 className="text-center select">Select Your Desire Cources.</h1>
                    <div className="text-center">
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-fade-text"
                            aria-expanded={open}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} /> Your selected cources is here
                        </Button>
                        <Fade in={open}>
                            <div>
                            <h6>Total Courses: {cart.length}</h6>
                            {/* {
                                cart.map((cart) => <h6>Cource id: {courseId} | Price: ${}</h6>)
                            } */}
                            <h6>Total Price: {totalAmount}</h6>
                            <button className="btn btn-success">Enroll Now</button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Cart;