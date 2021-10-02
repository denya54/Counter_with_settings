import React from 'react';
import {Button} from "./Button";
import {displayValueType} from "../App";
import {Display} from "./Display";

type WorkPageProps = {
    displayValue: displayValueType
    resetDisplayValue: ()=> void
    displayValuePlus: ()=> void
    maxValue: number
    disabledMode: boolean
    redStyle: boolean
    disabledReset: boolean
}

export const WorkPage = (props: WorkPageProps) => {

    return (
        <div>
            <Display displayValue={props.displayValue} maxValue={props.maxValue} redStyle={props.redStyle}/>
        <Button title={'inc'} callBack={props.displayValuePlus} disabledButton={props.disabledMode}/>
        <Button title={'reset'} callBack={props.resetDisplayValue} disabledButton={props.disabledReset}/>
            </div>
    )
}