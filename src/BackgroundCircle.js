import React from 'react'

const BackgroundCircle = ({radius, strokeWidth}) => (
    <circle stroke="black" 
      r={radius}
      strokeWidth={strokeWidth} 
      fill="yellow">
    </circle>
    )

export default BackgroundCircle
