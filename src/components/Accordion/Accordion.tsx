import React from "react";

type ItemType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}
export function Accordion(props: AccordionPropsType) {
    return <div>
            <AccordionTitle title={props.titleValue} collapsed={props.collapsed} setCollapsed={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>

}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
}

export const MemoAccordion = React.memo(Accordion)