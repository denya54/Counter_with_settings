import React from 'react';
import {displayValueType} from "../App";
import classes from './Display.module.css'

type DisplayProps = {
    displayValue: displayValueType
    maxValue: number
    redStyle: boolean
}

export const Display = (props: DisplayProps) => {

    const redDisplay = props.redStyle ? classes.maxValueDisplay : ''
    return(
        <div className={redDisplay}>
            {props.displayValue}
        </div>
    )
}