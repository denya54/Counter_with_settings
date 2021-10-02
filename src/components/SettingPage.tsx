import React, {ChangeEvent} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";

type SettingPageProps = {
    maxValue: number
    startValue: number
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>)=> void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>)=> void
    updateSettings: () => void
    disabledSet: boolean
}

export const SettingPage = (props: SettingPageProps) => {

    return (
        <div>
        <Input maxValue={props.maxValue}
               startValue={props.startValue}
               changeMaxValue={props.changeMaxValue}
               changeStartValue={props.changeStartValue}/>
        <Button title={'SET'} callBack={props.updateSettings} disabledButton={props.disabledSet}/>
        </div>
    )
}