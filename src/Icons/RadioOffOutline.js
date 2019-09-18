import React from 'react'

const RadioOffOutline = props => (
  <svg
    viewBox='0 0 20 20'
    width={props.width || '20px'}
    height={props.height || '20px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#000'} fillRule='nonzero'>
        <path d='M10,0 C4.4771525,0 0,4.4771525 0,10 C0,15.5228475 4.4771525,20 10,20 C15.5228475,20 20,15.5228475 20,10 C20,7.3478351 18.9464316,4.80429597 17.0710678,2.92893219 C15.195704,1.0535684 12.6521649,0 10,0 Z M10,18 C5.581722,18 2,14.418278 2,10 C2,5.581722 5.581722,2 10,2 C14.418278,2 18,5.581722 18,10 C18,12.1217319 17.1571453,14.1565632 15.6568542,15.6568542 C14.1565632,17.1571453 12.1217319,18 10,18 Z' />
      </g>
    </g>
  </svg>
)

export default RadioOffOutline
