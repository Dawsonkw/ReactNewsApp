import React from 'react';


const NextArrow = ({ className, onClick }) => (
    <div onClick={onClick}>
      <i className={`${className} w-6 h-6 `} />
    </div>
  );
  
  const PrevArrow = ({ className, onClick }) => (
    <div onClick={onClick}>
      <i className={`${className} text-6xl`} />
    </div>
  );
  


export {NextArrow, PrevArrow};