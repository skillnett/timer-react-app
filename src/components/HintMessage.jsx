import React from 'react'

export const HintMessage = ({ initialValue, seconds }) => {

    const soundFilePath = 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3';
    const isHalfWay = (seconds * 100) / initialValue <= 50
    const timerFinished = initialValue && !seconds

    if (timerFinished) {
        return (
            <>
                <audio ref={(green) => { green = green }} autoPlay>
                    <source src={soundFilePath} type="audio/mpeg"></source>
                </audio>
                <div>Time's Up!</div>
            </>
        )
    }

    if (isHalfWay) {
        return <div>More than halfway there!</div>
    }

    return null
}