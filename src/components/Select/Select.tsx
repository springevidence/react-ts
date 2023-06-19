import React, {useState} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    id: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}
const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const selectedItem = props.items.find(i => i.id === props.value)
    const toggleItems = () => {setActive(!active)}
    return (
        <>
            <div className={styles.select}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active && <div className={styles.items}>{props.items.map(i => <div key={i.id} onClick={() => {props.onChange(i.id)}}>{i.title}</div>)}</div>
                }

            </div>
        </>

    );
};

export default Select;