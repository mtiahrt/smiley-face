import React from 'react'
import {arc} from 'd3'

const Eyebrows = ({mouthRadius}) => {
    const leftEyebrow = arc()
    .innerRadius(mouthRadius + 20)
    .outerRadius(mouthRadius + 35)
    .startAngle(6.23)
    .endAngle(Math.PI * 3 / 1.65);

  const rightEyebrow = arc()
    .innerRadius(mouthRadius + 20) //thickness
    .outerRadius(mouthRadius + 35)//thickness
    .startAngle(Math.PI / 22)
    .endAngle(Math.PI * 3 / 14);
    return (
        <>
            <path d={leftEyebrow()} />
            <path d={rightEyebrow()} /> 
        </>
    )
}

export default Eyebrows
