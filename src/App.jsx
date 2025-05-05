import React from 'react'
import Card from './components/Card'

const data =[
  {
    id: '1',
    image: 'Picture.png' ,
    title : 'NIKE AIR FORCE 1 ‘07 (white/black)' ,
    price: '89.99',
    description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
    color : '#CBCBCB',
    btnColor: '#A5A5A5'
  },
  {
    id: '2',
    image: 'Picture.png' ,
    title : 'NIKE AIR FORCE 1 ‘07 (white/black)' ,
    price: '189.99',
    description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
    color : '#5CA7FF',
    btnColor: '#FFC700',
  },
  {
    id: '3',
    image: 'Picture.png' ,
    title : 'NIKE AIR FORCE 1 ‘07 (white/black)' ,
    price: '1189.99',
    description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
    color : '#D083FF',
    btnColor: '#00FFB2',
  },
  {
    id: '4',
    image: 'Picture.png' ,
    title : 'NIKE AIR FORCE 1 ‘07 (white/black)' ,
    price: '11189.99',
    description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
    color : '#FF99E2',
    btnColor: '#FFF500',
  },
  {
    id: '5',
    image: 'Picture.png' ,
    title : 'NIKE AIR FORCE 1 ‘07 (white/black)' ,
    price: '21199.99',
    description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
    color : '#FF99E2',
    btnColor: '#C5C1C7',
  },
  {
    id: '6',
    image: 'Picture.png' ,
    title : 'NIKE AIR FORCE 1 ‘07 (white/black)' ,
    price: '9999999',
    description: 'I lost left shoe, don’t need this one anymore. Please buy it.',
    color : '#5CFF62',
    btnColor: '#FFC700',
  },

]
export default function App() {
  return (
    <div className='container'>
      <h1>Products</h1>
      <div className="card-parent">
      <Card Barca={data} />

      </div>
    </div>
  )
}
