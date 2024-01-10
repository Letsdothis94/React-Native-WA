import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
    const { wrapper, container, temp, feels, highlowWrapper, highlow, bodyWrapper, description, message } = styles;
    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather name="sun" size={100} />
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                <View style={highlowWrapper}>
                    <Text style={highlow}>High: 8 </Text>
                    <Text style={highlow}>Low: 6</Text>
                </View>
            </View>
            <View style={bodyWrapper}>
                <Text style={description}>It's Sunny</Text>
                <Text style={message}>It's perfect t-shirt weather</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp: {
        color: 'black',
        fontSize: 48,
    },
    feels: {
        fontSize: 30,
        color: 'black',
    },
    highlow: {
        color: 'black',
        fontSize: 20,
    },
    highlowWrapper: {
        flexDirection: 'row',
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40,
    },
    description: {
        fontSize: 48,
    },
    message: {
        fontSize: 30,
    }
})

export default CurrentWeather;