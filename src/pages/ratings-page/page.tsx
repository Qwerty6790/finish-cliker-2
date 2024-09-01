import "./ratings.css"; 
import PlayerRating from '@/components/player-rating/page'; 
import React, { useState, useEffect } from 'react';  
import { IPlayerData } from '@/types/items.interface';
import { Toaster, toast } from "sonner";  
  
const RatingsPage = () => { 
  const [players, setPlayers] = useState<IPlayerData[]>([]); 
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /* Получение списка топа игроков при входе в приложение */
  useEffect(() => {
    const { user } = window.Telegram.WebApp.initDataUnsafe;
    if (user && user.id) {
      getTopPlayers();
      setIsLoading(false);
    } else {
      toast.error("Ошибка на стороне Telegram");
      setIsLoading(false);
    }
  }, []);

  /* Хендлер */
  async function getTopPlayers() {
    try {
      const response = await fetch(`https://http://127.0.0.1:9000/getTopBalance`);
      const data = await response.json();
      setPlayers(data);
    } catch (error) {
      toast.error("Ошибка на стороне Сервера");
    }
  }

  return ( 
    <div> 
      <Toaster position="top-center" richColors /> 
       <img className='central-top-logo-img'  
          src='./images/жетон прозрачный.png'  
          alt='Монета'  
          height={95} 
          width={100} 
          /> 
          <img className='ratings-image'  
          src='./images/жетон.png'  
          alt='Монета'  
          height={405} 
          width={410} 
          /> 
          <h2 className='ratings-title'>Рейтинг Игроков</h2> 
          <div className='line-between-cards-and-text'> 
          </div> 
          <div className='cards'> 
          {isLoading ? ( 
              <p className="load-top-players">Загрузка..</p>
            ) : players.length === 0 ? ( 
              <p className="load-top-players">Игроков пока нет.</p>
            ) : (
              players.map((player, index) => (
                <PlayerRating 
                  key={player.user_id}
                  index={index+1}
                  name={player.username}
                  balance={player.balance}
                />
              ))
            )}
        </div> 
    </div> 
  ) 
} 
 
export default RatingsPage