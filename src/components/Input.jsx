import React, { useRef } from 'react'

export const Input = ({ handleCountdown, isActive, toggleActive, seconds, reset, initialValue }) => {

    const inputRef = useRef()

    const onSubmit = event => {
        event.preventDefault()
        const stringSeconds = inputRef.current.value
        const isValid = stringSeconds.match(/[0-9]/)

        if (isActive || (!isActive && seconds)) {
            toggleActive()
            return
        }
        if (isValid) {
            inputRef.current.value = ''
            handleCountdown(parseInt(stringSeconds, 10))
        }
    }

    const disabledInput = isActive || seconds;

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                ref={inputRef}
                placeholder="enter time in minutes"
                disabled={disabledInput}
                className="app__field"
            />
            <input
                type="submit"
                value={isActive ? "Pause" : initialValue && seconds ? "Resume" : "Start"}
                className={`button button__primary button__primary--${isActive ? 'active' : 'inactive'}`}>
            </input>
            <button className="button" onClick={reset}>
                Reset
            </button>
        </form>
    )
}