import React from 'react'

const UncheckFill = props => (
  <svg
    viewBox='0 0 18 18'
    width={props.width || '18px'}
    height={props.height || '18px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g>
        <path
          d='M15,0 L3,0 C1.34314575,0 0,1.34314575 0,3 L0,15 C0,16.6568542 1.34314575,18 3,18 L15,18 C16.6568542,18 18,16.6568542 18,15 L18,3 C18,1.34314575 16.6568542,0 15,0 Z'
          fill={props.color || '#000'}
          fillRule='nonzero'
        />
        <g transform='translate(1.000000, 1.000000)'>
          <rect fillRule='nonzero' x='0' y='0' width='16' height='16' />
          <g strokeWidth='1' fillRule='evenodd'>
            <rect
              fill={props.color || '#000'}
              fillRule='nonzero'
              opacity='0'
              transform='translate(8.000000, 8.000000) rotate(180.000000) translate(-8.000000, -8.000000) '
              x='-1.77635684e-15'
              y='1.77635684e-15'
              width='16'
              height='16'
            />
            <path
              d='M11,6.66666667 L5,6.66666667 C4.44771525,6.66666667 4,7.26362033 4,8 C4,8.73637967 4.44771525,9.33333333 5,9.33333333 L11,9.33333333 C11.5522847,9.33333333 12,8.73637967 12,8 C12,7.26362033 11.5522847,6.66666667 11,6.66666667 Z'
              fill='#FFFFFF'
              fillRule='nonzero'
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default UncheckFill
