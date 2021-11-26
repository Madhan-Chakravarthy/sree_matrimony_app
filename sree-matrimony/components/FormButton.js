import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOURS, FONTS, SIZES } from '../constants/Theme';


const FormButton = ({buttonTittle, ...rest}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}{...rest}>
             <Text style={styles.buttonText}>{buttonTittle}</Text>
        </TouchableOpacity>
         

    );
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: SIZES.height / 15,
        backgroundColor: COLOURS.darkBlue,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        ...FONTS.body2
      },
});