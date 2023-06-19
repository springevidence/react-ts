import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    value: RatingValueType
    putStars: (value: RatingValueType) => void
}
export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")
    return (
        <div>
            <Star selected={props.value > 0} putStars={props.putStars} value={1}/>
            <Star selected={props.value > 1} putStars={props.putStars} value={2}/>
            <Star selected={props.value > 2} putStars={props.putStars} value={3}/>
            <Star selected={props.value > 3} putStars={props.putStars} value={4}/>
            <Star selected={props.value > 4} putStars={props.putStars} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    putStars: (value: RatingValueType) => void
    value: RatingValueType
}
function Star(props: StarPropsType) {
    console.log("Star rendering");
    return <span onClick={()=> {
        props.putStars(props.value)
    }}> {props.selected ? <b>star </b> : "star "}</span>
}

export const MemoRating = React.memo(Rating)