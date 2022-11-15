import React, { useState, useEffect } from 'react';

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState('');
  const bgColor = `rgb(${color.rgb.join(',')})`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      onClick={() => {
        setAlert('COPIED COLOR');
        navigator.clipboard.writeText(`#${color.hex}`);
      }}
      className={`color ${index > 9 && 'color-light'}`}
      style={{ backgroundColor: bgColor }}
    >
      <p className="percent-value">{`${color.weight}%`}</p>
      <p className="color-value">{`#${color.hex}`}</p>
      {alert && <p className="alert">{alert}</p>}
    </article>
  );
};

export default SingleColor;
