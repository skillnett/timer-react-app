import React from 'react'
import cn from 'classnames'

const LOW_TIME = 20
const LOWEST_TIME = 10

export const Clock = ({ time, initialValue }) => {

    const format = time => {
        let seconds = time % 60
        let minutes = Math.floor(time / 60)

        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds

        return minutes + ':' + seconds
    }

    const isLowTime = initialValue && time <= LOW_TIME
    const isLowestTime = initialValue && time <= LOWEST_TIME

    return (
        <div className={cn("time", isLowTime && "time--low", isLowestTime && "button--blink")}>
            {format(time)}
        </div>
    )
}