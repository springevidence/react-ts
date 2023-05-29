import type { Meta, StoryObj } from '@storybook/react';
import {UncontrolledAccordion} from './UncontrolledAccordion';
import {useState} from "react";

const meta = {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
} satisfies Meta<typeof UncontrolledAccordion>;

export default meta;

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'Menu'} />
}
