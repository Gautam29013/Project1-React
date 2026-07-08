import axios from 'axios';
import {useState, useEffect} from 'react';
import "../style.css";

const Meals = () => {
    const[items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        .then((response) => {
            setItems(response.data.meals);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div>
            Meals
            <ul>
                {items && items.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
};

export default Meals