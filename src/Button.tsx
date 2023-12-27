import React from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
      Click Me!
    </button>
  );
};

export default Button;