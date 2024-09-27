import React from 'react';

import BookingForm from './BookingForm';


function Reservation() {

    return(
        <div className="reserv">
            <div className='title'>
                <h1>Reservation</h1>
            </div>
            <BookingForm />
        </div>
    )
}

export default Reservation
