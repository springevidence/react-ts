import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";
import {UncontrolledOnOff} from "../UncontrolledOnOff/UncontrolledOnOff";

export type RatingPropsType = {
    defaultValue?: RatingValueType
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering")
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ?  props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}
function Star(props: StarPropsType) {
    console.log("Star rendering");
    return <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>star </b> : "star "}</span>


    // if (props.selected) {
    //     return <span> <b>star</b> </span>
    // } else {
    //     return <span>star </span>
    // }
}

export const MemoUncontrolledRating = React.memo(UncontrolledRating)
