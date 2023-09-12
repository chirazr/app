import React from 'react'
import './Card.css'

const Card = () => {
  return (
      <div class="container">
<div class="card">
  <div class="card-image">
    <img src="https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" />
  </div>
  <div class="card-text">
    <p class="card-meal-type">Breakfast/Eggs</p>
    <h2 class="card-title">Délicieux Bénédicte</h2>
    <p class="card-body">Eggs Benedict with hollandaise sauce, crispy bacon and an assortment of garden herbs.</p>
  </div>
  <div class="card-price">$56</div>
</div>
</div>
  )
}

export default Card
