import {ChangeEvent, ChangeEventHandler, useRef, useState} from "react";

const meta = {
    title: 'Accordion'
}
export default meta;

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return <> <input onChange={onChange}/> - {value} </>
}
export const GetValueOfUncontrolledInputByButtonsPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onClick = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/> <button onClick={onClick}> save </button> - actual value: {value}
    </>
}