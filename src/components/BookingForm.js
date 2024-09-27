import React from 'react'
import { useState } from 'react'

function BookingForm() {
    const [nGuests, setNGuests] = useState(1)

    const errorMesage ="The number of guests shoud be at least 1 and max 10 people"

    const handleChange = (e) => {
        setNGuests(e.target.value)
    }

    console.log(nGuests)
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <form className="BookingForm" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                className='nGuests'
                type="number"
                value={nGuests}
                min="1"
                max="10"
                id="guests"
                onChange={handleChange}
                required
                pattern='5'
            />
            <span>{errorMesage}</span>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input className="submit" type="submit" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm