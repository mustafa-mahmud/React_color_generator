import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [colors, setColors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let newColors = new Values(color).all(10);
      setColors(newColors);
      setError(false);
    } catch (err) {
      setError(true);
      setColors([]);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            className={`${error && 'error'}`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>

      {colors.length !== 0 && (
        <section className="colors">
          {colors.map((item, index) => {
            return <SingleColor key={index} index={index} color={item} />;
          })}
        </section>
      )}
    </>
  );
}

export default App;
