import React, { useEffect, useState } from 'react'
import { Button, Input, Clock, HintMessage } from './components'
import './App.scss'

const NORMAL_SPEED = 1000;
const ONE_AND_HALF_SPEED = 750;
const DOUBLE_SPEED = 500;
const MAX_SPEED = 100;

const App = () => {
    const [initialValue, setInitialValue] = useState(null);
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [speed, setSpeed] = useState(NORMAL_SPEED)

    const toggleActive = () => setIsActive(!isActive)

    const reset = () => {
        setSeconds(0)
        setIsActive(false)
        setInitialValue(null)
    }

    const handleCountdown = minutes => {
        if (minutes > 0) {
            const formatMinutesToSeconds = minutes * 60;

            setSeconds(formatMinutesToSeconds)
            setInitialValue(formatMinutesToSeconds)
            setIsActive(true)
        }
    }

    useEffect(() => {
        let interval = null
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1)
            }, speed)
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, seconds])

    const inputProps = {
        handleCountdown,
        initialValue,
        toggleActive,
        isActive,
        seconds,
        reset
    }

    return (
        <div className="app">
            <HintMessage
                initialValue={initialValue}
                seconds={seconds}
            />
            <Clock
                time={seconds}
                initialValue={initialValue}
            />
            <Input {...inputProps} />
            <div>
                <Button onClickHandler={() => setSpeed(NORMAL_SPEED)} label='1.0x' />
                <Button onClickHandler={() => setSpeed(ONE_AND_HALF_SPEED)} label='1.5x' />
                <Button onClickHandler={() => setSpeed(DOUBLE_SPEED)} label='2.0x' />
                <Button onClickHandler={() => setSpeed(MAX_SPEED)} label='MAX' isMax />
            </div>
        </div>
    )
}

export default App