
import React from 'react';
import './boosters-mining-navbar.css';
import { Toaster, toast } from "sonner";

const BoostersMiningNavBar= () => {
  
  return (
    <>
    <div className="boosters-mining-navbar">
      <button className='mining-in-self-navbar' onClick={
        () => toast.info('В доработке..')
      }>
        Майнинг
      </button>
      <a href="/boosters" className='boosters-in-self-navbar'>
        Бустеры
      </a>
    </div>
    </>
  );
};

export default BoostersMiningNavBar;