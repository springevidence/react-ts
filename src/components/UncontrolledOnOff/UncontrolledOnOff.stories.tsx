import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {useState} from "react";

const meta = {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
} satisfies Meta<typeof UncontrolledOnOff>;

export default meta;

export const OnMode = () =>  <UncontrolledOnOff defaultValue={true} onChange={x=>x}/>
export const OffMode = () =>  <UncontrolledOnOff defaultValue={false} onChange={x=>x}/>
