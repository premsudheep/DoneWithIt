import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={10}
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton
                    title='login'
                ></AppButton>
                <AppButton
                    title='register'
                    color='secondary'
                ></AppButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 90,
        alignItems: 'center'
    },
    tagLine:{
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    },
})

export default WelcomeScreen;