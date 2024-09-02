

function Hero() {

    return(
        <div className="hero-section">
            <div className="hero">
                <div className="hero-text">
                    <h2>Little Lemon</h2>
                    <h4>Chicago</h4>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <img src={require("./hero.jpg")} alt="hero"/>
            </div>
        </div>
    )
}

export default Hero