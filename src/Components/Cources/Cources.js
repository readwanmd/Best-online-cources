import React from 'react';
import './Cources.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Cources = (props) => {
    const {thumbnail, title, description, instructor, star, rattings, students, price, id} = props.course;
    // console.log(props)
    return (    
        <div className="Cources-area row">
            <div >
                <img src={thumbnail} alt=""/>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description} <br/> <small><strong>Course ID:</strong> <span>{id}</span> </small></p>
                
                <small><strong>By</strong> <span>{instructor}</span> </small>
                <p>Ratting: {star} ({rattings}) - {students} Students</p>
                <h3>${price}</h3>
                <small>(30 days money back guranty*)</small>
                <br/>
                <button className="btn btn-primary" onClick={() => props.handelAddCart(props.course)}> <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Cources;