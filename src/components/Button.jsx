import React from 'react'
import cn from 'classnames'

export const Button = ({ label, onClickHandler, isMax }) => (
    <button onClick={onClickHandler} className={cn("button", isMax && "button--max")}>
        {label}
    </button>
)