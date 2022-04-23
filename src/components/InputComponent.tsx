import TextField from '@material-ui/core/TextField';
import React, {ChangeEvent} from 'react';
import classes from './Input.module.css';

type InputPropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
}
export const InputComponent = (props: InputPropsType) => {

    let classesStartInput = props.startValue >= props.maxValue || props.startValue < 0 ? classes.error : classes.normal
    let classesMaxInput = props.startValue >= props.maxValue || props.maxValue < 0 ? classes.error : classes.normal

    return (
        <div>
            <TextField id="outlined-basic" label="MAX Value" variant="outlined"
                       className={classesMaxInput}
                       type={'number'}
                       size={'small'}
                       margin={'normal'}

                       value={props.maxValue}
                       onChange={props.changeMaxValue}

            />

            {/*Max value: <input className={classesMaxInput}*/}
            {/*                  type={'number'}*/}
            {/*                  value={props.maxValue}*/}
            {/*                  onChange={props.changeMaxValue}/>*/}

            {/*Start value: <input className={classesStartInput}*/}
            {/*                    type={'number'}*/}
            {/*                    value={props.startValue}*/}
            {/*                    onChange={props.changeStartValue}/>*/}
            <TextField id="outlined-basic" label="START Value" variant="outlined"
                       className={classesStartInput}
                       type={'number'}
                       size={'small'}
                       margin={'normal'}
                       value={props.startValue}
                       onChange={props.changeStartValue}

            />

        </div>
    )
}