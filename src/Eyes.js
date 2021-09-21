import React from 'react'

function Eyes({eyeOffSetX, eyeOffSetY, eyeRadius}) {
    return (
        <>
            <circle cx={ - eyeOffSetX} cy={ - eyeOffSetY} r={eyeRadius}></circle>
            <circle cx={ + eyeOffSetX} cy={ - eyeOffSetY} r={eyeRadius}></circle>
        </>
    )
}

export default Eyes
