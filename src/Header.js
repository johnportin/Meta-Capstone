import RestaurantFood from "./images/food.jpg";

function Header() {
    return (
        <header>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>lorem imsum dolor sit amet,...</p>
            <button>Reserve a Table</button>
            <img src={ RestaurantFood } alt="Restaurant Food" width="200px" />
        </header>
    )
}

export { Header };