import type {Meta} from '@storybook/react';
import Select from './Select';

const meta = {
    title: 'Select',
    component: Select,
} satisfies Meta<typeof Select>;
const onClickCallback = () => {console.log('value changed')}

export default meta;
export const WithValue = () => {
    <Select onChange={onClickCallback}
            value={'2'}
            items={[{title: 'html', id: '1'},
                {title: 'css', id: '2'},
                {title: 'js', id: '3'}
            ]}/>
}
export const WithoutValue = () => {
    <Select onChange={onClickCallback}
            items={[{title: 'html', id: '1'},
                {title: 'css', id: '2'},
                {title: 'js', id: '3'}
            ]}/>
}