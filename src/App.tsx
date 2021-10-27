import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {SettingPage} from "./components/SettingPage";
import {WorkPage} from "./components/WorkPage";

export type displayValueType = 'Set Settings' | 'Error' | number

function App() {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(4)


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
            setMaxValue(Number(e.currentTarget.value))
            setDisplayValue('Set Settings')
            setDisabledInc(true)
            setDisabledReset(true)
            setDisabledSet(false)
            setRedStyle(false)
    }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
            setStartValue(Number(e.currentTarget.value))
            setDisplayValue('Set Settings')
            setDisabledInc(true)
            setDisabledReset(true)
            setDisabledSet(false)
            setRedStyle(false)
    }

    let [displayValue, setDisplayValue] = useState<displayValueType>(startValue)

    let [disabledInc, setDisabledInc] = useState(false)
    let [disabledReset, setDisabledReset] = useState(false)
    let [disabledSet, setDisabledSet] = useState(true)

    const resetDisplayValue = () => {
        setDisplayValue(startValue)
        setDisabledInc(false)
        setRedStyle(false)
    }

    let [redStyle, setRedStyle] = useState(false)

    const displayValuePlus = () => {
        if (displayValue === maxValue) {
            setDisabledInc(true)
            setRedStyle(true)
        } else if (displayValue !== 'Set Settings' || 'Error') {
            setDisplayValue(Number(displayValue) + 1)
        } else {
            setDisplayValue(displayValue)
        }
        // Если displayValue: number то тогда setDisplayValue(displayValue +1)
    }


    // for localStorage
    useEffect(() => {
        let localMaxValue = localStorage.getItem('maxValue')
        if (localMaxValue) {
            // let maxValueMem = JSON.parse(localMaxValue)
            setMaxValue(JSON.parse(localMaxValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])


    useEffect(()=> {
        let localStartValue = localStorage.getItem('startValue')
        if (localStartValue) {
            setStartValue(JSON.parse(localStartValue))
        }
    }, [])

    useEffect(()=> {
      localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])


    const updateSettings = () => {
        if (startValue < 0) {
            setDisplayValue('Error')
        } else if (startValue >= maxValue) {
            setDisplayValue('Error')
        } else {
            setDisplayValue(startValue)
            setDisabledInc(false)
            setDisabledReset(false)
            setRedStyle(false)
            setDisabledSet(true)
        }
    }

    return (
        <div className="App">
            <SettingPage
                maxValue={maxValue}
                changeMaxValue={changeMaxValue}
                startValue={startValue}
                changeStartValue={changeStartValue}
                updateSettings={updateSettings}
                disabledSet={disabledSet}
            />
            <WorkPage displayValue={displayValue}
                      resetDisplayValue={resetDisplayValue}
                      displayValuePlus={displayValuePlus}
                      maxValue={maxValue}
                      disabledMode={disabledInc}
                      redStyle={redStyle}
                      disabledReset={disabledReset}
            />
        </div>
    )
}

export default App;
