
import React from "react";
import Button from ".";

//component story format

export default {
    title: 'Atom/Button',
    component: Button,
};

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'> Danger</Button>



// args approach

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args',
    // primary: true,
    // label: 'Button',
};

export const longPrimaryA = Template.bind({})
longPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long Primary Args'
}

export const SecondaryB = Template.bind({});
SecondaryB.args = {
    variant: 'secondary',
    children: 'Secondary args',
    // Secondary: true,
    // label: 'Secondary Button',
};
