import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler'
import {SvgFromUri} from 'react-native-svg'

import colors from '../styles/colors';
import fontes from '../styles/fontes';


interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
    }
}

export const PlantCardPrimary = ({ data, ...rest} : PlantProps) => {
    return(
        <RectButton 
        style={styles.container} 
        {...rest}>

            <SvgFromUri uri={data.photo} width={70} height={70}/>
            
            <Text style={styles.text}>
                {data.name}
            </Text>

        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '43%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        margin: 10,
        alignItems: 'center'
    },
    text: {
        color: colors.green_dark,
        fontFamily: fontes.heading,
        marginVertical: 16,
    }
})