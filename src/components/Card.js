import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const Card = ({ header, text, url }) => {
  return (
    <div className="card border-dark mb-3" style={{ maxWidth: '20rem' }}>
      {url ? (
        <Link to={url} style={{ textDecoration: 'none', color: 'inherit' }}>
          {header && <div className="card-header">{header}</div>}
          <div className="card-body">
            {text && <p className="card-text">{text}</p>}
          </div>
        </Link>
      ) : (
        <>
          {header && <div className="card-header">{header}</div>}
          <div className="card-body">
            {text && <p className="card-text">{text}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;

