import React from 'react';

const VanillaDream = () => {
  return (
    <div className="ice-cream-page">
      <h1>Vanilla Dream</h1>
      <div className="ice-cream-details">
        <div className="ice-cream-image">
          {/* Placeholder for ice cream image */}
          <div className="placeholder">🍦</div>
        </div>
        <div className="ice-cream-description">
          <h2>Classic Vanilla Bean</h2>
          <p>Our signature vanilla made with Madagascar bourbon vanilla beans, locally sourced milk, and a touch of Odesa honey.</p>
          <p><strong>Price:</strong> 80₴ per scoop</p>
          <p><strong>Available in:</strong> Cup, Waffle Cone, or Pint</p>
          <p><strong>Allergens:</strong> Contains milk</p>
        </div>
      </div>
      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          <li>Fresh Odesa milk</li>
          <li>Madagascar bourbon vanilla beans</li>
          <li>Pure cane sugar</li>
          <li>Local honey</li>
          <li>Sea salt</li>
        </ul>
      </div>
    </div>
  );
};

export default VanillaDream;