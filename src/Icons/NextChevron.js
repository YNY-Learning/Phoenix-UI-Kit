import React from 'react'

const NextChevron = props => (
  <svg
    viewBox='0 0 8 14'
    width={props.width || '24px'}
    height={props.height || '24px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-9.000000, -5.000000)'>
        <g>
          <g>
            <rect
              fill='#000000'
              fillRule='nonzero'
              opacity='0'
              transform='translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) '
              x='0'
              y='0'
              width='24'
              height='24'
            />
            <path
              d='M10,19 C9.76634784,19.0004565 9.53991206,18.9190812 9.36,18.77 C9.15549287,18.6004518 9.02685216,18.3564992 9.00246308,18.0919715 C8.978074,17.8274438 9.0599411,17.5640826 9.23,17.36 L13.71,12 L9.39,6.63 C9.2222295,6.42340657 9.14373108,6.15845909 9.17188444,5.89381749 C9.2000378,5.6291759 9.33252029,5.38667319 9.54,5.22 C9.7491666,5.03596085 10.0256274,4.94752472 10.3027741,4.97599869 C10.5799208,5.00447267 10.8326242,5.14727499 11,5.37 L15.83,11.37 C16.1333172,11.7390019 16.1333172,12.2709981 15.83,12.64 L10.83,18.64 C10.6265373,18.8854461 10.3182349,19.0191676 10,19 Z'
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

export default NextChevron
