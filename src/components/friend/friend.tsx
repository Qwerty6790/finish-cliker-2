'use client'; 
import './friend.css'; 
 
interface FriendsProps { 
  name: string; 
} 
 
export default function Friend({ name}: FriendsProps) { 
  return ( 
    <div className="friend"> 
    <div className='users'>
      <div className='components-users'>
      </div>
      <div className='components-down-users'>
        </div>
        </div> 
     <p className='users-name'>{name}</p> 
    <div className='users-give' >
      <p className='give'>+50k</p>
    </div>
    </div> 
  ); 
}