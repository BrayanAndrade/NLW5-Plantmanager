import { Feather } from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, Text, Image, View, Animated} from 'react-native';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {SvgFromUri} from 'react-native-svg'

import colors from '../styles/colors';
import fontes from '../styles/fontes';


interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
        hour: string;
    };
    handleRemove: () => void;
}

export const PlantCardSecondary = ({ data, handleRemove, ...rest} : PlantProps) => {
    return(
        <Swipeable 
            // overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton
                        style={styles.buttonRemove}
                        onPress={handleRemove}
                        >
                            <Feather name="trash" size={35} color={colors.white} />

                        </RectButton>
                    </View>
                </Animated.View>
            )}

            renderLeftActions={() => (
                <Animated.View>
                    <View>
                        <RectButton
                        style={styles.buttonEdit}
                        onPress={() => {}}
                        >
                            <Feather name="edit" size={35} color={colors.white} />

                        </RectButton>
                    </View>
                </Animated.View>
            )}
        >
            <RectButton 
            style={styles.container} 
            {...rest}>

                <SvgFromUri uri={data.photo} width={50} height={50}/>

                <Text style={styles.title}>
                    {data.name}
                </Text>
                
                <View style={styles.details}>  
                    <Text style={styles.timeLabel}>
                        Regar às 
                    </Text>

                    <Text style={styles.time}>
                        {data.hour}
                    </Text>

                </View>
            </RectButton>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5,
      

      
        
    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontFamily: fontes.heading,
        fontSize: 17,
        color: colors.heading,
    },
    details: {
     alignItems: 'flex-end'
    },
    timeLabel: {
        fontFamily: fontes.text,
        fontSize:16,
        color: colors.body_light,
    },
    time: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fontes.heading,
        color: colors.body_dark,

    },
    buttonRemove: {
        width: 98,
        height: 98,
        backgroundColor: colors.red,
        marginTop: 6,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    buttonEdit: {
        width: 98,
        height: 98,
        backgroundColor: colors.blue,
        marginTop: 6,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    }
})