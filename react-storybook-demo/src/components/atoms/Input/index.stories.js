import React, { Component } from "react";
import Input from ".";

export default {
    title: 'Atom/Input',
    component: Input
}

export const Small = () => <Input size='small' placeholder='Small Size' />
export const Medium = () => <Input size='medium' placeholder='Medium Size' />
export const Large = () => <Input size='large' placeholder='Large Size' />

Small.storyName = 'Small Input'                            //this is how we can rename stories
Medium.storyName = 'Medium Input'
Large.storyName = 'Large Input'         

