"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './boosters_page_style.css';
import { Toaster, toast } from "sonner";
import DailyBoosterCard from '@/components/boosters-page-components/daily-booster-card/page';
import EnergyReserveBoosterCard from '@/components/boosters-page-components/energy-reserve-booster-card/page';
import EnergyRecoveryBoosterCard from '@/components/boosters-page-components/energy-recovery-booster-card/page';
import MultiTapBoosterCard from '@/components/boosters-page-components/multi-tap-booster-card/page';
import InfoBar from '@/components/info-bar/page';
import BoostersMiningNavBar from '@/components/boosters-page-components/boosters-mining-navbar/page';

export default function BoostersPage () {
  const [userId, setUserId] = useState<number>(9999999999);
  const [balance, setBalance] = useState<number>(0);
  const [profitInHour, setProfitInHour] = useState<number>(0);
  const [profitByTap, setProfitByTap] = useState<number>(0);
  const [dailyEnergyBoosters, setDailyEnergyBoosters] = useState<number>(0);
  const [energy, setEnergy] = useState<number>(0);

  /* При заходе в приложение получаем данные пользователя с сервера */
  useEffect(() => {
    let tg  = window.Telegram.WebApp;

    const { user } = tg.initDataUnsafe;
    if (user && user.id) {
      setUserId(user.id);

      getBoostersStatus(user.id)
        .then(({ balance, profit_by_tap, profit_in_hour, daily_energy_boosters, energy }) => {
          setBalance(balance);
          setEnergy(energy);
          setProfitByTap(profit_by_tap);
          setProfitInHour(profit_in_hour);
          setDailyEnergyBoosters(daily_energy_boosters);

          tg.expand()
          tg.enableClosingConfirmation();
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setBalance(0);
          setEnergy(0);
          setProfitByTap(0);
          setProfitInHour(0);
          toast.error("Не удалось получить данные с сервера");
        });
      } else{
        toast.error("Проблема на стороне Telegram");
      }
    })

    /* Хендлеры по запросам на сервер */
  async function getBoostersStatus(userId: number) {
    try {
      const response = await fetch(`https://localhost:9000/getBoostersStatus/${userId}`);
      const data = await response.json();
      return { 
        balance : data.balance,
        profit_in_hour : data.profit_in_hour,
        profit_by_tap : data.profit_by_tap,
        daily_energy_boosters : data.daily_energy_boosters,
        energy : data.energy
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  return (
    <>
       <Toaster position="top-center" richColors />
        <InfoBar balance={balance} profit={profitInHour} profitByTap={profitByTap}/>
        <BoostersMiningNavBar/>
        <div className='main-text'>
          <p>Покупай улучшения и<br/>увеличивай свой доход</p>
        </div>
      <div className="cards">
      <p className='text-of-cards-container'>Бесплатные ежедневные <br/>усилители</p>
      <DailyBoosterCard userId = {userId} count = {dailyEnergyBoosters}/>
      <p  className='text-of-cards-container'>Усилители</p>
      <EnergyReserveBoosterCard  userId={userId} balance={balance} energy={energy} />
      <EnergyRecoveryBoosterCard userId={userId} balance={balance} profitInHour={profitInHour}/>
      <MultiTapBoosterCard userId={userId} balance={balance} profitByTap={profitInHour}  />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
      </>
  );
}