import React from 'react';
import s from './OnOff.module.css'

type OnOffType = {
    value: boolean
    setValue: (value: boolean)=> void
}
function OnOff(props: OnOffType) {
    // if (props.value) {
    //     return (
    //         <div className={s.items}>
    //             <div className={s.item1 + " " + s.true}>ON</div>
    //             <div className={s.item2}>OFF</div>
    //             <div className={s.item3 + " " + s.true}></div>
    //         </div>
    //     );
    // }
    // else {
    //     return <div className={s.items}>
    //         <div className={s.item1}>ON</div>
    //         <div className={s.item2 + " " + s.false}>OFF</div>
    //         <div className={s.item3 + " " + s.false}></div>
    //     </div>
    // }

    const OnStyle = {
        // textAlign: "center",
        width:" 100px",
        height: "50px",
        border: "2px solid black",
        margin: "10px",
        backgroundColor: props.value ? "green" : "white"
    }
    const OffStyle = {
        // textAlign: "center",
        width:" 100px",
        height: "50px",
        border: "2px solid black",
        margin: "10px",
        backgroundColor: props.value ? "white" : "red"

    }
    const IndicatorStyle = {
        width: "50px",
        height: "50px",
        borderRadius: "50px",
        border: "2px solid black",
        margin: "10px",
        backgroundColor: props.value ? "green" : "red"
    }
    return <div className={s.items}>
                <div style={OnStyle} onClick={() => props.setValue(true)}>ON</div>
                <div style={OffStyle} onClick={() => props.setValue(false)}>OFF</div>
                <div style={IndicatorStyle}></div>
            </div>
}

export default OnOff;