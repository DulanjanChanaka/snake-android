import { FlatList, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View , } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Categories, Snakes } from './categories';
import Carousel from 'react-native-snap-carousel';
import SnakeCard from './snakeCard'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, position: "relative", backgroundColor: "white" }}>
      <StatusBar />
      <ImageBackground
        source={require('../assets/snakebackground.jpg')}
        style={{ height: 180, width: '100%', marginTop: -5, opacity: 0.8 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.centeredTexttop}>Wellcome</Text>
          <Text style={styles.centeredText}>Sri Lankan Snakes App</Text>
          <Text style={styles.centeredTextbottom}>ශ්‍රී ලංකාවේ සර්පයින් රැක ගනිමු </Text>
        </View>
      </ImageBackground>
      <View style={styles.headertop}>
        <Text style={styles.textmain}>විශේෂයෙන් වෙන්කර හඳුනා ගත යුතු සර්පයින් </Text>
    
      </View>
      <View>
        <Carousel
          containerCustomStyle={{ overflow: 'visible' }}
          data={Snakes}
          renderItem={({ item }) => <SnakeCard item={item} />}
          firstItem={1}
          inactiveSlideOpacity={0.75}
          inactiveSlideScale={0.77}
          sliderWidth={400}
          itemWidth={260}
          slideStyle={{ display: 'flex', alignItems: "center" }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the overlay
  },
  centeredText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  centeredTexttop: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  centeredTextbottom: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  container: {
    marginTop: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 30,
    paddingHorizontal: 5,
    borderRadius: 20, // A high value to make it rounded
    backgroundColor: "#CFCDC2",
    marginRight: 10,



    elevation: 5,
  },
  headertop :{
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  
  },
  textmain: {
    fontSize:16,
    fontWeight:'bold'

  }

});

export default HomeScreen;