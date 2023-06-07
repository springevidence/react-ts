import type {Meta} from '@storybook/react';
import {Accordion} from './Accordion';
import {useState} from "react";

const meta = {
    title: 'Accordion',
    component: Accordion,
    argTypes: {onClick: {action: 'some item was clicked'}},
} satisfies Meta<typeof Accordion>;

export default meta;
const onClickCallback = () => {console.log('clicked')}

export const CollapsedMode = () => <Accordion titleValue={'Menu'}
                                              collapsed={true}
                                              setCollapsed={x => x}
                                              items={[{title: '111', value: 1}]}
                                              onClick={onClickCallback}/>
export const UnCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                collapsed={false}
                                                setCollapsed={x => x}
                                                items={[{title: '111', value: 1}]} onClick={onClickCallback}/>
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'}
                      collapsed={collapsed}
                      setCollapsed={setCollapsed}
                      items={[{title: '111', value: 1}]}
                      onClick={onClickCallback}/>
}
