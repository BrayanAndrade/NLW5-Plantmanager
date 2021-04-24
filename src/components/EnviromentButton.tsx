import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

import colors from '../styles/colors'
import fontes from '../styles/fontes';

interface EnvironmentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function EnvironmentButton ({
    title,
    active = false,
    ...rest
}: EnvironmentButtonProps) {
    return (
        <RectButton 
            style={[
                styles.container,
                active && styles.containerActive
            ]} 
            {...rest}
    >
        <Text style={[
            styles.text,
            active && styles.textActive
            
            ]}>{title}</Text>
    </RectButton>
    
            )
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor: colors.shape,
        borderRadius: 12,
        height: 40,
        width: 76,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,

    },
    containerActive: {
        backgroundColor: colors.green_light
    },
    text: {
        color: colors.heading,
        fontFamily: fontes.text,
    },
    textActive: {
        fontFamily: fontes.heading,
        color: colors.green_dark,
    }
})