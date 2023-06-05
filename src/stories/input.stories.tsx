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

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return <> <input value={value} onChange={onChange}/> - {value} </>
}
export const ControlledCheckbox = () => {
    const [value, setValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.checked)

    return <input type={"checkbox"} checked={value} onChange={onChange}/>
}
export const ControlledSelect = () => {
    const [value, setValue] = useState('1')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)

    return <select value={value} onChange={onChange}>
        <option>none</option>
        <option value="1">Banana</option>
        <option value="2">Apple</option>
        <option value="3">Lemon</option>
    </select>
}