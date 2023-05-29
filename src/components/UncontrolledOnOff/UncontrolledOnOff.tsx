import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffType = {
    onChange: (value: boolean) => void
    defaultValue?: boolean
}
export function UncontrolledOnOff(props: OnOffType) {
    let [value, setValue] = useState(props.defaultValue ? props.defaultValue : false)

    const OnStyle = {
        // textAlign: "center",
        width:" 100px",
        height: "50px",
        border: "2px solid black",
        margin: "10px",
        backgroundColor: value ? "green" : "white"
    }
    const OffStyle = {
        // textAlign: "center",
        width:" 100px",
        height: "50px",
        border: "2px solid black",
        margin: "10px",
        backgroundColor: value ? "white" : "red"

    }
    const IndicatorStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "50px",
        border: "2px solid black",
        margin: "10px",
        backgroundColor: value ? "green" : "red"
    }

    const onClicked = () => {
        setValue(true);
        props.onChange(true)
    }
    const offClicked = () => {
        setValue(false);
        props.onChange(false)
    }

    return <div className={s.items}>
                <div style={OnStyle} onClick={onClicked}>ON</div>
                <div style={OffStyle} onClick={offClicked}>OFF</div>
                <div style={IndicatorStyle}></div>
            </div>
}
