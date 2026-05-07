import React from 'react';

const ChocolateIndulgence = () => {
  return (
    <div className="ice-cream-page">
      <h1>Chocolate Indulgence</h1>
      <div className="ice-cream-details">
        <div className="ice-cream-image">
          {/* Placeholder for ice cream image */}
          <div className="placeholder">🍫</div>
        </div>
        <div className="ice-cream-description">
          <h2>Double Chocolate Fudge</h2>
          <p>Rich dark chocolate ice cream swirled with homemade chocolate fudge and chocolate chunks.</p>
          <p><strong>Price:</strong> 90₴ per scoop</p>
          <p><strong>Available in:</strong> Cup, Waffle Cone, or Pint</p>
          <p><strong>Allergens:</strong> Contains milk, soy</p>
        </div>
      </div>
      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          <li>Fresh Odesa milk</li>
          <li>Belgian dark chocolate</li>
          <li>Chocolate fudge</li>
          <li>Pure cane sugar</li>
          <li>Cocoa powder</li>
        </ul>
      </div>
    </div>
  );
};

export default ChocolateIndulgence;