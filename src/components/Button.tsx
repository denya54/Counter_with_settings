import React from 'react';

type ButtonProps = {
    title: string
    callBack: () => void
    disabledButton?: boolean
}
export const Button = (props: ButtonProps) => {

    const callBack = () => {
        props.callBack()
    }
    return (
        <button onClick={callBack} disabled={props.disabledButton}>{props.title}</button>
    )
}