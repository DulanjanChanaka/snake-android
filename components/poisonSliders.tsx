import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SnakeData from './data';

const PoisonSliders = ({ title, rawsCount, slidesPerView, poisonType }) => {
  const filteredData = SnakeData.filter((Data) => Data.poison === poisonType);

  const renderItem = ({ item }) => (
    <PoisonUnit photo={item.photo} name={item.name} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <Carousel
        data={filteredData}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={300}
        layout="default"
        firstItem={1}
        inactiveSlideOpacity={0.75}
        inactiveSlideScale={0.77}
        slideStyle={{ display: 'flex', alignItems: "center" ,justifyContent:'center'}}

      />
    </View>
  );
};

const PoisonUnit = ({ photo, name }) => (
  <View style={styles.poisonUnit}>
    <Image source={{ uri: photo }} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginTop: 10,
      paddingBottom: 8,
    },
    heading: {
      fontSize: 20,
      padding: 10,
      marginHorizontal: 30,
      fontWeight: '900',
      backgroundColor: '#2b2b2b',
      borderRadius: 25,
      textAlign: 'center',
      color: 'white',
      marginBottom:20,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center'
    },
    poisonUnit: {
      backgroundColor: '#808080',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal:10,
      
    },
    image: {
      width: 300,
      height: 300,
      borderRadius: 25,
    },
    name: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      paddingTop: 10,
    },
  });
  

export default PoisonSliders;

