import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native'

import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import userImg from '../assets/brayan.png';
import colors from '../styles/colors';
import fontes from '../styles/fontes';

export function Header(){

    const [userName, setUserName] = useState<string>();

    useEffect(() =>{
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '')
        }

        loadStorageUserName();       
    }, []);

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <Image source={userImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
        paddingTop: 25
    },
    image: {
        width: 80,
        height: 80,
        // borderRadius: 40,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fontes.text
    },
    userName:{
        fontSize: 32,
        fontFamily: fontes.heading,
        color: colors.heading,
        lineHeight: 40,
    }

})