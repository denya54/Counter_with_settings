import React, {ChangeEvent} from 'react';
import {InputComponent} from "./InputComponent";
import {ButtonComponent} from "./ButtonComponent";
import classes from './SettingPage.module.css'

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
        <InputComponent maxValue={props.maxValue}
                        startValue={props.startValue}
                        changeMaxValue={props.changeMaxValue}
                        changeStartValue={props.changeStartValue}/>
            <div className={classes.button}>
                <ButtonComponent title={'SET'} callBack={props.updateSettings} disabledButton={props.disabledSet}/>
            </div>

        </div>
    )
}