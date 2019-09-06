import React from 'react'

const BackChevron = props => (
  <svg
    viewBox='0 0 7 14'
    width={props.width || '24px'}
    height={props.height || '24px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-8.000000, -5.000000)'>
        <g>
          <g>
            <rect
              fill='#000000'
              fillRule='nonzero'
              opacity='0'
              transform='translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000) '
              x='0'
              y='0'
              width='24'
              height='24'
            />
            <path
              d='M13.83,19 C13.5274116,19.0010289 13.2406301,18.8649915 13.05,18.63 L8.22,12.63 C7.91668285,12.2609981 7.91668285,11.7290019 8.22,11.36 L13.22,5.36 C13.5734622,4.93474075 14.2047407,4.87653778 14.63,5.23000001 C15.0552592,5.58346225 15.1134622,6.21474074 14.76,6.64 L10.29,12 L14.61,17.36 C14.8596926,17.6597233 14.9122976,18.0772862 14.7447459,18.4295743 C14.5771943,18.7818624 14.2200765,19.0045572 13.83,19 Z'
              fill={props.color || '#333'}
              fillOpacity={props.opacity || 1}
              fillRule='nonzero'
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default BackChevron
