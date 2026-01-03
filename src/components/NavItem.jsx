import React from 'react';

export default function NavItem({ href = '#', label, onClick, className = '' }) {
  return (
    <a href={href} onClick={onClick} className={"nav-item " + className}>
      {label}
    </a>
  );
}
