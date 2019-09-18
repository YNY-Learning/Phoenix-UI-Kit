import React from 'react'

const RadioOnFill = props => (
  <svg
    viewBox='0 0 20 20'
    width={props.width || '20px'}
    height={props.height || '20px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#000'} fillRule='nonzero'>
        <path d='M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 Z M10,6 C12.209139,6 14,7.790861 14,10 C14,12.209139 12.209139,14 10,14 C7.790861,14 6,12.209139 6,10 C6,7.790861 7.790861,6 10,6 Z' />
      </g>
    </g>
  </svg>
)

export default RadioOnFill
