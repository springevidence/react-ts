import React from 'react';
import s from './OnOff.module.css'

type OnOffType = {
    value: boolean
}
const OnOff = (props: OnOffType) => {
    if (props.value) {
        return (
            <div className={s.items}>
                <div className={s.item1 + " " + s.item1true}>ON</div>
                <div className={s.item2}>OFF</div>
                <div className={s.item3 + " " + s.item3true}></div>
            </div>
        );
    }
    else {
        return <div className={s.items}>
            <div className={s.item1}>ON</div>
            <div className={s.item2 + " " + s.item2false}>OFF</div>
            <div className={s.item3 + " " + s.item3false}></div>
        </div>
    }

};

export default OnOff;