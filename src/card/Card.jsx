import React from 'react'
import './card.css'
import axios from 'axios'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
const Card = ({name,icon,delay,value}) => {
  
  return (
    
    <div className='main-cards'>
            <div className='card' style={{animationDelay:delay}}>
                <div className='card-inner'>
                    <h3>{name}</h3>
                   {icon}
                </div>
                <h1>{value}</h1>
            </div>
            </div>
    
  );
}

export default Card;