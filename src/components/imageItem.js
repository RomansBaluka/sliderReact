import React from "react";

export default function Item(props) {
    console.log(props.image)
    return(
    <div className='Item'>
        <img src={`${props.image}`}/>
    </div>
    )
};

// src={`../Images/-https://lp-cms-production.s3.amazonaws.com/public/features/2013/06/GettyRF_83654057-0d23ef9081fb.jpg`}
// {../images/static/media/biking.65f6edbf.jpg}