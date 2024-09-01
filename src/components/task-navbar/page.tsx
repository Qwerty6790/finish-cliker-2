'use client';
import './task-navbar-styles.css';

export default function TaskNavBar() {
  return (
    <>
    <a href="/tasks">
    <div   className='bar'>
       <img className='img-four' 
           src='./images/искры.png' 
           alt='Монета' 
           height={86}
           width={86}
           />
      <p className='store'>Задание</p>
      <div className='green-progress'>
      <span className='number'>5</span>
      </div>
      <img className='img-theree' 
           src='./images/подарок 2.png' 
           alt='Монета' 
           height={86}
           width={86}
           />
           <img className='img-four-1' 
           src='./images/искры.png' 
           alt='Монета' 
           height={86}
           width={86}
           />
         
 <svg className='icons-store' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)', transform: '', msFilter: '' }}><path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-1 15h-6v-6h6v6zm1-10H5V7h14v2z"></path></svg>
      
      </div>
      </a>
    </>
  );
}
