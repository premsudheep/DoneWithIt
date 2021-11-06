import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText/AppText';

function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
        // shadowOpacity: 1.0,
        // shadowRadius: 3.5,
        // shadowOffset: {width: 0, height: 10},
        // shadowColor: colors.medium,
        // elevation: 5
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 7,
    }
})

export default Card;