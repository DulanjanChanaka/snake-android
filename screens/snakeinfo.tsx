import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native"
import { ImageBackground } from 'react-native'

const Snakeinfo = () => {
    const route = useRoute()

    console.log('route.params:', route.params);

    if (route.params && route.params.Categories) {
        console.log('categories:', route.params.Categories);

        return (
            <View>
                {route.params.Categories.map((item, index) => (
                    <View key={index}>
                        {/* Use item.title instead of route.params?.title */}
                        {item.title}
                        {item.info}
                    </View>
                ))}
            </View>
        )
    } else {
        console.log('No categories data found.');
        
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
}

export default Snakeinfo

const styles = StyleSheet.create({})
