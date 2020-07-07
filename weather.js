import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { PropTypes } from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
export default function Weather ({temp}) {
    return (
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.container}
            >
                <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text>Good</Text>
            </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white"

    }
})