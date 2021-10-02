import React, {ChangeEvent} from 'react';
import classes from './Input.module.css';

type InputPropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>)=> void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>)=> void
}
export const Input = (props: InputPropsType) => {

let classesStartInput = props.startValue >= props.maxValue || props.startValue < 0 ? classes.error : ''
let classesMaxInput = props.startValue >= props.maxValue || props.maxValue < 0 ? classes.error : ''

    return (
        <div>
            Max value: <input className={classesMaxInput}
                              type={'number'}
                              value={props.maxValue}
                              onChange={props.changeMaxValue}/>
            Start value: <input className={classesStartInput}
                                type={'number'}
                                value={props.startValue}
                                onChange={props.changeStartValue}/>
        </div>
    )
}