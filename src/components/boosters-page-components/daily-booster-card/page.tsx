
import React from 'react';
import './daily-booster-card.css';
import { Toaster, toast } from "sonner";

interface DailyBoosterCardI {
  userId: number;
  count: number;
}

const DailyBoosterCard= ({ userId, count }: DailyBoosterCardI) => {

  const useDailyBoosterCard = async () => {
    if (count > 0) {
      try {
        const response = await fetch(`https://localhost:9000/useDailyEnergyBooster/${userId}/${count}`);
        const data = await response.json();
        if (!data.success){
          toast.error("Недостаточно бустов!")
        } else{
          toast.success("Успешно!")
        }
      } catch (error) {
        console.error(error);
      }
    }
    
  };

   // Call the tryDoTask function when the button is clicked
   const handleButtonClick = () => {
    useDailyBoosterCard();
  };

  return (
    <>
    <div className='booster-card'>
      <img className='image-of-booster'
        src={`./images/daily_energy.png`}
        height={100}
        width={100} />
      <div className='main-section'>
      <div className='container'>
        <p className='available'>Доступно</p>
        <p className='progress-of-booster'>{count} из 5</p>
        <p className='text-of-of-daily-booster'>восстанавливай <br />свою энергию</p>
      </div>
      <button className='button-of-booster' onClick={handleButtonClick}>
          <p className="confirm-button">Применить</p>
      </button>
      </div>
    </div>
    </>
  );
};

export default DailyBoosterCard;