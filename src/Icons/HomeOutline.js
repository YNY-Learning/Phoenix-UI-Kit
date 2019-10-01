import React from 'react'

const HomeOutline = props => (
  <svg
    viewBox='0 0 18 20'
    width={props.width || '18px'}
    height={props.height || '20px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#C1C1C1'} fillRule='nonzero'>
        <path d='M17.42,8.18 L9.71,0.3 C9.5222334,0.110687349 9.26663754,0.00420167566 9,0.00420167566 C8.73336246,0.00420167566 8.4777666,0.110687349 8.29,0.3 L0.58,8.19 C0.203155252,8.56988542 -0.0057469972,9.08493751 -0.00011551444,9.62 L-0.00011551444,18 C-0.00160893981,19.0629999 0.828607852,19.9415362 1.89,20 L16.11,20 C17.1713921,19.9415362 18.0016089,19.0629999 18.0000023,18 L18.0000023,9.62 C18.000793,9.08293399 17.7928185,8.56658358 17.42,8.18 Z M7,18 L7,12 L11,12 L11,18 L7,18 Z M16,18 L13,18 L13,11 C13,10.4477153 12.5522847,10 12,10 L6,10 C5.44771525,10 5,10.4477153 5,11 L5,18 L2,18 L2,9.58 L9,2.43 L16,9.62 L16,18 Z' />
      </g>
    </g>
  </svg>
)

export default HomeOutline