import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {SettingPage} from "./components/SettingPage";
import {WorkPage} from "./components/WorkPage";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store/store";
import {changeStartValueAC} from "./store/startValue-reducer";
import {changeMaxValueAC} from "./store/maxValue-reducer";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

export type displayValueType = 'Set Settings' | 'Error' | number

function AppWithRedux() {

    const dispatch = useDispatch()
    let startValue = useSelector<AppRootState, number>(state => state.startValue)
    let maxValue = useSelector<AppRootState, number>(state => state.maxValue)

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(e))
        // setMaxValue(Number(e.currentTarget.value))
        setDisplayValue('Set Settings')
        setDisabledInc(true)
        setDisabledReset(true)
        setDisabledSet(false)
        setRedStyle(false)
    }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValueAC(e))
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


    // // for localStorage
    // useEffect(() => {
    //     let localMaxValue = localStorage.getItem('maxValue')
    //     if (localMaxValue) {
    //         // let maxValueMem = JSON.parse(localMaxValue)
    //         setMaxValue(JSON.parse(localMaxValue))
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [maxValue])
    //
    //
    // useEffect(()=> {
    //     let localStartValue = localStorage.getItem('startValue')
    //     if (localStartValue) {
    //         setStartValue(JSON.parse(localStartValue))
    //     }
    // }, [])

    // useEffect(()=> {
    //   localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [startValue])


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
        // <div className="App">
//
//     <Container fixed>
//         <Grid container style={{padding: '20px'}}>
//             <AddItemForm addItem={addTodolist}/>
//         </Grid>
//         <Grid container spacing={3}>
//             {
//                 todolists.map(tl => {
//                     let allTodolistTasks = tasks[tl.id];
//
//                     return <Grid item key={tl.id}>
//                         <Paper style={{padding: '10px'}}>
//                             <Todolist
//                                 id={tl.id}
//                                 title={tl.title}
//                                 tasks={allTodolistTasks}
//                                 removeTask={removeTask}
//                                 changeFilter={changeFilter}
//                                 addTask={addTask}
//                                 changeTaskStatus={changeStatus}
//                                 filter={tl.filter}
//                                 removeTodolist={removeTodolist}
//                                 changeTaskTitle={changeTaskTitle}
//                                 changeTodolistTitle={changeTodolistTitle}
//                             />
//                         </Paper>
//                     </Grid>
//                 })
//             }
//         </Grid>
//     </Container>
// </div>

        <div className="App">
            <Paper style={{padding: '10px'}}>
            <Container fixed>

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

            </Container>
            </Paper>
        </div>
    )
}




export default AppWithRedux;
