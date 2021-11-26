import React from 'react';
import { View,Text } from 'react-native';
import ProfileCard from './card/ProfileCard';

const ViewProfile = props =>{
    const data = props.route.params.item;
    return <ProfileCard userData={data} {...props}/>
}

export default ViewProfile;