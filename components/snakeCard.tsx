import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SnakeCard = ({ item }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.snakename}>
                <Text style={styles.snakenametext}>
                   {item.name} 
                </Text>
            </View>
            <View>
                <Text style={styles.text1}>{item.info1}</Text>
            </View>
            <View>
                <Text style={styles.text2}>{item.info2}</Text>
            </View>
            <View>
                <Text style={styles.text3}>{item.info3}</Text>
            </View>
            <View style={styles.poisonmain}>
                <Text style={styles.poison}>{item.poison}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 160,
        borderRadius: 40,
        backgroundColor: "#808080",
        height: 350,
        width: 250,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
        display: 'flex',
        justifyContent: 'center',
    },
    imageContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: -180,
        alignItems: 'center'
    },
    image: {
        width: 180,
        height: 180,
        resizeMode: 'cover',
    },
    snakename: {
        
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    snakenametext: {
        fontSize:23,
        fontWeight:'bold',
        color:'white',
        
        
    },
    text1:{
        padding:10,
        fontSize:15,
        fontWeight:"500",
        textAlign:"center",
        
    },
    text2:{
        padding:10,
        fontSize:15,
        fontWeight:"500",
        textAlign:"center",
    },
    poison: {
        fontSize:15,
        fontWeight:'bold',
    },
    poisonmain: {
        justifyContent:'center',
        alignItems:'center'
    }
});

export default SnakeCard;
