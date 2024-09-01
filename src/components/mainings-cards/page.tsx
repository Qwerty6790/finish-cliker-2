
import React from 'react';
import './mining-card.css';

interface MiningCardI {
  level: number;
  profit: number;
  price: number;
  title: string;
}

const MiningCard = ({ level, profit, price, title }: MiningCardI) => {
  return (
    <div className="mining-card">
      <img 
        className='card-image' src={`./images/${title}.png`} alt={title} 
/>
      <h2 className="card-title">{title}</h2>
      <div className="info-box">
        <p className="level-info">{level} ур.</p>
        <img 
          className='currency-icon' 
          src='./images/доллар.png' 
          alt='Монета' 
        />
        <p className="profit-info">+{profit}</p>
        
        {/* Содержимое кнопки цены */}
        <div className="coin-box">
          <img 
            className='coin-icon' 
            src='./images/жетон.png' 
            alt='Монета' 
          />
          <p className="price-info">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default MiningCard;