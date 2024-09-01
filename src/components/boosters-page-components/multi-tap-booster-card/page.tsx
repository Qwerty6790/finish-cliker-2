import React, { useEffect, useState } from 'react';
import './multi-tap-booster-card.css';
import { Toaster, toast } from 'sonner';

interface MultiTapBoosterCardI {
  userId: number;
  balance: number;
  profitByTap: number;
}

const MultiTapBoosterCard= ({ userId, balance, profitByTap } : MultiTapBoosterCardI) => {
  const [pricePerBoost, setPricePerBoost] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const BASE_PRICE = 5000; // Базовая цена за улучшение
  const PRICE_INCREMENT_RATIO = 1.1; // Коэффициент увеличения цены

  // Определение уровня буста и стоимости на основе энергии
  useEffect(() => {
    const level = Math.floor(profitByTap / 1);
    const price = Math.floor(BASE_PRICE * Math.pow(PRICE_INCREMENT_RATIO, level)); // Увеличение цены с каждым уровнем
    setPricePerBoost(price); // Устанавливаем цену буста
    setLevel(level);
  });

  const useEnergyReserveBoosterCard = async () => {
    try {
      if (balance < pricePerBoost) {
        toast.error("Недостаточно средств!");
        return; 
      }
      if (level >= 10) {
        toast.error("Вы достигли максимального уровня!");
        return; 
      }

      const response = await fetch(`https://localhost:9000/incrementProfitByTap/${userId}/${balance}/${pricePerBoost}`);
      const data = await response.json();
      if (!data.success) {
        toast.error("Неудача:(");
      } else {
        toast.success("Успешно!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    useEnergyReserveBoosterCard();
  };

  return (
    <>
      <div className='booster-card'>
        <img className='image-of-booster'
          src={'./images/red_energy.png'}
          height={100}
          width={100} />
        <div className='main-section'>
          <div className='container'>
            <p className='title-of-booster'>Награда за один тап</p>
            <div className="info-in-line">
              <p className='level'>ур. {Math.floor(profitByTap / 1)}</p>
              <p className='profit'>+1</p>
              <p className='text-energy-reserve'>к тапу</p>
            </div>
          </div>
          <button className='button-of-booster' onClick={handleButtonClick}>
            <img className='coin' 
              src={'./images/жетон.png'}
              height={30}
              width={30}
            />
            <p className="confirm-button">{pricePerBoost}</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default MultiTapBoosterCard;