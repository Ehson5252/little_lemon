function Reservation() {
    return(
        <>
            <h1>Reservation</h1>
            <h3>How many guests?</h3>
            <ul>
                <li><input type="radio" />1-2 people</li>
                <li><input type="radio" />3-4 people</li>
                <li><input type="radio" />4-6 people</li>
                <li><input type="radio" />7 and more people</li>
            </ul>
        </>
    )
}

export default Reservation
