import React from 'react'

const Heart = props => (
  <svg
    viewBox='0 0 20 18'
    width={props.width || '20px'}
    height={props.height || '18px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#C1C1C1'} fillRule='nonzero'>
        <path d='M18.3653846,1.5 C19.4551337,2.59375547 20,3.92967961 20,5.5078125 C20,7.08594539 19.4551337,8.42186953 18.3653846,9.515625 L10,18 L1.63461538,9.515625 C0.544866346,8.42186953 0,7.08594539 0,5.5078125 C0,3.92967961 0.544866346,2.59375547 1.63461538,1.5 C2.59615865,0.499995 3.77403149,0 5.16826923,0 C6.56250697,0 7.74037981,0.499995 8.70192308,1.5 L10,2.8125 L11.3461538,1.5 C12.3076971,0.499995 13.4775572,0 14.8557692,0 C16.2339812,0 17.4038413,0.499995 18.3653846,1.5 Z' />
      </g>
    </g>
  </svg>
)

export default Heart
