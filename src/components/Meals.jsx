import axios from 'axios'
import { useState, useEffect } from 'react'
import '../style.css'

const Meals = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
      .then((response) => {
        setItems(response?.data?.meals || [])
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setItems([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h2>Meals</h2>
      {loading ? (
        <p>Loading meals...</p>
      ) : items.length === 0 ? (
        <p>No meals found.</p>
      ) : (
        <ul>
          {items.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Meals