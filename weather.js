import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropTypes } from "prop-types";

export default function Weather ({temp}) {
    return (
        <View>
            <Text>{temp}</Text>
        </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}