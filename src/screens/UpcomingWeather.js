import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, Image, ImageBackground } from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
    {
        dt_txt: "2024-02-18 12:00:00",
        main: {
            temp_min: 2.69,
            temp_max: 7.39,
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2024-03-19 12:00:00",
        main: {
            temp_min: 2.69,
            temp_max: 8.39,
        },
        weather: [
            {
                main: 'Cloudy'
            }
        ]
    },
    {
        dt_txt: "2024-02-16 12:00:00",
        main: {
            temp_min: 6.69,
            temp_max: 7.39,
        },
        weather: [
            {
                main: 'Rainy'
            }
        ]
    },
]

const UpcomingWeather = () => {

    const renderItem = ({item}) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} 
            min={item.main.temp_min} max={item.main.temp_max} />
    )

    const { container, image } = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/thunderstorm.jpg')} style={image}>
                <Text>Upcoming Weather</Text>
                <FlatList 
                    data={DATA}
                    renderItem={renderItem} keyExtractor={(item) => item.dt_txt}
                    />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue',
    },
    image: {
        flex: 1,
    }
})

export default UpcomingWeather;