import type { Meta, StoryObj } from '@storybook/react';
import {Accordion} from './Accordion';
import {useState} from "react";

const meta = {
    title: 'Accordion',
    component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
// type Story = StoryObj<typeof meta>;

export const CollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} setCollapsed={x => x}/>
export const UnCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false} setCollapsed={x => x}/>
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'} collapsed={collapsed} setCollapsed={setCollapsed}/>
}
