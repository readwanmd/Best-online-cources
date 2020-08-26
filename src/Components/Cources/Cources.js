import React from 'react';
import './Cources.css'

const Cources = (props) => {
    const {thumbnail, title, description, instructor, star, rattings, students, price} = props.course;
    console.log(title)
    return (    
        <div className="Cources-area row">
            <div >
                <img src={thumbnail}/>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <small><strong>By</strong> <span>{instructor}</span> </small>
                <p>Ratting: {star} ({rattings}) - {students} Students</p>
                <br/>
                <h3>${price}  <small>(30 days money back guranty*)</small></h3>
                <br/>
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-primary">Enroll Now</button>
            </div>
        </div>
    );
};

export default Cources;