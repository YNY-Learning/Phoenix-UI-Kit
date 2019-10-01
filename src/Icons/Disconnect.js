import React from 'react'

const Disconnect = props => (
  <svg
    width={props.width || '24px'}
    height={props.height || '24px'}
    viewBox='0 0 22 22'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#C1C1C1'} fillRule='nonzero'>
        <g transform='translate(7.500000, 11.000000) scale(-1, 1) translate(-7.500000, -11.000000) '>
          <path d='M0.00973846154,18 L0.00973846154,20.3415556 L5.295,20.3457333 L5.295,21.9661333 L14.9450769,20.2970222 L14.9550462,1.68071111 L5.295,0 L5.295,1.60111111 L0.00973846154,1.60111111 L0.00973846154,4 M6.89556923,10.2477333 C7.21966154,10.2477333 7.48241538,10.5769778 7.48241538,10.9830667 C7.48241538,11.3892444 7.21970769,11.7184 6.89556923,11.7184 C6.57143077,11.7184 6.30872308,11.3892444 6.30872308,10.9830667 C6.30867692,10.5769778 6.57147692,10.2477333 6.89556923,10.2477333 Z M1.00973846,18.7194667 L1.00973846,3 L4.72576923,3 L4.72576923,18.7223556 L1.00973846,18.7194667 Z M0.00973846154,5 L1.00973846,5 L1.00973846,10 L0.00973846154,10 L0.00973846154,5 Z M0.00973846154,13 L1.00973846,13 L1.00973846,17 L0.00973846154,17 L0.00973846154,13 Z' />
        </g>
        <path d='M16,13 L16,16 L11,11 L16,6 L16,9 L22,9 L22,13 L16,13 Z' />
      </g>
    </g>
  </svg>
)

export default Disconnect