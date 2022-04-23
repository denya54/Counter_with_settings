import React from 'react';
import {ButtonComponent} from "./ButtonComponent";
import {displayValueType} from "../App";
import {Display} from "./Display";
import classes from './WorkPage.module.css'

type WorkPageProps = {
    displayValue: displayValueType
    resetDisplayValue: () => void
    displayValuePlus: () => void
    maxValue: number
    disabledMode: boolean
    redStyle: boolean
    disabledReset: boolean
}

export const WorkPage = (props: WorkPageProps) => {
    return (
        <div className={classes.workPage}>
            <Display displayValue={props.displayValue} maxValue={props.maxValue} redStyle={props.redStyle}/>
            <ButtonComponent title={'inc'} callBack={props.displayValuePlus} disabledButton={props.disabledMode}/>
            <ButtonComponent title={'reset'} callBack={props.resetDisplayValue} disabledButton={props.disabledReset}/>
        </div>
    )
}