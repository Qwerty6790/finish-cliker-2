import React, { useState, useEffect } from 'react';
import './energy-reserve-booster-card.css';
import { Toaster, toast } from 'sonner';

interface EnergyReserveBoosterCardI {
  userId: number;
  balance: number;
  energy: number;
}

const EnergyReserveBoosterCard = ({ userId, balance, energy }: EnergyReserveBoosterCardI) => {
  const [IncreasedEnergy, setIncreasedEnergy] = useState<number>(0); // Значение, на которое увеличивается энергия
  const [pricePerBoost, setPricePerBoost] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const BOOST_INCREMENT = 2000; // Количество энергии за уровень
  const BASE_PRICE = 5000; // Базовая цена за улучшение
  const PRICE_INCREMENT_RATIO = 1.8; // Коэффициент увеличения цены 1
  const INCREASED_ENERGY_RATIO = 0.15; // Коэффициент увеличения хранилища энергии

  // Определение уровня буста и стоимости на основе энергии
  useEffect(() => {
    const level = Math.floor(energy / BOOST_INCREMENT);
    const price = Math.floor(BASE_PRICE * Math.pow(PRICE_INCREMENT_RATIO, level)); // Увеличение цены с каждым уровнем
    setIncreasedEnergy(energy*INCREASED_ENERGY_RATIO); // Устанавливаем увеличенное значение энергии для следующего уровня
    setPricePerBoost(price); // Устанавливаем цену буста
    setLevel(level);
  }, [energy]);

  const useEnergyReserveBoosterCard = async () => {
    try {
      if (balance < pricePerBoost) {
        toast.error("Недостаточно средств!");
        return; 
      }
      if (level >= 5) {
        toast.error("Вы достигли максимального уровня!");
        return; 
      }

      const response = await fetch(`https://localhost:9000/incrementEnergyReserve/${userId}/${balance}/${IncreasedEnergy}/${pricePerBoost}`);
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
            <p className='title-of-booster'>Увеличить запас энергии</p>
            <div className="info-in-line">
              <p className='level'>ур. {Math.floor(energy / BOOST_INCREMENT)}</p>
              <p className='profit'>+{IncreasedEnergy}</p>
              <p className='text-energy-reserve'>запас энергии</p>
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

export default EnergyReserveBoosterCard;
