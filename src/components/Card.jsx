import React from 'react';
import './Card.css';

export default function Card({Barca}) {
    console.log(Barca);
  return (
    <>
     {Barca.map((item) =>(
  
         <div style={{background: item.color}} className='card container'>
                  <div className="yer">
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <p>{item.description}</p>
            <button style={{background:item.btnColor}}>Add to card</button>

                  </div>
        </div>
     ))}
    </>
  )
}
