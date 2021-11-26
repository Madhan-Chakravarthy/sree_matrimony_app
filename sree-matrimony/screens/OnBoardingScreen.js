import React from 'react';
import { View, Text, Buttosn, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = props => {
    return (<Onboarding
        onSkip={() => props.navigation.replace("Login")}
        onDone={()=> props.navigation.replace("Login")}
        pages={[
          {
            backgroundColor: '#FFFF66',
            image: <Image source={require('../assets/onboarding_img_1.png')} resizeMode="contain" style={{ width: 200, height: 200 }}/>,
            title: 'Onboarding 1',
            subtitle: 'Done with React ',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/onboarding_img_2.png')} resizeMode="contain" style={{ width: 200, height: 200 }} />,
            title: 'Onboarding 2',
            subtitle: 'Done with React Native Onboarding',
          },
          {
            backgroundColor: '#FFC0CB',
            image: <Image source={require('../assets/onboarding_img_1.png')} resizeMode="contain" style={{ width: 200, height: 200 }}/>,
            title: 'Onboarding 3',
            subtitle: 'Done with React Native ',
          },
          
        ]}
      />

    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});