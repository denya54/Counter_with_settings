import {Button} from '@material-ui/core';
import React from 'react';

type ButtonProps = {
    title: string
    callBack: () => void
    disabledButton?: boolean
}
export const ButtonComponent = (props: ButtonProps) => {

    const callBack = () => {
        props.callBack()
    }
    return (
        <Button
            color={"secondary"}
            variant={"outlined"}
            onClick={callBack}
            disabled={props.disabledButton}>{props.title}</Button>
        //  <button onClick={callBack} disabled={props.disabledButton}>{props.title}</button>
    )
}