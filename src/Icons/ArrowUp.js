import React from 'react'

const ArrowUp = props => (
  <svg
    viewBox='0 0 20 20'
    width={props.width || '20px'}
    height={props.height || '20px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fillRule='nonzero'>
        <g transform='translate(10.000000, 10.000000) scale(-1, 1) rotate(-90.000000) translate(-10.000000, -10.000000) '>
          <rect
            fill='#333333'
            opacity='0.05'
            x='0'
            y='0'
            width='20'
            height='20'
            rx='0.833333333'
          />
          <rect
            stroke='#C1C1C1'
            strokeWidth='0.666666667'
            x='0.333333333'
            y='0.333333333'
            width='19.3333333'
            height='19.3333333'
            rx='0.833333333'
          />
          <polygon
            fill='#C1C1C1'
            transform='translate(10.833333, 10.000000) scale(-1, 1) rotate(-90.000000) translate(-10.833333, -10.000000) '
            points='10.8333333 6.66666667 15 13.3333333 6.66666667 13.3333333'
          />
        </g>
      </g>
    </g>
  </svg>
)

export default ArrowUp
