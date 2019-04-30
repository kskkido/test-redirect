import './styles.css';
import React from 'react';

const Visible = ({ children, hidden = false }) => (
  <div className={hidden ? 'hidden' : ''}>
    {children}
  </div>
);

export default Visible;
