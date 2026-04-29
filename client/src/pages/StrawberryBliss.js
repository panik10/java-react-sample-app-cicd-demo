import React from 'react';

const StrawberryBliss = () => {
  return (
    <div className="ice-cream-page">
      <h1>Strawberry Bliss</h1>
      <div className="ice-cream-details">
        <div className="ice-cream-image">
          {/* Placeholder for ice cream image */}
          <div className="placeholder">🍓</div>
        </div>
        <div className="ice-cream-description">
          <h2>Fresh Strawberry Swirl</h2>
          <p>Sweet strawberry ice cream rippled with strawberry sauce and real fruit pieces, made with locally grown Odesa strawberries.</p>
          <p><strong>Price:</strong> 85₴ per scoop</p>
          <p><strong>Available in:</strong> Cup, Waffle Cone, or Pint</p>
          <p><strong>Allergens:</strong> Contains milk</p>
        </div>
      </div>
      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          <li>Fresh Odesa milk</li>
          <li>Locally grown strawberries</li>
          <li>Pure cane sugar</li>
          <li>Strawberry sauce</li>
          <li>Lemon juice</li>
        </ul>
      </div>
    </div>
  );
};

export default StrawberryBliss;