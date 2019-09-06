import React from 'react'

const ArrowDownFill = props => (
  <svg
    viewBox='0 0 8 6'
    width={props.width || '8px'}
    height={props.height || '6px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#C1C1C1'} fillRule='nonzero'>
        <path d='M4,6 C3.65540952,5.99826192 3.32987792,5.84158413 3.11350878,5.57333333 L0.307397465,2.17333333 C-0.0271506743,1.75571253 -0.094412234,1.18387612 0.134098429,0.7 C0.319614489,0.279041431 0.733971804,0.00535508768 1.19388869,0 L6.80611131,0 C7.2660282,0.00535508768 7.68038551,0.279041431 7.86590157,0.7 C8.09441223,1.18387612 8.02715067,1.75571253 7.69260254,2.17333333 L4.88649122,5.57333333 C4.67012208,5.84158413 4.34459048,5.99826192 4,6 Z' />
      </g>
    </g>
  </svg>
)

export default ArrowDownFill
