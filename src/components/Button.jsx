import React from 'react';
import './Button.css';

export default function Button({ children, variant = 'primary', onClick, type = 'button', className = '', ...props }) {
  const cls = `btn btn-${variant} ${className}`.trim();
  return (
    <button type={type} className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
