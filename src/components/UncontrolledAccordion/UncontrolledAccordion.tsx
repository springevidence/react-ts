import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}
function UncontrolledAccordion(props: AccordionPropsType) {
    // console.log("Accordion rendering")
    let [collapsed, setCollapsed] = useState(false)
    const collapsedBody = () => {
        setCollapsed(!collapsed)
    }
    return <div>
            <AccordionTitle title={props.titleValue} collapsedBody={collapsedBody}/>
            {!collapsed && <AccordionBody/>}
    </div>

}


type AccordionTitlePropsType = {
    title: string
    collapsedBody: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    // console.log("AccordionTitle rendering")
    return <h3 onClick={props.collapsedBody}>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
}

export default UncontrolledAccordion;