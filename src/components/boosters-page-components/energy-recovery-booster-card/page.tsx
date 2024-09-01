import React, { useEffect, useState } from 'react';
import './energy-recovery-booster-card.css';
import { Toaster, toast } from 'sonner';

interface EnergyRecoveryBoosterCardI {
  userId: number;
  balance: number;
  profitInHour: number;
}

const EnergyRecoveryBoosterCard= ({ userId, balance, profitInHour } : EnergyRecoveryBoosterCardI) => {
  const [IncreasedEnergy, setIncreasedEnergy] = useState<number>(0); // Значение, на которое увеличивается энергия
  const [pricePerBoost, setPricePerBoost] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const BOOST_INCREMENT = 10; // Количество энергии за уровень
  const BASE_PRICE = 5000; // Базовая цена за улучшение
  const PRICE_INCREMENT_RATIO = 1.1; // Коэффициент увеличения цены 1
  const INCREASED_ENERGY_RATIO = 0.15; // Коэффициент увеличения хранилища энергии

  // Определение уровня буста и стоимости на основе энергии
  useEffect(() => {
    const level = Math.floor(profitInHour / BOOST_INCREMENT);
    const price = Math.floor(BASE_PRICE * Math.pow(PRICE_INCREMENT_RATIO, level)); 
    setIncreasedEnergy(profitInHour*INCREASED_ENERGY_RATIO); 
    setPricePerBoost(price); 
    setLevel(level);
  }, [profitInHour]);

  const useEnergyRcoveryBoosterCard = async () => {
    try {
      if (balance < pricePerBoost) {
        toast.error("Недостаточно средств!");
        return; 
      }
      if (level >= 25) {
        toast.error("Вы достигли максимального уровня!");
        return; 
      }

      const response = await fetch(`https://localhost:9000/incrementEnergyRecovery/${userId}/${balance}/${IncreasedEnergy}/${pricePerBoost}`);
      const data = await response.json();
      if (!data.success) {
        toast.error("Неудача:(");
      } else {
        toast.success("Успешно!");
      }
      }catch (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    useEnergyRcoveryBoosterCard();
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
            <p className='title-of-booster'>Доход / час</p>
            <div className="info-in-line">
              <p className='level'>ур: {Math.floor(profitInHour / 10)}</p>
              <p className='profit'>+{IncreasedEnergy}</p>
              <p className='text-energy-reserve'>к доходу</p>
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

export default EnergyRecoveryBoosterCard;