import type { Meta, StoryObj } from '@storybook/react';
import {OnOff} from './OnOff';
import {useState} from "react";

const meta = {
    title: 'OnOff',
    component: OnOff,
} satisfies Meta<typeof OnOff>;

export default meta;
// type Story = StoryObj<typeof meta>;

export const onMode = () => <OnOff value={true} setValue={x => x}/>
export const offMode = () => <OnOff value={false} setValue={x => x}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff value={value} setValue={setValue}/>
}
